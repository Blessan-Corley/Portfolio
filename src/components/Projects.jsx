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
        description: "A comprehensive local services marketplace connecting customers with skilled professionals. Features real-time messaging, intelligent notifications, and PWA capabilities.",
        longDescription: "Fixly is a comprehensive local services marketplace platform that connects customers with skilled service professionals (fixers) in their area. It's a full-stack web application with real-time messaging, intelligent notifications, and PWA capabilities, designed to streamline the process of finding and booking local services.",
        technologies: ["Next.js 14", "React", "Node.js", "MongoDB", "NextAuth.js", "Redis", "Tailwind CSS", "WebSocket"],
        skills: [
            { name: "Next.js", level: 95 },
            { name: "React", level: 92 },
            { name: "MongoDB", level: 88 },
            { name: "Real-time Systems", level: 85 }
        ],
        achievements: [
            "Dual-role system with separate dashboards",
            "Real-time messaging with instant delivery",
            "Progressive Web App with offline capabilities",
            "Location-based service matching with GPS integration"
        ],
        links: {
            github: "https://github.com/Blessan-Corley/fixly",
            demo: null,
            documentation: null
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
        description: "A feature-rich Snake game with React, Firestore, leaderboards, achievements, and multiple game modes including AI opponents.",
        longDescription: "A modern web application built with React and Firebase, featuring user authentication, leaderboards, achievements system, and multiple game modes. Includes single-player, player vs AI, and multiplayer modes with a comprehensive admin dashboard.",
        technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion", "Howler.js", "React Router"],
        skills: [
            { name: "React", level: 90 },
            { name: "Firebase", level: 85 },
            { name: "Game Logic", level: 88 },
            { name: "Animation", level: 82 }
        ],
        achievements: [
            "Multiple game modes with AI opponents",
            "Firebase authentication with Google sign-in",
            "Real-time leaderboards and achievements",
            "Admin dashboard with analytics"
        ],
        links: {
            github: "https://github.com/Blessan-Corley/snakrx",
            demo: null,
            documentation: null
        },
        color: "#10b981",
        gradient: "from-emerald-500 to-teal-600"
    },
    {
        id: 3,
        title: "Multiplayer Number Guesser",
        category: "Real-time Game",
        period: "2025",
        status: "Completed",
        type: "Personal",
        description: "Real-time multiplayer number guessing game with Socket.IO, featuring party system, bot opponents, and performance tracking.",
        longDescription: "A real-time multiplayer number guessing game designed to provide an engaging and interactive experience. Players can create private game parties, compete against each other or bots with adjustable difficulty levels.",
        technologies: ["Node.js", "Express.js", "Socket.IO", "HTML5", "CSS3", "JavaScript", "Jest"],
        skills: [
            { name: "Socket.IO", level: 88 },
            { name: "Node.js", level: 85 },
            { name: "Real-time Systems", level: 90 },
            { name: "Game Architecture", level: 82 }
        ],
        achievements: [
            "Real-time multiplayer with party system",
            "Configurable difficulty levels",
            "Performance tracking and achievements",
            "Clean separation of concerns architecture"
        ],
        links: {
            github: "https://github.com/Blessan-Corley/multiplayer-number-guesser",
            demo: "https://guess-the-number-multiplayer-3rk1.onrender.com/",
            documentation: null
        },
        color: "#f59e0b",
        gradient: "from-amber-500 to-orange-600"
    },
    {
        id: 4,
        title: "Typingflow",
        category: "Web Application",
        period: "2025",
        status: "Completed",
        type: "Personal",
        description: "Advanced typing test application with real-time analytics, multiple themes, achievements system, and comprehensive statistics tracking.",
        longDescription: "A feature-rich typing test application built with vanilla JavaScript, featuring multiple typing modes, real-time analytics, customizable themes, and a comprehensive achievements system with data export capabilities.",
        technologies: ["JavaScript ES6+", "HTML5", "CSS3", "Web Audio API", "Local Storage API"],
        skills: [
            { name: "Vanilla JavaScript", level: 92 },
            { name: "DOM Manipulation", level: 90 },
            { name: "Web APIs", level: 85 },
            { name: "Performance Optimization", level: 88 }
        ],
        achievements: [
            "Multiple typing modes (time, word count, quotes)",
            "Real-time WPM and accuracy calculation",
            "Achievement system with unlockable badges",
            "Data export and theme customization"
        ],
        links: {
            github: "https://github.com/Blessan-Corley/typing-engine",
            demo: null,
            documentation: null
        },
        color: "#ec4899",
        gradient: "from-pink-500 to-rose-600"
    },
    {
        id: 5,
        title: "Pong Classic Reimagined",
        category: "Game Development",
        period: "2025",
        status: "Completed",
        type: "Personal",
        description: "Modern implementation of classic Pong with advanced AI, particle effects, multiple difficulty levels, and responsive design.",
        longDescription: "A modern, feature-rich implementation of the classic Pong game, built with vanilla JavaScript and HTML5 Canvas. Features intelligent AI opponents, dynamic visual effects, and comprehensive game modes.",
        technologies: ["JavaScript ES6+", "HTML5 Canvas", "CSS3", "Web Audio API"],
        skills: [
            { name: "Canvas API", level: 88 },
            { name: "Game Physics", level: 85 },
            { name: "AI Programming", level: 82 },
            { name: "Animation", level: 90 }
        ],
        achievements: [
            "Advanced AI with multiple difficulty levels",
            "Particle effects and visual enhancements",
            "Responsive design for all devices",
            "Efficient game loop with requestAnimationFrame"
        ],
        links: {
            github: "https://github.com/Blessan-Corley/pong-classic",
            demo: null,
            documentation: null
        },
        color: "#3b82f6",
        gradient: "from-blue-500 to-indigo-600"
    },
    {
        id: 6,
        title: "Cursor Chase Game",
        category: "Interactive Game",
        period: "2024",
        status: "Completed",
        type: "Personal",
        description: "Dynamic browser-based game where players evade a chasing ball while collecting stars, featuring progressive difficulty and special power-ups.",
        longDescription: "A dynamic and interactive browser-based game where the player must evade a chasing ball while collecting stars within a circular arena. Features progressive difficulty, reversed controls challenge, and smooth physics.",
        technologies: ["JavaScript ES6+", "HTML5 Canvas", "CSS3", "requestAnimationFrame"],
        skills: [
            { name: "Game Physics", level: 85 },
            { name: "Collision Detection", level: 88 },
            { name: "Canvas Animation", level: 90 },
            { name: "User Experience", level: 82 }
        ],
        achievements: [
            "Real-time cursor tracking and movement",
            "Progressive difficulty scaling",
            "Physics-based ball movement with momentum",
            "Special power-ups with reversed controls"
        ],
        links: {
            github: "https://github.com/Blessan-Corley/cursor-chase",
            demo: "https://blessan-corley.github.io/Cursor-Game/",
            documentation: null
        },
        color: "#06b6d4",
        gradient: "from-cyan-500 to-blue-500"
    },
    {
        id: 7,
        title: "2048 Game",
        category: "Puzzle Game",
        period: "2024",
        status: "Completed",
        type: "Personal",
        description: "Web-based 2048 puzzle game with smooth animations, score tracking, and responsive design for all devices.",
        longDescription: "A web-based implementation of the popular 2048 puzzle game. Features dynamic tile generation, smooth animations, score tracking, and win/lose condition detection with responsive design.",
        technologies: ["HTML5", "CSS3", "JavaScript ES6+", "CSS Animations"],
        skills: [
            { name: "Game Logic", level: 88 },
            { name: "DOM Manipulation", level: 85 },
            { name: "CSS Animations", level: 82 },
            { name: "Responsive Design", level: 90 }
        ],
        achievements: [
            "Grid-based tile movement and merging",
            "Smooth CSS animations for tile transitions",
            "Score calculation and best score tracking",
            "Keyboard controls and touch support"
        ],
        links: {
            github: "https://github.com/Blessan-Corley/2048-game",
            demo: "https://blessan-corley.github.io/2048-Game/",
            documentation: null
        },
        color: "#f97316",
        gradient: "from-orange-500 to-red-500"
    },
    {
        id: 8,
        title: "Memory Card Game",
        category: "Memory Game",
        period: "2024",
        status: "Completed",
        type: "Personal",
        description: "Classic memory card matching game with multiple difficulty levels, scoring system, sound effects, and best time tracking.",
        longDescription: "A classic card-matching memory game built with a clean and modern user interface. Features multiple difficulty levels, scoring system, sound effects, and tracks best completion times with responsive design.",
        technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "Web Audio API", "Local Storage API"],
        skills: [
            { name: "Vanilla JavaScript", level: 90 },
            { name: "Game Logic", level: 88 },
            { name: "Local Storage", level: 85 },
            { name: "Responsive Design", level: 90 }
        ],
        achievements: [
            "Multiple difficulty levels (4x4, 6x6, 8x8)",
            "Sound effects with Web Audio API",
            "Best score tracking with Local Storage",
            "Smooth card flip animations"
        ],
        links: {
            github: "https://github.com/Blessan-Corley/memory-game",
            demo: "https://blessan-corley.github.io/Memory-Game/",
            documentation: null
        },
        color: "#8b5cf6",
        gradient: "from-purple-500 to-violet-600"
    },
    {
        id: 9,
        title: "Number Guesser Game",
        category: "Interactive Game",
        period: "2025",
        status: "Completed",
        type: "Personal",
        description: "Interactive number guessing game with customizable ranges, dynamic feedback, attempt tracking, and performance analysis.",
        longDescription: "A fun and engaging web-based number guessing game where users set a range and guess the secret number. Features dynamic feedback, attempt tracking, performance analysis, and responsive design.",
        technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "CSS Animations"],
        skills: [
            { name: "JavaScript Logic", level: 85 },
            { name: "User Interface", level: 88 },
            { name: "Interactive Design", level: 82 },
            { name: "Performance Analysis", level: 80 }
        ],
        achievements: [
            "Customizable number ranges",
            "Dynamic feedback system with hints",
            "Performance evaluation and statistics",
            "Keyboard support and responsive design"
        ],
        links: {
            github: "https://github.com/Blessan-Corley/guess-the-number",
            demo: "https://blessan-corley.github.io/Guess-the-Number/",
            documentation: null
        },
        color: "#10b981",
        gradient: "from-emerald-500 to-teal-600"
    }
];

