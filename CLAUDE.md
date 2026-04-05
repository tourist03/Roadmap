# CLAUDE.md — Project Context for Claude

## What is this?
A **100-day SDE2 interview preparation dashboard** built with React + Vite. Targets Google, Amazon, Microsoft, Netflix, Uber, and OpenAI.

## Tech Stack
- **React 18** + **Vite 5** (manually scaffolded, not create-vite)
- Pure CSS (no UI library) — dark theme with CSS custom properties
- localStorage for persistence (completed days, tasks, streaks)
- Canvas-based confetti animation for celebrations
- GitHub Pages for hosting (auto-deploys via GitHub Actions)

## Project Structure
```
Roadmap/
├── index.html                  # Entry HTML (loads Inter font)
├── vite.config.js              # Vite config (base: '/Roadmap/' for GitHub Pages)
├── package.json                # react, react-dom deps
├── public/vite.svg             # Custom favicon (purple-green "100" badge)
├── src/
│   ├── main.jsx                # React 18 entry with StrictMode
│   ├── App.jsx                 # Main component (~600 lines)
│   │                           #   - Stats bar, streak tracker, phase tabs
│   │                           #   - Category filters, search, jump-to-day
│   │                           #   - DayCard (forwardRef) with task checkboxes
│   │                           #   - ConfettiEffect canvas animation
│   │                           #   - Milestone celebrations modal
│   ├── index.css               # All styles (~550 lines), dark theme
│   └── data/studyPlan.js       # The 100-day plan data + helper functions
├── .github/workflows/deploy.yml # GitHub Pages deployment workflow
└── .claude/launch.json          # Dev server config for Claude Preview
```

## Key Architecture Decisions
- **Single-file app**: Everything is in App.jsx (DayCard, ConfettiEffect, App). No router needed — it's a single-page dashboard.
- **studyPlan.js exports**: `studyPlan` (array of 100 day objects), `CATEGORIES`, `PHASES`, `START_DATE`, `formatDate()`, `isWeekend()`, `getDateForDay()`, `getDayOfWeek()`
- **Categories**: DSA, HLD, LLD, MIXED (DSA + Design), MOCK
- **Phases**: P1 (Days 1-30), P2 (31-60), P3 (61-85), P4 (86-100)
- **localStorage keys**: `sde2-completed-days`, `sde2-completed-tasks`

## Study Plan Design Philosophy
- **DSA every single day** through Day 100 (not front-loaded)
- System design interleaved starting ~Week 3
- MIXED days = DSA problems + design study in one day
- Weekends = stretch days (longer sessions, ~6 tasks vs ~4 on weekdays)
- Mock interviews scattered through phases 2-4
- Start date: **April 6, 2026** (Monday), ends July 14, 2026

## Hosting & Deployment
- **Repo**: https://github.com/tourist03/Roadmap (public)
- **Live**: https://tourist03.github.io/Roadmap/
- Auto-deploys on push to `main` via `.github/workflows/deploy.yml`
- `vite.config.js` has `base: '/Roadmap/'` for GitHub Pages subpath

## Development
```bash
# Dev server (requires node at /usr/local/bin/node)
npm run dev          # runs on localhost:5173

# Build
npm run build        # outputs to dist/
```

## Environment Notes
- Node is at `/usr/local/bin/node` (not in default PATH in some contexts)
- npm is at `/usr/local/bin/npm`
- gh CLI is at `/opt/homebrew/bin/gh`, authenticated as `tourist03`

## CSS Design Tokens
```
--bg-primary: #0a0a0f       --accent-purple: #6C5CE7
--bg-card: #1a1a2e          --accent-green: #00B894
--text-primary: #e8e8f0     --accent-orange: #E17055
--text-muted: #555570       --accent-pink: #E84393
```

## Things to Watch Out For
- If adding new categories, update both `CATEGORIES` in studyPlan.js AND the filter pills array in App.jsx
- Stats count MIXED days toward both DSA and Design totals
- Milestone celebrations (CELEBRATIONS object) must align with PHASES day boundaries
- The `base` path in vite.config.js must match the GitHub repo name for Pages to work
- Preview tool screenshots appear black due to JPEG compression on dark theme — use DOM inspection (`preview_eval`) to verify content instead
