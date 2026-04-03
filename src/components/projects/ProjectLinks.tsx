import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { hasProjectLink } from '../../lib/projectLinks';
import type { Project } from '../../types';

interface ProjectLinksProps {
  project: Project;
  motionLinks?: boolean;
  compact?: boolean;
}

const ProjectLinks = ({ project, motionLinks = false, compact = false }: ProjectLinksProps) => {
  const GithubTag = motionLinks ? motion.a : 'a';
  const DemoTag = motionLinks ? motion.a : 'a';
  const motionProps = motionLinks ? {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  } : undefined;

  return (
    <div className={`flex flex-wrap ${compact ? 'gap-3' : 'gap-4'}`}>
      {hasProjectLink(project.links.github) && (
        <GithubTag
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 ${compact ? 'px-4 py-2' : 'px-6 py-3'} bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 text-white/80 hover:text-white border border-white/20`}
          {...motionProps}
        >
          <FiGithub />
          <span>Source Code</span>
        </GithubTag>
      )}
      {hasProjectLink(project.links.demo) && (
        <DemoTag
          href={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 ${compact ? 'px-4 py-2' : 'px-6 py-3'} rounded-lg transition-colors duration-200 text-white border-2`}
          style={{
            backgroundColor: `${project.color}20`,
            borderColor: project.color,
            color: project.color
          }}
          {...motionProps}
        >
          <FiExternalLink />
          <span>Live Demo</span>
        </DemoTag>
      )}
    </div>
  );
};

export default ProjectLinks;
