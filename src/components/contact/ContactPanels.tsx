import { motion } from 'framer-motion';
import type { ContactInfo } from '../../types';
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

const panelStyle = {
  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
};

const hoverCard = {
  scale: 1.02,
  y: -2,
  boxShadow: '0 8px 25px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)'
};

interface ContactInfoProps {
  contactInfo: ContactInfo;
}

interface QuickConnectPanelProps extends ContactInfoProps {
  copiedKey: string;
  onCopy: (text: string, key: string) => void | Promise<void>;
}

interface ResourcesPanelProps {
  portfolioUrl: string;
  onResumeDownload: () => void;
}

interface LetsTalkPanelProps {
  email: string;
}

export const QuickConnectPanel = ({ contactInfo, copiedKey, onCopy }: QuickConnectPanelProps) => (
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
      <motion.button
        type="button"
        className="group flex items-center gap-3 p-4 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer"
        style={panelStyle}
        whileHover={hoverCard}
        onClick={() => {
          void onCopy(contactInfo.email, 'email');
        }}
        whileTap={{ scale: 0.99 }}
      >
        <FiMail className="text-blue-400 flex-shrink-0 text-lg" />
        <span className="text-white/90 text-sm font-medium">{contactInfo.email}</span>
        {copiedKey === 'email'
          ? <FiCheck className="text-emerald-400 ml-auto group-hover:scale-110 transition-transform" />
          : <FiCopy className="text-white/50 ml-auto group-hover:text-white/80 transition-colors" />
        }
      </motion.button>
      <motion.button
        type="button"
        className="group flex items-center gap-3 p-4 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer"
        style={panelStyle}
        whileHover={hoverCard}
        onClick={() => {
          void onCopy(contactInfo.phone, 'phone');
        }}
        whileTap={{ scale: 0.99 }}
      >
        <FiPhone className="text-blue-400 flex-shrink-0 text-lg" />
        <span className="text-white/90 text-sm font-medium">{contactInfo.phone}</span>
        {copiedKey === 'phone'
          ? <FiCheck className="text-emerald-400 ml-auto group-hover:scale-110 transition-transform" />
          : <FiCopy className="text-white/50 ml-auto group-hover:text-white/80 transition-colors" />
        }
      </motion.button>
    </div>
  </motion.div>
);

export const LocationPanel = ({ contactInfo }: ContactInfoProps) => (
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
      <div className="flex items-center gap-3 p-4 rounded-xl border border-white/20" style={panelStyle}>
        <FiMapPin className="text-purple-400 flex-shrink-0 text-lg" />
        <span className="text-white/90 text-sm font-medium">{contactInfo.location}</span>
      </div>
      <div className="flex items-center gap-3 p-4 rounded-xl border border-white/20" style={panelStyle}>
        <FiClock className="text-purple-400 flex-shrink-0 text-lg" />
        <span className="text-white/90 text-sm font-medium">{contactInfo.timezone}</span>
      </div>
    </div>
  </motion.div>
);

export const StatusPanel = ({ contactInfo }: ContactInfoProps) => (
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
      <div className="flex items-center gap-3 p-4 rounded-xl border border-white/20" style={panelStyle}>
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
      <div className="flex items-center gap-3 p-4 rounded-xl border border-white/20" style={panelStyle}>
        <FiUser className="text-emerald-400 flex-shrink-0 text-lg" />
        <span className="text-white/90 text-sm font-medium">{contactInfo.workType}</span>
      </div>
    </div>
  </motion.div>
);

export const SocialLinksPanel = ({ contactInfo }: ContactInfoProps) => (
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
        style={panelStyle}
        whileHover={hoverCard}
      >
        <FiLinkedin className="text-cyan-400 flex-shrink-0 text-lg" />
        <span className="text-white/90 text-sm font-medium">-&gt; LinkedIn Profile</span>
        <FiExternalLink className="text-white/50 ml-auto group-hover:text-white/80 group-hover:scale-110 transition-all" />
      </motion.a>
      <motion.a
        href={contactInfo.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 p-4 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300"
        style={panelStyle}
        whileHover={hoverCard}
      >
        <FiGithub className="text-cyan-400 flex-shrink-0 text-lg" />
        <span className="text-white/90 text-sm font-medium">-&gt; GitHub Repos</span>
        <FiExternalLink className="text-white/50 ml-auto group-hover:text-white/80 group-hover:scale-110 transition-all" />
      </motion.a>
    </div>
  </motion.div>
);

export const ResourcesPanel = ({ portfolioUrl, onResumeDownload }: ResourcesPanelProps) => (
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
        onClick={onResumeDownload}
        className="group flex items-center gap-3 p-4 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 w-full"
        style={panelStyle}
        whileHover={hoverCard}
        whileTap={{ scale: 0.98 }}
      >
        <FiDownload className="text-orange-400 flex-shrink-0 text-lg" />
        <span className="text-white/90 text-sm font-medium">-&gt; Resume.pdf</span>
        <FiDownload className="ml-auto text-white/50 group-hover:text-white/80 group-hover:scale-110 transition-all" />
      </motion.button>
      <motion.a
        href={portfolioUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 p-4 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300"
        style={panelStyle}
        whileHover={hoverCard}
      >
        <FiCode className="text-orange-400 flex-shrink-0 text-lg" />
        <span className="text-white/90 text-sm font-medium">-&gt; Portfolio Site</span>
        <FiExternalLink className="text-white/50 ml-auto group-hover:text-white/80 group-hover:scale-110 transition-all" />
      </motion.a>
    </div>
  </motion.div>
);

export const LetsTalkPanel = ({ email }: LetsTalkPanelProps) => (
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
        onClick={() => {
          window.location.href = `mailto:${email}`;
        }}
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
);
