import { motion } from "framer-motion";
import "./About.css";

const ABOUT_DATA = {
  eyebrow: "About Us",
  title: "Landing ideas into production-grade AI systems.",
  description:
    "Algoka is a product engineering team focused on practical AI adoption. We help teams scope the right use cases, build fast, and launch reliable systems that are measurable from day one.",
  highlights: [
    "Strategy to production in one workflow",
    "Enterprise-grade architecture and governance",
    "Human-centered UX with technical depth"
  ],
  stats: [
    { label: "Projects Shipped", value: "60+" },
    { label: "Avg. Delivery Cycle", value: "2-6 weeks" },
    { label: "Client Retention", value: "94%" },
    { label: "Production Uptime", value: "99.9%" }
  ],
  profile: {
    name: "Algoka Team",
    role: "AI Engineers & Product Builders",
    message: "Let us build your next intelligent product."
  }
};

const About = () => {
  return (
    <motion.section
      className="about-section"
      id="about"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="about-container">
        <div className="about-content">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="about-eyebrow">{ABOUT_DATA.eyebrow}</p>
            <h2 className="about-title">{ABOUT_DATA.title}</h2>
            <p className="about-description">{ABOUT_DATA.description}</p>

            <ul className="about-highlights">
              {ABOUT_DATA.highlights.map((item, index) => (
                <motion.li
                  key={index}
                  className="about-highlight-item"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.9 }}
                  transition={{ duration: 0.32, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="about-highlight-dot" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="about-actions">
              <a href="#contact" className="about-primary-cta">
                Get Started
              </a>
              <a href="/solutions" className="about-secondary-cta">
                View Solutions
              </a>
            </div>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-blob" />
            <div className="about-image-frame">
              <img
                src="/personabout.png"
                alt="Friendly Algoka team illustration"
                className="about-image"
                loading="lazy"
              />
            </div>
            <div className="about-profile-card">
              <div className="about-avatar">A</div>
              <div className="about-profile-content">
                <p className="about-profile-name">{ABOUT_DATA.profile.name}</p>
                <p className="about-profile-role">{ABOUT_DATA.profile.role}</p>
              </div>
            </div>
            <div className="about-message-bubble">{ABOUT_DATA.profile.message}</div>

            <div className="about-stats-grid">
              {ABOUT_DATA.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="about-stat-card"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.9 }}
                  transition={{ duration: 0.36, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="about-stat-value">{stat.value}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="about-floating-orb about-orb-one" />
            <div className="about-floating-orb about-orb-two" />
            <div className="about-floating-orb about-orb-three" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
