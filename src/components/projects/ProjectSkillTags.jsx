import { motion } from 'framer-motion';

const ProjectSkillTags = ({ skills, color }) => (
  <div className="flex flex-wrap gap-2">
    {skills.map((skill, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
        className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/20 hover:bg-white/20 transition-colors duration-200"
        style={{ borderColor: `${color}30` }}
      >
        {typeof skill === 'object' ? skill.name : skill}
      </motion.span>
    ))}
  </div>
);

export default ProjectSkillTags;
