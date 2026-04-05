// 100-Day SDE2 Interview Preparation Roadmap
// Start: April 6, 2026 (Monday)
// Target: Google, Amazon, Microsoft, Netflix, Uber, OpenAI
// Philosophy: DSA every day + System Design interleaved from Week 3
// Weekends = longer sessions (stretch days)

export const START_DATE = '2026-04-06';

export const CATEGORIES = {
  DSA: { label: 'DSA', color: '#6C5CE7', bg: '#6C5CE720', icon: '🧠' },
  HLD: { label: 'System Design (HLD)', color: '#00B894', bg: '#00B89420', icon: '🏗️' },
  LLD: { label: 'Low-Level Design', color: '#E17055', bg: '#E1705520', icon: '⚙️' },
  MIXED: { label: 'DSA + Design', color: '#FDCB6E', bg: '#FDCB6E20', icon: '🔥' },
  MOCK: { label: 'Mock Interview', color: '#E84393', bg: '#E8439320', icon: '🎯' },
};

export function getDateForDay(dayNum) {
  const start = new Date(START_DATE);
  start.setDate(start.getDate() + dayNum - 1);
  return start;
}

export function getDayOfWeek(dayNum) {
  return getDateForDay(dayNum).getDay(); // 0=Sun, 6=Sat
}

export function isWeekend(dayNum) {
  const dow = getDayOfWeek(dayNum);
  return dow === 0 || dow === 6;
}

