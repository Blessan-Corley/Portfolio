import { motion } from 'framer-motion';
import { skillUrls } from '../data/skills';

const SkillsPanel = ({ icon, title, skills, color, expandRatio = 2.5, transitionDuration = 600, isMobile = false }) => {
  const getSkillUrl = (skill) => skillUrls[skill] || '#';

  if (isMobile) {
    return (
      <div
        className="skill-panel relative overflow-hidden rounded-xl h-full"
        style={{
          minHeight: '350px',
          width: '100%'
        }}
      >
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
                background: 'linear-gradient(135deg, rgba(0,0,0,0.95), rgba(0,0,0,0.85))',
                backdropFilter: 'blur(10px)',
              }}
            />
          </div>
        </div>

        <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="text-2xl sm:text-3xl"
              style={{ color }}
            >
              {icon}
            </div>
            <div className="min-w-0 flex-1">
              <h3
                className="text-base sm:text-lg font-bold leading-tight"
                style={{ color }}
              >
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
                color,
                borderColor: `${color}40`
              }}
            >
              {skills.length}
            </div>
          </div>

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
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer group"
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: color,
                      boxShadow: `0 0 6px ${color}60`
                    }}
                  />
                  <span className="font-medium leading-tight break-words">{skill}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '350px'
      }}
      whileHover={{
        flexGrow: expandRatio,
        flexShrink: 1,
        flexBasis: '350px'
      }}
      className="skill-panel relative cursor-pointer group overflow-hidden rounded-xl h-full"
      style={{
        minHeight: '400px',
        maxHeight: '400px',
        width: '100%',
        maxWidth: '350px',
        transition: `all ${transitionDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
      }}
    >
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
              background: 'linear-gradient(135deg, rgba(0,0,0,0.95), rgba(0,0,0,0.85))',
              backdropFilter: 'blur(10px)',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <motion.div
          className="flex-1 flex flex-col items-center justify-center p-6 group-hover:opacity-0"
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="text-4xl sm:text-5xl md:text-6xl mb-4"
            style={{ color }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>

          <h3
            className="text-lg sm:text-xl font-bold text-center mb-3 leading-tight px-2"
            style={{ color }}
          >
            {title}
          </h3>

          <div className="text-center">
            <div className="text-sm text-white/70 mb-2 font-medium">
              {skills.length} Technologies
            </div>

            <div className="text-xs text-white/50 line-clamp-2 px-2">
              {skills.slice(0, 3).join(' | ')}
            </div>
          </div>

          <div className="flex gap-1 mt-4">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full opacity-60"
                style={{ backgroundColor: color }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 p-4 sm:p-6 flex flex-col opacity-0 group-hover:opacity-100"
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            opacity: { duration: 0.3 }
          }}
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div
              className="text-2xl sm:text-3xl"
              style={{ color }}
            >
              {icon}
            </div>
            <div className="min-w-0 flex-1">
              <h3
                className="text-base sm:text-lg font-bold leading-tight"
                style={{ color }}
              >
                {title}
              </h3>
              <div className="text-xs text-white/60 mt-1">
                {skills.length} Technologies
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-50">
            <div className="text-sm text-white/80 font-medium mb-3 sm:mb-4">
              Technology Stack:
            </div>
            <div className="space-y-2 sm:space-y-3 max-h-44 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              {skills.map((skill, idx) => (
                <motion.a
                  key={idx}
                  href={getSkillUrl(skill)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer group"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: idx * 0.05,
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: color,
                      boxShadow: `0 0 6px ${color}60`
                    }}
                  />
                  <span className="font-medium leading-tight break-words">{skill}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <div
          className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        />

        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-400 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${color}15 0%, transparent 70%)`
          }}
        />

        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 group-hover:opacity-0 transition-opacity duration-300">
          <div
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold border"
            style={{
              backgroundColor: `${color}15`,
              color,
              borderColor: `${color}40`
            }}
          >
            {skills.length}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsPanel;
