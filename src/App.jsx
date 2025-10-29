import { lazy, Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load heavy components
const AboutText = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const SkillsSection = lazy(() => import("./components/SkillsSection"));
const ProjectsSection = lazy(() => import("./components/Projects"));
const ContactSection = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Loading fallback component
const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-black text-white">
      <SpeedInsights />
      <Navbar />
      <Hero />
      
      <Suspense fallback={<SectionLoader />}>
        <AboutText />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Experience />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <SkillsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ProjectsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;