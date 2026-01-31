import { motion } from "framer-motion";
import Flame from "../Flame/Flame";
import "./Rocket.css";

interface RocketProps {
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  rotation?: number;
}

const Rocket = ({ isHovered, onHoverStart, onHoverEnd, rotation = 0 }: RocketProps) => {
  return (
    <motion.div
      className="rocket-wrapper"
      style={{ rotate: rotation }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={{ scale: 1.05 }}
    >
      <div className="rocket">
        {/* Rocket SVG */}
        <svg
          viewBox="0 0 100 180"
          className="rocket-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Rocket body */}
          <defs>
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(0, 0%, 90%)" />
              <stop offset="50%" stopColor="hsl(0, 0%, 100%)" />
              <stop offset="100%" stopColor="hsl(0, 0%, 85%)" />
            </linearGradient>
            <linearGradient id="noseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(0, 85%, 55%)" />
              <stop offset="100%" stopColor="hsl(0, 75%, 45%)" />
            </linearGradient>
            <linearGradient id="finGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(0, 85%, 50%)" />
              <stop offset="100%" stopColor="hsl(0, 75%, 40%)" />
            </linearGradient>
            <linearGradient id="windowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(200, 100%, 70%)" />
              <stop offset="100%" stopColor="hsl(220, 100%, 40%)" />
            </linearGradient>
          </defs>

          {/* Main body */}
          <path
            d="M50 10 
               C65 25, 70 60, 70 100 
               L70 140 
               C70 145, 65 150, 50 150 
               C35 150, 30 145, 30 140 
               L30 100 
               C30 60, 35 25, 50 10Z"
            fill="url(#bodyGradient)"
            stroke="hsl(0, 0%, 70%)"
            strokeWidth="1"
          />

          {/* Nose cone */}
          <path
            d="M50 10 
               C60 20, 65 35, 65 50 
               L35 50 
               C35 35, 40 20, 50 10Z"
            fill="url(#noseGradient)"
          />

          {/* Window */}
          <circle
            cx="50"
            cy="75"
            r="12"
            fill="url(#windowGradient)"
            stroke="hsl(200, 50%, 50%)"
            strokeWidth="3"
          />
          {/* Window shine */}
          <ellipse
            cx="46"
            cy="71"
            rx="4"
            ry="6"
            fill="hsl(0, 0%, 100%)"
            opacity="0.6"
          />

          {/* Left fin */}
          <path
            d="M30 120 
               L10 160 
               L30 150 
               Z"
            fill="url(#finGradient)"
            stroke="hsl(0, 60%, 35%)"
            strokeWidth="1"
          />

          {/* Right fin */}
          <path
            d="M70 120 
               L90 160 
               L70 150 
               Z"
            fill="url(#finGradient)"
            stroke="hsl(0, 60%, 35%)"
            strokeWidth="1"
          />

          {/* Center fin */}
          <path
            d="M45 140 
               L50 170 
               L55 140 
               Z"
            fill="url(#finGradient)"
            stroke="hsl(0, 60%, 35%)"
            strokeWidth="1"
          />

          {/* Body stripes */}
          <rect x="30" y="95" width="40" height="5" fill="hsl(0, 85%, 50%)" />
          <rect x="30" y="105" width="40" height="5" fill="hsl(200, 100%, 50%)" />

          {/* Rivets/details */}
          <circle cx="35" cy="60" r="2" fill="hsl(0, 0%, 60%)" />
          <circle cx="65" cy="60" r="2" fill="hsl(0, 0%, 60%)" />
          <circle cx="35" cy="130" r="2" fill="hsl(0, 0%, 60%)" />
          <circle cx="65" cy="130" r="2" fill="hsl(0, 0%, 60%)" />
        </svg>

        {/* Flame component */}
        <Flame isHovered={isHovered} />
      </div>
    </motion.div>
  );
};

export default Rocket;
