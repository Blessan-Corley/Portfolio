import { motion } from 'framer-motion';

const ProjectNavItem = ({ project, isActive, onClick }) => (
  <motion.button
    type="button"
    className={`w-full text-left cursor-pointer p-4 rounded-lg transition-all duration-300 border ${
      isActive
        ? 'bg-white/10 border-white/20 shadow-lg'
        : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/15'
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex items-center gap-3 mb-2">
      <div
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: project.color }}
      />
      <h3 className="font-semibold text-white text-sm md:text-base">
        {project.title}
      </h3>
    </div>
    <p className="text-white/60 text-xs md:text-sm mb-2">{project.category}</p>
    <p className="text-white/50 text-xs">{project.period}</p>
  </motion.button>
);

export default ProjectNavItem;
