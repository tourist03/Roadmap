import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { studyPlan, CATEGORIES, PHASES, formatDate, isWeekend, START_DATE } from './data/studyPlan';

// Celebration messages for milestones
const CELEBRATIONS = {
  7: { emoji: '🔥', title: '1 Week Down!', msg: 'You\'ve completed your first week. The hardest part is starting — and you did it.' },
  14: { emoji: '💪', title: '2 Weeks Strong!', msg: 'You\'re building real momentum. Keep pushing!' },
  30: { emoji: '🎯', title: 'Phase 1 Complete!', msg: 'Foundations are solid. Time to level up with advanced DSA and system design.' },
  50: { emoji: '🏔️', title: 'HALFWAY THERE!', msg: 'You\'ve conquered 50 days. The summit is in sight. Keep climbing!' },
  60: { emoji: '💎', title: 'Phase 2 Complete!', msg: 'Advanced DSA and system design mastered. Time for design mastery!' },
  85: { emoji: '⚡', title: 'Phase 3 Complete!', msg: 'You now have serious system design skills. Time to put it all together.' },
  100: { emoji: '🏆', title: 'YOU DID IT!', msg: '100 days of dedication. You are interview-ready. Go get that SDE2 offer!' },
};

const MILESTONE_DAYS = [7, 14, 30, 50, 60, 85, 100];

function getStreakData(completedDays) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let streak = 0;

  // Calculate streak backwards from today
  for (let i = 0; i < 100; i++) {
    const checkDate = new Date(today);
    checkDate.setDate(checkDate.getDate() - i);
    const dateStr = checkDate.toISOString().split('T')[0];

    // Check if any day was completed on this date
    const dayCompletedOnDate = Object.entries(completedDays).some(
      ([, data]) => data.completedAt && data.completedAt.split('T')[0] === dateStr
    );

    if (dayCompletedOnDate) {
      streak++;
    } else if (i > 0) {
      break;
    }
  }

  // Last 14 days activity
  const last14 = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const active = Object.entries(completedDays).some(
      ([, data]) => data.completedAt && data.completedAt.split('T')[0] === dateStr
    );
    last14.push({ date: dateStr, active, isToday: i === 0 });
  }

  return { streak, last14 };
}

