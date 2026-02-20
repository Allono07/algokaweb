import type { CSSProperties } from "react";
import { motion } from "framer-motion";

const PARTICLES = [
  { x: 14, y: 36, size: 8, duration: 6.2, delay: 0.1 },
  { x: 26, y: 18, size: 10, duration: 5.8, delay: 0.4 },
  { x: 78, y: 20, size: 7, duration: 6.6, delay: 0.9 },
  { x: 86, y: 42, size: 9, duration: 6.1, delay: 0.2 },
  { x: 18, y: 72, size: 7, duration: 6.8, delay: 0.7 },
  { x: 72, y: 82, size: 11, duration: 5.6, delay: 0.5 },
  { x: 50, y: 12, size: 6, duration: 7, delay: 0.3 },
  { x: 48, y: 88, size: 8, duration: 6.4, delay: 0.8 },
] as const;

const ModernOrb = () => {
  return (
    <div className="modern-orb-wrap" aria-hidden>
      <motion.div
        className="modern-orb-backdrop"
        animate={{ scale: [1, 1.06, 1], opacity: [0.82, 1, 0.82] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="modern-orb-ring modern-orb-ring-one"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="modern-orb-ring modern-orb-ring-two"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="modern-orb-core"
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.span
          className="modern-orb-core-highlight"
          animate={{ x: ["-10%", "18%", "-10%"], opacity: [0.72, 1, 0.72] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="modern-orb-particles">
        {PARTICLES.map((particle, index) => (
          <motion.span
            key={`${particle.x}-${particle.y}-${index}`}
            className="modern-orb-particle"
            style={
              {
                "--particle-x": `${particle.x}%`,
                "--particle-y": `${particle.y}%`,
                "--particle-size": `${particle.size}px`,
              } as CSSProperties
            }
            animate={{ y: [0, -14, 0], opacity: [0.28, 0.95, 0.28], scale: [0.86, 1.24, 0.86] }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ModernOrb;
