import { motion } from "framer-motion";
import "./Preloader.css";

const Preloader = () => {
    return (
        <div className="preloader-container">
            <motion.div
                className="flipper"
                animate={{
                    rotateY: [0, 180, 360],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {/* Front Face */}
                <div className="flipper-face">
                    <span>AL</span>
                </div>

                {/* Back Face */}
                <div className="flipper-face flipper-back">
                    <span>GO</span>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8 text-xl font-bold tracking-widest text-primary animate-pulse"
            >
                LOADING...
            </motion.div>
        </div>
    );
};

export default Preloader;
