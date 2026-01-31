import { motion } from "framer-motion";
import Flame from "../Flame/Flame";
import "./Rocket.css";

interface RocketProps {
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  rotation?: number;
  onClick?: () => void;
}

const Rocket = ({ isHovered, onHoverStart, onHoverEnd, rotation = 0, onClick }: RocketProps) => {
  return (
    <motion.div
      className="rocket-wrapper"
      style={{ rotate: rotation }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      cursor="pointer"
    >
      <div className="rocket">
        {/* Rocket Image - User providing rocket.png in public folder */}
        <img 
          src="/rocket.png" 
          alt="Rocket" 
          className="rocket-img"
        />

        {/* Flame component */}
        <Flame isHovered={isHovered} />
      </div>
    </motion.div>
  );
};

export default Rocket;
