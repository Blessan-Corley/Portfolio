import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import { contactInfo, resumeFileName, resumePath } from '../data/site';
import ContactBackground from './contact/ContactBackground';
import {
  QuickConnectPanel,
  LocationPanel,
  StatusPanel,
  SocialLinksPanel,
  ResourcesPanel,
  LetsTalkPanel
} from './contact/ContactPanels';

const ContactSection = () => {
  const { copiedKey, copy } = useCopyToClipboard();

  const floatingParticles = useMemo(
    () => Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    })),
    []
  );

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="contact"
      className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 w-full overflow-hidden"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      <ContactBackground particles={floatingParticles} />

      <div className="relative z-10">
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
                  <motion.div className="w-3 h-3 rounded-full bg-red-500" animate={{ opacity: [1, 0.7, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                  <motion.div className="w-3 h-3 rounded-full bg-yellow-500" animate={{ opacity: [1, 0.7, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
                  <motion.div className="w-3 h-3 rounded-full bg-green-500" animate={{ opacity: [1, 0.7, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} />
                </div>
                <span className="text-white/90 text-sm font-medium">CONTACT</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-emerald-400"
                    animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-emerald-400 text-sm font-medium">ONLINE</span>
                </div>
              </div>
            </div>
          </motion.div>

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
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <QuickConnectPanel contactInfo={contactInfo} copiedKey={copiedKey} onCopy={copy} />
              <LocationPanel contactInfo={contactInfo} />
              <StatusPanel contactInfo={contactInfo} />
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <SocialLinksPanel contactInfo={contactInfo} />
              <ResourcesPanel portfolioUrl={contactInfo.portfolio} onResumeDownload={handleResumeDownload} />
              <LetsTalkPanel email={contactInfo.email} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
