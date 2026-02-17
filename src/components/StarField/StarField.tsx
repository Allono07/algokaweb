import { useMemo, useEffect } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";
import "./StarField.css";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  twinkleDelay: string;
  twinkleClass: string;
  moveClass: string;
}

const StarField = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * -0.05; // -5% movement
      const moveY = (clientY - window.innerHeight / 2) * -0.05;
      mouseX.set(moveX);
      mouseY.set(moveY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const stars = useMemo<Star[]>(() => {
    const starArray: Star[] = [];
    const animationClasses = ["animate-twinkle", "animate-twinkle-slow", "animate-twinkle-fast"];
    const moveClasses = ["animate-star-move-slow", "animate-star-move-mid", "animate-star-move-fast"];

    // Increased star count from 100 to 200 for higher concentration
    for (let i = 0; i < 200; i++) {
      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        twinkleDelay: `${Math.random() * 5}s`,
        twinkleClass: animationClasses[Math.floor(Math.random() * animationClasses.length)],
        moveClass: moveClasses[Math.floor(Math.random() * moveClasses.length)],
      });
    }
    return starArray;
  }, []);

  return (
    <motion.div
      className="starfield"
      style={{ x, y }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute ${star.moveClass}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
        >
          <div
            className={`star ${star.twinkleClass}`}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.twinkleDelay,
              position: "static"
            }}
          />
        </div>
      ))}
      {/* Larger glowing stars */}
      <div className="absolute animate-star-move-slow" style={{ left: "10%", top: "15%" }}>
        <div className="star star-large animate-twinkle-slow" style={{ position: "static" }} />
      </div>
      <div className="absolute animate-star-move-mid" style={{ left: "85%", top: "25%" }}>
        <div className="star star-large animate-twinkle" style={{ position: "static" }} />
      </div>
      <div className="absolute animate-star-move-fast" style={{ left: "25%", top: "60%" }}>
        <div className="star star-large animate-twinkle-fast" style={{ position: "static" }} />
      </div>
      <div className="absolute animate-star-move-slow" style={{ left: "70%", top: "70%" }}>
        <div className="star star-large animate-twinkle-slow" style={{ position: "static" }} />
      </div>
      <div className="absolute animate-star-move-mid" style={{ left: "45%", top: "10%" }}>
        <div className="star star-large animate-twinkle" style={{ position: "static" }} />
      </div>

      {/* Comets */}
      <div className="absolute animate-comet" style={{ animationDelay: "2s", animationDuration: "28s", top: 0, left: 0 }}>
        <div className="relative" style={{ transform: "rotate(135deg)" }}>
          <div className="comet">
            <div className="comet-tail" />
          </div>
        </div>
      </div>
      <div className="absolute animate-comet" style={{ animationDelay: "15s", animationDuration: "35s", top: "-20%", left: "10%" }}>
        <div className="relative" style={{ transform: "rotate(135deg)" }}>
          <div className="comet">
            <div className="comet-tail" />
          </div>
        </div>
      </div>
      <div className="absolute animate-comet" style={{ animationDelay: "8s", animationDuration: "22s", top: "30%", left: "-20%" }}>
        <div className="relative" style={{ transform: "rotate(135deg)" }}>
          <div className="comet">
            <div className="comet-tail" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StarField;
