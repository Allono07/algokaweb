import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Landing from "@/components/Landing/Landing";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import StarField from "@/components/StarField/StarField";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
    </main>
  );
};

export default Index;
