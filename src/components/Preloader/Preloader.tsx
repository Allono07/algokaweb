import { motion } from "framer-motion";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader-container" aria-label="Loading">
      <div className="preloader-ripple-wrap" aria-hidden>
        {[0, 0.42, 0.84].map((delay) => (
          <motion.span
            key={delay}
            className="preloader-ripple"
            animate={{ scale: [0.45, 3], opacity: [0.5, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: [0.22, 1, 0.36, 1],
              delay,
            }}
          />
        ))}
      </div>

      <motion.p
        className="preloader-brand"
        initial={{ opacity: 0, y: 10, letterSpacing: "0.08em" }}
        animate={{ opacity: 1, y: 0, letterSpacing: "0.14em" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        algoka.io
      </motion.p>
    </div>
  );
};

export default Preloader;
