import { motion } from 'framer-motion';
import { FiActivity, FiCode, FiTrendingUp } from 'react-icons/fi';
import type { Project } from '../../types';
import ProjectStatusBadge from './ProjectStatusBadge';
import ProjectSkillTags from './ProjectSkillTags';
import ProjectLinks from './ProjectLinks';

interface ProjectMobileDetailProps {
  project: Project;
}

const ProjectMobileDetail = ({ project }: ProjectMobileDetailProps) => (
  <motion.div
    key={project.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm"
  >
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: project.color }}
        />
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>
      </div>
      <ProjectStatusBadge status={project.status} type={project.type} />
    </div>

    <p className="text-white/80 leading-relaxed mb-6">
      {project.longDescription}
    </p>

    <div className="mb-6">
      <h4 className="text-white/90 font-semibold mb-3 flex items-center gap-2">
        <FiCode className="text-lg" />
        Technologies
      </h4>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    <div className="mb-6">
      <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
        <FiTrendingUp className="text-lg" />
        Skills
      </h4>
      <ProjectSkillTags skills={project.skills.map((skill) => skill.name)} color={project.color} />
    </div>

    <div className="mb-6">
      <h4 className="text-white/90 font-semibold mb-3 flex items-center gap-2">
        <FiActivity className="text-lg" />
        Key Features
      </h4>
      <ul className="space-y-2">
        {project.achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-2 text-white/80">
            <div
              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
              style={{ backgroundColor: project.color }}
            />
            {achievement}
          </li>
        ))}
      </ul>
    </div>

    <ProjectLinks project={project} compact={true} />
  </motion.div>
);

export default ProjectMobileDetail;
