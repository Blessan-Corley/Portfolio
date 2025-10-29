import React, { lazy, Suspense, useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const AboutText = lazy(() => 
  import("./components/About").catch(() => ({ default: () => null }))
);
const Experience = lazy(() => 
  import("./components/Experience").catch(() => ({ default: () => null }))
);
const SkillsSection = lazy(() => 
  import("./components/SkillsSection").catch(() => ({ default: () => null }))
);
const ProjectsSection = lazy(() => 
  import("./components/Projects").catch(() => ({ default: () => null }))
);
const ContactSection = lazy(() => 
  import("./components/Contact").catch(() => ({ default: () => null }))
);
const Footer = lazy(() => 
  import("./components/Footer").catch(() => ({ default: () => null }))
);

const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
      <p className="text-white/60 text-sm">Loading section...</p>
    </div>
  </div>
);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center px-6 max-w-md">
            <h2 className="text-white text-2xl mb-4 font-bold">Something went wrong</h2>
            <p className="text-white/60 mb-6">
              We encountered an error. Please try refreshing the page.
            </p>
            <button 
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-semibold"
              type="button"
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

  useEffect(() => {
    // Prevent layout shift on scroll
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.scrollbarGutter = 'stable';
    
    return () => {
      document.documentElement.style.scrollbarGutter = '';
    };
  }, []);

  if (!isMounted) return null;

  return (
    <ErrorBoundary>
      <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
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