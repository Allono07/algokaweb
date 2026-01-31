import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, animate } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import Rocket from "../Rocket/Rocket";
import StageLabels from "../StageLabels/StageLabels";
import StarField from "../StarField/StarField";
import Clouds from "../Clouds/Clouds";
import "./Landing.css";

const Landing = () => {
  const isMobile = useIsMobile();
  const [isRocketHovered, setIsRocketHovered] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(animationRef, { amount: 0.3 });
  
  // Motion values for rocket position
  const progress = useMotionValue(0);
  
  // Responsive animation values
  const rocketXRange = isMobile ? ["25%", "50%", "75%"] : ["10%", "45%", "80%"];
  const rocketYRange = isMobile ? ["80%", "45%", "15%"] : ["80%", "50%", "15%"];
  
  const rocketX = useTransform(progress, [0, 0.5, 1], rocketXRange);
  const rocketY = useTransform(progress, [0, 0.5, 1], ["80%", "50%", "10%"]);
  const rocketRotation = useTransform(progress, [0, 0.5, 1], [15, 30, 45]);
  
  // Scroll-based animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Auto-play animation on mount and when coming back into view
  useEffect(() => {
    if (isInView && !hasPlayed) {
      // Small delay for initial load
      const timeout = setTimeout(() => {
        animate(progress, 1, {
          duration: 4,
          ease: [0.25, 0.1, 0.25, 1],
        });
        setHasPlayed(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isInView, hasPlayed, progress]);

  // Replay animation when scrolling back
  useEffect(() => {
    if (!isInView && hasPlayed) {
      progress.set(0);
      setHasPlayed(false);
    }
  }, [isInView, hasPlayed, progress]);

  // Get current progress for labels
  const [currentProgress, setCurrentProgress] = useState(0);
  useEffect(() => {
    const unsubscribe = progress.on("change", (v) => setCurrentProgress(v));
    return unsubscribe;
  }, [progress]);

  // Stage label positions (relative to animation container)
  const labelPositions = isMobile ? {
    build: { x: "20%", y: "65%" },
    solve: { x: "40%", y: "40%" },
    think: { x: "50%", y: "15%" },
  } : {
 build: { x: "30%", y: "65%" },
    solve: { x: "50%", y: "40%" },
    think: { x: "70%", y: "15%" },
  };

  const pathD = isMobile 
    ? "M 50 500 Q 100 350 300 100" 
    : "M 50 650 Q 100 400 250 350 Q 400 300 450 100";

  return (
    <section className="landing" ref={containerRef}>
      <StarField />

      <div className="landing-content">
        {/* Left side - Animation area */}
        <div className="landing-animation" ref={animationRef}>
          {/* SVG path for visual reference (optional, hidden by default) */}
          <svg className="motion-path-svg" viewBox={isMobile ? "0 0 400 600" : "0 0 600 700"} preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary) / 0.1)" />
                <stop offset="100%" stopColor="hsl(var(--primary) / 0.3)" />
              </linearGradient>
            </defs>
            <path
              d={pathD}
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="2"
              strokeDasharray="10 5"
              className="motion-path"
            />
          </svg>

          {/* Stage Labels */}
          <StageLabels progress={currentProgress} positions={labelPositions} />

          {/* Rocket following the path */}
          <motion.div
            className="rocket-motion-container"
            style={{
              left: rocketX,
              top: rocketY,
            }}
          >
            <motion.div
              className="rocket-float-wrapper"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Rocket
                isHovered={isRocketHovered}
                onHoverStart={() => setIsRocketHovered(true)}
                onHoverEnd={() => setIsRocketHovered(false)}
                rotation={rocketRotation.get()}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Right side - Content area */}
        <div className="landing-text">
          <motion.div
            className="landing-text-content"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="landing-heading">
              <span className="landing-heading-accent">ALGOKA</span>
              <br />
              Solutions for Tomorrow
            </h1>
            <p className="landing-subheading">
              We build intelligent systems that transform your business.
             
            </p>
            <motion.button
              className="landing-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <span className="landing-cta-arrow">→</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      <Clouds />

      {/* Replay button */}
      {/* <motion.button
        className="replay-btn"
        onClick={() => {
          progress.set(0);
          setTimeout(() => {
            animate(progress, 1, {
              duration: 4,
              ease: [0.25, 0.1, 0.25, 1],
            });
          }, 100);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
      >
        ↻ Replay
      </motion.button> */}
    </section>
  );
};

export default Landing;
