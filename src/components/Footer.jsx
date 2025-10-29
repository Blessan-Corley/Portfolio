import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiHeart,
  FiArrowUp,
  FiCoffee,
  FiSend,
  FiExternalLink
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/Blessan-Corley", label: "GitHub", color: "#ffffff" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/blessan-corley-a-9662642a6", label: "LinkedIn", color: "#0a66c2" },
    { icon: FiMail, href: "mailto:blessancorley@gmail.com", label: "Email", color: "#ea4335" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white" role="contentinfo">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        {!shouldReduceMotion && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/6 w-72 h-72 bg-gradient-to-r from-gray-800/4 to-gray-700/3 rounded-full blur-3xl"
              animate={{
                x: [0, 20, 0],
                y: [0, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />
            <motion.div
              className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-zinc-800/5 to-stone-800/3 rounded-full blur-3xl"
              animate={{
                x: [0, -15, 0],
                y: [0, 20, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />
          </>
        )}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Blessan Corley
                </h3>
                <p className="text-sm text-blue-400/80 mt-2">Full Stack Developer</p>
              </div>
              <p className="text-white/70 leading-relaxed mb-6 max-w-md">
                Building digital experiences with code. Sometimes it works on the first try, 
                but usually after a few cups of coffee and Stack Overflow visits.
              </p>

              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-2 h-2 rounded-full bg-emerald-400"
                  animate={!shouldReduceMotion ? {
                    opacity: [1, 0.5, 1],
                    scale: [1, 1.2, 1]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  aria-label="Online status"
                />
                <span className="text-emerald-400 text-sm font-medium">Open to opportunities</span>
              </div>

              <div className="flex items-center gap-2 text-white/60 text-sm">
                <FiMapPin className="w-4 h-4 flex-shrink-0" />
                Coimbatore, Tamil Nadu, India
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h4 className="font-semibold mb-6 text-white/90 text-lg">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300 flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                      whileHover={!shouldReduceMotion ? { x: 5 } : {}}
                    >
                      <span className="w-1.5 h-1.5 bg-white/40 rounded-full group-hover:bg-blue-400 transition-all duration-300" />
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="font-semibold mb-6 text-white/90 text-lg">Let's Connect</h4>

              <div className="grid grid-cols-4 gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                    whileHover={!shouldReduceMotion ? {
                      scale: 1.15,
                      y: -3,
                      boxShadow: `0 10px 25px ${social.color}20`
                    } : {}}
                    whileTap={!shouldReduceMotion ? { scale: 0.95 } : {}}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>

              <div className="space-y-3">
                <motion.a
                  href="mailto:blessancorley@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg text-white/70 hover:text-white text-sm transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                  whileHover={!shouldReduceMotion ? {
                    scale: 1.02,
                    x: 5,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
                  } : {}}
                >
                  <FiSend className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  Get in touch
                  <FiExternalLink className="w-3 h-3 ml-auto opacity-60" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-2 text-white/60 text-sm"
            >
              <span>© {currentYear} Built with</span>
              {!shouldReduceMotion && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FiHeart className="w-4 h-4 text-red-400" />
                </motion.div>
              )}
              <span>and</span>
              {!shouldReduceMotion && (
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FiCoffee className="w-4 h-4 text-amber-400" />
                </motion.div>
              )}
              <span>by Blessan Corley</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 text-white/50 text-xs"
            >
              <span>React</span>
              <span>•</span>
              <span>Framer Motion</span>
              <span>•</span>
              <span>Tailwind CSS</span>
              <span>•</span>
              <span>Vite</span>
            </motion.div>

            <motion.button
              type="button"
              onClick={scrollToTop}
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
              whileHover={!shouldReduceMotion ? {
                scale: 1.1,
                y: -3,
                boxShadow: '0 10px 25px rgba(59, 130, 246, 0.2)'
              } : {}}
              whileTap={!shouldReduceMotion ? { scale: 0.95 } : {}}
              aria-label="Back to top"
            >
              <FiArrowUp className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;