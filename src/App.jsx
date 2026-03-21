import { lazy, Suspense, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { SpeedInsights } from "@vercel/speed-insights/react";

const loadAbout = () => import("./components/About");
const loadExperience = () => import("./components/Experience");
const loadSkillsSection = () => import("./components/SkillsSection");
const loadProjectsSection = () => import("./components/Projects");
const loadCompetitiveProgramming = () => import("./components/CompetitiveProgramming");
const loadContactSection = () => import("./components/Contact");
const loadFooter = () => import("./components/Footer");

const AboutText = lazy(loadAbout);
const Experience = lazy(loadExperience);
const SkillsSection = lazy(loadSkillsSection);
const ProjectsSection = lazy(loadProjectsSection);
const CompetitiveProgramming = lazy(loadCompetitiveProgramming);
const ContactSection = lazy(loadContactSection);
const Footer = lazy(loadFooter);

const deferredSectionLoaders = [
  loadAbout,
  loadExperience,
  loadSkillsSection,
  loadProjectsSection,
  loadCompetitiveProgramming,
  loadContactSection,
  loadFooter,
];

const SectionFallback = ({ minHeight = "min-h-screen" }) => (
  <div
    aria-hidden="true"
    className={`w-full bg-black ${minHeight}`}
  />
);

function App() {
  useEffect(() => {
    const preloadSections = () => {
      deferredSectionLoaders.forEach((loader) => {
        void loader();
      });
    };

    if (typeof window === "undefined") {
      return undefined;
    }

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(preloadSections, { timeout: 2500 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(preloadSections, 1200);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-black text-white">
      <SpeedInsights />
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionFallback minHeight="min-h-[30rem]" />}>
        <AboutText />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionFallback minHeight="min-h-[42rem]" />}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback minHeight="min-h-[48rem]" />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback minHeight="min-h-[32rem]" />}>
        <CompetitiveProgramming />
      </Suspense>
      <Suspense fallback={<SectionFallback minHeight="min-h-[32rem]" />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<SectionFallback minHeight="min-h-[20rem]" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
