import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Fixly - Local Services Platform",
    category: "Full Stack Development",
    period: "Oct 2025 - Present",
    status: "In Development",
    type: "Personal",
    description: "A two-sided local services marketplace with secure auth, payments, real-time messaging, and a full job lifecycle.",
    longDescription: "Fixly is a full-stack marketplace for hirers and service professionals. Built with Next.js 14 and TypeScript, it includes role-based access, a six-stage job lifecycle, real-time messaging, Stripe payments, rate limiting, background jobs, and a large automated test suite covering unit, integration, and end-to-end flows.",
    technologies: ["Next.js 14", "TypeScript", "MongoDB", "Redis", "NextAuth", "Stripe", "Vitest", "Jest", "Playwright"],
    skills: [
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "MongoDB", level: 90 },
      { name: "Testing", level: 90 }
    ],
    achievements: [
      "102 RESTful API routes and 150 handlers for a role-based marketplace flow",
      "Real-time messaging with typed events, presence, typing indicators, and contact-info filtering",
      "Redis-backed rate limiting, secure auth flows, and idempotent Stripe payments",
      "353 test files and 1325 automated test cases across unit, integration, and E2E coverage"
    ],
    links: {
      github: "https://github.com/Blessan-Corley/Fixly",
      demo: ""
    },
    color: "#8b5cf6",
    gradient: "from-purple-500 to-violet-600"
  },
  {
    id: 2,
    title: "SnakRx - Modern Snake Game",
    category: "Game Development",
    period: "Oct 2025",
    status: "Completed",
    type: "Personal",
    description: "A production-ready snake game platform with authentication, multiple modes, achievements, and leaderboards.",
    longDescription: "SnakRx modernizes the classic snake formula into a polished game platform with authenticated access, local multiplayer, VS-Bot gameplay, weekly leaderboards, achievements, and server-side enforcement of critical mutations through Cloud Functions. The release pipeline is gated by automated testing and CI/CD checks.",
    technologies: ["React 18", "Firebase Auth", "Firestore", "Cloud Functions", "Vite", "Tailwind CSS", "Vitest", "Playwright"],
    skills: [
      { name: "React", level: 90 },
      { name: "Firebase", level: 88 },
      { name: "Game Logic", level: 88 },
      { name: "Testing", level: 84 }
    ],
    achievements: [
      "4 game modes including VS-Bot with deterministic impossible-mode AI",
      "18 Cloud Functions handling trusted mutations, OTP signup, moderation, and leaderboard writes",
      "74 achievements, weekly leaderboard aggregation, and a full friend system",
      "101 test files and 414 test cases with CI/CD release gates"
    ],
    links: {
      github: "https://github.com/Blessan-Corley/snakrx",
      demo: "https://snakrx-23b0b.web.app/landing"
    },
    color: "#10b981",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: 3,
    title: "Cash Compass - Expense Tracker",
    category: "Full Stack Development",
    period: "2025",
    status: "Completed",
    type: "Personal",
    description: "A full-stack expense tracking application with category management, filtering, and data visualization.",
    longDescription: "A complete expense tracking solution built with a React frontend and Node.js backend. Features include adding, editing, and deleting expenses with category organization, date-based filtering, and visual charts for spending analysis. Uses PostgreSQL with Neon serverless for reliable data storage and Express.js for API endpoints.",
    technologies: ["Vite", "React", "Node.js", "Express.js", "PostgreSQL", "Neon", "Chart.js"],
    skills: [
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "API Design", level: 88 }
    ],
    achievements: [
      "Full CRUD operations for expense management",
      "Category-based organization and filtering",
      "Visual spending analytics with charts",
      "Serverless PostgreSQL deployment with Neon"
    ],
    links: {
      github: "https://github.com/Blessan-Corley/Cash-Compass",
      demo: "https://cash-compass-570.pages.dev/login"
    },
    color: "#ec4899",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    id: 4,
    title: "NumDuel - Multiplayer Number Guesser",
    category: "Real-time Game",
    period: "2025",
    status: "Completed",
    type: "Personal",
    description: "Real-time multiplayer number guessing game with Socket.IO, party system, and bot opponents.",
    longDescription: "A multiplayer number guessing game built with Node.js and Socket.IO. Create private game rooms, invite friends, or play against bots with adjustable difficulty. Features real-time player synchronization, performance tracking, and a clean game architecture. All game logic runs server-side to prevent cheating.",
    technologies: ["Node.js", "Express.js", "Socket.IO", "HTML5", "CSS3", "JavaScript"],
    skills: [
      { name: "Socket.IO", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "Real-time Systems", level: 90 },
      { name: "Game Architecture", level: 82 }
    ],
    achievements: [
      "Real-time multiplayer with party system",
      "Bot opponents with difficulty scaling",
      "Server-side game logic for security",
      "Performance tracking and stats"
    ],
    links: {
      github: "https://github.com/Blessan-Corley/multiplayer-number-guesser",
      demo: "https://guess-the-number-multiplayer-3rk1.onrender.com/"
    },
    color: "#06b6d4",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    id: 6,
    title: "Reverse Mate - Chess Survival Game",
    category: "Game Development",
    period: "2025",
    status: "Completed",
    type: "Personal",
    description: "A chess-based survival game where you navigate a king through a scrolling chessboard, inspired by ChessPursuit.",
    longDescription: "Reverse Mate is a modernized version of the classic ChessPursuit game. Navigate a chess king left, right, or forward one square at a time while the board scrolls downward like Subway Surfers. The game features smooth animations, increasing difficulty, score tracking, and collision detection. Originally a 10+ year old project, rebuilt from scratch using modern web technologies.",
    technologies: ["Vite", "React", "JavaScript ES6+", "CSS3"],
    skills: [
      { name: "React", level: 88 },
      { name: "Game Logic", level: 85 },
      { name: "CSS Animations", level: 82 },
      { name: "Vite", level: 90 }
    ],
    achievements: [
      "Modernized legacy codebase with current best practices",
      "Smooth scrolling board with 60 FPS performance",
      "Progressive difficulty with increasing speed",
      "Keyboard and touch controls for all devices"
    ],
    links: {
      github: "https://github.com/Blessan-Corley/Reverse-Mate",
      demo: "https://reverse-mate.vercel.app/"
    },
    color: "#3b82f6",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    id: 8,
    title: "Lights Out - Puzzle Game",
    category: "Puzzle Game",
    period: "2025",
    status: "Completed",
    type: "Personal",
    description: "The classic Lights Out puzzle game with multiple grid sizes, move counter, and guaranteed solvable puzzles.",
    longDescription: "A web implementation of the classic Lights Out puzzle game. Click lights to toggle them and their neighbors, with the goal of turning all lights off. Features three difficulty levels (3x3, 4x4, 5x5 grids), a move counter, and an algorithm that generates only solvable puzzles. Includes helpful instructions and keyboard shortcuts for quick resets.",
    technologies: ["HTML5", "CSS3", "Vanilla JavaScript"],
    skills: [
      { name: "Vanilla JavaScript", level: 90 },
      { name: "Game Algorithms", level: 85 },
      { name: "CSS Animations", level: 82 },
      { name: "Puzzle Logic", level: 88 }
    ],
    achievements: [
      "Solvable puzzle generation algorithm",
      "Three difficulty levels with responsive design",
      "Smooth animations and visual feedback",
      "Instructions modal with game strategies"
    ],
    links: {
      github: "https://github.com/Blessan-Corley/Lights-Out",
      demo: "https://blessan-corley.github.io/Lights-Out/"
    },
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    id: 9,
    title: "Cursor Chase Game",
    category: "Interactive Game",
    period: "2024",
    status: "Completed",
    type: "Personal",
    description: "Dynamic browser game where players evade a chasing ball while collecting stars in a circular arena.",
    longDescription: "Cursor Chase is an interactive browser game built with Canvas API. Control your cursor to avoid a smart-chasing ball while collecting stars for points. Features physics-based ball movement, progressive difficulty scaling, power-ups with reversed controls, and smooth real-time animations. The game includes a scoring system and tracks your best performance.",
    technologies: ["JavaScript ES6+", "HTML5 Canvas", "CSS3"],
    skills: [
      { name: "Game Physics", level: 85 },
      { name: "Collision Detection", level: 88 },
      { name: "Canvas Animation", level: 90 },
      { name: "User Experience", level: 82 }
    ],
    achievements: [
      "Real-time cursor tracking and chase AI",
      "Progressive difficulty system",
      "Physics-based ball movement",
      "Power-ups and score tracking"
    ],
    links: {
      github: "https://github.com/Blessan-Corley/cursor-chase",
      demo: "https://blessan-corley.github.io/Cursor-Game/"
    },
    color: "#a855f7",
    gradient: "from-purple-500 to-fuchsia-600"
  },
  {
    id: 10,
    title: "2048 Game",
    category: "Puzzle Game",
    period: "2024",
    status: "Completed",
    type: "Personal",
    description: "Web-based 2048 puzzle game with smooth animations and responsive design.",
    longDescription: "A clean implementation of the popular 2048 puzzle game. Swipe or use arrow keys to combine numbered tiles and reach 2048. Features smooth CSS animations, score tracking, best score persistence, and win/lose detection. Works seamlessly on desktop with keyboard controls and on mobile with touch gestures.",
    technologies: ["HTML5", "CSS3", "JavaScript ES6+", "CSS Animations"],
    skills: [
      { name: "Game Logic", level: 88 },
      { name: "DOM Manipulation", level: 85 },
      { name: "CSS Animations", level: 82 },
      { name: "Responsive Design", level: 90 }
    ],
    achievements: [
      "Grid-based tile movement logic",
      "Smooth CSS tile animations",
      "Score calculation and best score tracking",
      "Keyboard and touch support"
    ],
    links: {
      github: "https://github.com/Blessan-Corley/2048-game",
      demo: "https://blessan-corley.github.io/2048-Game/"
    },
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    id: 11,
    title: "Memory Card Game",
    category: "Memory Game",
    period: "2024",
    status: "Completed",
    type: "Personal",
    description: "Classic memory card matching game with multiple difficulty levels and best time tracking.",
    longDescription: "A classic card-matching memory game with a modern interface. Flip cards to find matching pairs while the timer runs. Choose from three difficulty levels (4x4, 6x6, 8x8 grids), enjoy sound effects with each flip, and track your best completion times. All progress is saved locally using the browser's Local Storage.",
    technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "Web Audio API", "Local Storage API"],
    skills: [
      { name: "Vanilla JavaScript", level: 90 },
      { name: "Game Logic", level: 88 },
      { name: "Local Storage", level: 85 },
      { name: "Responsive Design", level: 90 }
    ],
    achievements: [
      "Multiple difficulty levels",
      "Sound effects with Web Audio API",
      "Best score persistence",
      "Smooth card flip animations"
    ],
    links: {
      github: "https://github.com/Blessan-Corley/memory-game",
      demo: "https://blessan-corley.github.io/Memory-Game/"
    },
    color: "#ec4899",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    id: 12,
    title: "Number Guesser",
    category: "Interactive Game",
    period: "2025",
    status: "Completed",
    type: "Personal",
    description: "Interactive number guessing game with customizable ranges and performance analysis.",
    longDescription: "A simple but engaging number guessing game where you set a custom range and try to guess the secret number. Receive dynamic hints after each guess, track your attempts, and see performance statistics at the end. Features keyboard support, responsive design, and a clean interface that works on all devices.",
    technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "CSS Animations"],
    skills: [
      { name: "JavaScript Logic", level: 85 },
      { name: "User Interface", level: 88 },
      { name: "Interactive Design", level: 82 },
      { name: "Performance Analysis", level: 80 }
    ],
    achievements: [
      "Customizable number ranges",
      "Dynamic hint system",
      "Performance evaluation",
      "Keyboard and responsive design"
    ],
    links: {
      github: "https://github.com/Blessan-Corley/guess-the-number",
      demo: "https://blessan-corley.github.io/Guess-the-Number/"
    },
    color: "#3b82f6",
    gradient: "from-blue-500 to-indigo-600"
  }
];
