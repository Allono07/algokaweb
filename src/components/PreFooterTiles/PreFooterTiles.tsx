import { motion } from "framer-motion";
import "./PreFooterTiles.css";

const tiles = [
  {
    title: "Accelerate time-to-value from AI",
    subtitle: "Find out how Algoka can help",
    cta: "Talk to an expert",
    href: "/#contact",
    variant: "solid",
  },
  {
    title: "Start using an AI agent today",
    subtitle: "Browse and deploy our pre-built templates",
    cta: "Marketplace",
    href: "/solutions",
    variant: "outline",
  },
] as const;

const PreFooterTiles = () => {
  return (
    <section className="pre-footer-tiles-section" aria-label="Call to action">
      <div className="pre-footer-tiles-container">
        {tiles.map((tile, index) => (
          <motion.article
            key={tile.title}
            className={`pre-footer-tile pre-footer-tile-${tile.variant}`}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pre-footer-tile-copy">
              <h3>{tile.title}</h3>
              <p>{tile.subtitle}</p>
            </div>
            <a href={tile.href} className={`pre-footer-tile-btn pre-footer-tile-btn-${tile.variant}`}>
              {tile.cta}
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default PreFooterTiles;