export function formatDate(dayNum) {
  const d = getDateForDay(dayNum);
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

export const PHASES = [
  { name: 'Core DSA + Foundations', days: [1, 30], description: 'Build rock-solid DSA fundamentals. Arrays, strings, hashmaps, linked lists, stacks, trees, graphs. System design foundations start in Week 3.' },
  { name: 'Advanced DSA + System Design', days: [31, 60], description: 'Advanced DP, graphs, and design patterns. Deep system design with real architectures. DSA warm-up every day.' },
  { name: 'Design Mastery + Hard DSA', days: [61, 85], description: 'Complex system designs, LLD deep dives, and hard DSA problems. Building interview-level fluency.' },
  { name: 'Interview Mode', days: [86, 100], description: 'Full mock interviews, company-specific prep, speed drills, and final revision. You are battle-ready.' },
];

// Helper to mark weekend days
// Weekday: ~2 hours (3-4 DSA problems OR 2 problems + design study)
// Weekend: ~4-5 hours (more problems + full design session)

export const studyPlan = [

  // ==================== WEEK 1: Arrays & Hashing (Days 1-7) ====================

  // Day 1 — Mon Apr 6
  {
    day: 1,
    category: 'DSA',
    title: 'Arrays — Two Pointers',
    description: 'Day 1. Let\'s go. Two pointers is the most fundamental pattern — it turns O(n²) into O(n). Every FAANG interview has at least one.',
    tasks: [
      { type: 'problem', name: 'Two Sum', difficulty: 'Easy', link: 'https://leetcode.com/problems/two-sum/', company: 'Google, Amazon, Meta' },
      { type: 'problem', name: 'Valid Palindrome', difficulty: 'Easy', link: 'https://leetcode.com/problems/valid-palindrome/', company: 'Meta, Microsoft' },
      { type: 'problem', name: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', company: 'Amazon, Microsoft' },
      { type: 'problem', name: '3Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/3sum/', company: 'Google, Amazon, Meta' },
      { type: 'concept', name: 'Study: Two pointer patterns — opposite ends (palindrome), same direction (fast/slow), sorted array tricks. Write down the template.' },
    ],
  },
  // Day 2 — Tue Apr 7
  {
    day: 2,
    category: 'DSA',
    title: 'Arrays — Sliding Window',
    description: 'Sliding window turns nested loops into single passes. Master both fixed-size and variable-size windows.',
    tasks: [
      { type: 'problem', name: 'Maximum Average Subarray I', difficulty: 'Easy', link: 'https://leetcode.com/problems/maximum-average-subarray-i/', company: 'Amazon' },
      { type: 'problem', name: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', company: 'Google, Amazon, Microsoft, Uber' },
      { type: 'problem', name: 'Permutation in String', difficulty: 'Medium', link: 'https://leetcode.com/problems/permutation-in-string/', company: 'Microsoft' },
      { type: 'problem', name: 'Minimum Window Substring', difficulty: 'Hard', link: 'https://leetcode.com/problems/minimum-window-substring/', company: 'Google, Meta, Uber' },
      { type: 'concept', name: 'Study: Sliding window template — when to expand (right++), when to shrink (left++), what to track in the window (hashmap/count array).' },
    ],
  },
  // Day 3 — Wed Apr 8
  {
    day: 3,
    category: 'DSA',
    title: 'HashMap & Prefix Sums',
    description: 'HashMap is the single most important data structure. Prefix sums + hashmap solve an entire class of subarray problems.',
    tasks: [
      { type: 'problem', name: 'Contains Duplicate', difficulty: 'Easy', link: 'https://leetcode.com/problems/contains-duplicate/', company: 'Amazon' },
      { type: 'problem', name: 'Group Anagrams', difficulty: 'Medium', link: 'https://leetcode.com/problems/group-anagrams/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Product of Array Except Self', difficulty: 'Medium', link: 'https://leetcode.com/problems/product-of-array-except-self/', company: 'Google, Amazon, Meta' },
      { type: 'problem', name: 'Subarray Sum Equals K', difficulty: 'Medium', link: 'https://leetcode.com/problems/subarray-sum-equals-k/', company: 'Google, Meta' },
      { type: 'concept', name: 'Study: Prefix sum pattern — precompute cumulative sums, use hashmap to find target complement in O(1). Draw it out for Subarray Sum Equals K.' },
    ],
  },
  // Day 4 — Thu Apr 9
  {
    day: 4,
    category: 'DSA',
    title: 'Strings & Hashing',
    description: 'String problems test attention to detail. Character frequency counting + hashing solves most of them.',
    tasks: [
      { type: 'problem', name: 'Valid Anagram', difficulty: 'Easy', link: 'https://leetcode.com/problems/valid-anagram/', company: 'Amazon, Microsoft' },
      { type: 'problem', name: 'Longest Palindromic Substring', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-palindromic-substring/', company: 'Google, Amazon, Microsoft' },
      { type: 'problem', name: 'String to Integer (atoi)', difficulty: 'Medium', link: 'https://leetcode.com/problems/string-to-integer-atoi/', company: 'Amazon, Microsoft' },
      { type: 'problem', name: 'Encode and Decode Strings', difficulty: 'Medium', link: 'https://leetcode.com/problems/encode-and-decode-strings/', company: 'Google, Meta' },
      { type: 'concept', name: 'Study: Expand-around-center for palindromes. Character frequency array (26 slots) vs hashmap — when to use each.' },
    ],
  },
  // Day 5 — Fri Apr 10
  {
    day: 5,
    category: 'DSA',
    title: 'Binary Search Fundamentals',
    description: 'Binary search appears in ~30% of FAANG interviews. The key is recognizing when the search space is sortable.',
    tasks: [
      { type: 'problem', name: 'Binary Search', difficulty: 'Easy', link: 'https://leetcode.com/problems/binary-search/', company: 'Google' },
      { type: 'problem', name: 'Search in Rotated Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', company: 'Google, Amazon, Meta, Uber' },
      { type: 'problem', name: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/', company: 'Amazon, Microsoft' },
      { type: 'problem', name: 'Search a 2D Matrix', difficulty: 'Medium', link: 'https://leetcode.com/problems/search-a-2d-matrix/', company: 'Amazon, Microsoft' },
      { type: 'concept', name: 'Study: Binary search template — lo=0, hi=n-1, while lo<=hi. Left-bound vs right-bound variants. When to use lo<hi vs lo<=hi.' },
    ],
  },
  // Day 6 — Sat Apr 11 (WEEKEND — STRETCH DAY)
  {
    day: 6,
    category: 'MIXED',
    title: '🔋 Weekend Deep Dive — Advanced Binary Search + Intro to Complexity',
    description: 'Weekend stretch! Binary search on answer space + more problems. Also: lay the groundwork for system design by studying complexity and scalability basics.',
    tasks: [
      { type: 'problem', name: 'Koko Eating Bananas', difficulty: 'Medium', link: 'https://leetcode.com/problems/koko-eating-bananas/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Find Peak Element', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-peak-element/', company: 'Google, Meta' },
      { type: 'problem', name: 'Time Based Key-Value Store', difficulty: 'Medium', link: 'https://leetcode.com/problems/time-based-key-value-store/', company: 'Google, Amazon, Uber' },
      { type: 'problem', name: 'Median of Two Sorted Arrays', difficulty: 'Hard', link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/', company: 'Google, Amazon, Microsoft' },
      { type: 'concept', name: 'Study: Binary search on answer space — define [min_possible, max_possible], write isFeasible(mid) check, binary search on it. This pattern is HUGE.' },
      { type: 'concept', name: 'System Design Primer: Read about vertical vs horizontal scaling, latency vs throughput, CAP theorem basics. Just familiarize — deep dive comes later.' },
    ],
  },
  // Day 7 — Sun Apr 12 (WEEKEND — STRETCH DAY)
  {
    day: 7,
    category: 'MIXED',
    title: '🔋 Weekend Deep Dive — Week 1 Consolidation + More Hashing',
    description: 'Weekend stretch! Review anything from this week you found hard, then tackle more problems.',
    tasks: [
      { type: 'problem', name: 'Top K Frequent Elements', difficulty: 'Medium', link: 'https://leetcode.com/problems/top-k-frequent-elements/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Longest Consecutive Sequence', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-consecutive-sequence/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Container With Most Water', difficulty: 'Medium', link: 'https://leetcode.com/problems/container-with-most-water/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Trapping Rain Water', difficulty: 'Hard', link: 'https://leetcode.com/problems/trapping-rain-water/', company: 'Google, Amazon, Meta, Microsoft' },
      { type: 'concept', name: 'Review: Re-solve any problems from this week where you needed hints or took >30 min. Write down patterns in a personal cheat sheet.' },
      { type: 'concept', name: 'Study: Multiple approaches to Trapping Rain Water — two pointers, stack, prefix arrays. Understand trade-offs between each.' },
    ],
  },

  // ==================== WEEK 2: Linked Lists, Stacks, Queues (Days 8-14) ====================

  // Day 8 — Mon Apr 13
  {
    day: 8,
    category: 'DSA',
    title: 'Linked Lists — Core Operations',
    description: 'Linked list problems test pointer manipulation. The key: always draw the before/after state of your pointers.',
    tasks: [
      { type: 'problem', name: 'Reverse Linked List', difficulty: 'Easy', link: 'https://leetcode.com/problems/reverse-linked-list/', company: 'Google, Amazon, Microsoft' },
      { type: 'problem', name: 'Merge Two Sorted Lists', difficulty: 'Easy', link: 'https://leetcode.com/problems/merge-two-sorted-lists/', company: 'Amazon, Microsoft' },
      { type: 'problem', name: 'Linked List Cycle', difficulty: 'Easy', link: 'https://leetcode.com/problems/linked-list-cycle/', company: 'Amazon, Microsoft' },
      { type: 'problem', name: 'Remove Nth Node From End of List', difficulty: 'Medium', link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/', company: 'Google, Meta' },
      { type: 'concept', name: 'Study: Dummy node technique (simplifies edge cases). Fast/slow pointer (Floyd\'s) for cycle detection + finding middle.' },
    ],
  },
  // Day 9 — Tue Apr 14
  {
    day: 9,
    category: 'DSA',
    title: 'Linked Lists — Advanced',
    description: 'These combine multiple linked list techniques. Merge K lists uses heaps — a preview of next week.',
    tasks: [
      { type: 'problem', name: 'Reorder List', difficulty: 'Medium', link: 'https://leetcode.com/problems/reorder-list/', company: 'Amazon, Meta' },
      { type: 'problem', name: 'Copy List with Random Pointer', difficulty: 'Medium', link: 'https://leetcode.com/problems/copy-list-with-random-pointer/', company: 'Amazon, Microsoft' },
      { type: 'problem', name: 'LRU Cache', difficulty: 'Medium', link: 'https://leetcode.com/problems/lru-cache/', company: 'Google, Amazon, Meta, Microsoft, Netflix, Uber' },
      { type: 'problem', name: 'Merge K Sorted Lists', difficulty: 'Hard', link: 'https://leetcode.com/problems/merge-k-sorted-lists/', company: 'Google, Amazon, Meta, Microsoft, Uber' },
      { type: 'concept', name: 'Study: LRU Cache = HashMap + Doubly Linked List. This is asked EVERYWHERE. Know it cold — both the design and implementation.' },
    ],
  },
  // Day 10 — Wed Apr 15
  {
    day: 10,
    category: 'DSA',
    title: 'Stack — Fundamentals & Monotonic Stack',
    description: 'Monotonic stack solves "next greater/smaller element" problems in O(n). A must-know pattern.',
    tasks: [
      { type: 'problem', name: 'Valid Parentheses', difficulty: 'Easy', link: 'https://leetcode.com/problems/valid-parentheses/', company: 'Google, Amazon, Meta' },
      { type: 'problem', name: 'Min Stack', difficulty: 'Medium', link: 'https://leetcode.com/problems/min-stack/', company: 'Amazon, Microsoft' },
      { type: 'problem', name: 'Daily Temperatures', difficulty: 'Medium', link: 'https://leetcode.com/problems/daily-temperatures/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', link: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/', company: 'Amazon, Microsoft' },
      { type: 'concept', name: 'Study: Monotonic stack template — maintain decreasing/increasing invariant. When you pop, record the answer for the popped element.' },
    ],
  },
  // Day 11 — Thu Apr 16
  {
    day: 11,
    category: 'DSA',
    title: 'Stack — Hard Problems',
    description: 'Largest rectangle in histogram is a classic. Decode String tests nested stack operations.',
    tasks: [
      { type: 'problem', name: 'Largest Rectangle in Histogram', difficulty: 'Hard', link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/', company: 'Google, Amazon, Microsoft' },
      { type: 'problem', name: 'Decode String', difficulty: 'Medium', link: 'https://leetcode.com/problems/decode-string/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Car Fleet', difficulty: 'Medium', link: 'https://leetcode.com/problems/car-fleet/', company: 'Google' },
      { type: 'concept', name: 'Study: How Largest Rectangle uses monotonic stack. Draw the stack state at each step. This problem is a FAANG classic.' },
    ],
  },
  // Day 12 — Fri Apr 17
  {
    day: 12,
    category: 'DSA',
    title: 'Queue, Deque & Design Problems',
    description: 'Deque enables O(1) sliding window max. Design problems test your ability to combine data structures.',
    tasks: [
      { type: 'problem', name: 'Implement Queue using Stacks', difficulty: 'Easy', link: 'https://leetcode.com/problems/implement-queue-using-stacks/', company: 'Amazon, Microsoft' },
      { type: 'problem', name: 'Sliding Window Maximum', difficulty: 'Hard', link: 'https://leetcode.com/problems/sliding-window-maximum/', company: 'Google, Amazon, Uber' },
      { type: 'problem', name: 'Design Circular Queue', difficulty: 'Medium', link: 'https://leetcode.com/problems/design-circular-queue/', company: 'Amazon' },
      { type: 'concept', name: 'Study: Monotonic deque — maintain decreasing deque, O(1) amortized for sliding window max. Compare with heap approach O(n log n).' },
    ],
  },
  // Day 13 — Sat Apr 18 (WEEKEND)
  {
    day: 13,
    category: 'MIXED',
    title: '🔋 Weekend — Hard Review + Data Structure Design',
    description: 'Weekend stretch! Design data structures that combine multiple primitives. Plus DSA review.',
    tasks: [
      { type: 'problem', name: 'Insert Delete GetRandom O(1)', difficulty: 'Medium', link: 'https://leetcode.com/problems/insert-delete-getrandom-o1/', company: 'Google, Meta, Uber' },
      { type: 'problem', name: 'LFU Cache', difficulty: 'Hard', link: 'https://leetcode.com/problems/lfu-cache/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Design HashMap', difficulty: 'Easy', link: 'https://leetcode.com/problems/design-hashmap/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Reverse Nodes in k-Group', difficulty: 'Hard', link: 'https://leetcode.com/problems/reverse-nodes-in-k-group/', company: 'Google, Amazon, Microsoft' },
      { type: 'concept', name: 'Study: HashMap internals — hash function, collision handling (chaining vs open addressing), load factor, rehashing. Know this for LLD interviews.' },
      { type: 'concept', name: 'Review: Re-solve your hardest problems from Week 2. If you can\'t solve them in 25 min, add them to your "redo" list.' },
    ],
  },
  // Day 14 — Sun Apr 19 (WEEKEND)
  {
    day: 14,
    category: 'MIXED',
    title: '🔋 Weekend — System Design Foundations',
    description: 'Your first real system design session. Learn the building blocks before designing full systems.',
    tasks: [
      { type: 'problem', name: 'Maximum Subarray', difficulty: 'Medium', link: 'https://leetcode.com/problems/maximum-subarray/', company: 'Google, Amazon, Microsoft' },
      { type: 'problem', name: 'Maximum Product Subarray', difficulty: 'Medium', link: 'https://leetcode.com/problems/maximum-product-subarray/', company: 'Google, Amazon' },
      { type: 'concept', name: 'HLD Study — Scalability Basics:\n• Vertical scaling (bigger machine) vs Horizontal scaling (more machines)\n• When to scale up vs scale out (stateless services → easy horizontal, databases → harder)\n• Load balancing algorithms: Round Robin, Least Connections, IP Hash, Consistent Hashing\n• L4 (TCP) vs L7 (HTTP) load balancers — AWS ALB vs NLB' },
      { type: 'concept', name: 'HLD Study — Caching:\n• Cache-aside (lazy loading): app checks cache first, if miss → read DB → write cache\n• Read-through: cache automatically fetches from DB on miss\n• Write-through: every write goes to cache AND DB\n• Write-back: write to cache only, async flush to DB (faster but risky)\n• Cache invalidation: TTL, event-based, versioning. "The two hard problems: naming things and cache invalidation."' },
      { type: 'concept', name: 'HLD Study — Databases Intro:\n• SQL (PostgreSQL, MySQL): ACID, structured data, complex joins, strong consistency\n• NoSQL types: Key-Value (Redis, DynamoDB), Document (MongoDB), Column (Cassandra), Graph (Neo4j)\n• Decision framework: structured + relations → SQL. Flexible schema + scale → Document. High-throughput simple lookups → Key-Value.' },
      { type: 'concept', name: 'Exercise: Draw a simple web app architecture with: Client → CDN → Load Balancer → App Servers → Cache → Database. Label each component and explain why it\'s there.' },
    ],
  },

  // ==================== WEEK 3: Trees (Days 15-21) ====================

  // Day 15 — Mon Apr 20
  {
    day: 15,
    category: 'DSA',
    title: 'Binary Tree — Traversals',
    description: 'Trees are the bread and butter of FAANG interviews. Know all traversal orders inside out.',
    tasks: [
      { type: 'problem', name: 'Binary Tree Inorder Traversal', difficulty: 'Easy', link: 'https://leetcode.com/problems/binary-tree-inorder-traversal/', company: 'Amazon, Microsoft' },
      { type: 'problem', name: 'Maximum Depth of Binary Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Invert Binary Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/invert-binary-tree/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Binary Tree Level Order Traversal', difficulty: 'Medium', link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/', company: 'Google, Amazon, Meta, Microsoft' },
      { type: 'concept', name: 'Study: DFS (preorder, inorder, postorder) vs BFS. Recursive vs iterative with explicit stack. Know all 3 DFS orders by heart.' },
    ],
  },
  // Day 16 — Tue Apr 21
  {
    day: 16,
    category: 'DSA',
    title: 'Binary Tree — Path & Construction',
    description: 'Tree path problems need careful recursive thinking. What does each node return to its parent?',
    tasks: [
      { type: 'problem', name: 'Diameter of Binary Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/diameter-of-binary-tree/', company: 'Google, Meta' },
      { type: 'problem', name: 'Same Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/same-tree/', company: 'Amazon, Microsoft' },
      { type: 'problem', name: 'Lowest Common Ancestor of a Binary Tree', difficulty: 'Medium', link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/', company: 'Google, Amazon, Meta, Microsoft' },
      { type: 'problem', name: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/', company: 'Google, Amazon, Meta, Microsoft' },
      { type: 'concept', name: 'Study: "Return value" pattern — each node computes a value from its children and returns something to parent. Global variable for overall answer.' },
    ],
  },
  // Day 17 — Wed Apr 22
  {
    day: 17,
    category: 'DSA',
    title: 'BST + Heap / Priority Queue',
    description: 'BST properties enable efficient search. Heaps solve "top K" and streaming problems.',
    tasks: [
      { type: 'problem', name: 'Validate Binary Search Tree', difficulty: 'Medium', link: 'https://leetcode.com/problems/validate-binary-search-tree/', company: 'Google, Amazon, Meta, Microsoft' },
      { type: 'problem', name: 'Kth Smallest Element in a BST', difficulty: 'Medium', link: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Kth Largest Element in an Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/', company: 'Google, Amazon, Meta, Microsoft' },
      { type: 'problem', name: 'Find Median from Data Stream', difficulty: 'Hard', link: 'https://leetcode.com/problems/find-median-from-data-stream/', company: 'Google, Amazon, Microsoft, Uber' },
      { type: 'concept', name: 'Study: BST in-order = sorted. Two-heap pattern for median (max-heap for lower half, min-heap for upper half). Heap internals: sift up/down, O(log n) insert.' },
    ],
  },
  // Day 18 — Thu Apr 23
  {
    day: 18,
    category: 'MIXED',
    title: 'More Trees + System Design: Databases Deep Dive',
    description: 'Tree construction + deep dive into database fundamentals for system design.',
    tasks: [
      { type: 'problem', name: 'Construct Binary Tree from Preorder and Inorder Traversal', difficulty: 'Medium', link: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/', company: 'Google, Amazon, Microsoft' },
      { type: 'problem', name: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', link: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/', company: 'Google, Amazon, Meta, Microsoft' },
      { type: 'concept', name: 'HLD Study — Database Sharding:\n• Why shard? Single DB can\'t handle >10TB or >50K QPS typically\n• Range-based: user IDs 1-1M on shard 1, 1M-2M on shard 2. Problem: hot spots\n• Hash-based: hash(userId) % N. Problem: adding shards requires rehashing\n• Consistent hashing: only K/N keys remapped when adding a node. Used by DynamoDB, Cassandra\n• Cross-shard queries are expensive → design your shard key to keep related data together' },
      { type: 'concept', name: 'HLD Study — Database Replication:\n• Primary-replica (master-slave): writes to primary, reads from replicas. Replication lag = eventual consistency\n• Multi-primary: both accept writes. Conflict resolution needed (last-write-wins, merge)\n• Synchronous replication: strong consistency, higher latency. Async: fast, but data loss risk\n• Read replicas for scaling reads (90% of most apps are reads)' },
    ],
  },
  // Day 19 — Fri Apr 24
  {
    day: 19,
    category: 'DSA',
    title: 'Heap Problems + Task Scheduler',
    description: 'More heap practice. Task Scheduler is a FAANG classic that combines greedy with heap.',
    tasks: [
      { type: 'problem', name: 'Task Scheduler', difficulty: 'Medium', link: 'https://leetcode.com/problems/task-scheduler/', company: 'Google, Amazon, Meta' },
      { type: 'problem', name: 'Reorganize String', difficulty: 'Medium', link: 'https://leetcode.com/problems/reorganize-string/', company: 'Google, Amazon' },
      { type: 'problem', name: 'K Closest Points to Origin', difficulty: 'Medium', link: 'https://leetcode.com/problems/k-closest-points-to-origin/', company: 'Amazon, Meta' },
      { type: 'problem', name: 'Design Twitter', difficulty: 'Medium', link: 'https://leetcode.com/problems/design-twitter/', company: 'Amazon' },
      { type: 'concept', name: 'Study: Greedy + heap pattern — always process the most frequent/highest priority item first. Understand Task Scheduler\'s math approach vs heap approach.' },
    ],
  },
  // Day 20 — Sat Apr 25 (WEEKEND)
  {
    day: 20,
    category: 'MIXED',
    title: '🔋 Weekend — Trie + System Design: URL Shortener',
    description: 'Weekend stretch! Learn Trie data structure. Then your first full system design: URL Shortener.',
    tasks: [
      { type: 'problem', name: 'Implement Trie (Prefix Tree)', difficulty: 'Medium', link: 'https://leetcode.com/problems/implement-trie-prefix-tree/', company: 'Google, Amazon, Microsoft' },
      { type: 'problem', name: 'Design Add and Search Words Data Structure', difficulty: 'Medium', link: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/', company: 'Google, Meta' },
      { type: 'problem', name: 'Word Search II', difficulty: 'Hard', link: 'https://leetcode.com/problems/word-search-ii/', company: 'Google, Amazon, Microsoft' },
      { type: 'concept', name: 'HLD — Design a URL Shortener (TinyURL):\n\n1. REQUIREMENTS: Shorten URL, redirect, analytics. 100M URLs/day, 10:1 read:write.\n\n2. API: POST /shorten {longUrl} → {shortUrl} | GET /{shortCode} → 301 redirect\n\n3. SHORT CODE GENERATION:\n• Base62 encoding (a-z, A-Z, 0-9) → 62^7 = 3.5 trillion combinations\n• Option A: Hash (MD5) long URL → take first 7 chars. Collision? Retry with salt.\n• Option B: Auto-increment counter → Base62 encode. No collisions. Use distributed counter (Snowflake).\n• Option C: Pre-generate random codes, store in key-generation service (KGS). Fastest.\n\n4. STORAGE: shortCode → longUrl mapping. DynamoDB or Cassandra (high write throughput, simple KV lookup). Cache hot URLs in Redis (80/20 rule: 20% URLs get 80% traffic).\n\n5. ARCHITECTURE: Client → API Gateway (rate limit) → App Server → Cache (Redis) → DB (DynamoDB)\n\n6. DEEP DIVES: Custom aliases, URL expiration, analytics (async: write to Kafka → analytics pipeline), 301 vs 302 redirect (301 = permanent/cached, 302 = temporary/not cached).' },
    ],
  },
  // Day 21 — Sun Apr 26 (WEEKEND)
  {
    day: 21,
    category: 'MIXED',
    title: '🔋 Weekend — Graph Intro + Communication Patterns',
    description: 'Weekend stretch! Start graph traversal. Plus: learn how services communicate — essential for system design.',
    tasks: [
      { type: 'problem', name: 'Number of Islands', difficulty: 'Medium', link: 'https://leetcode.com/problems/number-of-islands/', company: 'Google, Amazon, Meta, Microsoft' },
      { type: 'problem', name: 'Clone Graph', difficulty: 'Medium', link: 'https://leetcode.com/problems/clone-graph/', company: 'Google, Meta' },
      { type: 'problem', name: 'Flood Fill', difficulty: 'Easy', link: 'https://leetcode.com/problems/flood-fill/', company: 'Amazon, Microsoft' },
      { type: 'concept', name: 'Study: Graph representation — adjacency list vs matrix. BFS (queue, level by level) vs DFS (recursion/stack, go deep). Grid as implicit graph.' },
      { type: 'concept', name: 'HLD Study — Communication Patterns:\n• REST: Stateless, resource-based, HTTP methods. Good for CRUD, public APIs.\n• gRPC: Binary protocol (protobuf), 10x faster than REST. Good for internal microservices.\n• GraphQL: Client specifies exactly what fields to fetch. Good for mobile (bandwidth), complex UIs.\n• WebSockets: Persistent bidirectional connection. Good for real-time: chat, live updates, games.\n• Message Queues (Kafka, RabbitMQ, SQS): Async, decoupled. Pub-sub (one-to-many) vs point-to-point.\n• When to use async: long-running tasks, spike absorption, decoupling services, retry handling.' },
    ],
  },

  // ==================== WEEK 4: Graphs Deep Dive (Days 22-28) ====================

  // Day 22 — Mon Apr 27
  {
    day: 22,
    category: 'DSA',
    title: 'Graph — Topological Sort',
    description: 'Topological sort is used in build systems, course scheduling, dependency resolution. Very common.',
    tasks: [
      { type: 'problem', name: 'Course Schedule', difficulty: 'Medium', link: 'https://leetcode.com/problems/course-schedule/', company: 'Google, Amazon, Meta, Microsoft' },
      { type: 'problem', name: 'Course Schedule II', difficulty: 'Medium', link: 'https://leetcode.com/problems/course-schedule-ii/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Alien Dictionary', difficulty: 'Hard', link: 'https://leetcode.com/problems/alien-dictionary/', company: 'Google, Amazon, Meta, Uber' },
      { type: 'concept', name: 'Study: Kahn\'s algorithm (BFS + in-degree). DFS-based topo sort (reverse post-order). Cycle detection: if in-degree BFS visits < n nodes → cycle.' },
    ],
  },
  // Day 23 — Tue Apr 28
  {
    day: 23,
    category: 'DSA',
    title: 'Graph — Union Find',
    description: 'Union-Find (Disjoint Set) is the go-to for connected components and redundant connections.',
    tasks: [
      { type: 'problem', name: 'Number of Connected Components', difficulty: 'Medium', link: 'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Redundant Connection', difficulty: 'Medium', link: 'https://leetcode.com/problems/redundant-connection/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Accounts Merge', difficulty: 'Medium', link: 'https://leetcode.com/problems/accounts-merge/', company: 'Google, Meta' },
      { type: 'problem', name: 'Graph Valid Tree', difficulty: 'Medium', link: 'https://leetcode.com/problems/graph-valid-tree/', company: 'Google, Amazon' },
      { type: 'concept', name: 'Study: Union-Find with path compression + union by rank. Nearly O(1) amortized. Template: find(x) with compression, union(x,y) with rank.' },
    ],
  },
  // Day 24 — Wed Apr 29
  {
    day: 24,
    category: 'DSA',
    title: 'Graph — Shortest Path',
    description: 'Dijkstra\'s and BFS shortest path. Know when to use which — this distinction matters in interviews.',
    tasks: [
      { type: 'problem', name: 'Network Delay Time', difficulty: 'Medium', link: 'https://leetcode.com/problems/network-delay-time/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Cheapest Flights Within K Stops', difficulty: 'Medium', link: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/', company: 'Google, Amazon, Uber' },
      { type: 'problem', name: 'Word Ladder', difficulty: 'Hard', link: 'https://leetcode.com/problems/word-ladder/', company: 'Google, Amazon, Meta' },
      { type: 'concept', name: 'Study: BFS = unweighted shortest path. Dijkstra = weighted (no negatives), uses min-heap. Bellman-Ford = handles negative edges. K-stops = modified BFS/Bellman-Ford.' },
    ],
  },
  // Day 25 — Thu Apr 30
  {
    day: 25,
    category: 'MIXED',
    title: 'Graph BFS/DFS Practice + Rate Limiter Design',
    description: 'More graph practice + learn rate limiting algorithms. Rate limiters appear in every system design.',
    tasks: [
      { type: 'problem', name: 'Pacific Atlantic Water Flow', difficulty: 'Medium', link: 'https://leetcode.com/problems/pacific-atlantic-water-flow/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Rotting Oranges', difficulty: 'Medium', link: 'https://leetcode.com/problems/rotting-oranges/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Walls and Gates', difficulty: 'Medium', link: 'https://leetcode.com/problems/walls-and-gates/', company: 'Google, Meta' },
      { type: 'concept', name: 'HLD — Design a Rate Limiter:\n\n1. ALGORITHMS (know all 4):\n• Token Bucket: Bucket holds tokens, refilled at rate R. Each request costs 1 token. If empty → reject. Allows bursts up to bucket size. Used by: AWS, Stripe.\n• Leaky Bucket: Requests enter a queue processed at fixed rate. Overflow → reject. Smooth output, no bursts.\n• Fixed Window: Count requests in time window (e.g., 1 min). Reset at window boundary. Problem: 2x burst at boundary.\n• Sliding Window: Weighted count across current + previous window. Smooths the boundary problem.\n\n2. DISTRIBUTED RATE LIMITING: Use Redis with INCR + EXPIRE (atomic). Race condition → use Lua script for atomicity.\n\n3. PLACEMENT: API Gateway (simplest), middleware, or per-service. Gateway = global limits, per-service = granular.\n\n4. RESPONSE: HTTP 429 Too Many Requests + Retry-After header + X-RateLimit-Remaining header.' },
    ],
  },
  // Day 26 — Fri May 1
  {
    day: 26,
    category: 'DSA',
    title: 'Backtracking — Subsets, Permutations, Combinations',
    description: 'Backtracking = systematic trial and error. Master the template: choose → explore → unchoose.',
    tasks: [
      { type: 'problem', name: 'Subsets', difficulty: 'Medium', link: 'https://leetcode.com/problems/subsets/', company: 'Google, Amazon, Meta' },
      { type: 'problem', name: 'Permutations', difficulty: 'Medium', link: 'https://leetcode.com/problems/permutations/', company: 'Google, Amazon, Meta' },
      { type: 'problem', name: 'Combination Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/combination-sum/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Letter Combinations of a Phone Number', difficulty: 'Medium', link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/', company: 'Google, Amazon, Meta' },
      { type: 'concept', name: 'Study: Backtracking template. Decision tree visualization — subsets = include/exclude at each level, permutations = choose from remaining, combinations = choose from index onward.' },
    ],
  },
  // Day 27 — Sat May 2 (WEEKEND)
  {
    day: 27,
    category: 'MIXED',
    title: '🔋 Weekend — Hard Backtracking + Chat System Design',
    description: 'Weekend stretch! Hard backtracking + design a real-time chat system like WhatsApp.',
    tasks: [
      { type: 'problem', name: 'Word Search', difficulty: 'Medium', link: 'https://leetcode.com/problems/word-search/', company: 'Google, Amazon, Microsoft' },
      { type: 'problem', name: 'N-Queens', difficulty: 'Hard', link: 'https://leetcode.com/problems/n-queens/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Palindrome Partitioning', difficulty: 'Medium', link: 'https://leetcode.com/problems/palindrome-partitioning/', company: 'Google, Amazon' },
      { type: 'concept', name: 'HLD — Design a Chat System (WhatsApp):\n\n1. REQUIREMENTS: 1-on-1 messaging, group chat (500 max), online/offline presence, read receipts, media sharing, message history.\n\n2. CONNECTION: WebSocket for real-time bidirectional communication. Each device maintains persistent WS connection to a Chat Server.\n\n3. MESSAGE FLOW (1-on-1):\n• Sender → WS → Chat Server → check recipient online? → YES: forward via WS. NO: store in DB + push notification.\n• Message stored in DB regardless (for history sync).\n\n4. GROUP MESSAGES:\n• Small groups (<100): Fan-out on write — write message to each member\'s inbox. Fast reads.\n• Large groups: Fan-out on read — store once, each member queries on open. Saves write amplification.\n\n5. STORAGE: Messages in Cassandra (write-optimized, partitioned by chatId+timestamp). Media in S3 + CDN.\n\n6. ORDERING: Message ID = Snowflake (timestamp-based, sortable). Client-side ordering by message ID.\n\n7. PRESENCE: Heartbeat every 5s from client. No heartbeat for 30s → mark offline. Publish to friends via pub-sub.' },
    ],
  },
  // Day 28 — Sun May 3 (WEEKEND)
  {
    day: 28,
    category: 'MIXED',
    title: '🔋 Weekend — Bit Manipulation + Matrix Problems',
    description: 'Weekend stretch! Cover bit manipulation essentials and matrix traversal patterns.',
    tasks: [
      { type: 'problem', name: 'Single Number', difficulty: 'Easy', link: 'https://leetcode.com/problems/single-number/', company: 'Amazon' },
      { type: 'problem', name: 'Counting Bits', difficulty: 'Easy', link: 'https://leetcode.com/problems/counting-bits/', company: 'Amazon' },
      { type: 'problem', name: 'Rotate Image', difficulty: 'Medium', link: 'https://leetcode.com/problems/rotate-image/', company: 'Google, Amazon, Microsoft' },
      { type: 'problem', name: 'Spiral Matrix', difficulty: 'Medium', link: 'https://leetcode.com/problems/spiral-matrix/', company: 'Google, Amazon, Microsoft' },
      { type: 'problem', name: 'Set Matrix Zeroes', difficulty: 'Medium', link: 'https://leetcode.com/problems/set-matrix-zeroes/', company: 'Amazon, Microsoft' },
      { type: 'concept', name: 'Study: XOR tricks (a^a=0, a^0=a). n & (n-1) clears lowest set bit. Bit masking for subsets. Matrix: transpose+reverse = 90° rotation.' },
    ],
  },

  // ==================== WEEK 5: DP Fundamentals (Days 29-35) ====================

  // Day 29 — Mon May 4
  {
    day: 29,
    category: 'DSA',
    title: 'Dynamic Programming — 1D Basics',
    description: 'DP is the #1 topic that separates SDE1 from SDE2. Start with 1D problems — identify state, transition, base case.',
    tasks: [
      { type: 'problem', name: 'Climbing Stairs', difficulty: 'Easy', link: 'https://leetcode.com/problems/climbing-stairs/', company: 'Google, Amazon' },
      { type: 'problem', name: 'House Robber', difficulty: 'Medium', link: 'https://leetcode.com/problems/house-robber/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Coin Change', difficulty: 'Medium', link: 'https://leetcode.com/problems/coin-change/', company: 'Google, Amazon, Microsoft' },
      { type: 'problem', name: 'Longest Increasing Subsequence', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-increasing-subsequence/', company: 'Google, Amazon, Microsoft' },
      { type: 'concept', name: 'Study: DP framework — 1) Define state (what does dp[i] mean?), 2) Recurrence (how does dp[i] relate to smaller subproblems?), 3) Base case, 4) Fill order. Top-down vs bottom-up.' },
    ],
  },
  // Day 30 — Tue May 5
  {
    day: 30,
    category: 'DSA',
    title: 'DP — 1D Advanced + Knapsack',
    description: 'Knapsack is the most important DP pattern. It appears in disguise in many problems.',
    tasks: [
      { type: 'problem', name: 'Word Break', difficulty: 'Medium', link: 'https://leetcode.com/problems/word-break/', company: 'Google, Amazon, Meta' },
      { type: 'problem', name: 'Decode Ways', difficulty: 'Medium', link: 'https://leetcode.com/problems/decode-ways/', company: 'Google, Amazon, Meta' },
      { type: 'problem', name: 'Partition Equal Subset Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/partition-equal-subset-sum/', company: 'Amazon' },
      { type: 'problem', name: 'Maximum Product Subarray', difficulty: 'Medium', link: 'https://leetcode.com/problems/maximum-product-subarray/', company: 'Google, Amazon' },
      { type: 'concept', name: 'Study: 0/1 Knapsack — take or skip each item, dp[i][w]. Unbounded Knapsack — can reuse items, dp[w]. Partition Subset Sum = knapsack in disguise (target = sum/2).' },
    ],
  },
  // Day 31 — Wed May 6
  {
    day: 31,
    category: 'DSA',
    title: 'DP — 2D Grid + String DP',
    description: '2D DP on grids and strings. Each cell depends on neighbors. Draw the DP table to build intuition.',
    tasks: [
      { type: 'problem', name: 'Unique Paths', difficulty: 'Medium', link: 'https://leetcode.com/problems/unique-paths/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Longest Common Subsequence', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-common-subsequence/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Edit Distance', difficulty: 'Medium', link: 'https://leetcode.com/problems/edit-distance/', company: 'Google, Amazon, Microsoft' },
      { type: 'problem', name: 'Minimum Path Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/minimum-path-sum/', company: 'Google, Amazon' },
      { type: 'concept', name: 'Study: String DP pattern — dp[i][j] = answer for first i chars of s1 and first j chars of s2. Space optimization: rolling array (2 rows instead of n×m).' },
    ],
  },
  // Day 32 — Thu May 7
  {
    day: 32,
    category: 'MIXED',
    title: 'DP Continued + Notification System Design',
    description: 'More DP + design a notification system (push, SMS, email) — a practical multi-channel system.',
    tasks: [
      { type: 'problem', name: 'Jump Game', difficulty: 'Medium', link: 'https://leetcode.com/problems/jump-game/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Jump Game II', difficulty: 'Medium', link: 'https://leetcode.com/problems/jump-game-ii/', company: 'Google, Amazon' },
      { type: 'problem', name: 'House Robber II', difficulty: 'Medium', link: 'https://leetcode.com/problems/house-robber-ii/', company: 'Google, Amazon' },
      { type: 'concept', name: 'HLD — Design a Notification System:\n\n1. REQUIREMENTS: Multi-channel (push/SMS/email), 10M notifications/day, user preferences, prioritization, template support.\n\n2. ARCHITECTURE:\n• Notification Service: validates, applies user preferences, templates the message\n• Priority Queue (Kafka): High/Medium/Low priority topics. Critical alerts bypass queue.\n• Channel Adapters: Push (APNs/FCM), SMS (Twilio), Email (SendGrid). Each has its own retry logic.\n• User Preference Store: "Don\'t send marketing after 10pm", "SMS only for OTPs"\n\n3. RELIABILITY:\n• At-least-once delivery via message queue + retry with exponential backoff\n• Deduplication: idempotency key per notification (hash of userId+type+content+time window)\n• Dead Letter Queue: failed notifications after N retries → DLQ for manual review\n\n4. RATE LIMITING: Per-user limits (max 5 push/hour for marketing). Per-channel limits (SMS cost!).\n\n5. ANALYTICS: Track sent/delivered/opened/clicked. Async pipeline: events → Kafka → analytics DB.' },
    ],
  },
  // Day 33 — Fri May 8
  {
    day: 33,
    category: 'DSA',
    title: 'Greedy + Intervals',
    description: 'Greedy works when local optimal = global optimal. Interval problems are a special class of greedy.',
    tasks: [
      { type: 'problem', name: 'Merge Intervals', difficulty: 'Medium', link: 'https://leetcode.com/problems/merge-intervals/', company: 'Google, Amazon, Meta, Microsoft, Uber' },
      { type: 'problem', name: 'Insert Interval', difficulty: 'Medium', link: 'https://leetcode.com/problems/insert-interval/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Non-overlapping Intervals', difficulty: 'Medium', link: 'https://leetcode.com/problems/non-overlapping-intervals/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Meeting Rooms II', difficulty: 'Medium', link: 'https://leetcode.com/problems/meeting-rooms-ii/', company: 'Google, Amazon, Meta, Microsoft' },
      { type: 'concept', name: 'Study: Sort intervals by start or end time. Sweep line technique. Greedy proof: "exchange argument" — swapping a non-greedy choice with greedy is never worse.' },
    ],
  },
  // Day 34 — Sat May 9 (WEEKEND)
  {
    day: 34,
    category: 'MIXED',
    title: '🔋 Weekend — Hard DP + News Feed Design',
    description: 'Weekend stretch! Tackle hard DP + design Twitter/Instagram feed (fan-out problem).',
    tasks: [
      { type: 'problem', name: 'Burst Balloons', difficulty: 'Hard', link: 'https://leetcode.com/problems/burst-balloons/', company: 'Google' },
      { type: 'problem', name: 'Best Time to Buy and Sell Stock with Cooldown', difficulty: 'Medium', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Regular Expression Matching', difficulty: 'Hard', link: 'https://leetcode.com/problems/regular-expression-matching/', company: 'Google, Meta' },
      { type: 'concept', name: 'Study: State machine DP — stock problems have states (holding, not holding, cooldown). Interval DP — dp[i][j] for subarray [i..j].' },
      { type: 'concept', name: 'HLD — Design Twitter/Instagram Feed:\n\n1. CORE PROBLEM: User follows 500 people. How to build their home timeline?\n\n2. FAN-OUT ON WRITE (Push model):\n• When user posts, write to ALL followers\' timelines (cached in Redis sorted sets)\n• Pros: Timeline read is O(1) — just read from cache\n• Cons: Celebrity with 50M followers → 50M writes per tweet. Slow and expensive.\n\n3. FAN-OUT ON READ (Pull model):\n• When user opens feed, fetch latest posts from all followed users, merge-sort by time\n• Pros: No write amplification. Celebrity posts are cheap.\n• Cons: Slow reads — fetching from 500 users on every refresh.\n\n4. HYBRID (What Twitter actually does):\n• Regular users (<10K followers): fan-out on write. Pre-compute followers\' timelines.\n• Celebrities (>10K followers): fan-out on read. Merge celebrity posts at read time.\n• Feed = pre-computed timeline + real-time merge of celebrity posts.\n\n5. RANKING: Not just chronological. ML model scores posts by: engagement prediction, recency, relationship strength, content type. "Algorithmic feed."\n\n6. STORAGE: Posts in MySQL/PostgreSQL (relational for social graph). Timelines cached in Redis (sorted set by timestamp). Media on S3 + CDN.' },
    ],
  },
  // Day 35 — Sun May 10 (WEEKEND)
  {
    day: 35,
    category: 'MIXED',
    title: '🔋 Weekend — Tree DP + LLD: SOLID Principles',
    description: 'Weekend stretch! Tree DP + start Low-Level Design with SOLID principles and design patterns.',
    tasks: [
      { type: 'problem', name: 'House Robber III', difficulty: 'Medium', link: 'https://leetcode.com/problems/house-robber-iii/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Unique Binary Search Trees', difficulty: 'Medium', link: 'https://leetcode.com/problems/unique-binary-search-trees/', company: 'Amazon' },
      { type: 'problem', name: 'Longest Valid Parentheses', difficulty: 'Hard', link: 'https://leetcode.com/problems/longest-valid-parentheses/', company: 'Amazon' },
      { type: 'concept', name: 'LLD — SOLID Principles (non-negotiable for SDE2):\n• Single Responsibility: A class should have only one reason to change. Example: UserService handles user logic, not email sending.\n• Open-Closed: Open for extension, closed for modification. Use interfaces + polymorphism, not if/else chains.\n• Liskov Substitution: Subtypes must be substitutable for base types. If Bird has fly(), Penguin extends Bird breaks LSP.\n• Interface Segregation: Clients shouldn\'t depend on interfaces they don\'t use. Split fat interfaces into focused ones.\n• Dependency Inversion: High-level modules depend on abstractions, not concrete implementations. Inject dependencies.' },
      { type: 'concept', name: 'LLD — Key Design Patterns (know these 6):\n• Strategy: Swap algorithms at runtime (sorting, payment methods). Composition over inheritance.\n• Observer: Publish-subscribe. Listeners react to events (notification system, event bus).\n• Factory: Centralize object creation. Hide concrete class from caller.\n• Singleton: One instance globally (logger, config, connection pool). Thread-safe with double-checked locking.\n• Decorator: Add behavior without modifying class. Wrap objects (Java I/O streams, middleware).\n• State: Object behavior changes based on internal state. Cleaner than if/else state machines.' },
    ],
  },

  // ==================== WEEKS 6-7: Advanced DSA + System Design (Days 36-49) ====================

  // Day 36 — Mon May 11
  {
    day: 36,
    category: 'DSA',
    title: 'Advanced Graph + More Intervals',
    description: 'MST, multi-source BFS, and more interval problems.',
    tasks: [
      { type: 'problem', name: 'Min Cost to Connect All Points', difficulty: 'Medium', link: 'https://leetcode.com/problems/min-cost-to-connect-all-points/', company: 'Amazon' },
      { type: 'problem', name: 'Surrounded Regions', difficulty: 'Medium', link: 'https://leetcode.com/problems/surrounded-regions/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Gas Station', difficulty: 'Medium', link: 'https://leetcode.com/problems/gas-station/', company: 'Amazon, Microsoft' },
      { type: 'problem', name: 'Minimum Number of Arrows to Burst Balloons', difficulty: 'Medium', link: 'https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/', company: 'Amazon' },
      { type: 'concept', name: 'Study: Kruskal\'s MST (sort edges + union-find). Multi-source BFS (enqueue all sources initially). Greedy interval scheduling: sort by end time.' },
    ],
  },
  // Day 37 — Tue May 12
  {
    day: 37,
    category: 'MIXED',
    title: 'Hard Problems + Video Streaming Design',
    description: 'Hard DSA practice + design YouTube/Netflix video platform.',
    tasks: [
      { type: 'problem', name: 'Swim in Rising Water', difficulty: 'Hard', link: 'https://leetcode.com/problems/swim-in-rising-water/', company: 'Google' },
      { type: 'problem', name: 'Maximum Profit in Job Scheduling', difficulty: 'Hard', link: 'https://leetcode.com/problems/maximum-profit-in-job-scheduling/', company: 'Google, Amazon' },
      { type: 'concept', name: 'HLD — Design YouTube/Netflix Streaming:\n\n1. VIDEO UPLOAD FLOW:\n• Client → pre-signed URL → upload directly to S3 (skip app servers for large files)\n• Upload triggers processing pipeline (async via message queue)\n• Transcoding: Convert to multiple resolutions (360p, 720p, 1080p, 4K) and formats (H.264, VP9, AV1)\n• Generate thumbnails, extract metadata, run content moderation (ML)\n• Update metadata DB when processing complete, notify user\n\n2. VIDEO STREAMING:\n• Adaptive Bitrate Streaming (ABR): HLS (Apple) or DASH. Video split into 2-10 second chunks.\n• Client requests manifest file → downloads chunks at quality matching bandwidth.\n• If bandwidth drops → seamlessly switches to lower quality. No rebuffering.\n\n3. CDN ARCHITECTURE:\n• Videos cached at edge servers globally. 90%+ of requests served from CDN.\n• Popular videos: pre-push to CDN edges. Long-tail: pull on first request, cache.\n• Multi-CDN strategy (Netflix uses Open Connect + AWS CloudFront as fallback)\n\n4. STORAGE: Video chunks on S3 (petabytes). Metadata in PostgreSQL (title, description). User activity in Cassandra (views, history).\n\n5. RECOMMENDATION: Collaborative filtering (users like you watched X) + content-based (similar genre/actors). ML pipeline: data collection → feature engineering → model training → A/B testing.' },
    ],
  },
  // Day 38 — Wed May 13
  {
    day: 38,
    category: 'DSA',
    title: 'Advanced String Algorithms',
    description: 'KMP and Rabin-Karp for pattern matching. Plus more string DP.',
    tasks: [
      { type: 'problem', name: 'Find the Index of the First Occurrence', difficulty: 'Easy', link: 'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/', company: 'Amazon' },
      { type: 'problem', name: 'Repeated DNA Sequences', difficulty: 'Medium', link: 'https://leetcode.com/problems/repeated-dna-sequences/', company: 'Google' },
      { type: 'problem', name: 'Wildcard Matching', difficulty: 'Hard', link: 'https://leetcode.com/problems/wildcard-matching/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Distinct Subsequences', difficulty: 'Hard', link: 'https://leetcode.com/problems/distinct-subsequences/', company: 'Google' },
      { type: 'concept', name: 'Study: KMP — failure function (prefix that is also suffix). O(n+m) pattern matching. Rabin-Karp — rolling hash for O(n) average case.' },
    ],
  },
  // Day 39 — Thu May 14
  {
    day: 39,
    category: 'MIXED',
    title: 'Design Data Structures + Web Crawler Design',
    description: 'Design custom data structures (common SDE2 ask) + design a web crawler.',
    tasks: [
      { type: 'problem', name: 'LRU Cache', difficulty: 'Medium', link: 'https://leetcode.com/problems/lru-cache/', company: 'Google, Amazon, Meta, Microsoft' },
      { type: 'problem', name: 'Design Search Autocomplete System', difficulty: 'Hard', link: 'https://leetcode.com/problems/design-search-autocomplete-system/', company: 'Google, Amazon' },
      { type: 'concept', name: 'HLD — Design a Web Crawler:\n\n1. REQUIREMENTS: Crawl 1B pages/month. Be polite (respect robots.txt). Deduplicate. Prioritize important pages.\n\n2. ARCHITECTURE:\nURL Frontier (priority queue) → DNS Resolver → Fetcher Workers → Content Parser → URL Extractor → Deduplicator → back to Frontier\n\n3. URL FRONTIER:\n• Priority queue: PageRank-based priority. Fresh/updated pages get higher priority.\n• Politeness queue: One queue per domain. Rate limit per domain (e.g., 1 req/sec). Never hammer a single site.\n\n4. DEDUPLICATION:\n• URL dedup: Normalize URLs (remove trailing slash, sort params). Store in hash set or Bloom filter.\n• Content dedup: SimHash or MinHash fingerprint of page content. Detect near-duplicate pages.\n• Bloom Filter: Probabilistic set. 1% false positive, zero false negatives. Space: ~10 bits per URL.\n\n5. DISTRIBUTED CRAWLING: Shard URLs by domain hash across N crawler machines. Each machine manages its own politeness queues.\n\n6. STORAGE: Raw HTML in object storage (S3). Parsed content + metadata in search index. URL graph in graph DB.' },
    ],
  },
  // Day 40 — Fri May 15
  {
    day: 40,
    category: 'DSA',
    title: 'Math, Geometry & Misc Problems',
    description: 'Cover math-heavy problems that sometimes appear. Plus: problems that don\'t fit neatly into other categories.',
    tasks: [
      { type: 'problem', name: 'Pow(x, n)', difficulty: 'Medium', link: 'https://leetcode.com/problems/powx-n/', company: 'Google, Amazon, Meta' },
      { type: 'problem', name: 'Happy Number', difficulty: 'Easy', link: 'https://leetcode.com/problems/happy-number/', company: 'Amazon' },
      { type: 'problem', name: 'Multiply Strings', difficulty: 'Medium', link: 'https://leetcode.com/problems/multiply-strings/', company: 'Google, Meta' },
      { type: 'problem', name: 'Random Pick with Weight', difficulty: 'Medium', link: 'https://leetcode.com/problems/random-pick-with-weight/', company: 'Meta' },
      { type: 'concept', name: 'Study: Binary exponentiation O(log n). Prefix sum for weighted random (binary search on cumulative weights). Modular arithmetic for overflow.' },
    ],
  },
  // Day 41 — Sat May 16 (WEEKEND)
  {
    day: 41,
    category: 'MIXED',
    title: '🔋 Weekend — LLD: Parking Lot + Uber Design',
    description: 'Weekend stretch! Classic LLD problem + design Uber/Lyft ride-sharing.',
    tasks: [
      { type: 'problem', name: 'Number of Provinces', difficulty: 'Medium', link: 'https://leetcode.com/problems/number-of-provinces/', company: 'Amazon' },
      { type: 'problem', name: 'Evaluate Division', difficulty: 'Medium', link: 'https://leetcode.com/problems/evaluate-division/', company: 'Google' },
      { type: 'concept', name: 'LLD — Design a Parking Lot:\n\nCLASSES:\n• ParkingLot: floors[], entry/exit points, capacity tracking\n• ParkingFloor: spots[], displayBoard\n• ParkingSpot: (abstract) → CompactSpot, LargeSpot, HandicappedSpot, ElectricSpot\n• Vehicle: (abstract) → Car, Truck, Motorcycle. Has licensePlate, type\n• Ticket: entryTime, spot, vehicle, payment status\n• Payment: (Strategy pattern) → CashPayment, CardPayment, UPIPayment\n\nPATTERNS USED:\n• Strategy for payment & spot assignment (nearest, first-available, floor-balanced)\n• Factory for vehicle & spot creation\n• Observer for availability display (spot freed → update display board)\n• State for spot (Available → Occupied → Reserved)\n\nCONCURRENCY: Synchronized spot assignment (lock per floor, not global lock). Atomic check-and-assign.' },
      { type: 'concept', name: 'HLD — Design Uber/Lyft:\n\n1. LOCATION SERVICE:\n• Drivers send GPS every 3-4 seconds → high write throughput (millions/sec)\n• Store in-memory spatial index: QuadTree or GeoHash grid\n• GeoHash: Convert lat/lng to string prefix. Same prefix = nearby. Redis with GeoHash commands.\n\n2. MATCHING:\n• Rider requests → find nearby drivers (within 3km) → rank by ETA, rating → send request to best driver\n• Driver has 15s to accept. Timeout → next driver. All decline → expand radius.\n\n3. TRIP LIFECYCLE: Request → Match → Accept → En route to pickup → Arrived → Trip started → Trip completed → Payment\n\n4. ETA: Road network as weighted graph. Precomputed (contraction hierarchies) + real-time traffic adjustment.\n\n5. SURGE PRICING: Demand/supply ratio per GeoHash region. Dynamic multiplier updated every few minutes.\n\n6. SCALE: WebSocket for real-time tracking. Kafka for event streaming. Redis for driver locations. PostgreSQL for trips/users.' },
    ],
  },
  // Day 42 — Sun May 17 (WEEKEND)
  {
    day: 42,
    category: 'MOCK',
    title: '🎯 Mini Mock — DSA + System Design',
    description: 'First mock! 45 min DSA (no hints, timer on) + 45 min system design (talk out loud, draw diagram).',
    tasks: [
      { type: 'problem', name: 'Mock DSA: Pick a random Medium from Blind 75 you haven\'t solved. 45 min timer. No hints.', difficulty: 'Medium', link: 'https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions', company: 'All' },
      { type: 'problem', name: 'Mock DSA: Pick a random Hard. 45 min. Get as far as you can.', difficulty: 'Hard', link: 'https://leetcode.com/problemset/all/?difficulty=HARD', company: 'All' },
      { type: 'concept', name: 'Mock System Design (45 min): Design a URL Shortener from scratch without looking at notes. Draw the architecture diagram. Cover: requirements, API, storage, encoding, scaling.' },
      { type: 'concept', name: 'Post-mock review: What went well? Where did you get stuck? What patterns did you forget? Write it down.' },
    ],
  },

  // ==================== WEEKS 7-8: Advanced Everything (Days 43-56) ====================

  // Day 43 — Mon May 18
  {
    day: 43,
    category: 'DSA',
    title: 'Advanced DP — Hard Problems',
    description: 'Hard DP problems that combine multiple patterns. These separate good from great candidates.',
    tasks: [
      { type: 'problem', name: 'Interleaving String', difficulty: 'Medium', link: 'https://leetcode.com/problems/interleaving-string/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Minimum Cost to Cut a Stick', difficulty: 'Hard', link: 'https://leetcode.com/problems/minimum-cost-to-cut-a-stick/', company: 'Amazon' },
      { type: 'problem', name: 'Longest Palindromic Subsequence', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-palindromic-subsequence/', company: 'Amazon' },
      { type: 'concept', name: 'Study: Interval DP — dp[i][j] for subarray/substring [i..j]. Fill diagonally (by length). Palindromic subsequence = LCS(s, reverse(s)).' },
    ],
  },
  // Day 44 — Tue May 19
  {
    day: 44,
    category: 'MIXED',
    title: 'Graph Review + Distributed Cache Design',
    description: 'Revisit hard graph problems + design Redis-like distributed cache.',
    tasks: [
      { type: 'problem', name: 'Critical Connections in a Network', difficulty: 'Hard', link: 'https://leetcode.com/problems/critical-connections-in-a-network/', company: 'Amazon' },
      { type: 'problem', name: 'Reconstruct Itinerary', difficulty: 'Hard', link: 'https://leetcode.com/problems/reconstruct-itinerary/', company: 'Google, Amazon' },
      { type: 'concept', name: 'HLD — Design a Distributed Cache (Redis):\n\n1. EVICTION POLICIES:\n• LRU: Evict least recently used. Good default. O(1) with HashMap + Doubly Linked List.\n• LFU: Evict least frequently used. Better for skewed access patterns. O(1) with 3 HashMaps.\n• TTL: Expire after fixed time. Two strategies: lazy (check on access) + periodic (background scan).\n\n2. CONSISTENT HASHING:\n• Problem: hash(key) % N breaks when adding/removing nodes (all keys remapped)\n• Solution: Hash ring with virtual nodes. Adding a node only remaps K/N keys.\n• Virtual nodes: Each physical server → 100-200 virtual nodes on ring. Better load distribution.\n\n3. CACHE PATTERNS:\n• Cache-aside: App manages cache + DB separately. Most common.\n• Write-through: Cache in front of DB, all writes go through cache. Strong consistency.\n• Write-back: Writes to cache only, async batch write to DB. Fastest but data loss risk.\n\n4. CACHE STAMPEDE: Key expires → 1000 requests hit DB simultaneously.\n• Solution 1: Locking — first request locks, rebuilds cache, unlocks. Others wait.\n• Solution 2: Probabilistic early expiry — randomly refresh before actual TTL.\n\n5. REPLICATION: Master-replica for read scaling. Async replication (eventual consistency). Failover: replica promotion.' },
    ],
  },
  // Day 45 — Wed May 20
  {
    day: 45,
    category: 'DSA',
    title: 'Segment Tree & Binary Indexed Tree',
    description: 'Range query data structures. Less common but asked at Google and in hard problems.',
    tasks: [
      { type: 'problem', name: 'Range Sum Query - Mutable', difficulty: 'Medium', link: 'https://leetcode.com/problems/range-sum-query-mutable/', company: 'Google' },
      { type: 'problem', name: 'Count of Smaller Numbers After Self', difficulty: 'Hard', link: 'https://leetcode.com/problems/count-of-smaller-numbers-after-self/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Maximal Rectangle', difficulty: 'Hard', link: 'https://leetcode.com/problems/maximal-rectangle/', company: 'Google, Amazon' },
      { type: 'concept', name: 'Study: Segment tree — build O(n), query O(log n), update O(log n). BIT (Fenwick) — simpler, same complexity, but only for prefix operations.' },
    ],
  },
  // Day 46 — Thu May 21
  {
    day: 46,
    category: 'MIXED',
    title: 'Speed Drill + Google Docs Design',
    description: 'Speed drill: solve mediums in 20 min. Plus: collaborative editing is a top Google question.',
    tasks: [
      { type: 'problem', name: 'Generate Parentheses (target: 15 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/generate-parentheses/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Find All Anagrams in a String (target: 15 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/', company: 'Amazon, Meta' },
      { type: 'problem', name: 'Kth Smallest Element in Sorted Matrix (target: 20 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/', company: 'Google, Amazon' },
      { type: 'concept', name: 'HLD — Design Google Docs (Collaborative Editing):\n\n1. CORE CHALLENGE: Two users type at the same position simultaneously. How to merge without losing data?\n\n2. OPERATIONAL TRANSFORM (OT) — What Google Docs uses:\n• Each edit is an "operation": insert(pos, char) or delete(pos)\n• When server receives two concurrent ops, it TRANSFORMS one against the other\n• Example: User A inserts "X" at position 5. User B deletes char at position 3.\n  → B\'s delete shifts A\'s insert: A becomes insert at position 4.\n• Server maintains a single linear history of transformed operations.\n\n3. CRDT (Conflict-free Replicated Data Types) — What Figma uses:\n• Each character gets a unique, ordered ID (e.g., fractional indexing)\n• No conflicts by design — operations are commutative\n• Pros: Works offline, no central server needed. Cons: More complex IDs, potential tombstone bloat.\n\n4. ARCHITECTURE: WebSocket for real-time sync. Operation log in append-only storage. Periodic snapshots for fast document loading.\n\n5. FEATURES: Cursor sync (each user\'s cursor position broadcast). Presence awareness (who\'s viewing). Undo/redo per user.' },
    ],
  },
  // Day 47 — Fri May 22
  {
    day: 47,
    category: 'DSA',
    title: 'Concurrency Problems',
    description: 'SDE2 interviews may include multithreading. Know the primitives and classic problems.',
    tasks: [
      { type: 'problem', name: 'Print in Order', difficulty: 'Easy', link: 'https://leetcode.com/problems/print-in-order/', company: 'Amazon, Microsoft' },
      { type: 'problem', name: 'Print FooBar Alternately', difficulty: 'Medium', link: 'https://leetcode.com/problems/print-foobar-alternately/', company: 'Amazon' },
      { type: 'problem', name: 'The Dining Philosophers', difficulty: 'Medium', link: 'https://leetcode.com/problems/the-dining-philosophers/', company: 'Amazon' },
      { type: 'concept', name: 'Study: Mutex (mutual exclusion), Semaphore (counting), Condition Variable (wait/signal), Read-Write Lock. Deadlock conditions: mutual exclusion + hold-and-wait + no preemption + circular wait. Break any one to prevent.' },
    ],
  },
  // Day 48 — Sat May 23 (WEEKEND)
  {
    day: 48,
    category: 'MIXED',
    title: '🔋 Weekend — LLD Deep Dive: Elevator + Payment System Design',
    description: 'Weekend stretch! Two full designs — one LLD, one HLD.',
    tasks: [
      { type: 'problem', name: 'Snapshot Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/snapshot-array/', company: 'Google' },
      { type: 'problem', name: 'Design Hit Counter', difficulty: 'Medium', link: 'https://leetcode.com/problems/design-hit-counter/', company: 'Google' },
      { type: 'concept', name: 'LLD — Design an Elevator System:\n\nCLASSES:\n• ElevatorSystem: elevators[], scheduler\n• Elevator: id, currentFloor, direction, state, requestQueue\n• Request: sourceFloor, destFloor, direction, timestamp\n• Scheduler: (Strategy pattern) → NearestElevator, ZoneBased, LoadBalanced\n\nSTATES (State pattern): IDLE, MOVING_UP, MOVING_DOWN, DOOR_OPEN, MAINTENANCE\n\nSCHEDULING ALGORITHMS:\n• FCFS: First come, first served. Simple but slow.\n• SSTF: Shortest Seek Time First. Serve nearest request. Can cause starvation.\n• SCAN (Elevator algorithm): Go up serving all requests, then down. Like a real elevator.\n• LOOK: Like SCAN but reverses at last request, not at top/bottom floor.\n\nCODE: Implement Elevator with State pattern, Scheduler with Strategy pattern. Priority queue for requests ordered by floor.' },
      { type: 'concept', name: 'HLD — Design a Payment System (Stripe):\n\n1. PAYMENT FLOW:\n• Customer → Checkout → Payment Service → Payment Gateway → Bank/Card Network → Merchant\n• Authorization (reserve funds) → Capture (actually charge) → Settlement (money moves)\n\n2. IDEMPOTENCY (Critical!):\n• Every payment request has idempotency_key (UUID generated by client)\n• Server checks: "Have I processed this key before?" → YES: return cached result. NO: process.\n• Prevents double-charging on network retries.\n\n3. DISTRIBUTED TRANSACTIONS:\n• Two-Phase Commit: Coordinator asks all participants to prepare → all say yes → commit. Problem: coordinator dies after prepare = blocking.\n• Saga Pattern: Chain of local transactions. Each step has a compensating action (undo). If step 3 fails → run compensate for steps 2, 1.\n\n4. LEDGER: Double-entry bookkeeping. Every transaction = debit from one account + credit to another. Append-only for audit trail.\n\n5. RELIABILITY: Retry with exponential backoff + jitter. Circuit breaker for downstream failures. Dead letter queue for failed payments → manual review.' },
    ],
  },
  // Day 49 — Sun May 24 (WEEKEND)
  {
    day: 49,
    category: 'MOCK',
    title: '🎯 Full Mock Interview — 3 Rounds',
    description: 'Simulate a real interview day. Time each round. No hints. Record yourself if possible.',
    tasks: [
      { type: 'problem', name: 'Mock Round 1 — DSA (45 min): Random Hard problem', difficulty: 'Hard', link: 'https://leetcode.com/problemset/all/?difficulty=HARD&listId=wpwgkgt', company: 'All' },
      { type: 'concept', name: 'Mock Round 2 — System Design (60 min): Design Instagram — photo upload, feed, stories, explore, search. Draw complete architecture.' },
      { type: 'concept', name: 'Mock Round 3 — LLD (45 min): Design a Tic-Tac-Toe game extensible to NxN board. Draw class diagram. Implement core logic.' },
      { type: 'concept', name: 'Post-mock review: Grade yourself 1-5 on each round. Identify top 3 areas to improve. Adjust remaining study plan.' },
    ],
  },
  // Day 50 — Mon May 25
  {
    day: 50,
    category: 'DSA',
    title: '🏔️ HALFWAY! — Hardest Problems Review',
    description: '50 days done! Today: revisit the hardest problems you\'ve seen. Prove you\'ve internalized the patterns.',
    tasks: [
      { type: 'problem', name: 'Median of Two Sorted Arrays (redo if needed)', difficulty: 'Hard', link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Merge K Sorted Lists (redo if needed)', difficulty: 'Hard', link: 'https://leetcode.com/problems/merge-k-sorted-lists/', company: 'Google, Amazon, Meta' },
      { type: 'problem', name: 'Binary Tree Maximum Path Sum (redo if needed)', difficulty: 'Hard', link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/', company: 'Google, Meta' },
      { type: 'concept', name: 'Halfway checkpoint: You should be able to solve most Mediums in 25 min and attempt Hards confidently. If not, spend extra time on weak areas this week.' },
    ],
  },

  // ==================== WEEKS 8-10: Design Mastery + Hard DSA (Days 51-70) ====================

  // Day 51 — Tue May 26
  {
    day: 51,
    category: 'MIXED',
    title: 'Google-Style Problems + Google Search Design',
    description: 'Creative Google problems + the holy grail of system design: Google Search.',
    tasks: [
      { type: 'problem', name: 'Split Array Largest Sum', difficulty: 'Hard', link: 'https://leetcode.com/problems/split-array-largest-sum/', company: 'Google' },
      { type: 'problem', name: 'Shortest Subarray with Sum at Least K', difficulty: 'Hard', link: 'https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/', company: 'Google' },
      { type: 'concept', name: 'HLD — Design Google Search (Overview):\n\n1. PIPELINE: Crawl → Index → Rank → Serve\n\n2. INVERTED INDEX: For each word, store list of documents containing it. "apple" → [doc1, doc7, doc42]. Positional index stores word position too (for phrase queries).\n\n3. QUERY PROCESSING: Parse query → spell correction → tokenize → lookup inverted index → intersect posting lists → rank results → return top 10.\n\n4. RANKING SIGNALS: PageRank (link authority), TF-IDF (word relevance), freshness, user engagement (CTR), page speed, mobile-friendliness. Hundreds of signals fed into ML model.\n\n5. SERVING: Index sharded by document ID range. Each query fans out to all shards, each returns top K, results merged. Target: <200ms end-to-end.\n\n6. SCALE: Trillions of pages, petabytes of index. MapReduce/Spark for index building. Multiple data centers for redundancy.' },
    ],
  },
  // Day 52 — Wed May 27
  {
    day: 52,
    category: 'DSA',
    title: 'Amazon-Style Problems',
    description: 'Amazon loves BFS/DFS, optimization, and problems that map to real scenarios.',
    tasks: [
      { type: 'problem', name: 'Reorder Data in Log Files', difficulty: 'Medium', link: 'https://leetcode.com/problems/reorder-data-in-log-files/', company: 'Amazon' },
      { type: 'problem', name: 'Minimum Difficulty of a Job Schedule', difficulty: 'Hard', link: 'https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/', company: 'Amazon' },
      { type: 'problem', name: 'Word Ladder II', difficulty: 'Hard', link: 'https://leetcode.com/problems/word-ladder-ii/', company: 'Amazon, Microsoft' },
      { type: 'concept', name: 'Study: Amazon Leadership Principles for behavioral rounds. Prepare 2 STAR stories per principle. Focus on: Customer Obsession, Ownership, Dive Deep, Deliver Results, Invent and Simplify.' },
    ],
  },
  // Day 53 — Thu May 28
  {
    day: 53,
    category: 'MIXED',
    title: 'Meta-Style Problems + Maps Design',
    description: 'Meta coding problems + design Google Maps.',
    tasks: [
      { type: 'problem', name: 'Vertical Order Traversal of Binary Tree', difficulty: 'Hard', link: 'https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/', company: 'Meta' },
      { type: 'problem', name: 'Making A Large Island', difficulty: 'Hard', link: 'https://leetcode.com/problems/making-a-large-island/', company: 'Meta, Google' },
      { type: 'concept', name: 'HLD — Design Google Maps:\n\n1. ROUTING: Road network = weighted directed graph (billions of edges).\n• Dijkstra too slow for continent-scale. Solution: Contraction Hierarchies.\n• Preprocess: Create "shortcut" edges between important nodes. Query: Bidirectional search on simplified graph. <100ms for any route.\n\n2. MAP TILES: Slippy map. Zoom levels 0-20. Each zoom = 4x tiles of previous. Pre-rendered raster tiles or on-the-fly vector tiles.\n\n3. REAL-TIME TRAFFIC: Aggregate GPS data from millions of phones. Compute speed per road segment. Color overlay: green/yellow/red. Update every 1-2 minutes.\n\n4. ETA: Base ETA from graph distance/speed + ML adjustment (time of day, events, weather, historical patterns).\n\n5. SPATIAL INDEXING: GeoHash for point lookups ("restaurants near me"). R-tree for polygon queries. H3 (Uber\'s hex grid) for analytics.' },
    ],
  },
  // Day 54 — Fri May 29
  {
    day: 54,
    category: 'LLD',
    title: 'LLD — Chess Game + Library System',
    description: 'Two LLD designs. Chess tests complex state management. Library tests clean class hierarchies.',
    tasks: [
      { type: 'concept', name: 'LLD — Design Chess:\n\nCLASSES:\n• Game: board, players[2], currentTurn, status (ACTIVE, CHECK, CHECKMATE, STALEMATE)\n• Board: 8x8 grid of Cell objects\n• Cell: piece (nullable), position\n• Piece (abstract): color, position → King, Queen, Rook, Bishop, Knight, Pawn\n  - Each overrides getValidMoves(board) → list of valid positions\n• Player: color, pieces[], isInCheck\n• Move: piece, fromCell, toCell, capturedPiece, isPromotion\n\nKEY LOGIC:\n• Move validation: piece.getValidMoves() + check if move leaves own king in check\n• Check detection: after each move, see if any opponent piece can capture king\n• Checkmate: king is in check AND no legal move removes the check\n• Special moves: Castling (king + rook), En passant (pawn), Pawn promotion' },
      { type: 'concept', name: 'LLD — Design Library Management:\n\nCLASSES:\n• Library: books[], members[], librarians[]\n• Book: isbn, title, author, subject. BookItem: book, barcode, status, rackLocation\n• Member: Person + borrowedBooks[], fine. Can borrow/return/reserve.\n• Librarian: Person + can add/remove books, block members\n• BookLending: bookItem, member, lendDate, dueDate, returnDate\n• BookReservation: bookItem, member, reserveDate, status\n• Fine: amount, member, bookLending, paid\n\nSTATE PATTERN for BookItem: AVAILABLE → RESERVED → LOANED → LOST\nOBSERVER: When book returned, notify users who reserved it.' },
    ],
  },
  // Day 55 — Sat May 30 (WEEKEND)
  {
    day: 55,
    category: 'MIXED',
    title: '🔋 Weekend — Message Queue Design + Hard DSA',
    description: 'Weekend stretch! Design Kafka + tackle hard problems.',
    tasks: [
      { type: 'problem', name: 'IPO', difficulty: 'Hard', link: 'https://leetcode.com/problems/ipo/', company: 'Amazon' },
      { type: 'problem', name: 'Minimum Window Subsequence', difficulty: 'Hard', link: 'https://leetcode.com/problems/minimum-window-subsequence/', company: 'Google' },
      { type: 'concept', name: 'HLD — Design a Message Queue (Kafka):\n\n1. CONCEPTS:\n• Topic: Named stream of messages (e.g., "user-signups", "order-events")\n• Partition: Topic split into N partitions for parallelism. Messages within partition are ordered.\n• Producer: Writes messages. Chooses partition by key hash (same key → same partition → ordering guarantee).\n• Consumer Group: Set of consumers that divide partitions among themselves. Each partition consumed by exactly one consumer in the group.\n• Offset: Position in partition. Consumers track their offset. Can replay from any offset.\n\n2. WHY IT\'S FAST:\n• Sequential disk I/O (append-only log) — faster than random reads\n• Zero-copy: OS sends file data directly to network socket without copying to app memory\n• Batching: Producers batch messages, compress, send together. 10x throughput vs individual sends.\n\n3. DELIVERY SEMANTICS:\n• At-most-once: Fire and forget. Consumer commits offset before processing. May lose messages.\n• At-least-once: Process then commit. If crash after process but before commit → reprocess. Most common.\n• Exactly-once: Idempotent producer + transactional consumer. Hardest. Kafka supports via transactions.\n\n4. REPLICATION: Each partition has 1 leader + N-1 followers. Writes go to leader, replicated to followers. If leader dies → follower promoted.\n\n5. USE CASES: Event sourcing, log aggregation, stream processing, activity tracking, microservice communication.' },
    ],
  },
  // Day 56 — Sun May 31 (WEEKEND)
  {
    day: 56,
    category: 'MOCK',
    title: '🎯 Full Mock — Google Style',
    description: 'Simulate Google\'s interview loop: 2 coding + 1 system design + 1 behavioral.',
    tasks: [
      { type: 'problem', name: 'Mock Coding 1 (45 min): Medium + follow-up that makes it Hard', difficulty: 'Hard', link: 'https://leetcode.com/problems/design-hit-counter/', company: 'Google' },
      { type: 'problem', name: 'Mock Coding 2 (45 min): Random Hard', difficulty: 'Hard', link: 'https://leetcode.com/problems/alien-dictionary/', company: 'Google' },
      { type: 'concept', name: 'Mock System Design (60 min): Design a globally distributed database (like Spanner). Cover: strong consistency across data centers, TrueTime, Paxos/Raft consensus.' },
      { type: 'concept', name: 'Mock Behavioral (30 min): Practice STAR answers. "Tell me about a time you had to make a difficult technical decision." "Describe a project you\'re most proud of."' },
    ],
  },

  // ==================== WEEKS 10-12: More Design + Company Prep (Days 57-77) ====================

  // Day 57 — Mon Jun 1
  {
    day: 57,
    category: 'DSA',
    title: 'Speed Drill — Blind 75 Gaps',
    description: 'Go through the Blind 75 list. Solve any gaps. Target: 20 min per Medium.',
    tasks: [
      { type: 'problem', name: 'Longest Repeating Character Replacement', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-repeating-character-replacement/', company: 'Google' },
      { type: 'problem', name: 'Minimum Window Substring (redo, target: 20 min)', difficulty: 'Hard', link: 'https://leetcode.com/problems/minimum-window-substring/', company: 'Google, Meta' },
      { type: 'problem', name: 'Pacific Atlantic Water Flow (redo, target: 20 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/pacific-atlantic-water-flow/', company: 'Google' },
      { type: 'problem', name: 'Serialize and Deserialize Binary Tree (redo)', difficulty: 'Hard', link: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/', company: 'Google, Amazon' },
      { type: 'concept', name: 'Audit your Blind 75 coverage. List any unsolved problems. Prioritize by frequency at your target companies.' },
    ],
  },
  // Day 58 — Tue Jun 2
  {
    day: 58,
    category: 'MIXED',
    title: 'DSA Practice + Ticket Booking Design',
    description: 'More DSA + design Ticketmaster (high contention, flash sales).',
    tasks: [
      { type: 'problem', name: 'Design In-Memory File System', difficulty: 'Hard', link: 'https://leetcode.com/problems/design-in-memory-file-system/', company: 'Microsoft' },
      { type: 'problem', name: 'Optimal Account Balancing', difficulty: 'Hard', link: 'https://leetcode.com/problems/optimal-account-balancing/', company: 'Uber, Google' },
      { type: 'concept', name: 'HLD — Design Ticketmaster:\n\n1. FLASH SALE PROBLEM: 10M users, 50K seats. All hit "buy" at 10:00 AM.\n\n2. VIRTUAL WAITING ROOM: When traffic spikes → queue users with random position. Gradually let users through. Shows estimated wait time. Prevents server overload.\n\n3. SEAT SELECTION + LOCKING:\n• User selects seats → temporary lock (5 min TTL in Redis)\n• Lock = Redis SET seat:123 userId EX 300 NX (atomic: set only if not exists, expire in 5 min)\n• If payment completes → confirm booking in DB. If timeout → lock auto-expires, seat available again.\n\n4. PREVENT OVERSELLING: Redis atomic DECR for inventory count. If < 0 → sold out, return error.\n\n5. ARCHITECTURE: CDN for static pages → API Gateway (rate limit) → Waiting Room Service → Booking Service → Payment Service. Kafka for event streaming.' },
    ],
  },
  // Day 59 — Wed Jun 3
  {
    day: 59,
    category: 'LLD',
    title: 'LLD — Movie Booking + Vending Machine',
    description: 'Two state-machine heavy LLD designs.',
    tasks: [
      { type: 'concept', name: 'LLD — Design BookMyShow:\n\nCLASSES: Movie, Cinema, Screen, Show (movie + screen + time), Seat, Booking, Payment, User\n\nSEAT STATES: AVAILABLE → TEMPORARILY_HELD → BOOKED (or back to AVAILABLE on timeout)\n\nBOOKING FLOW:\n1. User selects seats → API: POST /hold {showId, seatIds}\n2. Server atomically checks seats available → locks in Redis with 5 min TTL → returns holdId\n3. User enters payment → API: POST /confirm {holdId, paymentInfo}\n4. Payment success → update DB (seat status = BOOKED) → release Redis lock → send confirmation\n5. Payment fails / timeout → Redis lock auto-expires → seats become available\n\nCONCURRENCY: Optimistic locking on seat status in DB. Redis SET NX for distributed lock.\nPRICING: Strategy pattern — WeekdayPricing, WeekendPricing, HolidayPricing, PremiumSeatPricing.' },
      { type: 'concept', name: 'LLD — Design Vending Machine:\n\nSTATES (State pattern): IDLE → HAS_MONEY → DISPENSING → OUT_OF_STOCK\n\nEach state handles events differently:\n• IDLE: insertCoin() → transition to HAS_MONEY. selectProduct() → show "insert coin first"\n• HAS_MONEY: insertCoin() → add to balance. selectProduct() → check price ≤ balance → DISPENSING\n• DISPENSING: dispense product, calculate change (greedy: largest coins first), → IDLE\n\nCLASSES: VendingMachine, State (interface), IdleState, HasMoneyState, DispensingState, Product, Inventory, Coin\n\nOpen-Closed Principle: New states (e.g., MAINTENANCE) can be added without modifying existing state classes.' },
    ],
  },
  // Day 60 — Thu Jun 4
  {
    day: 60,
    category: 'DSA',
    title: 'Hard DP + Graph Mix',
    description: 'Mixed hard problems to simulate unpredictable interview conditions.',
    tasks: [
      { type: 'problem', name: 'Race Car', difficulty: 'Hard', link: 'https://leetcode.com/problems/race-car/', company: 'Google' },
      { type: 'problem', name: 'Minimum Cost to Hire K Workers', difficulty: 'Hard', link: 'https://leetcode.com/problems/minimum-cost-to-hire-k-workers/', company: 'Google' },
      { type: 'problem', name: 'Buildings With an Ocean View', difficulty: 'Medium', link: 'https://leetcode.com/problems/buildings-with-an-ocean-view/', company: 'Meta' },
      { type: 'concept', name: 'Study: BFS on state space (Race Car). Greedy + heap combination. Monotonic stack for "view" problems.' },
    ],
  },
  // Day 61 — Fri Jun 5
  {
    day: 61,
    category: 'MIXED',
    title: 'DSA + Key-Value Store Design',
    description: 'DSA practice + design DynamoDB/distributed KV store — tests deep distributed systems knowledge.',
    tasks: [
      { type: 'problem', name: 'Minimum Interval to Include Each Query', difficulty: 'Hard', link: 'https://leetcode.com/problems/minimum-interval-to-include-each-query/', company: 'Google' },
      { type: 'problem', name: 'Binary Tree Cameras', difficulty: 'Hard', link: 'https://leetcode.com/problems/binary-tree-cameras/', company: 'Google, Amazon' },
      { type: 'concept', name: 'HLD — Design a Key-Value Store (DynamoDB):\n\n1. PARTITIONING: Consistent hashing ring. Each node responsible for a range of keys. Virtual nodes for even distribution.\n\n2. REPLICATION: N replicas per key (typically N=3). Write to primary, replicate to N-1 followers.\n\n3. CONSISTENCY TUNING (Quorum):\n• W=1, R=1: Fastest, weakest. May read stale data.\n• W=majority, R=majority: Strong consistency (R+W > N ensures overlap).\n• W=N, R=1: All replicas must acknowledge write. Slow writes, fast consistent reads.\n\n4. CONFLICT RESOLUTION:\n• Last-Write-Wins (LWW): Timestamp-based. Simple but can lose data.\n• Vector Clocks: Track causal order. Detect conflicts, let application resolve.\n\n5. STORAGE ENGINE:\n• LSM Tree (Log-Structured Merge): Write to memtable (in-memory) → flush to SSTable (sorted disk file) → periodic compaction (merge SSTables)\n• Optimized for writes. Reads: check memtable → bloom filter → SSTables.\n\n6. FAILURE DETECTION: Gossip protocol — each node periodically pings random nodes, shares knowledge of alive/dead nodes. Eventually consistent view.' },
    ],
  },
  // Day 62 — Sat Jun 6 (WEEKEND)
  {
    day: 62,
    category: 'MIXED',
    title: '🔋 Weekend — E-commerce Platform + Autocomplete Design',
    description: 'Weekend stretch! Two major system designs.',
    tasks: [
      { type: 'problem', name: 'Design Search Autocomplete System', difficulty: 'Hard', link: 'https://leetcode.com/problems/design-search-autocomplete-system/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Sudoku Solver', difficulty: 'Hard', link: 'https://leetcode.com/problems/sudoku-solver/', company: 'Google, Amazon' },
      { type: 'concept', name: 'HLD — Design Search Autocomplete:\n\n1. DATA STRUCTURE: Trie where each node stores top-K most searched queries passing through it.\n\n2. DATA PIPELINE:\n• Search logs → Kafka → Aggregator (count queries per time window) → Trie Builder → Trie Servers\n• Trie rebuilt periodically (every 15 min) from aggregated data. Not real-time.\n\n3. QUERY FLOW: User types "ap" → request to Trie Server → traverse to node "ap" → return pre-computed top 10 suggestions.\n\n4. CACHING: Browser caches suggestions for recent prefixes (localStorage). CDN caches popular prefixes. Application cache for all 1-2 char prefixes.\n\n5. PERSONALIZATION: Blend global popular queries (70%) with user\'s recent searches (30%).\n\n6. FILTERING: Remove offensive/illegal suggestions. Trending topics can be injected.' },
      { type: 'concept', name: 'HLD — Design Amazon E-commerce (Overview):\n\nMICROSERVICES:\n• Product Catalog: Elasticsearch for search, PostgreSQL for structured data\n• User Service: Auth, profiles, addresses\n• Cart Service: Redis (fast, ephemeral) — cart is temporary state\n• Order Service: PostgreSQL (transactions, ACID). Event-sourced order lifecycle.\n• Inventory: Redis for real-time counts + DB for source of truth. DECR atomic operation.\n• Payment: Separate service, idempotent, Saga pattern for distributed transactions.\n• Notification: Async via Kafka — order confirmation, shipping updates.\n\nEVENT-DRIVEN: Order placed → event → triggers: inventory decrement, payment capture, notification send, analytics update. Each service independent.' },
    ],
  },
  // Day 63 — Sun Jun 7 (WEEKEND)
  {
    day: 63,
    category: 'MOCK',
    title: '🎯 Full Mock — Amazon Style',
    description: 'Amazon loop: OA-style coding + system design + LLD + behavioral (Leadership Principles).',
    tasks: [
      { type: 'problem', name: 'Mock OA (60 min): Solve 2 mediums back to back', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-palindromic-substring/', company: 'Amazon' },
      { type: 'concept', name: 'Mock System Design (60 min): Design Amazon\'s product review system — write reviews, aggregate ratings, detect fake reviews, helpful votes.' },
      { type: 'concept', name: 'Mock LLD (45 min): Design a task scheduler with priorities, dependencies between tasks, and deadlines. Code the core classes.' },
      { type: 'concept', name: 'Mock Behavioral (45 min): Prepare LP stories. Practice: "Tell me about a time you delivered something under a tight deadline" (Deliver Results). "Tell me about a time you went deep to solve a problem" (Dive Deep).' },
    ],
  },
  // Day 64 — Mon Jun 8
  {
    day: 64,
    category: 'DSA',
    title: 'Microsoft & Uber Style Problems',
    description: 'Microsoft loves clean implementations. Uber loves geo/optimization problems.',
    tasks: [
      { type: 'problem', name: 'Longest ZigZag Path in a Binary Tree', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/', company: 'Google' },
      { type: 'problem', name: 'Minimum Height Trees', difficulty: 'Medium', link: 'https://leetcode.com/problems/minimum-height-trees/', company: 'Google' },
      { type: 'problem', name: 'Number of 1 Bits', difficulty: 'Easy', link: 'https://leetcode.com/problems/number-of-1-bits/', company: 'Microsoft' },
      { type: 'problem', name: 'Reverse Bits', difficulty: 'Easy', link: 'https://leetcode.com/problems/reverse-bits/', company: 'Amazon' },
      { type: 'concept', name: 'Study: Tree problems from leaf perspective (Minimum Height Trees). Bit manipulation review.' },
    ],
  },
  // Day 65 — Tue Jun 9
  {
    day: 65,
    category: 'MIXED',
    title: 'DSA + Monitoring System Design',
    description: 'DSA practice + design Datadog/Prometheus metrics system.',
    tasks: [
      { type: 'problem', name: 'Contiguous Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/contiguous-array/', company: 'Amazon' },
      { type: 'problem', name: 'First Unique Character in a String', difficulty: 'Easy', link: 'https://leetcode.com/problems/first-unique-character-in-a-string/', company: 'Amazon, Microsoft' },
      { type: 'problem', name: 'Delete Node in a BST', difficulty: 'Medium', link: 'https://leetcode.com/problems/delete-node-in-a-bst/', company: 'Amazon, Microsoft' },
      { type: 'concept', name: 'HLD — Design a Metrics/Monitoring System:\n\n1. DATA MODEL: Metric = name + labels + timestamp + value. E.g., http_requests_total{method="GET", status="200"} = 42 at T=1234567890.\n\n2. COLLECTION:\n• Pull model (Prometheus): Monitoring server scrapes /metrics endpoint from each service every 15s.\n• Push model (StatsD/Datadog): Services push metrics to collector agent. Better for short-lived jobs.\n\n3. STORAGE: Time-series database optimized for:\n• High write throughput (millions of data points/sec)\n• Time-range queries (last 1h, last 24h)\n• Downsampling: Keep 1-sec granularity for 24h, 1-min for 30d, 1-hour for 1y.\n• Compression: Delta-of-delta for timestamps, XOR for values (Gorilla paper).\n\n4. ALERTING: Rules engine evaluates conditions every N seconds. "If error_rate > 5% for 5 minutes → page on-call." Alert routing (PagerDuty), deduplication, silencing.\n\n5. DASHBOARDS: Pre-computed aggregations for common queries. Grafana-style visualization.' },
    ],
  },
  // Day 66 — Wed Jun 10
  {
    day: 66,
    category: 'LLD',
    title: 'LLD — Online Bookstore + Snake & Ladder',
    description: 'E-commerce LLD + board game state management.',
    tasks: [
      { type: 'concept', name: 'LLD — Design Online Bookstore:\n\nCLASSES: Product, Catalog (search, filter, sort), Cart, CartItem, Order, Payment, Customer, Address, Shipment, Inventory\n\nKEY FLOWS:\n• Add to Cart: Check inventory → create CartItem → update cart total\n• Checkout: Validate cart → create Order (PENDING) → reserve inventory → process payment → Order (CONFIRMED) → trigger shipping\n• Inventory: Optimistic locking — read version, update if version unchanged. Prevents overselling.\n\nPATTERNS:\n• Strategy: ShippingCostCalculator (StandardShipping, ExpressShipping, FreeShippingOver50)\n• Observer: Order status change → notify customer, update inventory, trigger shipping\n• State: Order lifecycle (PENDING → CONFIRMED → SHIPPED → DELIVERED → RETURNED)' },
      { type: 'concept', name: 'LLD — Design Snake & Ladder:\n\nCLASSES:\n• Game: board, players[], currentPlayerIndex, status\n• Board: size, snakes[], ladders[], cells[]\n• Snake: head (higher), tail (lower). Ladder: bottom (lower), top (higher).\n• Player: name, position, piece\n• Dice: roll() → random 1-6\n\nGAME LOOP:\n1. Current player rolls dice\n2. Calculate new position = current + diceValue\n3. If new position > 100 → stay (some variants) or bounce back\n4. Check for snake/ladder at new position → apply transition\n5. Check win condition (position == 100)\n6. Next player\'s turn\n\nEXTENSIONS (Open-Closed): Multiple dice, special cells (skip turn, extra roll), power-ups. Each as a CellEffect strategy.' },
    ],
  },
  // Day 67 — Thu Jun 11
  {
    day: 67,
    category: 'DSA',
    title: 'Miscellaneous Hard Problems',
    description: 'Mixed hard problems. Unpredictable — just like real interviews.',
    tasks: [
      { type: 'problem', name: 'Trapping Rain Water (redo, target: 15 min)', difficulty: 'Hard', link: 'https://leetcode.com/problems/trapping-rain-water/', company: 'Google, Amazon, Meta' },
      { type: 'problem', name: 'Largest Rectangle in Histogram (redo, target: 20 min)', difficulty: 'Hard', link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/', company: 'Google, Amazon' },
      { type: 'problem', name: 'LRU Cache (redo, target: 15 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/lru-cache/', company: 'All FAANG' },
      { type: 'concept', name: 'These 3 problems are the most commonly asked hard/medium problems at FAANG. You MUST be able to code them quickly and correctly.' },
    ],
  },
  // Day 68 — Fri Jun 12
  {
    day: 68,
    category: 'MIXED',
    title: 'DSA + Distributed File System Design',
    description: 'DSA practice + design GFS/HDFS — core infrastructure.',
    tasks: [
      { type: 'problem', name: 'Range Sum Query - Mutable', difficulty: 'Medium', link: 'https://leetcode.com/problems/range-sum-query-mutable/', company: 'Google' },
      { type: 'problem', name: 'Serialize and Deserialize BST', difficulty: 'Medium', link: 'https://leetcode.com/problems/serialize-and-deserialize-bst/', company: 'Amazon' },
      { type: 'concept', name: 'HLD — Design Distributed File System (GFS/HDFS):\n\n1. ARCHITECTURE:\n• Master (NameNode): Stores all metadata — file→chunk mapping, chunk→server mapping. Single point of coordination.\n• Chunk Servers (DataNodes): Store actual data chunks. Each chunk = 64MB (large to reduce metadata). Replicated 3x.\n• Client Library: Contacts master for metadata, reads/writes directly to chunk servers.\n\n2. WRITE FLOW: Client → Master "I want to write file X" → Master assigns chunks, returns chunk server locations → Client writes to primary chunk server → Primary replicates to 2 secondaries → All 3 ACK → Write confirmed.\n\n3. READ FLOW: Client → Master "Where is file X?" → Master returns chunk locations → Client reads from nearest chunk server.\n\n4. FAULT TOLERANCE:\n• Chunk server failure: Master detects via heartbeat timeout → re-replicates under-replicated chunks to other servers.\n• Master failure: Standby master with replicated operation log. Automatic failover.\n\n5. CONSISTENCY: Append-only for simplicity (GFS designed for MapReduce). "Record append" is atomic — append at least once.' },
    ],
  },
  // Day 69 — Sat Jun 13 (WEEKEND)
  {
    day: 69,
    category: 'MIXED',
    title: '🔋 Weekend — Spotify + CDN Design + DSA',
    description: 'Weekend stretch! Music streaming + CDN architecture.',
    tasks: [
      { type: 'problem', name: 'Design Twitter (redo, target: 25 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/design-twitter/', company: 'Amazon' },
      { type: 'problem', name: 'Maximum Frequency Stack', difficulty: 'Hard', link: 'https://leetcode.com/problems/maximum-frequency-stack/', company: 'Amazon' },
      { type: 'concept', name: 'HLD — Design Spotify:\n\n1. AUDIO STREAMING: Adaptive bitrate. Songs chunked (10-sec segments). Client buffers ahead. Quality: 96kbps (low) to 320kbps (premium). Format: OGG Vorbis (Spotify) or AAC.\n\n2. MUSIC CATALOG: PostgreSQL for structured metadata (songs, albums, artists, playlists). Elasticsearch for search.\n\n3. RECOMMENDATION: Collaborative filtering (users with similar taste), content-based (audio features: tempo, energy, danceability), NLP on playlists/reviews. "Discover Weekly" = collaborative filtering.\n\n4. OFFLINE SYNC: Premium users can download. Encrypted files stored locally. Periodic license check (every 30 days).\n\n5. GROUP SESSION: WebSocket room. One controller, others follow. Sync playback position with clock offset correction.' },
      { type: 'concept', name: 'HLD — Design a CDN:\n\n1. ARCHITECTURE: Origin Server → Regional Edge (L2) → Edge PoP (L1). Request flows: L1 hit → serve. L1 miss → L2. L2 miss → Origin.\n\n2. DNS ROUTING: User\'s DNS resolver → CDN\'s authoritative DNS → returns IP of nearest edge based on: GeoDNS (location), latency measurements, server load.\n\n3. CACHING: Cache-Control headers (max-age, s-maxage, no-cache, no-store). Vary header for content negotiation. Stale-while-revalidate for performance.\n\n4. INVALIDATION: Purge API (delete specific URL from all edges). TTL expiry. Versioned URLs (/v2/style.css) — best practice, instant "invalidation" without purge.\n\n5. SECURITY: DDoS protection at edge. WAF (Web Application Firewall). TLS termination at edge (reduce latency vs origin TLS).' },
    ],
  },
  // Day 70 — Sun Jun 14 (WEEKEND)
  {
    day: 70,
    category: 'MOCK',
    title: '🎯 Full Mock — Netflix/Uber Style',
    description: 'Netflix and Uber focus heavily on system design and distributed systems.',
    tasks: [
      { type: 'problem', name: 'Mock Coding (45 min): Hard graph/DP problem', difficulty: 'Hard', link: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/', company: 'Uber' },
      { type: 'concept', name: 'Mock System Design (60 min): Design Netflix\'s video recommendation engine. Cover data pipeline, ML model serving, A/B testing framework.' },
      { type: 'concept', name: 'Mock System Design (60 min): Design Uber\'s surge pricing — real-time supply/demand calculation, dynamic multiplier, geographic zones.' },
      { type: 'concept', name: 'Research: Netflix Culture Deck — freedom and responsibility. Uber\'s engineering values. Prepare stories aligning with these cultures.' },
    ],
  },

  // ==================== WEEKS 12-13: LLD Mastery + Polish (Days 71-77) ====================

  // Day 71-77 (condensed — these follow the same pattern)
  // Day 71 — Mon Jun 15
  {
    day: 71,
    category: 'DSA',
    title: 'Speed Drill — Mediums in 20 Minutes',
    description: 'Pure speed practice. If you can\'t solve a Medium in 20 min, the pattern needs more work.',
    tasks: [
      { type: 'problem', name: 'Clone Graph (target: 15 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/clone-graph/', company: 'Google, Meta' },
      { type: 'problem', name: 'Course Schedule II (target: 15 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/course-schedule-ii/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Word Break (target: 15 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/word-break/', company: 'Google, Amazon, Meta' },
      { type: 'problem', name: 'Coin Change (target: 10 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/coin-change/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Merge Intervals (target: 10 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/merge-intervals/', company: 'All FAANG' },
      { type: 'concept', name: 'Track your times! Any problem taking >20 min → add to weak areas list.' },
    ],
  },
  // Day 72 — Tue Jun 16
  {
    day: 72,
    category: 'MIXED',
    title: 'LLD Code Practice + Unique ID Generator Design',
    description: 'Implement LLD patterns in actual code + design Snowflake ID generation.',
    tasks: [
      { type: 'concept', name: 'LLD Code: Implement LRU Cache with TTL support. HashMap + Doubly Linked List + lazy expiration. Make it thread-safe.' },
      { type: 'concept', name: 'LLD Code: Implement Token Bucket Rate Limiter. Configurable capacity and refill rate. Thread-safe with proper synchronization.' },
      { type: 'concept', name: 'HLD — Design Unique ID Generator (Snowflake):\n\n1. REQUIREMENTS: Globally unique, roughly time-sorted, 64-bit integer, >10K IDs/sec per machine.\n\n2. APPROACHES COMPARED:\n• UUID: 128-bit, truly random. Not sortable. Poor index performance (random inserts).\n• DB auto-increment: Simple but single point of failure. Doesn\'t scale.\n• Snowflake ID: 64-bit = [1 unused | 41 timestamp | 10 machine ID | 12 sequence]\n  - Timestamp: milliseconds since custom epoch. 41 bits = ~69 years.\n  - Machine ID: 10 bits = 1024 machines max. Assigned via ZooKeeper.\n  - Sequence: 12 bits = 4096 IDs per millisecond per machine.\n\n3. CLOCK DRIFT: If system clock goes backwards (NTP correction) → wait until clock catches up or throw error. Never generate ID with past timestamp.\n\n4. TOTAL: 4096 × 1000 ms × 1024 machines = ~4 billion IDs/second globally.' },
    ],
  },
  // Day 73 — Wed Jun 17
  {
    day: 73,
    category: 'DSA',
    title: 'Pattern Review — Two Pointers, Sliding Window, Binary Search',
    description: 'Revisit the foundational patterns with harder variations.',
    tasks: [
      { type: 'problem', name: '4Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/4sum/', company: 'Amazon' },
      { type: 'problem', name: 'Longest Substring with At Most K Distinct Characters', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Capacity To Ship Packages Within D Days', difficulty: 'Medium', link: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/', company: 'Amazon' },
      { type: 'problem', name: 'Find K Closest Elements', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-k-closest-elements/', company: 'Amazon, Meta' },
      { type: 'concept', name: 'These are harder variations of Week 1-2 patterns. If they feel easy now, you\'ve made great progress!' },
    ],
  },
  // Day 74 — Thu Jun 18
  {
    day: 74,
    category: 'MIXED',
    title: 'LLD — Logging Framework + Task Scheduler Design',
    description: 'Design a logging framework (API design skills) + distributed task scheduler.',
    tasks: [
      { type: 'concept', name: 'LLD — Design Logging Framework (Log4j):\n\nCLASSES:\n• Logger: name, level, appenders[]. Methods: debug(), info(), warn(), error()\n• LogLevel: DEBUG < INFO < WARN < ERROR. Only log if message level >= logger level.\n• Appender (Strategy): ConsoleAppender, FileAppender, NetworkAppender. Each has write(message).\n• Formatter (Strategy): SimpleFormatter, JSONFormatter, PatternFormatter.\n• LoggerFactory (Singleton): Caches loggers by name. getLogger("com.app.UserService").\n\nTHREAD SAFETY: Async logging — log calls add to lock-free queue, background thread flushes to appenders. FileAppender uses buffered writer with periodic flush.\n\nCHAIN OF RESPONSIBILITY: Logger hierarchy — com.app.UserService inherits config from com.app if not explicitly configured.' },
      { type: 'concept', name: 'HLD — Design Distributed Task Scheduler:\n\n1. REQUIREMENTS: Schedule one-time + recurring tasks. At-least-once execution. Priorities. 100K tasks/sec.\n\n2. ARCHITECTURE: Task API → Task DB (persist schedule) → Scheduler (picks due tasks) → Task Queue (Kafka) → Worker Pool (execute tasks) → Result Store.\n\n3. SCHEDULING: Time wheel data structure — circular buffer of slots, each slot = tasks due at that time. O(1) for add/trigger. Used by Kafka, Netty.\n\n4. EXACTLY-ONCE CHALLENGE: Worker crashes mid-task? → Task timeout + retry. Idempotent tasks preferred. Distributed lock (Redis) for exclusive execution.\n\n5. RECURRING: Store cron expression. After execution, calculate next run time, re-insert into scheduler.' },
    ],
  },
  // Day 75 — Fri Jun 19
  {
    day: 75,
    category: 'DSA',
    title: 'Hard Problem Marathon',
    description: 'Solve 3 Hards. Build endurance for back-to-back hard problems in real interviews.',
    tasks: [
      { type: 'problem', name: 'Word Search II', difficulty: 'Hard', link: 'https://leetcode.com/problems/word-search-ii/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Sliding Window Maximum', difficulty: 'Hard', link: 'https://leetcode.com/problems/sliding-window-maximum/', company: 'Google, Amazon, Uber' },
      { type: 'problem', name: 'Edit Distance', difficulty: 'Medium', link: 'https://leetcode.com/problems/edit-distance/', company: 'Google, Amazon' },
      { type: 'concept', name: 'Target: Solve each in 30 min. Word Search II = Trie + Backtracking. Sliding Window Max = Monotonic Deque. Edit Distance = 2D DP.' },
    ],
  },
  // Day 76 — Sat Jun 20 (WEEKEND)
  {
    day: 76,
    category: 'MIXED',
    title: '🔋 Weekend — System Design Rapid Fire',
    description: 'Weekend stretch! Practice explaining designs quickly. In interviews, clarity > exhaustiveness.',
    tasks: [
      { type: 'problem', name: 'Design Circular Deque', difficulty: 'Medium', link: 'https://leetcode.com/problems/design-circular-deque/', company: 'Amazon' },
      { type: 'concept', name: '15-min design: URL Shortener — focus on encoding choice and scaling.' },
      { type: 'concept', name: '15-min design: Rate Limiter — focus on algorithm choice and distributed implementation.' },
      { type: 'concept', name: '15-min design: Chat System — focus on WebSocket management and message ordering.' },
      { type: 'concept', name: '15-min design: Notification System — focus on reliability and multi-channel abstraction.' },
      { type: 'concept', name: '15-min design: News Feed — focus on fan-out strategy (push vs pull vs hybrid).' },
      { type: 'concept', name: 'System Design Interview Framework (memorize this):\n1. Requirements (5 min): Functional + non-functional. Clarify scope.\n2. Estimation (3 min): QPS, storage, bandwidth. Back-of-envelope.\n3. API Design (3 min): Key endpoints, request/response.\n4. Data Model (5 min): Tables, relationships, DB choice.\n5. High-Level Design (10 min): Draw architecture. Data flow.\n6. Deep Dives (15 min): Interviewer picks areas. Show depth.\n7. Wrap-up (2 min): Bottlenecks, monitoring, future improvements.' },
    ],
  },
  // Day 77 — Sun Jun 21 (WEEKEND)
  {
    day: 77,
    category: 'MOCK',
    title: '🎯 Full Mock — OpenAI/Startup Style',
    description: 'Startups value depth, creativity, and practical skills. OpenAI tests ML system design.',
    tasks: [
      { type: 'problem', name: 'Mock Coding (60 min): Implement a simplified system', difficulty: 'Hard', link: 'https://leetcode.com/problems/design-search-autocomplete-system/', company: 'OpenAI' },
      { type: 'concept', name: 'Mock System Design (60 min): Design a collaborative code editor (Replit). Cover: OT/CRDT, code execution sandboxing, multiplayer cursors, terminal sharing.' },
      { type: 'concept', name: 'Mock Deep Technical (45 min): How would you design a training data pipeline for an LLM? Data collection, cleaning, dedup, quality filtering, tokenization, safety filtering.' },
      { type: 'concept', name: 'Study: OpenAI/startup culture — technical depth, safety mindset, iteration speed, ownership. Prepare stories showing these qualities.' },
    ],
  },

  // ==================== FINAL STRETCH: Interview Mode (Days 78-100) ====================

  // Days 78-100: Pure interview simulation. Every day has DSA + review.

  // Day 78 — Mon Jun 22
  {
    day: 78,
    category: 'DSA',
    title: 'Warm-Up Problems — Stay Sharp',
    description: 'Keep solving. DSA muscle atrophies fast. 3-4 problems per day from now on.',
    tasks: [
      { type: 'problem', name: 'Minimum Remove to Make Valid Parentheses', difficulty: 'Medium', link: 'https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/', company: 'Meta' },
      { type: 'problem', name: 'Next Permutation', difficulty: 'Medium', link: 'https://leetcode.com/problems/next-permutation/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Subsets II', difficulty: 'Medium', link: 'https://leetcode.com/problems/subsets-ii/', company: 'Amazon' },
      { type: 'problem', name: 'Combination Sum II', difficulty: 'Medium', link: 'https://leetcode.com/problems/combination-sum-ii/', company: 'Amazon' },
    ],
  },
  // Day 79 — Tue Jun 23
  {
    day: 79,
    category: 'DSA',
    title: 'Graph & Tree Review',
    description: 'Revisit graph and tree patterns under time pressure.',
    tasks: [
      { type: 'problem', name: 'Number of Islands (redo, target: 10 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/number-of-islands/', company: 'Google, Amazon, Meta' },
      { type: 'problem', name: 'Course Schedule (redo, target: 12 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/course-schedule/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Binary Tree Right Side View', difficulty: 'Medium', link: 'https://leetcode.com/problems/binary-tree-right-side-view/', company: 'Meta, Amazon' },
      { type: 'problem', name: 'Path Sum III', difficulty: 'Medium', link: 'https://leetcode.com/problems/path-sum-iii/', company: 'Amazon' },
    ],
  },
  // Day 80 — Wed Jun 24
  {
    day: 80,
    category: 'DSA',
    title: 'DP & Greedy Review',
    description: 'Revisit DP and greedy under time pressure.',
    tasks: [
      { type: 'problem', name: 'House Robber (redo, target: 8 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/house-robber/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Longest Increasing Subsequence (redo, target: 15 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-increasing-subsequence/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Partition Equal Subset Sum (redo, target: 15 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/partition-equal-subset-sum/', company: 'Amazon' },
      { type: 'problem', name: 'Coin Change (redo, target: 8 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/coin-change/', company: 'Google, Amazon' },
    ],
  },
  // Day 81 — Thu Jun 25
  {
    day: 81,
    category: 'MIXED',
    title: 'Weak Area Focus + Design Review',
    description: 'Identify your 3 weakest areas. Spend today fixing them.',
    tasks: [
      { type: 'concept', name: 'Review your mock interview notes. What are your top 3 weakest areas? Spend 1 hour on each.' },
      { type: 'concept', name: 'System Design review: Pick your 2 weakest designs. Redo them from scratch without notes. Time yourself.' },
      { type: 'concept', name: 'DSA: Solve 2-3 problems from your weak area. Target: solve without any hints.' },
    ],
  },
  // Day 82 — Fri Jun 26
  {
    day: 82,
    category: 'DSA',
    title: 'Mixed Hard Problems',
    description: 'Random hard problems. Simulate the unpredictability of real interviews.',
    tasks: [
      { type: 'problem', name: 'Basic Calculator', difficulty: 'Hard', link: 'https://leetcode.com/problems/basic-calculator/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Minimum Window Substring (redo, target: 15 min)', difficulty: 'Hard', link: 'https://leetcode.com/problems/minimum-window-substring/', company: 'Google, Meta' },
      { type: 'problem', name: 'Find Median from Data Stream (redo, target: 12 min)', difficulty: 'Hard', link: 'https://leetcode.com/problems/find-median-from-data-stream/', company: 'Google, Amazon' },
    ],
  },
  // Day 83 — Sat Jun 27 (WEEKEND)
  {
    day: 83,
    category: 'MOCK',
    title: '🎯 Full Mock Interview — Your Target Company',
    description: 'Do a full mock for your #1 target company. Use their specific format.',
    tasks: [
      { type: 'problem', name: 'Mock Coding 1 (45 min): Company-specific problem from LeetCode premium tag', difficulty: 'Hard', link: 'https://leetcode.com/problemset/all/', company: 'Target Company' },
      { type: 'problem', name: 'Mock Coding 2 (45 min): Another company-specific problem', difficulty: 'Hard', link: 'https://leetcode.com/problemset/all/', company: 'Target Company' },
      { type: 'concept', name: 'Mock System Design (60 min): Pick a system relevant to the company\'s product. E.g., Google → design YouTube recommendations. Amazon → design order fulfillment.' },
      { type: 'concept', name: 'Mock Behavioral (30 min): Company-specific questions. Use their values/principles framework.' },
    ],
  },
  // Day 84 — Sun Jun 28 (WEEKEND)
  {
    day: 84,
    category: 'MIXED',
    title: '🔋 Weekend — LLD Code Implementations',
    description: 'Code out LLD designs. Interviewers want to see working code, not just class diagrams.',
    tasks: [
      { type: 'concept', name: 'Code: Implement a Parking Lot system — ParkingLot, Spot, Vehicle, Ticket classes with working park/unpark flow.' },
      { type: 'concept', name: 'Code: Implement a URL Shortener — Base62 encode/decode, shorten(), resolve() methods. Repository pattern for storage.' },
      { type: 'concept', name: 'Code: Implement a Rate Limiter — Token Bucket with configurable capacity and refill rate. Unit test edge cases.' },
      { type: 'problem', name: 'LRU Cache (redo, target: 12 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/lru-cache/', company: 'All FAANG' },
    ],
  },
  // Day 85 — Mon Jun 29
  {
    day: 85,
    category: 'DSA',
    title: 'Stack & Queue Deep Review',
    description: 'Revisit stack and queue patterns. These appear deceptively often.',
    tasks: [
      { type: 'problem', name: 'Daily Temperatures (redo, target: 10 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/daily-temperatures/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Decode String (redo, target: 12 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/decode-string/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Asteroid Collision', difficulty: 'Medium', link: 'https://leetcode.com/problems/asteroid-collision/', company: 'Amazon' },
      { type: 'problem', name: 'Online Stock Span', difficulty: 'Medium', link: 'https://leetcode.com/problems/online-stock-span/', company: 'Amazon' },
    ],
  },
  // Day 86 — Tue Jun 30
  {
    day: 86,
    category: 'DSA',
    title: 'Binary Search & Two Pointers Final Review',
    description: 'Binary search variations. These are quick wins in interviews.',
    tasks: [
      { type: 'problem', name: 'Search in Rotated Sorted Array (redo, target: 10 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Koko Eating Bananas (redo, target: 12 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/koko-eating-bananas/', company: 'Google, Amazon' },
      { type: 'problem', name: '3Sum (redo, target: 12 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/3sum/', company: 'Google, Amazon, Meta' },
      { type: 'problem', name: 'Trapping Rain Water (redo, target: 12 min)', difficulty: 'Hard', link: 'https://leetcode.com/problems/trapping-rain-water/', company: 'Google, Amazon' },
    ],
  },
  // Day 87 — Wed Jul 1
  {
    day: 87,
    category: 'MIXED',
    title: 'DSA + System Design Cheat Sheet Day',
    description: 'Create your personal cheat sheets for both DSA patterns and system design building blocks.',
    tasks: [
      { type: 'problem', name: 'Combination Sum IV', difficulty: 'Medium', link: 'https://leetcode.com/problems/combination-sum-iv/', company: 'Google' },
      { type: 'problem', name: 'Target Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/target-sum/', company: 'Meta, Google' },
      { type: 'concept', name: 'Create DSA Cheat Sheet: List all 15+ patterns with 1-line description and template pseudocode. Two pointers, sliding window, binary search, BFS, DFS, topo sort, union-find, Dijkstra, DP (1D, 2D, knapsack, tree), monotonic stack, trie, backtracking, heap.' },
      { type: 'concept', name: 'Create System Design Cheat Sheet: List all building blocks with when to use each. Load balancer, cache, CDN, message queue, database (SQL/NoSQL), search (Elasticsearch), object storage, WebSocket, API gateway, consistent hashing, bloom filter.' },
    ],
  },
  // Day 88 — Thu Jul 2
  {
    day: 88,
    category: 'DSA',
    title: 'Linked List & Tree Final Review',
    description: 'Quick review of pointer-heavy problems.',
    tasks: [
      { type: 'problem', name: 'Reverse Linked List (redo, target: 5 min)', difficulty: 'Easy', link: 'https://leetcode.com/problems/reverse-linked-list/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Merge K Sorted Lists (redo, target: 15 min)', difficulty: 'Hard', link: 'https://leetcode.com/problems/merge-k-sorted-lists/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Lowest Common Ancestor (redo, target: 10 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/', company: 'Google, Meta' },
      { type: 'problem', name: 'Validate BST (redo, target: 8 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/validate-binary-search-tree/', company: 'Google, Amazon' },
    ],
  },
  // Day 89 — Fri Jul 3
  {
    day: 89,
    category: 'MIXED',
    title: 'Behavioral Prep + Light DSA',
    description: 'Behavioral rounds matter at SDE2 level. They evaluate leadership, conflict resolution, ownership.',
    tasks: [
      { type: 'problem', name: 'Valid Parentheses (warm-up, target: 3 min)', difficulty: 'Easy', link: 'https://leetcode.com/problems/valid-parentheses/', company: 'All' },
      { type: 'problem', name: 'Two Sum (warm-up, target: 3 min)', difficulty: 'Easy', link: 'https://leetcode.com/problems/two-sum/', company: 'All' },
      { type: 'concept', name: 'Behavioral Prep — Prepare 7 STAR Stories covering:\n1. Technical leadership (led a design decision, mentored someone)\n2. Conflict resolution (disagreed with teammate/manager, how you resolved it)\n3. Ambiguity (unclear requirements, how you clarified and delivered)\n4. Failure (something went wrong, what you learned)\n5. Ownership (went above and beyond, took initiative)\n6. Delivering under pressure (tight deadline, competing priorities)\n7. Customer impact (decision that improved user experience)' },
      { type: 'concept', name: 'For each story, practice: Situation (2 sentences), Task (1 sentence), Action (3-4 sentences, focus on YOUR actions), Result (quantifiable if possible). Keep each story under 2 minutes.' },
    ],
  },
  // Day 90 — Sat Jul 4 (WEEKEND)
  {
    day: 90,
    category: 'MOCK',
    title: '🎯 Full Mock — Final Dress Rehearsal #1',
    description: '10 days left! Full mock with everything timed. Record yourself.',
    tasks: [
      { type: 'problem', name: 'Mock Coding 1 (45 min): Random Hard', difficulty: 'Hard', link: 'https://leetcode.com/problemset/all/?difficulty=HARD', company: 'All' },
      { type: 'problem', name: 'Mock Coding 2 (45 min): Random Medium + follow-up', difficulty: 'Medium', link: 'https://leetcode.com/problemset/all/?difficulty=MEDIUM', company: 'All' },
      { type: 'concept', name: 'Mock System Design (60 min): Design a system you haven\'t practiced. Pick one: food delivery, stock trading platform, or video conferencing.' },
      { type: 'concept', name: 'Mock Behavioral (30 min): Full behavioral round with a friend or record yourself answering 5 questions.' },
    ],
  },
  // Day 91 — Sun Jul 5 (WEEKEND)
  {
    day: 91,
    category: 'MIXED',
    title: '🔋 Weekend — Weak Area Blitz',
    description: 'Identify remaining weak spots. Last big weekend to fix them.',
    tasks: [
      { type: 'concept', name: 'Review all mock interview feedback. List your top 5 remaining weaknesses.' },
      { type: 'concept', name: 'DSA: Solve 4-5 problems from your weakest topic. No hints allowed.' },
      { type: 'concept', name: 'System Design: Redo your weakest design from scratch. Draw the diagram, explain it out loud, time yourself (45 min max).' },
      { type: 'concept', name: 'LLD: Pick one design you haven\'t coded. Implement the core classes and main flow.' },
    ],
  },
  // Day 92 — Mon Jul 6
  {
    day: 92,
    category: 'DSA',
    title: 'Daily Practice — Keep the Streak',
    description: '8 days left. Don\'t cram new topics. Reinforce what you know.',
    tasks: [
      { type: 'problem', name: 'Number of Islands (should be automatic by now)', difficulty: 'Medium', link: 'https://leetcode.com/problems/number-of-islands/', company: 'All' },
      { type: 'problem', name: 'Longest Substring Without Repeating Characters (target: 8 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', company: 'All' },
      { type: 'problem', name: 'Binary Tree Level Order Traversal (target: 8 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/', company: 'All' },
      { type: 'problem', name: 'Product of Array Except Self (target: 8 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/product-of-array-except-self/', company: 'All' },
    ],
  },
  // Day 93-94
  {
    day: 93,
    category: 'DSA',
    title: 'Daily Practice — Hard Problem Confidence',
    description: 'Solve Hards confidently. Even partial progress on a Hard impresses interviewers.',
    tasks: [
      { type: 'problem', name: 'Alien Dictionary (redo, target: 20 min)', difficulty: 'Hard', link: 'https://leetcode.com/problems/alien-dictionary/', company: 'Google, Amazon' },
      { type: 'problem', name: 'Binary Tree Maximum Path Sum (redo, target: 15 min)', difficulty: 'Hard', link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/', company: 'Google, Meta' },
      { type: 'problem', name: 'Word Search II (redo, target: 25 min)', difficulty: 'Hard', link: 'https://leetcode.com/problems/word-search-ii/', company: 'Google, Amazon' },
    ],
  },
  {
    day: 94,
    category: 'MIXED',
    title: 'System Design — Final Review',
    description: 'Run through all your system designs mentally. 5 min each. Hit the key points.',
    tasks: [
      { type: 'concept', name: '5-min review each: URL Shortener, Rate Limiter, Chat System, News Feed, YouTube, Uber, Google Search, Distributed Cache, Message Queue, Payment System. For each: what\'s the key insight? What\'s the hardest part?' },
      { type: 'concept', name: 'LLD review: Parking Lot, Elevator, Chess, BookMyShow. For each: what patterns did you use? What\'s the class hierarchy?' },
      { type: 'problem', name: 'Light DSA: 2-3 easy/medium problems as warm-up', difficulty: 'Medium', link: 'https://leetcode.com/problemset/all/?difficulty=MEDIUM', company: 'All' },
    ],
  },
  // Day 95
  {
    day: 95,
    category: 'DSA',
    title: 'Daily Practice — Pattern Speed Run',
    description: 'One problem per pattern. Test that every pattern is loaded in memory.',
    tasks: [
      { type: 'problem', name: 'Two Sum (HashMap) — target: 3 min', difficulty: 'Easy', link: 'https://leetcode.com/problems/two-sum/', company: 'All' },
      { type: 'problem', name: 'Sliding Window Maximum (Deque) — target: 15 min', difficulty: 'Hard', link: 'https://leetcode.com/problems/sliding-window-maximum/', company: 'All' },
      { type: 'problem', name: 'Coin Change (DP) — target: 8 min', difficulty: 'Medium', link: 'https://leetcode.com/problems/coin-change/', company: 'All' },
      { type: 'problem', name: 'Course Schedule (Topo Sort) — target: 10 min', difficulty: 'Medium', link: 'https://leetcode.com/problems/course-schedule/', company: 'All' },
      { type: 'problem', name: 'Merge Intervals (Greedy) — target: 8 min', difficulty: 'Medium', link: 'https://leetcode.com/problems/merge-intervals/', company: 'All' },
    ],
  },
  // Day 96
  {
    day: 96,
    category: 'DSA',
    title: 'Daily Practice — Stay Warm',
    description: '4 days left. Light practice to stay sharp without burning out.',
    tasks: [
      { type: 'problem', name: 'Group Anagrams (target: 8 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/group-anagrams/', company: 'All' },
      { type: 'problem', name: 'Search in Rotated Sorted Array (target: 8 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', company: 'All' },
      { type: 'problem', name: 'Validate BST (target: 8 min)', difficulty: 'Medium', link: 'https://leetcode.com/problems/validate-binary-search-tree/', company: 'All' },
      { type: 'concept', name: 'Review your cheat sheets. Read through them twice.' },
    ],
  },
  // Day 97 — Sat Jul 11 (WEEKEND)
  {
    day: 97,
    category: 'MOCK',
    title: '🎯 Final Mock Interview — Dress Rehearsal #2',
    description: 'Last full mock. Make it count. Simulate real conditions exactly.',
    tasks: [
      { type: 'problem', name: 'Mock Coding (45 min): Random problem, no rerolls', difficulty: 'Hard', link: 'https://leetcode.com/problemset/all/', company: 'All' },
      { type: 'concept', name: 'Mock System Design (60 min): Random design — roll a die: 1=URL shortener, 2=Chat, 3=YouTube, 4=Uber, 5=E-commerce, 6=Notification system.' },
      { type: 'concept', name: 'Mock Behavioral (30 min): 5 questions, STAR format, 2 min each. Record and review.' },
      { type: 'concept', name: 'Post-mock: Final gap analysis. Any remaining weak spots → address tomorrow and Day 99.' },
    ],
  },
  // Day 98
  {
    day: 98,
    category: 'MIXED',
    title: 'Final Fixes + Light Practice',
    description: 'Address any remaining gaps from yesterday\'s mock. Light practice only.',
    tasks: [
      { type: 'concept', name: 'Fix: Address the specific gaps identified in yesterday\'s mock. Targeted practice only — not broad review.' },
      { type: 'problem', name: '2-3 easy problems to keep confidence high', difficulty: 'Easy', link: 'https://leetcode.com/problemset/all/?difficulty=EASY', company: 'All' },
      { type: 'concept', name: 'Review: Your behavioral stories one more time. Make sure you can tell each in under 2 minutes.' },
    ],
  },
  // Day 99
  {
    day: 99,
    category: 'MIXED',
    title: 'Rest Day — Trust Your Preparation',
    description: 'Tomorrow is Day 100. Don\'t cram. Consolidate and rest.',
    tasks: [
      { type: 'concept', name: 'Light review: Read through your DSA cheat sheet and system design cheat sheet once. Don\'t study new material.' },
      { type: 'concept', name: 'Mental rehearsal: Visualize yourself in the interview. You receive a problem. You clarify requirements. You think out loud. You code cleanly. You handle edge cases. You\'re confident.' },
      { type: 'concept', name: 'Logistics: Prepare your interview setup — quiet room, water, pen and paper (or iPad), stable internet, backup plan for tech issues.' },
      { type: 'concept', name: 'Self-care: Exercise, eat well, sleep 8 hours. A rested brain performs 30% better than a cramming brain.' },
    ],
  },
  // Day 100
  {
    day: 100,
    category: 'MOCK',
    title: 'DAY 100 — YOU ARE READY',
    description: 'You\'ve put in 100 days of consistent, deliberate practice. You have solved 200+ problems, designed 15+ systems, and done 8+ mock interviews. Trust the process.',
    tasks: [
      { type: 'problem', name: 'Final warm-up: Solve 2 favorite medium problems. Just to feel the flow.', difficulty: 'Medium', link: 'https://leetcode.com/problemset/all/?difficulty=MEDIUM', company: 'All' },
      { type: 'concept', name: 'Final System Design practice: Pick ANY design. Walk through it in your head in 5 minutes. You should be able to hit all key points.' },
      { type: 'concept', name: 'Write down your top 10 learnings from this 100-day journey. What surprised you? What was harder than expected? What would you do differently?' },
      { type: 'concept', name: 'Next steps: If you haven\'t already — schedule mock interviews on Pramp/interviewing.io. Apply to your target companies. You are ready.' },
      { type: 'concept', name: 'CONGRATULATIONS! 100 days of dedication. You\'ve earned this. Go get that SDE2 offer. You\'ve got this.' },
    ],
  },
];
