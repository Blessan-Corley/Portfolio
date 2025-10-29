import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { TextGenerateEffect } from './TextGenerateEffect';
import Carousel from './Carousel';
import {
  Code2,
  Boxes,
  Layers,
  CloudCog,
  GraduationCap,
} from "lucide-react";

const About = () => {
  const [baseWidth, setBaseWidth] = useState(350);
  const sectionRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        setBaseWidth(width < 1024 ? Math.min(350, width - 60) : 400);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth, { passive: true });
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <section
      ref={sectionRef}
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
              <span>Hey, I'm Blessan, an </span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">
                AI & Data Science student
              </span>
              <span> at Kalaignar Karunanidhi Institute of Technology — I just like building stuff that doesn't crash on demo day.</span>
            </div>

            <div className="text-lg md:text-xl leading-relaxed font-medium font-[Inter,sans-serif] text-gray-200 mb-6">
              <span>I'm into </span>
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent font-bold">
                Full Stack Development, Python DSA,
              </span>
              <span> and all things </span>
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent font-bold">
                Cloud
              </span>
              <span> — basically anything that keeps me curious (and mildly sleep-deprived). Still learning, still experimenting, and still pretending I know what "production ready" means.</span>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 w-full flex items-start justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full max-w-sm lg:max-w-md mx-auto lg:mx-0">
              <Carousel
                baseWidth={baseWidth}
                autoplay={true}
                autoplayDelay={3500}
                pauseOnHover={true}
                loop={true}
                round={false}
                items={[
                  {
                    title: "Python & DSA Enthusiast",
                    description: "Solving problems one algorithm at a time. Sometimes elegantly, sometimes with brute force.",
                    id: 1,
                    icon: (props) => <Code2 size={16} strokeWidth={2} color="white" {...props} />,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png",
                  },
                  {
                    title: "Building Stuff",
                    description: "From games to full-stack platforms. If it compiles (eventually), I've probably built it.",
                    id: 2,
                    icon: (props) => <Boxes size={16} strokeWidth={2} color="white" {...props} />,
                  },
                  {
                    title: "Full Stack Explorer",
                    description: "React, Next.js, Node.js, databases - learning the entire stack one Stack Overflow answer at a time.",
                    id: 3,
                    icon: (props) => <Layers size={16} strokeWidth={2} color="white" {...props} />,
                  },
                  {
                    title: "Cloud Curious",
                    description: "Diving into AWS. Turns out 'the cloud' is just someone else's computer, but it's pretty cool.",
                    id: 4,
                    icon: (props) => <CloudCog size={16} strokeWidth={2} color="white" {...props} />,
                  },
                  {
                    title: "KIT Student",
                    description: "3rd Year AI&DS at Kalaignar Karunanidhi Institute of Technology. Learning, building, breaking, fixing.",
                    id: 5,
                    icon: (props) => <GraduationCap size={16} strokeWidth={2} color="white" {...props} />,
                  },
                ]}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;