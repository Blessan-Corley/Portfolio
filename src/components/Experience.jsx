import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ExperienceAnimatedBackground from './ExperienceAnimatedBackground';
import { TextGenerateEffect } from './TextGenerateEffect';

const experiences = [
  {
    id: 1,
    company: "Kalaignar Karunanidhi Institute of Technology",
    role: "AI & DS Student",
    duration: "2023 – 2027",
    period: "2023-27",
    description: [
      "Studying AI & Data Science and surviving finals week.",
      "Practicing DSA with Python—recursion is finally less scary.",
      "Building projects to see if they actually work outside localhost.",
      "Attending workshops and collecting tech swag (because why not?)."
    ]
  },
  {
    id: 2,
    company: "Self-Directed Learning",
    role: "Full Stack Developer",
    duration: "2024 – Present",
    period: "2024-Present",
    description: [
      "From 'Hello World' to full-stack apps—leveling up.",
      "Mastered debugging, Stack Overflow, and actual understanding.",
      "Built games, chat apps, and random experiments.",
      "Learning deployment and why 'works on my machine' is not enough."
    ]
  },
  {
    id: 3,
    company: "Cloud Technologies",
    role: "AWS Explorer",
    duration: "2025 – Present",
    period: "2025-Present",
    description: [
      "Exploring AWS and realizing 'the cloud' is someone else's server.",
      "Experimenting with Docker, Kubernetes, and avoiding $10k bills.",
      "Applying cloud solutions in personal projects and learning fast."
    ]
  },
  {
    id: 4,
    company: "Next Chapter",
    role: "Looking for Opportunities",
    duration: "2026 – Future",
    period: "2026+",
    description: [
      "Ready to contribute clean, maintainable code (with minimal coffee spills).",
      "Excited to learn from experienced developers and grow.",
      "Open to tackling challenging projects and actually making them work."
    ]
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Use scroll progress to drive active index
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to experience index
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const total = experiences.length;
      const index = Math.min(
        Math.floor(latest * total),
        total - 1
      );
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const ExperienceCard = ({ exp, index }) => {
    const start = index / experiences.length;
    const end = (index + 1) / experiences.length;

    const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);
    const scale = useTransform(scrollYProgress, [start, end], [0.9, 1]);
    const y = useTransform(scrollYProgress, [start, end], [50, 0]);

    return (
      <motion.div
        style={{ opacity, scale, y }}
        className="w-full max-w-5xl mx-auto px-6 py-12"
      >
        <div className="flex flex-col lg:flex-row lg:gap-16 items-center lg:items-start">
          <div className="lg:w-1/3 flex flex-col items-center lg:items-end mb-8 lg:mb-0">
            <div className="text-center lg:text-right">
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{
                  background: 'linear-gradient(135deg, #ff6b35, #f7931e, #ffdd00, #4fc3f7)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '200% 200%'
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {exp.period}
              </motion.div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ duration: 0.6 }}
                className="h-0.5 mx-auto lg:ml-auto lg:mr-0 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #ff7b54, #42a5f5)'
                }}
              />
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 text-sm font-medium text-gray-300 bg-white/10 rounded-full border border-white/20">
                {exp.duration}
              </span>

              <motion.h2
                className="text-2xl md:text-3xl font-bold"
                style={{
                  background: 'linear-gradient(90deg, #ff7b54, #ffb347, #ffd700, #4fc3f7, #42a5f5)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '200% 200%'
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                {exp.role}
              </motion.h2>

              <p className="text-lg md:text-xl font-medium text-gray-300">
                {exp.company}
              </p>

              <div className="space-y-3 pt-2">
                {exp.description.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-gradient-to-br from-orange-400 to-blue-400" />
                    <p className="text-white/80 text-base leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative bg-black text-white w-full overflow-hidden"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      <ExperienceAnimatedBackground className="z-0" />
      <div className="relative z-10">
        {/* Header */}
        <div className="pt-20 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center px-6"
          >
            <div className="text-4xl md:text-5xl font-bold mb-6">
              <div className="flex flex-wrap justify-center items-baseline gap-3 md:gap-4">
                <TextGenerateEffect words="My" className="text-white" filter={true} duration={0.8} />
                <motion.span
                  className="inline-block font-bold"
                  style={{
                    background: 'linear-gradient(90deg, #ff7b54, #ffb347, #ffd700, #4fc3f7, #42a5f5)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '200% 200%'
                  }}
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  Experience
                </motion.span>
              </div>
            </div>
            <p className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl">
              My academic journey and technical growth in software development
            </p>
          </motion.div>
        </div>

        {/* Experience Cards */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center items-center gap-4 pb-12">
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
            <span className="text-white/60 text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 3, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-white/60"
            />
          </div>
          <div className="flex gap-2">
            {experiences.map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: index === activeIndex ? '#ffffff' : 'rgba(255,255,255,0.3)'
                }}
                animate={{ scale: index === activeIndex ? 1.2 : 1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;