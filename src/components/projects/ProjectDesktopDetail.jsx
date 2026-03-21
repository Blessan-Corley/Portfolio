import { motion } from 'framer-motion';
import { FiActivity, FiCalendar, FiCode, FiTrendingUp, FiUser } from 'react-icons/fi';
import ProjectStatusBadge from './ProjectStatusBadge';
import ProjectSkillTags from './ProjectSkillTags';
import ProjectLinks from './ProjectLinks';

const ProjectDesktopDetail = ({ project }) => (
  <motion.div
    key={project.id}
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -30 }}
    transition={{ duration: 0.4 }}
    className="bg-white/5 rounded-xl p-8 border border-white/10 backdrop-blur-sm"
  >
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-5 h-5 rounded-full"
          style={{ backgroundColor: project.color }}
        />
        <h3 className="text-3xl font-bold text-white">
          {project.title}
        </h3>
      </div>
      <ProjectStatusBadge status={project.status} type={project.type} />
      <div className="flex items-center gap-4 text-white/60 text-sm">
        <div className="flex items-center gap-2">
          <FiCalendar />
          {project.period}
        </div>
        <div className="flex items-center gap-2">
          <FiUser />
          {project.category}
        </div>
      </div>
    </div>

    <div className="mb-8">
      <p className="text-white/80 leading-relaxed text-lg">
        {project.longDescription}
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
            <FiCode className="text-lg" />
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-3 py-2 bg-white/10 rounded-lg text-sm text-white/80 border border-white/20 hover:bg-white/20 transition-colors duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
            <FiActivity className="text-lg" />
            Key Features
          </h4>
          <ul className="space-y-3">
            {project.achievements.map((achievement, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 text-white/80"
              >
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: project.color }}
                />
                {achievement}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div>
          <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
            <FiTrendingUp className="text-lg" />
            Skills
          </h4>
          <ProjectSkillTags skills={project.skills.map((skill) => skill.name)} color={project.color} />
        </div>
      </div>
    </div>

    <div className="mt-8 pt-6 border-t border-white/10">
      <ProjectLinks project={project} motionLinks={true} />
    </div>
  </motion.div>
);

export default ProjectDesktopDetail;
