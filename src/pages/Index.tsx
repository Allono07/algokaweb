import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
import Landing from "@/components/Landing/Landing";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import MarketingPartner from "@/components/MarketingPartner/MarketingPartner";
import Contact from "@/components/Contact/Contact";
import StarField from "@/components/StarField/StarField";
import Footer from "@/components/Footer/Footer";
import PreFooterTiles from "@/components/PreFooterTiles/PreFooterTiles";
import { IS_MODERN_THEME, USE_AGENCY_THEME } from "@/config/theme";
import AgencyHome from "./AgencyHome";

import Preloader from "@/components/Preloader/Preloader";

const Index = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if user has already visited in this session.
    return !sessionStorage.getItem("hasVisited");
  });
  const location = useLocation();

  useEffect(() => {
    if (!isLoading) return;

    let isActive = true;
    const minDelayMs = IS_MODERN_THEME ? 1200 : 1500;

    const preloadImages = async () => {
      if (IS_MODERN_THEME) return;

      const images = ["/algoka2.webp", "/clouds.webp", "/rocket.webp", "/image2.webp"];

      const loadPromises = images.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => resolve();
          }),
      );

      await Promise.all(loadPromises);
    };

    const startLoader = async () => {
      try {
        await Promise.all([preloadImages(), new Promise<void>((resolve) => window.setTimeout(resolve, minDelayMs))]);
      } catch (error) {
        console.error("Error while loading startup assets:", error);
      } finally {
        if (isActive) {
          setIsLoading(false);
          sessionStorage.setItem("hasVisited", "true");
        }
      }
    };

    startLoader();

    return () => {
      isActive = false;
    };
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
      {!IS_MODERN_THEME && <StarField />}
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <MarketingPartner />
      <Contact />
      <PreFooterTiles />
      <Footer />
    </main>
  );
};

export default Index;
