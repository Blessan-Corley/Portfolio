import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLayers } from 'react-icons/fi';
import LightRays from './LightRays';
import ProjectNavItem from './projects/ProjectNavItem';
import ProjectMobileDetail from './projects/ProjectMobileDetail';
import ProjectDesktopDetail from './projects/ProjectDesktopDetail';
import { projectsData } from '../data/projects';
import { useViewport } from '../hooks/useViewport';

const ProjectsSection = () => {
  const { isMobile } = useViewport();
  const [activeProject, setActiveProject] = useState(projectsData[0]);

  return (
    <section
      id="projects"
      className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 w-full overflow-hidden"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="right"
          raysColor="#f0abfc"
          raysSpeed={1.0}
          lightSpread={1.5}
          rayLength={1.8}
          pulsating={false}
          fadeDistance={1.5}
          saturation={0.8}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.08}
          distortion={0.03}
        />
      </div>

      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="left"
          raysColor="#fb923c"
          raysSpeed={1.0}
          lightSpread={1.5}
          rayLength={1.5}
          pulsating={false}
          fadeDistance={1.5}
          saturation={0.5}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.08}
          distortion={0.03}
        />
      </div>

      <div className="absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent" />
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16,185,129,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px'
          }}
        />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Featured{' '}
            <motion.span
              className="bg-gradient-to-r from-purple-500 via-emerald-500 to-amber-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 100%'
              }}
            >
              Projects
            </motion.span>
          </h2>
          <p className="text-center text-white/60 mt-4 max-w-2xl mx-auto">
            From games to full-stack applications - building and learning through code
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {isMobile ? (
            <div className="space-y-8">
              <div className="space-y-4">
                {projectsData.map((project) => (
                  <ProjectNavItem
                    key={project.id}
                    project={project}
                    isActive={activeProject.id === project.id}
                    onClick={() => setActiveProject(project)}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <ProjectMobileDetail project={activeProject} />
              </AnimatePresence>
            </div>
          ) : (
            <div className="grid grid-cols-[minmax(300px,360px)_minmax(0,1fr)] gap-10 min-h-[600px] items-start">
              <div className="min-w-0">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="sticky top-8"
                >
                  <h3 className="text-xl font-semibold text-white/90 mb-6 flex items-center gap-2">
                    <FiLayers />
                    All Projects
                  </h3>
                  <div className="space-y-4 max-h-[500px] overflow-y-auto overflow-x-hidden pr-3 custom-scrollbar">
                    {projectsData.map((project) => (
                      <ProjectNavItem
                        key={project.id}
                        project={project}
                        isActive={activeProject.id === project.id}
                        onClick={() => setActiveProject(project)}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="min-w-0">
                <AnimatePresence mode="wait">
                  <ProjectDesktopDetail project={activeProject} />
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
