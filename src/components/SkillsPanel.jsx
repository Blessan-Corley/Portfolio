import React, { memo } from 'react';
import { motion } from 'framer-motion';

const SkillsPanel = memo(({ 
  icon, 
  title, 
  skills, 
  color, 
  expandRatio = 2.5, 
  transitionDuration = 600, 
  isMobile = false 
}) => {
  const getSkillUrl = (skill) => {
    const skillUrls = {
      'Python': 'https://www.python.org/',
      'Data Structures': 'https://www.geeksforgeeks.org/data-structures/',
      'Algorithms': 'https://www.geeksforgeeks.org/fundamentals-of-algorithms/',
      'JavaScript ES6+': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      'Problem Solving': 'https://www.hackerrank.com/domains/algorithms',
      'React': 'https://react.dev/',
      'Next.js': 'https://nextjs.org/',
      'HTML5': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      'CSS3': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      'Tailwind CSS': 'https://tailwindcss.com/',
      'Framer Motion': 'https://www.framer.com/motion/',
      'Node.js': 'https://nodejs.org/',
      'Express.js': 'https://expressjs.com/',
      'RESTful APIs': 'https://restfulapi.net/',
      'Socket.IO': 'https://socket.io/',
      'Server-Sent Events': 'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events',
      'MongoDB': 'https://www.mongodb.com/',
      'PostgreSQL': 'https://www.postgresql.org/',
      'MySQL': 'https://www.mysql.com/',
      'Firestore': 'https://firebase.google.com/',
      'Redis': 'https://redis.io/',
      'Git': 'https://git-scm.com/',
      'GitHub': 'https://github.com/',
      'Vite': 'https://vitejs.dev/',
      'npm': 'https://www.npmjs.com/',
      'AWS': 'https://aws.amazon.com/',
      'GitHub Actions': 'https://github.com/features/actions',
      'Cloud Computing': 'https://aws.amazon.com/what-is-cloud-computing/',
    };
    return skillUrls[skill] || '#';
  };

  return (
    <motion.div
      // Disable animations on mobile
      initial={isMobile ? false : { flexGrow: 1, flexShrink: 1, flexBasis: '350px' }}
      whileHover={isMobile ? {} : { flexGrow: expandRatio, flexShrink: 1, flexBasis: '350px' }}
      className={`skill-panel relative overflow-hidden rounded-xl h-full ${
        isMobile ? '' : 'cursor-pointer group'
      }`}
      style={{
        minHeight: isMobile ? '350px' : '400px',
        maxHeight: isMobile ? 'none' : '400px',
        width: '100%',
        maxWidth: isMobile ? 'none' : '350px',
        transition: isMobile
          ? 'none'
          : `all ${transitionDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div
          className="absolute inset-0 rounded-xl p-[2px]"
          style={{
            background: `linear-gradient(135deg, ${color}50, ${color}20, ${color}40)`,
          }}
        >
          <div
            className="w-full h-full rounded-xl"
            style={{
              background: `linear-gradient(135deg, rgba(0,0,0,0.95), rgba(0,0,0,0.85))`,
              backdropFilter: 'blur(10px)',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="text-2xl sm:text-3xl" style={{ color }}>
            {icon}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-bold leading-tight" style={{ color }}>
              {title}
            </h3>
            <div className="text-xs text-white/60 mt-1">
              {skills.length} Technologies
            </div>
          </div>
          <div
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold border"
            style={{
              backgroundColor: `${color}15`,
              color: color,
              borderColor: `${color}40`,
            }}
          >
            {skills.length}
          </div>
        </div>

        {/* Skills list */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          <div className="text-sm text-white/80 font-medium mb-3">
            Technology Stack:
          </div>
          <div className="space-y-2">
            {skills.map((skill, idx) => (
              <a
                key={idx}
                href={getSkillUrl(skill)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: color,
                    boxShadow: `0 0 6px ${color}60`,
                  }}
                />
                <span className="font-medium leading-tight break-words">{skill}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop-only hover enhancements */}
      {!isMobile && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-400 pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, ${color}15 0%, transparent 70%)`,
            }}
          />
        </>
      )}
    </motion.div>
  );
});

export default SkillsPanel;