function App() {
  // State
  const [completedDays, setCompletedDays] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('sde2-completed-days') || '{}');
    } catch { return {}; }
  });

  const [completedTasks, setCompletedTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('sde2-completed-tasks') || '{}');
    } catch { return {}; }
  });

  const [expandedDay, setExpandedDay] = useState(null);
  const [activePhase, setActivePhase] = useState(0); // 0 = all
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [celebration, setCelebration] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const dayRefs = useRef({});

  // Persist state
  useEffect(() => {
    localStorage.setItem('sde2-completed-days', JSON.stringify(completedDays));
  }, [completedDays]);

  useEffect(() => {
    localStorage.setItem('sde2-completed-tasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  // Auto-expand first incomplete day on mount
  useEffect(() => {
    const firstIncomplete = studyPlan.find(d => !completedDays[d.day]);
    if (firstIncomplete) {
      setExpandedDay(firstIncomplete.day);
      // Find which phase it belongs to
      const phaseIdx = PHASES.findIndex(p => firstIncomplete.day >= p.days[0] && firstIncomplete.day <= p.days[1]);
      if (phaseIdx >= 0) setActivePhase(phaseIdx + 1);
    }
  }, []);

  // Computed values
  const completedCount = Object.keys(completedDays).length;
  const totalDSA = studyPlan.filter(d => ['DSA', 'MIXED'].includes(d.category)).length;
  const completedDSA = studyPlan.filter(d => ['DSA', 'MIXED'].includes(d.category) && completedDays[d.day]).length;
  const totalDesign = studyPlan.filter(d => ['HLD', 'LLD', 'MIXED'].includes(d.category)).length;
  const completedDesign = studyPlan.filter(d => ['HLD', 'LLD', 'MIXED'].includes(d.category) && completedDays[d.day]).length;
  const problemsSolved = Object.values(completedTasks).flat().filter(t => t.startsWith('problem-')).length;
  const streakData = getStreakData(completedDays);

  // Filter days
  const filteredDays = useMemo(() => {
    let days = studyPlan;

    if (activePhase > 0) {
      const phase = PHASES[activePhase - 1];
      days = days.filter(d => d.day >= phase.days[0] && d.day <= phase.days[1]);
    }

    if (activeFilter !== 'ALL') {
      days = days.filter(d => d.category === activeFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      days = days.filter(d =>
        d.title.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.tasks.some(t => t.name.toLowerCase().includes(q))
      );
    }

    return days;
  }, [activePhase, activeFilter, searchQuery]);

  // Toggle task completion
  const toggleTask = useCallback((dayNum, taskIdx, taskId) => {
    setCompletedTasks(prev => {
      const dayTasks = prev[dayNum] || [];
      const updated = dayTasks.includes(taskId)
        ? dayTasks.filter(t => t !== taskId)
        : [...dayTasks, taskId];
      return { ...prev, [dayNum]: updated };
    });
  }, []);

  // Complete/uncomplete a day
  const toggleDay = useCallback((dayNum, e) => {
    if (e) e.stopPropagation();

    setCompletedDays(prev => {
      const isCompleting = !prev[dayNum];

      if (isCompleting) {
        const newState = { ...prev, [dayNum]: { completedAt: new Date().toISOString() } };
        const newCount = Object.keys(newState).length;

        // Check milestones
        const milestone = MILESTONE_DAYS.find(m => m === newCount);
        if (milestone && CELEBRATIONS[milestone]) {
          setCelebration(CELEBRATIONS[milestone]);
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 4000);
        } else {
          // Mini celebration for every day
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 1500);
        }

        // Mark all tasks as complete
        const dayData = studyPlan.find(d => d.day === dayNum);
        if (dayData) {
          const allTaskIds = dayData.tasks.map((t, i) =>
            t.type === 'problem' ? `problem-${i}` : `concept-${i}`
          );
          setCompletedTasks(prevTasks => ({ ...prevTasks, [dayNum]: allTaskIds }));
        }

        return newState;
      } else {
        const { [dayNum]: _, ...rest } = prev;
        setCompletedTasks(prevTasks => ({ ...prevTasks, [dayNum]: [] }));
        return rest;
      }
    });
  }, []);

  // Scroll to a day
  const scrollToDay = useCallback((dayNum) => {
    const el = dayRefs.current[dayNum];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setExpandedDay(dayNum);
    }
  }, []);

  // Jump to day
  const [jumpDay, setJumpDay] = useState('');
  const handleJump = () => {
    const num = parseInt(jumpDay);
    if (num >= 1 && num <= 100) {
      setActivePhase(0);
      setActiveFilter('ALL');
      setSearchQuery('');
      setTimeout(() => scrollToDay(num), 100);
    }
  };

  // Reset all progress
  const resetProgress = () => {
    if (window.confirm('Are you sure you want to reset ALL progress? This cannot be undone.')) {
      setCompletedDays({});
      setCompletedTasks({});
      setExpandedDay(1);
    }
  };

  // Find recommended next day
  const nextDay = studyPlan.find(d => !completedDays[d.day]);

  return (
    <div className="app">
      {/* Confetti */}
      {showConfetti && <ConfettiEffect />}

      {/* Celebration Modal */}
      {celebration && (
        <div className="celebration-overlay" onClick={() => setCelebration(null)}>
          <div className="celebration-modal" onClick={e => e.stopPropagation()}>
            <div className="emoji">{celebration.emoji}</div>
            <h2>{celebration.title}</h2>
            <p>{celebration.msg}</p>
            <button onClick={() => setCelebration(null)}>Keep Going!</button>
          </div>
        </div>
      )}

      {/* Hero */}
      <header className="hero">
        <div className="hero-badge">100-Day Challenge</div>
        <h1>SDE2 Interview Roadmap</h1>
        <p className="hero-subtitle">
          Master DSA, System Design (HLD + LLD) and land your dream offer at a top company.<br/>
          <span style={{ fontSize: '14px', color: 'var(--accent-green)' }}>April 6 — July 14, 2026</span>
        </p>
        <div className="hero-companies">
          {['Google', 'Amazon', 'Microsoft', 'Netflix', 'Uber', 'OpenAI'].map(c => (
            <span key={c} className="company-tag">{c}</span>
          ))}
        </div>
      </header>

      {/* Stats */}
      <div className="stats-bar">
        <div className="stat-card">
          <div className="stat-number purple">{completedCount}</div>
          <div className="stat-label">Days Done</div>
        </div>
        <div className="stat-card">
          <div className="stat-number green">{Math.round((completedCount / 100) * 100)}%</div>
          <div className="stat-label">Progress</div>
        </div>
        <div className="stat-card">
          <div className="stat-number orange">{streakData.streak}</div>
          <div className="stat-label">Day Streak</div>
        </div>
        <div className="stat-card">
          <div className="stat-number blue">{problemsSolved}</div>
          <div className="stat-label">Problems Solved</div>
        </div>
        <div className="stat-card">
          <div className="stat-number green">{completedDSA}/{totalDSA}</div>
          <div className="stat-label">DSA Days</div>
        </div>
        <div className="stat-card">
          <div className="stat-number yellow">{completedDesign}/{totalDesign}</div>
          <div className="stat-label">Design Days</div>
        </div>
      </div>

      {/* Streak */}
      <div className="streak-section">
        <div className="streak-fire">{streakData.streak > 0 ? '🔥' : '❄️'}</div>
        <div className="streak-info">
          <h3>{streakData.streak > 0 ? `${streakData.streak}-Day Streak!` : 'Start Your Streak!'}</h3>
          <p>{streakData.streak > 0 ? 'Keep the momentum going. Don\'t break the chain!' : 'Complete today\'s day to start your streak.'}</p>
        </div>
        <div className="streak-days">
          {streakData.last14.map((d, i) => (
            <div
              key={i}
              className={`streak-dot ${d.active ? 'active' : ''} ${d.isToday ? 'today' : ''}`}
              title={d.date}
            />
          ))}
        </div>
      </div>

      {/* Overall Progress */}
      <div className="progress-section">
        <div className="progress-header">
          <h3>Overall Progress</h3>
          <span>{completedCount} / 100 Days</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${(completedCount / 100) * 100}%` }} />
        </div>
      </div>

      {/* Today Indicator */}
      {nextDay && (
        <div className="today-indicator" onClick={() => scrollToDay(nextDay.day)} style={{ cursor: 'pointer' }}>
          <span>📍</span>
          <span>Up Next: Day {nextDay.day} — {nextDay.title}</span>
        </div>
      )}

      {/* Phase Tabs */}
      <div className="phase-tabs">
        <button
          className={`phase-tab ${activePhase === 0 ? 'active' : ''}`}
          onClick={() => setActivePhase(0)}
        >
          All Days
          <span className="tab-count">100</span>
        </button>
        {PHASES.map((phase, i) => {
          const phaseCompleted = studyPlan
            .filter(d => d.day >= phase.days[0] && d.day <= phase.days[1])
            .filter(d => completedDays[d.day]).length;
          const phaseTotal = phase.days[1] - phase.days[0] + 1;
          return (
            <button
              key={i}
              className={`phase-tab ${activePhase === i + 1 ? 'active' : ''}`}
              onClick={() => setActivePhase(i + 1)}
            >
              P{i + 1}: {phase.name}
              <span className="tab-count">{phaseCompleted}/{phaseTotal}</span>
            </button>
          );
        })}
      </div>

      {/* Filters + Search */}
      <div className="filters">
        {['ALL', 'DSA', 'HLD', 'LLD', 'MIXED', 'MOCK'].map(cat => (
          <button
            key={cat}
            className={`filter-pill ${activeFilter === cat ? 'active' : ''}`}
            data-cat={cat}
            onClick={() => setActiveFilter(cat)}
          >
            {cat === 'ALL' ? '🌟' : CATEGORIES[cat]?.icon} {cat === 'ALL' ? 'All' : CATEGORIES[cat]?.label || cat}
          </button>
        ))}
      </div>

      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search problems, topics, or concepts..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Jump to Day */}
      <div className="jump-section">
        <label>Jump to Day:</label>
        <input
          type="number"
          min="1"
          max="100"
          value={jumpDay}
          onChange={e => setJumpDay(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleJump()}
          placeholder="1-100"
        />
        <button className="jump-btn" onClick={handleJump}>Go</button>
      </div>

      {/* Day Cards */}
      <div className="days-grid">
        {filteredDays.length === 0 ? (
          <div className="empty-state">
            <p>🔍</p>
            <p>No days match your filters. Try adjusting your search.</p>
          </div>
        ) : (
          filteredDays.map(day => (
            <DayCard
              key={day.day}
              day={day}
              isExpanded={expandedDay === day.day}
              isCompleted={!!completedDays[day.day]}
              completedTasks={completedTasks[day.day] || []}
              isNext={nextDay && nextDay.day === day.day}
              onToggleExpand={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
              onToggleComplete={(e) => toggleDay(day.day, e)}
              onToggleTask={(taskIdx, taskId) => toggleTask(day.day, taskIdx, taskId)}
              ref={el => dayRefs.current[day.day] = el}
            />
          ))
        )}
      </div>

      {/* Reset */}
      <div className="reset-section">
        <button className="reset-btn" onClick={resetProgress}>
          Reset All Progress
        </button>
      </div>
    </div>
  );
}

// ===== DAY CARD COMPONENT =====
import { forwardRef } from 'react';

const DayCard = forwardRef(function DayCard({
  day,
  isExpanded,
  isCompleted,
  completedTasks,
  isNext,
  onToggleExpand,
  onToggleComplete,
  onToggleTask,
}, ref) {
  const cat = CATEGORIES[day.category] || CATEGORIES.DSA;
  const allTaskIds = day.tasks.map((t, i) => t.type === 'problem' ? `problem-${i}` : `concept-${i}`);
  const tasksCompleted = allTaskIds.filter(id => completedTasks.includes(id)).length;
  const totalTasks = allTaskIds.length;
  const taskProgress = totalTasks > 0 ? Math.round((tasksCompleted / totalTasks) * 100) : 0;

  return (
    <div
      ref={ref}
      className={`day-card ${isExpanded ? 'expanded' : ''} ${isCompleted ? 'completed' : ''} ${isNext ? 'today-card' : ''}`}
    >
      <div className="day-card-header" onClick={onToggleExpand}>
        <div className="day-number">
          {isCompleted ? '✓' : day.day}
        </div>
        <div className="day-info">
          <h3>{day.title}</h3>
          <div className="day-meta">
            <span className="date-badge">{formatDate(day.day)}</span>
            <span
              className="category-badge"
              style={{ background: cat.bg, color: cat.color }}
            >
              {cat.icon} {cat.label}
            </span>
            {isWeekend(day.day) && (
              <span className="weekend-badge">🔋 Stretch Day</span>
            )}
            {!isCompleted && tasksCompleted > 0 && (
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                {tasksCompleted}/{totalTasks} tasks
              </span>
            )}
          </div>
        </div>
        <div className="day-right">
          <button
            className={`complete-btn ${isCompleted ? 'done' : ''}`}
            onClick={onToggleComplete}
            title={isCompleted ? 'Mark as incomplete' : 'Mark day as complete'}
          >
            ✓
          </button>
          <span className="expand-arrow">▼</span>
        </div>
      </div>

      {isExpanded && (
        <div className="day-content">
          <div className="day-description">{day.description}</div>

          {/* Task progress bar */}
          {totalTasks > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>TASKS</span>
                <span style={{ fontSize: '11px', color: 'var(--accent-purple)', fontWeight: 700 }}>{taskProgress}%</span>
              </div>
              <div className="progress-track" style={{ height: '6px' }}>
                <div className="progress-fill" style={{ width: `${taskProgress}%` }} />
              </div>
            </div>
          )}

          <div className="tasks-list">
            {day.tasks.map((task, idx) => {
              const taskId = task.type === 'problem' ? `problem-${idx}` : `concept-${idx}`;
              const isChecked = completedTasks.includes(taskId);

              return (
                <div key={idx} className="task-item">
                  <button
                    className={`task-check ${isChecked ? 'checked' : ''}`}
                    onClick={() => onToggleTask(idx, taskId)}
                  >
                    {isChecked ? '✓' : ''}
                  </button>
                  <div className={`task-info ${isChecked ? 'checked-task' : ''}`}>
                    <div className="task-name">
                      <span className="task-type-icon">
                        {task.type === 'problem' ? '💻' : '📖'}
                      </span>
                      {task.type === 'problem' && task.link ? (
                        <a href={task.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                          {task.name}
                        </a>
                      ) : (
                        <span>{task.name}</span>
                      )}
                      {task.difficulty && (
                        <span className={`difficulty-tag ${task.difficulty.toLowerCase()}`}>
                          {task.difficulty}
                        </span>
                      )}
                    </div>
                    {task.company && (
                      <div className="task-company">Asked at: {task.company}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {!isCompleted ? (
            <button className="complete-day-btn" onClick={(e) => onToggleComplete(e)}>
              Complete Day {day.day}
            </button>
          ) : (
            <button className="complete-day-btn already-done" disabled>
              ✓ Day {day.day} Completed
            </button>
          )}
        </div>
      )}
    </div>
  );
});

// ===== CONFETTI EFFECT =====
function ConfettiEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#6C5CE7', '#00B894', '#E84393', '#FDCB6E', '#74b9ff', '#E17055', '#fff'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 10 + 4,
        h: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 3 + 2,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.2,
        drift: (Math.random() - 0.5) * 2,
      });
    }

    let animId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let allDone = true;

      particles.forEach(p => {
        if (p.y < canvas.height + 20) allDone = false;
        p.y += p.speed;
        p.x += p.drift;
        p.angle += p.spin;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });

      if (!allDone) {
        animId = requestAnimationFrame(animate);
      }
    }

    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="confetti-overlay"
      style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 1000 }}
    />
  );
}

export default App;
