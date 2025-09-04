import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiLinkedin,
  FiGithub,
  FiDownload,
  FiExternalLink,
  FiCopy,
  FiCheck,
  FiMonitor,
  FiMessageCircle,
  FiUser,
  FiCode
} from 'react-icons/fi';

const ContactSection = () => {
  const [copied, setCopied] = useState('');
  const [isOnline, setIsOnline] = useState(true);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(prev => prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  const handleResumeDownload = () => {
    
    const resumePath = `${import.meta.env.BASE_URL}/resume/Blessan_resume.pdf`;
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Blessan_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactInfo = {
    email: "blessancorley@gmail.com",
    phone: "+91-9976768211",
    location: "Coimbatore, Tamil Nadu",
    timezone: "GMT +5:30",
    linkedin: "https://www.linkedin.com/in/blessan-corley-a-9662642a6",
    github: "https://github.com/Blessan-Corley",
    status: "Open to opportunities",
    workType: "Remote/Hybrid/On-site OK"
  };

  return (
    <section
      id="contact"
      className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 w-full overflow-hidden"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      {/* Seamless Black Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Pure black background for seamless transition */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Subtle warm gradient orbs - very minimal */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-gray-800/8 to-gray-700/6 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-900/10 to-gray-800/8 rounded-full blur-3xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-zinc-800/6 to-stone-800/4 rounded-full blur-3xl"
          animate={{
            x: [0, 20, -15, 0],
            y: [0, -15, 10, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.02, 0.04, 0.02] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's{' '}
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Connect
            </motion.span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Ready to bring your ideas to life? Let's build something amazing together!
          </p>
        </motion.div>

        {/* Glass Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ 
            duration: 1, 
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="max-w-6xl mx-auto"
        >
          {/* Glass Terminal Header */}
          <motion.div 
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-t-2xl p-4 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-red-500"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-yellow-500"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-green-500"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
                <span className="text-white/90 text-sm font-medium">CONTACT</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-emerald-400"
                    animate={{ 
                      opacity: [1, 0.4, 1],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-emerald-400 text-sm font-medium">ONLINE</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Glass Dashboard Content */}
          <motion.div 
            className="relative bg-white/5 backdrop-blur-xl border-x border-b border-white/10 rounded-b-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}
          >
            {/* Top Row */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* Quick Connect */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-blue-400 font-semibold text-lg flex items-center gap-2">
                  <FiPhone className="text-lg" />
                  QUICK CONNECT
                </h3>
                <div className="space-y-3">
                  <motion.div
                    className="group flex items-center gap-3 p-4 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -2,
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)'
                    }}
                    onClick={() => handleCopyToClipboard(contactInfo.email, 'email')}
                  >
                    <FiMail className="text-blue-400 flex-shrink-0 text-lg" />
                    <span className="text-white/90 text-sm font-medium">{contactInfo.email}</span>
                    {copied === 'email' ? 
                      <FiCheck className="text-emerald-400 ml-auto group-hover:scale-110 transition-transform" /> : 
                      <FiCopy className="text-white/50 ml-auto group-hover:text-white/80 transition-colors" />
                    }
                  </motion.div>
                  <motion.div
                    className="group flex items-center gap-3 p-4 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -2,
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)'
                    }}
                    onClick={() => handleCopyToClipboard(contactInfo.phone, 'phone')}
                  >
                    <FiPhone className="text-blue-400 flex-shrink-0 text-lg" />
                    <span className="text-white/90 text-sm font-medium">{contactInfo.phone}</span>
                    {copied === 'phone' ? 
                      <FiCheck className="text-emerald-400 ml-auto group-hover:scale-110 transition-transform" /> : 
                      <FiCopy className="text-white/50 ml-auto group-hover:text-white/80 transition-colors" />
                    }
                  </motion.div>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h3 className="text-purple-400 font-semibold text-lg flex items-center gap-2">
                  <FiMapPin className="text-lg" />
                  LOCATION
                </h3>
                <div className="space-y-3">
                  <div 
                    className="flex items-center gap-3 p-4 rounded-xl border border-white/20"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}
                  >
                    <FiMapPin className="text-purple-400 flex-shrink-0 text-lg" />
                    <span className="text-white/90 text-sm font-medium">{contactInfo.location}</span>
                  </div>
                  <div 
                    className="flex items-center gap-3 p-4 rounded-xl border border-white/20"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}
                  >
                    <FiClock className="text-purple-400 flex-shrink-0 text-lg" />
                    <span className="text-white/90 text-sm font-medium">{contactInfo.timezone}</span>
                  </div>
                </div>
              </motion.div>

              {/* Status */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="text-emerald-400 font-semibold text-lg flex items-center gap-2">
                  <FiMonitor className="text-lg" />
                  STATUS
                </h3>
                <div className="space-y-3">
                  <div 
                    className="flex items-center gap-3 p-4 rounded-xl border border-white/20"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}
                  >
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-emerald-400 flex-shrink-0"
                      animate={{ 
                        opacity: [1, 0.5, 1],
                        boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0.7)', '0 0 0 4px rgba(34, 197, 94, 0)', '0 0 0 0 rgba(34, 197, 94, 0.7)']
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-white/90 text-sm font-medium">{contactInfo.status}</span>
                  </div>
                  <div 
                    className="flex items-center gap-3 p-4 rounded-xl border border-white/20"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}
                  >
                    <FiUser className="text-emerald-400 flex-shrink-0 text-lg" />
                    <span className="text-white/90 text-sm font-medium">{contactInfo.workType}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom Row */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {/* Social Links */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <h3 className="text-cyan-400 font-semibold text-lg flex items-center gap-2">
                  <FiExternalLink className="text-lg" />
                  SOCIAL LINKS
                </h3>
                <div className="space-y-3">
                  <motion.a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -2,
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)'
                    }}
                  >
                    <FiLinkedin className="text-cyan-400 flex-shrink-0 text-lg" />
                    <span className="text-white/90 text-sm font-medium">→ LinkedIn Profile</span>
                    <FiExternalLink className="text-white/50 ml-auto group-hover:text-white/80 group-hover:scale-110 transition-all" />
                  </motion.a>
                  <motion.a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -2,
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)'
                    }}
                  >
                    <FiGithub className="text-cyan-400 flex-shrink-0 text-lg" />
                    <span className="text-white/90 text-sm font-medium">→ GitHub Repos</span>
                    <FiExternalLink className="text-white/50 ml-auto group-hover:text-white/80 group-hover:scale-110 transition-all" />
                  </motion.a>
                </div>
              </motion.div>

              {/* Resources */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <h3 className="text-orange-400 font-semibold text-lg flex items-center gap-2">
                  <FiDownload className="text-lg" />
                  RESOURCES
                </h3>
                <div className="space-y-3">
                  <motion.button
                    onClick={handleResumeDownload}
                    className="group flex items-center gap-3 p-4 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 w-full"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -2,
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiDownload className="text-orange-400 flex-shrink-0 text-lg" />
                    <span className="text-white/90 text-sm font-medium">→ Resume.pdf</span>
                    <div className="ml-auto text-white/50 group-hover:text-white/80 group-hover:scale-110 transition-all">⬇️</div>
                  </motion.button>
                  <motion.a
                    href="#"
                    className="group flex items-center gap-3 p-4 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -2,
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)'
                    }}
                  >
                    <FiCode className="text-orange-400 flex-shrink-0 text-lg" />
                    <span className="text-white/90 text-sm font-medium">→ Portfolio Site</span>
                    <FiExternalLink className="text-white/50 ml-auto group-hover:text-white/80 group-hover:scale-110 transition-all" />
                  </motion.a>
                </div>
              </motion.div>

              {/* Let's Talk */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <h3 className="text-pink-400 font-semibold text-lg flex items-center gap-2">
                  <FiMessageCircle className="text-lg" />
                  LET'S TALK
                </h3>
                <div 
                  className="p-6 rounded-xl border border-white/20"
                  style={{
                    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
                  }}
                >
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    Ready to collaborate on your next project!
                  </p>
                  <motion.button
                    className="px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-300 relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #ec4899 0%, #3b82f6 100%)',
                      boxShadow: '0 4px 16px rgba(236, 72, 153, 0.3)'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 8px 25px rgba(236, 72, 153, 0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.location.href = `mailto:${contactInfo.email}`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10">Send Message</span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;