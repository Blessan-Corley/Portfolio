import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LightRays from './LightRays';
import {
  FiCode,
  FiExternalLink,
  FiGithub,
  FiCalendar,
  FiUser,
  FiTrendingUp,
  FiDatabase,
  FiCpu,
  FiLayers,
  FiZap,
  FiShield,
  FiActivity
} from 'react-icons/fi';

const projectsData = [
  {
    id: 1,
    title: "Fixly - Local Services Platform",
    category: "Full Stack Development",
    period: "2025 - Present",
    status: "In Development",
    type: "Personal",
    description: "A platform connecting customers with local service professionals, featuring real-time messaging and location-based matching.",
    longDescription: "Fixly is a local services marketplace that connects customers with skilled professionals in their area. Built with Next.js and MongoDB, it features real-time messaging via WebSocket, location-based service matching, and separate dashboards for customers and service providers. The platform includes progressive web app capabilities for mobile access.",
    technologies: ["Next.js 14", "React", "Node.js", "MongoDB", "NextAuth.js", "Redis", "Tailwind CSS", "WebSocket"],
    skills: [
      { name: "Next.js", level: 95 },
      { name: "React", level: 92 },
      { name: "MongoDB", level: 88 },
      { name: "Real-time Systems", level: 85 }
    ],
    achievements: [
      "Dual-role system with customer and provider dashboards",
      "Real-time messaging with instant message delivery",
      "GPS-based service matching within user radius",
      "PWA implementation for offline capabilities"
    ],
    links: {
      github: "#",
      demo: "#"
    },
    color: "#8b5cf6",
    gradient: "from-purple-500 to-violet-600"
  },
  {
    id: 2,
    title: "SnakRx - Modern Snake Game",
    category: "Game Development",
    period: "2025",
    status: "In Development",
    type: "Personal",
    description: "An enhanced Snake game with Firebase integration, multiple game modes, and competitive leaderboards.",
    longDescription: "SnakRx brings the classic Snake game into the modern era with React and Firebase. Features single-player mode, player vs AI battles, and real-time multiplayer. Includes Firebase authentication with Google sign-in, global leaderboards, an achievement system, and an admin dashboard for game analytics. Built with Framer Motion for smooth animations.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion", "Howler.js", "React Router"],
    skills: [
      { name: "React", level: 90 },
      { name: "Firebase", level: 85 },
      { name: "Game Logic", level: 88 },
      { name: "Animation", level: 82 }
    ],
    achievements: [
      "Multiple game modes with AI difficulty levels",
      "Firebase authentication and data storage",
      "Real-time leaderboards and achievements",
      "Admin dashboard with player analytics"
    ],
    links: {
      github: "#",
      demo: "#"
    },
    color: "#10b981",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: 3,
    title: "Expense Tracker",
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
      github: "#",
      demo: "#"
    },
    color: "#ec4899",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    id: 4,
    title: "Multiplayer Number Guesser",
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
    id: 5,
    title: "Typingflow",
    category: "Web Application",
    period: "2025",
    status: "Completed",
    type: "Personal",
    description: "Advanced typing test application with real-time analytics, themes, and achievement system.",
    longDescription: "Typingflow is a feature-rich typing test platform built with vanilla JavaScript. Choose from multiple test modes including timed tests, word count challenges, and quote typing. Track your WPM and accuracy in real-time, unlock achievements, customize themes, and export your typing data. All progress is saved locally.",
    technologies: ["JavaScript ES6+", "HTML5", "CSS3", "Web Audio API", "Local Storage API"],
    skills: [
      { name: "Vanilla JavaScript", level: 92 },
      { name: "DOM Manipulation", level: 90 },
      { name: "Web APIs", level: 85 },
      { name: "Performance", level: 88 }
    ],
    achievements: [
      "Multiple test modes with customization",
      "Real-time WPM and accuracy calculation",
      "Achievement system with badges",
      "Theme engine with data export"
    ],
    links: {
      github: "#",
      demo: "#"
    },
    color: "#f97316",
    gradient: "from-orange-500 to-red-500"
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
      demo: "reverse-mate.vercel.app"
    },
    color: "#3b82f6",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    id: 7,
    title: "Pong Classic",
    category: "Game Development",
    period: "2025",
    status: "Completed",
    type: "Personal",
    description: "Modern Pong implementation with AI opponents, particle effects, and responsive design.",
    longDescription: "A polished recreation of the classic Pong game using HTML5 Canvas and vanilla JavaScript. Features intelligent AI with multiple difficulty settings, smooth particle effects, sound effects, and responsive controls that work on any device. The game loop uses requestAnimationFrame for consistent 60 FPS performance.",
    technologies: ["JavaScript ES6+", "HTML5 Canvas", "CSS3", "Web Audio API"],
    skills: [
      { name: "Canvas API", level: 88 },
      { name: "Game Physics", level: 85 },
      { name: "AI Programming", level: 82 },
      { name: "Animation", level: 90 }
    ],
    achievements: [
      "Advanced AI with difficulty levels",
      "Particle effects and visual polish",
      "Cross-device responsive design",
      "Optimized game loop performance"
    ],
    links: {
      github: "#",
      demo: "#"
    },
    color: "#8b5cf6",
    gradient: "from-purple-500 to-violet-600"
  },
  {
    id: 8,
    title: "Lights Out - Puzzle Game",
    category: "Puzzle Game",
    period: "2025",
    status: "Completed",
    type: "Personal",
    description: "The classic Lights Out puzzle game with multiple grid sizes, move counter, and guaranteed solvable puzzles.",
    longDescription: "A web implementation of the classic Lights Out puzzle game. Click lights to toggle them and their neighbors, with the goal of turning all lights off. Features three difficulty levels (3×3, 4×4, 5×5 grids), a move counter, and an algorithm that generates only solvable puzzles. Includes helpful instructions and keyboard shortcuts for quick resets.",
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
      github: "https://github.com/Blessan-Corley/Cursor-Game",
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
    longDescription: "A classic card-matching memory game with a modern interface. Flip cards to find matching pairs while the timer runs. Choose from three difficulty levels (4×4, 6×6, 8×8 grids), enjoy sound effects with each flip, and track your best completion times. All progress is saved locally using the browser's Local Storage.",
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

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(projectsData[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.textContent = `
      .custom-scrollbar::-webkit-scrollbar {
        width: 6px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 3px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    `;
    document.head.appendChild(style);
  }, []);

  const StatusBadge = ({ status, type }) => {
    const getStatusColor = () => {
      switch (status) {
        case 'Completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
        case 'In Development': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
        default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      }
    };

    const getTypeIcon = () => {
      switch (type) {
        case 'Academic': return <FiUser className="inline w-3 h-3" />;
        case 'Personal': return <FiZap className="inline w-3 h-3" />;
        default: return <FiLayers className="inline w-3 h-3" />;
      }
    };

    return (
      <div className="flex items-center gap-2 mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor()}`}>
          {status}
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20 flex items-center gap-1">
          {getTypeIcon()} {type}
        </span>
      </div>
    );
  };

  const SkillTags = ({ skills }) => (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/20 hover:bg-white/20 transition-colors duration-200"
          style={{ borderColor: `${activeProject.color}30` }}
        >
          {typeof skill === 'object' ? skill.name : skill}
        </motion.span>
      ))}
    </div>
  );

  const ProjectNavItem = ({ project, isActive, onClick }) => (
    <motion.div
      className={`cursor-pointer p-4 rounded-lg transition-all duration-300 border ${
        isActive
          ? 'bg-white/10 border-white/20 shadow-lg'
          : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/15'
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: project.color }}
        />
        <h3 className="font-semibold text-white text-sm md:text-base">
          {project.title}
        </h3>
      </div>
      <p className="text-white/60 text-xs md:text-sm mb-2">{project.category}</p>
      <p className="text-white/50 text-xs">{project.period}</p>
    </motion.div>
  );

  return (
    <section
      id="projects"
      className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 w-full overflow-hidden"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="right"
          raysColor="#f0abfc"
          raysSpeed={1.0}
          lightSpread={1.5}
          rayLength={1.8}
          pulsating={false}
          fadeDistance={1.5}
          saturation={0.8}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.08}
          distortion={0.03}
        />
      </div>

      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="left"
          raysColor="#fb923c"
          raysSpeed={1.0}
          lightSpread={1.5}
          rayLength={1.5}
          pulsating={false}
          fadeDistance={1.5}
          saturation={0.5}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.08}
          distortion={0.03}
        />
      </div>

      <div className="absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent" />
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16,185,129,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px'
          }}
        />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Featured{' '}
            <motion.span
              className="bg-gradient-to-r from-purple-500 via-emerald-500 to-amber-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 100%'
              }}
            >
              Projects
            </motion.span>
          </h2>
          <p className="text-center text-white/60 mt-4 max-w-2xl mx-auto">
            From games to full-stack applications - building and learning through code
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {isMobile ? (
            <div className="space-y-8">
              <div className="space-y-4">
                {projectsData.map((project) => (
                  <ProjectNavItem
                    key={project.id}
                    project={project}
                    isActive={activeProject.id === project.id}
                    onClick={() => setActiveProject(project)}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm"
                >
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: activeProject.color }}
                      />
                      <h3 className="text-2xl font-bold text-white">
                        {activeProject.title}
                      </h3>
                    </div>
                    <StatusBadge status={activeProject.status} type={activeProject.type} />
                  </div>

                  <p className="text-white/80 leading-relaxed mb-6">
                    {activeProject.longDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-white/90 font-semibold mb-3 flex items-center gap-2">
                      <FiCode className="text-lg" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
                      <FiTrendingUp className="text-lg" />
                      Skills
                    </h4>
                    <SkillTags skills={activeProject.skills.map(s => s.name)} />
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white/90 font-semibold mb-3 flex items-center gap-2">
                      <FiActivity className="text-lg" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {activeProject.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-white/80">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: activeProject.color }}
                          />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {activeProject.links.github && (
                      <a
                        href={activeProject.links.github}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 text-white/80 hover:text-white border border-white/20"
                      >
                        <FiGithub />
                        <span>Source Code</span>
                      </a>
                    )}
                    {activeProject.links.demo && (
                      <a
                        href={activeProject.links.demo}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 text-white border-2"
                        style={{
                          backgroundColor: `${activeProject.color}20`,
                          borderColor: activeProject.color,
                          color: activeProject.color
                        }}
                      >
                        <FiExternalLink />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <div className="grid grid-cols-12 gap-8 min-h-[600px]">
              <div className="col-span-4">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="sticky top-8"
                >
                  <h3 className="text-xl font-semibold text-white/90 mb-6 flex items-center gap-2">
                    <FiLayers />
                    All Projects
                  </h3>
                  <div className="space-y-4 max-h-[500px] overflow-y-auto overflow-x-hidden custom-scrollbar">
                    {projectsData.map((project) => (
                      <ProjectNavItem
                        key={project.id}
                        project={project}
                        isActive={activeProject.id === project.id}
                        onClick={() => setActiveProject(project)}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/5 rounded-xl p-8 border border-white/10 backdrop-blur-sm"
                  >
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="w-5 h-5 rounded-full"
                          style={{ backgroundColor: activeProject.color }}
                        />
                        <h3 className="text-3xl font-bold text-white">
                          {activeProject.title}
                        </h3>
                      </div>
                      <StatusBadge status={activeProject.status} type={activeProject.type} />
                      <div className="flex items-center gap-4 text-white/60 text-sm">
                        <div className="flex items-center gap-2">
                          <FiCalendar />
                          {activeProject.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <FiUser />
                          {activeProject.category}
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <p className="text-white/80 leading-relaxed text-lg">
                        {activeProject.longDescription}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
                            <FiCode className="text-lg" />
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {activeProject.technologies.map((tech, index) => (
                              <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="px-3 py-2 bg-white/10 rounded-lg text-sm text-white/80 border border-white/20 hover:bg-white/20 transition-colors duration-200"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
                            <FiActivity className="text-lg" />
                            Key Features
                          </h4>
                          <ul className="space-y-3">
                            {activeProject.achievements.map((achievement, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-3 text-white/80"
                              >
                                <div
                                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                  style={{ backgroundColor: activeProject.color }}
                                />
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <div>
                          <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
                            <FiTrendingUp className="text-lg" />
                            Skills
                          </h4>
                          <SkillTags skills={activeProject.skills.map(s => s.name)} />
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="flex flex-wrap gap-4">
                        {activeProject.links.github && (
                          <motion.a
                            href={activeProject.links.github}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 text-white/80 hover:text-white border border-white/20"
                          >
                            <FiGithub />
                            <span>Source Code</span>
                          </motion.a>
                        )}
                        {activeProject.links.demo && (
                          <motion.a
                            href={activeProject.links.demo}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-6 py-3 rounded-lg transition-colors duration-200 text-white border-2"
                            style={{
                              backgroundColor: `${activeProject.color}20`,
                              borderColor: activeProject.color,
                              color: activeProject.color
                            }}
                          >
                            <FiExternalLink />
                            <span>Live Demo</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;