const ProjectsSection = () => {
    const [activeProject, setActiveProject] = useState(projectsData[0]);
    const [isMobile, setIsMobile] = useState(false);

    // Handle responsive design
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
      @font-face {
        font-family: 'SF Pro Display';
        src: url('${import.meta.env.BASE_URL}fonts/SF-Pro-Display-Medium.otf') format('opentype');
        font-weight: 500;
        font-display: swap;
      }
      
      /* Custom scrollbar styles */
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
                case 'Academic': return '🎓';
                case 'Personal': return '🚀';
                default: return '📋';
            }
        };

        return (
            <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor()}`}>
                    {status}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20">
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
            className={`cursor-pointer p-4 rounded-lg transition-all duration-300 border ${isActive
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
            style={{ fontFamily: "'SF Pro Display', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
        >
            {/* Light Rays Background - Positioned behind everything */}
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
                    className="custom-rays" 
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
                    className="custom-rays" 
                />
            </div>

            {/* Enhanced Background Overlay */}
            <div className="absolute inset-0 z-[1] overflow-hidden">
                {/* Gradient continuation from skills section */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent" />

                {/* Enhanced tech grid pattern */}
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

                {/* Dynamic color-changing particles */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full"
                    style={{ backgroundColor: activeProject.color }}
                    animate={{
                        x: [0, 120, -60, 0],
                        y: [0, -100, 80, 0],
                        opacity: [0, 0.4, 0.2, 0],
                        scale: [0.5, 1.2, 0.8, 0.5],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-3/4 right-1/3 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: activeProject.color, opacity: 0.3 }}
                    animate={{
                        x: [0, -100, 60, 0],
                        y: [0, 60, -40, 0],
                        opacity: [0, 0.6, 0.1, 0],
                        scale: [0.3, 1, 0.6, 0.3],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 8 }}
                />
                <motion.div
                    className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full"
                    style={{ backgroundColor: '#10b981', opacity: 0.25 }}
                    animate={{
                        x: [0, 80, -120, 0],
                        y: [0, -70, 40, 0],
                        opacity: [0, 0.5, 0.15, 0],
                    }}
                    transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 15 }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Header */}
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
                                ease: "easeInOut",
                                delay: 1
                            }}
                            style={{
                                backgroundSize: '200% 100%'
                            }}
                        >
                            Projects
                        </motion.span>
                    </h2>
                    <p className="text-center text-white/60 mt-4 max-w-2xl mx-auto">
                        A showcase of my development journey from games to full-stack applications
                    </p>
                </motion.div>

                {/* Main Content Container */}
                <div className="max-w-7xl mx-auto">
                    {isMobile ? (
                        
                        <div className="space-y-8">
                            {/* Mobile Project Selector */}
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

                            {/* Mobile Project Details */}
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

                                    {/* Technologies */}
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

                                    {/* Skills */}
                                    <div className="mb-6">
                                        <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
                                            <FiTrendingUp className="text-lg" />
                                            Skills Developed
                                        </h4>
                                        <SkillTags skills={activeProject.skills.map(s => s.name)} />
                                    </div>

                                    {/* Achievements */}
                                    <div className="mb-6">
                                        <h4 className="text-white/90 font-semibold mb-3 flex items-center gap-2">
                                            <FiActivity className="text-lg" />
                                            Key Achievements
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

                                    {/* Links */}
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
                            {/* Left Panel - Project Navigation */}
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
                                        Project Archive
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

                                    {/* Add New Project Placeholder */}
                                    <motion.div
                                        className="mt-6 p-4 border-2 border-dashed border-white/20 rounded-lg text-center cursor-pointer hover:border-white/30 transition-colors duration-200"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="text-white/50 text-sm">
                                            <FiZap className="mx-auto mb-2" />
                                            More projects coming soon...
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Right Panel - Project Details */}
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
                                        {/* Project Header */}
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

                                        {/* Project Description */}
                                        <div className="mb-8">
                                            <p className="text-white/80 leading-relaxed text-lg">
                                                {activeProject.longDescription}
                                            </p>
                                        </div>

                                        {/* Two Column Layout for Details */}
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                            {/* Left Column */}
                                            <div className="space-y-6">
                                                {/* Technologies */}
                                                <div>
                                                    <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
                                                        <FiCode className="text-lg" />
                                                        Technologies Used
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

                                                {/* Achievements */}
                                                <div>
                                                    <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
                                                        <FiActivity className="text-lg" />
                                                        Key Achievements
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

                                            {/* Right Column */}
                                            <div>
                                                {/* Skills Developed */}
                                                <div>
                                                    <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
                                                        <FiTrendingUp className="text-lg" />
                                                        Skills Developed
                                                    </h4>
                                                    <SkillTags skills={activeProject.skills.map(s => s.name)} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
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
                                                {activeProject.links.documentation && (
                                                    <motion.a
                                                        href={activeProject.links.documentation}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-200 text-white/60 hover:text-white/80 border border-white/10"
                                                    >
                                                        <FiShield />
                                                        <span>Documentation</span>
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