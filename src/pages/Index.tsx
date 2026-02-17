import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
import Landing from "@/components/Landing/Landing";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import StarField from "@/components/StarField/StarField";
import Footer from "@/components/Footer/Footer";
import { USE_AGENCY_THEME } from "@/config/theme";
import AgencyHome from "./AgencyHome";

const Index = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if user has already visited in this session
    return !sessionStorage.getItem("hasVisited");
  });
  const location = useLocation();

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) return;

    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId = location.hash.replace("#", "");
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isLoading, location.hash]);

  if (USE_AGENCY_THEME) {
    return <AgencyHome />;
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <div className="text-xl font-semibold text-primary animate-pulse">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <StarField />
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
