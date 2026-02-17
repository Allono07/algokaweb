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
  const [isLaunching, setIsLaunching] = useState(false);
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

  // Launch vector state
  const [launchVector, setLaunchVector] = useState({ x: 0, y: -1000 });

  const handleRocketClick = () => {
    const r = rocketRotation.get();
    // Assuming 0 rotation is straight up. 
    // Rotation is clockwise in degrees.
    // We want to fly "forward" in the direction of rotation.
    // degrees to radians
    const rad = (r * Math.PI) / 180;

    // Calculate vector (fly distance ~ 150vh effectively)
    // 0 deg -> sin(0)=0, cos(0)=1 -> x=0, y=-dist (Up)
    // 90 deg -> sin(90)=1, cos(90)=0 -> x=dist, y=0 (Right)
    const dist = window.innerHeight * 1.5;
    const dx = Math.sin(rad) * dist;
    const dy = -Math.cos(rad) * dist;

    setLaunchVector({ x: dx, y: dy });
    setIsLaunching(true);
  };

  const handleExploreClick = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="landing" ref={containerRef} id="home">

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
              zIndex: isLaunching ? 100 : 20, // Bring to front when launching
            }}
          >
            <motion.div
              className="rocket-float-wrapper"
              animate={isLaunching ? {
                x: launchVector.x,
                y: launchVector.y,
                scale: 0.5,  // Fly away into distance
                opacity: 0
              } : {
                y: [0, -8, 0],
                x: 0,
                scale: 1,
                opacity: 1
              }}
              transition={isLaunching ? {
                duration: 1.5,
                ease: [0.4, 0, 0.2, 1] // Accelerate out (easeIn)
              } : {
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
                onClick={handleRocketClick}
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
            {/* Magnetic Button */}
            <motion.div
              style={{ position: "relative" }}
              onMouseMove={(e) => {
                const { currentTarget, clientX, clientY } = e;
                const { left, top, width, height } = currentTarget.getBoundingClientRect();
                const x = clientX - (left + width / 2);
                const y = clientY - (top + height / 2);
                currentTarget.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translate(0px, 0px)";
              }}
              className="inline-block"
            >
              <motion.button
                onClick={handleExploreClick}
                className="landing-cta relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ transition: "transform 0.1s ease-out" }}
              >
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex items-center gap-2">
                  <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
                  Explore
                </div>
              </motion.button>
            </motion.div>
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
