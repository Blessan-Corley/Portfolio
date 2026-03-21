import { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiSettings,
  FiBarChart2,
  FiCpu,
  FiServer,
  FiMonitor,
  FiHardDrive,
  FiWifi,
  FiLayers,
  FiCloud,
  FiShield,
  FiTool,
  FiTarget,
} from 'react-icons/fi';
import { skillsConfig } from '../data/skills';
import { useViewport } from '../hooks/useViewport';
import SkillsBackground from './skills/SkillsBackground';
import SkillsRow from './skills/SkillsRow';

const iconMap = {
  code: <FiCode />,
  database: <FiDatabase />,
  gitBranch: <FiGitBranch />,
  server: <FiServer />,
  monitor: <FiMonitor />,
  cloud: <FiCloud />,
};

const techIcons = [
  <FiCode />, <FiDatabase />, <FiGitBranch />, <FiSettings />, <FiBarChart2 />,
  <FiCpu />, <FiServer />, <FiMonitor />, <FiHardDrive />, <FiWifi />, <FiLayers />,
  <FiCloud />, <FiShield />, <FiTool />, <FiTarget />
];

const SkillsSection = () => {
  const { width: windowWidth, isMobile } = useViewport();
  const { mainSkills, layout, animation } = skillsConfig;

  const decoratedSkills = useMemo(
    () => mainSkills.map((skill) => ({
      ...skill,
      icon: iconMap[skill.iconKey],
    })),
    [mainSkills]
  );

  const particles = useMemo(() => {
    const particleCount = Math.min(15, Math.floor(windowWidth / 50));

    return Array.from({ length: particleCount }, (_, i) => {
      const skill = decoratedSkills[i % decoratedSkills.length];

      return {
        delay: i * 1.2,
        startX: (i * 120 + Math.random() * 100) % windowWidth,
        startY: 50 + (i * 60) % 400,
        color: skill.color,
        size: ['small', 'medium', 'large'][i % 3],
      };
    });
  }, [decoratedSkills, windowWidth]);

  const backgroundIcons = useMemo(() => {
    const iconCount = Math.min(10, Math.floor(windowWidth / 70));

    return Array.from({ length: iconCount }, (_, i) => {
      const skill = decoratedSkills[i % decoratedSkills.length];

      return {
        delay: i * 3,
        startX: (i * 200 + Math.random() * 150) % windowWidth,
        startY: 100 + (i * 100) % 300,
        icon: techIcons[i % techIcons.length],
        color: skill.color,
      };
    });
  }, [decoratedSkills, windowWidth]);

  const circuitPatterns = useMemo(() => {
    const circuitCount = Math.min(8, Math.floor(windowWidth / 80));

    return Array.from({ length: circuitCount }, (_, i) => {
      const skill = decoratedSkills[i % decoratedSkills.length];

      return {
        delay: i * 4,
        startX: (i * 180 + Math.random() * 120) % windowWidth,
        startY: 80 + (i * 90) % 350,
        color: skill.color,
      };
    });
  }, [decoratedSkills, windowWidth]);

  const layoutConfig = useMemo(() => {
    if (isMobile) {
      return {
        rows: decoratedSkills.map((skill) => [skill])
      };
    }

    if (windowWidth < 1024) {
      const rows = [];
      for (let i = 0; i < decoratedSkills.length; i += 2) {
        rows.push(decoratedSkills.slice(i, i + 2));
      }

      return { rows };
    }

    const rows = [];
    for (let i = 0; i < decoratedSkills.length; i += layout.maxCardsPerRow) {
      rows.push(decoratedSkills.slice(i, i + layout.maxCardsPerRow));
    }

    return { rows };
  }, [decoratedSkills, isMobile, layout.maxCardsPerRow, windowWidth]);

  return (
    <section
      id="skills"
      className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 w-full overflow-hidden min-h-screen"
      style={{ fontFamily: "'SF Pro Display', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      <SkillsBackground
        particles={particles}
        backgroundIcons={backgroundIcons}
        circuitPatterns={circuitPatterns}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Technical{' '}
          <motion.span
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            style={{
              backgroundSize: '200% 100%'
            }}
          >
            Skills
          </motion.span>
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="skills-container space-y-6">
          {layoutConfig.rows.map((skills, rowIndex) => (
            <SkillsRow
              key={rowIndex}
              skills={skills}
              rowIndex={rowIndex}
              isMobile={isMobile}
              layout={layout}
              animation={animation}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center mt-12 gap-4"
        >
          {decoratedSkills.slice(0, Math.min(6, decoratedSkills.length)).map((skill, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full shadow-lg"
              style={{
                backgroundColor: `${skill.color}80`,
                boxShadow: `0 0 8px ${skill.color}40`
              }}
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2.5,
                delay: index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-white/50 text-sm font-medium">
            {decoratedSkills.length} Core Technology Areas | {layoutConfig.rows.length} {layoutConfig.rows.length === 1 ? 'Row' : 'Rows'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
