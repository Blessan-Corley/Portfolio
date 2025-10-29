import { lazy, Suspense, useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Better lazy loading with explicit .default handling
const AboutText = lazy(() => import("./components/About").then(m => ({ default: m.default })));
const Experience = lazy(() => import("./components/Experience").then(m => ({ default: m.default })));
const SkillsSection = lazy(() => import("./components/SkillsSection").then(m => ({ default: m.default })));
const ProjectsSection = lazy(() => import("./components/Projects").then(m => ({ default: m.default })));
const ContactSection = lazy(() => import("./components/Contact").then(m => ({ default: m.default })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.default })));

// Improved Loading fallback
const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
      <p className="text-white/60 text-sm">Loading...</p>
    </div>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <p className="text-white text-lg mb-4">Something went wrong</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default App;