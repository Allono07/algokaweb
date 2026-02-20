import { motion } from "framer-motion";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader-container" aria-label="Loading">
      <p className="preloader-brand">algoka.io</p>
      <div className="preloader-linear" aria-hidden>
        <motion.span
          className="preloader-linear-indicator"
          animate={{ x: ["-45%", "130%"] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
};

export default Preloader;
