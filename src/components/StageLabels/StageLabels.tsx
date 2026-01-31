import { motion } from "framer-motion";
import "./StageLabels.css";

interface StageLabelProps {
  label: string;
  isVisible: boolean;
  position: { x: number | string; y: number | string };
  delay?: number;
}

const StageLabel = ({ label, isVisible, position, delay = 0 }: StageLabelProps) => {
  return (
    <motion.div
      className="stage-label"
      style={{ left: position.x, top: position.y }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={
        isVisible
          ? { opacity: 1, scale: 1 }
          : { opacity: 0.3, scale: 0.9 }
      }
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
    >
      <span className="stage-label-text">{label}</span>
      <div className="stage-label-glow" />
    </motion.div>
  );
};

interface StageLabelsProps {
  progress: number; // 0 to 1
  positions: {
    build: { x: number | string; y: number | string };
    solve: { x: number | string; y: number | string };
    think: { x: number | string; y: number | string };
  };
}

const StageLabels = ({ progress, positions }: StageLabelsProps) => {
  // Labels appear progressively based on rocket progress
  const buildVisible = progress >= 0.1;
  const solveVisible = progress >= 0.4;
  const thinkVisible = progress >= 0.7;

  return (
    <div className="stage-labels-container">
      <StageLabel
        label="THINK"
        isVisible={buildVisible}
        position={positions.build}
        delay={0}
      />
      <StageLabel
        label="SOLVE"
        isVisible={solveVisible}
        position={positions.solve}
        delay={0.1}
      />
      <StageLabel
        label="BUILD"
        isVisible={thinkVisible}
        position={positions.think}
        delay={0.2}
      />
    </div>
  );
};

export default StageLabels;
