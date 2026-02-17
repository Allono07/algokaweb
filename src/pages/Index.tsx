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

import Preloader from "@/components/Preloader/Preloader";

const Index = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if user has already visited in this session
    return !sessionStorage.getItem("hasVisited");
  });
  const location = useLocation();

  useEffect(() => {
    if (isLoading) {
      const preloadImages = async () => {
        const images = [
          "/algoka2.png",
          "/clouds.png",
          "/rocket.png",
          "/image2.png"
        ];

        const loadPromises = images.map((src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve; // Continue even if one fails
          });
        });

        // Add a minimum delay of 1.5s to show the flipper animation
        // This prevents flickering if images are already cached
        const minDelay = new Promise(resolve => setTimeout(resolve, 1500));

        try {
          await Promise.all([...loadPromises, minDelay]);
        } catch (error) {
          console.error("Error preloading images:", error);
        } finally {
          setIsLoading(false);
          sessionStorage.setItem("hasVisited", "true");
        }
      };

      preloadImages();
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
    return <Preloader />;
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
