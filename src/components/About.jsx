import { motion } from 'framer-motion';
import { TextGenerateEffect } from './TextGenerateEffect';
import Carousel from './Carousel';
import { aboutHighlights } from '../data/about';
import { useViewport } from '../hooks/useViewport';
import {
  Code2,
  Boxes,
  Layers,
  CloudCog,
  GraduationCap,
} from "lucide-react";

const About = () => {
  const { width } = useViewport();
  const aboutIcons = {
    code2: Code2,
    boxes: Boxes,
    layers: Layers,
    cloudCog: CloudCog,
    graduationCap: GraduationCap,
  };

  const carouselItems = aboutHighlights.map((item) => {
    const Icon = aboutIcons[item.iconKey];

    return {
      ...item,
      icon: (props) => <Icon size={16} strokeWidth={2} color="white" {...props} />,
    };
  });

  return (
    <section
      id="about"
      className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 w-full overflow-hidden"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="text-4xl md:text-5xl font-bold mb-4">
            <div className="flex flex-wrap justify-center items-baseline gap-2 md:gap-3">
              <TextGenerateEffect
                words="About"
                className="text-center"
                filter={true}
                duration={0.8}
              />
              <motion.span
                className="bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent inline-block"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                style={{
                  backgroundSize: '200% 200%',
                  animationDuration: '4s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'ease-in-out'
                }}
              >
                Me
              </motion.span>
            </div>
          </div>
          <p className="text-white/60 max-w-2xl mx-auto text-lg px-4">
            The story behind the semicolons
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start justify-between gap-12">
          <motion.div
            className="lg:w-1/2 w-full flex flex-col justify-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-lg md:text-xl leading-relaxed font-semibold font-[Inter,sans-serif] text-gray-200 mb-6">
              <span>Hey, I'm Blessan, a </span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">
                full stack developer
              </span>
              <span> and AI & Data Science student at Kalaignar Karunanidhi Institute of Technology. I like building products that hold up under real users, not just clean demos.</span>
            </div>

            <div className="text-lg md:text-xl leading-relaxed font-medium font-[Inter,sans-serif] text-gray-200 mb-6">
              <span>My recent work focuses on </span>
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent font-bold">
                Next.js, React, Node.js, TypeScript, testing, and backend architecture
              </span>
              <span>, with a parallel obsession for </span>
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent font-bold">
                DSA and competitive programming
              </span>
              <span>. I enjoy shipping polished experiences, tightening performance, and backing features with tests instead of guesswork.</span>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 w-full flex items-start justify-center lg:justify-end lg:pr-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full lg:ml-auto lg:mr-0 max-w-sm lg:max-w-md mx-auto lg:mx-0">
              <Carousel
                baseWidth={width < 1024 ? Math.min(350, width - 60) : 400}
                autoplay={true}
                autoplayDelay={3500}
                pauseOnHover={true}
                loop={true}
                round={false}
                items={carouselItems}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
