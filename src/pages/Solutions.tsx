import "./Solutions.css";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import StarField from "@/components/StarField/StarField";
import Footer from "@/components/Footer/Footer";
import PreFooterTiles from "@/components/PreFooterTiles/PreFooterTiles";
import { IS_MODERN_THEME } from "@/config/theme";

const Solutions = () => {
  return (
    <main className="solutions-page">
      {!IS_MODERN_THEME && <StarField />}
      <Navbar />

      <motion.header
        className="solutions-hero"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="solutions-hero-content"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="solutions-eyebrow">Solutions</p>
          <h1 className="solutions-title">
            AI solutions built for speed, clarity, and measurable impact.
          </h1>
          <p className="solutions-subtitle">
            We help ambitious teams move from idea to production with strategy, rapid prototyping, and full-scale
            deployment. Every engagement is tailored to your data, your stack, and your goals.
          </p>
          <div className="solutions-cta">
            <a className="solutions-primary" href="/#contact">
              Talk to us
            </a>
            <a className="solutions-secondary" href="/#projects">
              View projects
            </a>
          </div>
        </motion.div>

        <motion.div
          className="solutions-hero-panel"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="solutions-panel-header">
            <span>Delivery model</span>
            <strong>2-6 weeks</strong>
          </div>
          <div className="solutions-panel-body">
            <motion.div
              className="solutions-panel-item"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.9 }}
              transition={{ duration: 0.35, delay: 0.02, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3>Discovery sprint</h3>
              <p>Define the problem, align stakeholders, and validate data readiness.</p>
            </motion.div>
            <motion.div
              className="solutions-panel-item"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.9 }}
              transition={{ duration: 0.35, delay: 0.09, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3>Prototype & test</h3>
              <p>Ship a working pilot with real workflows and measurable KPIs.</p>
            </motion.div>
            <motion.div
              className="solutions-panel-item"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.9 }}
              transition={{ duration: 0.35, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3>Production launch</h3>
              <p>Deploy with monitoring, guardrails, and training for your team.</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.header>

      <motion.section
        className="solutions-section"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="solutions-section-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>What we deliver</h2>
          <p>Focused solution tracks that map to your business outcomes.</p>
        </motion.div>
        <div className="solutions-card-grid">
          <motion.article
            className="solutions-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.02, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>Strategy & Roadmapping</h3>
            <p>
              Identify high-value use cases, create a phased rollout plan, and build the executive alignment needed for
              adoption.
            </p>
            <span className="solutions-card-tag">Workshops</span>
          </motion.article>
          <motion.article
            className="solutions-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>AI Product Builds</h3>
            <p>
              From copilots to customer-facing assistants, we design and ship production-grade AI experiences fast.
            </p>
            <span className="solutions-card-tag">Product</span>
          </motion.article>
          <motion.article
            className="solutions-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>Automation & Ops</h3>
            <p>
              Automate workflows, integrate with your stack, and establish governance for safe, scalable operations.
            </p>
            <span className="solutions-card-tag">Operations</span>
          </motion.article>
          <motion.article
            className="solutions-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>App Development</h3>
            <p>
              Building robust mobile applications for iOS and Android, ensuring seamless performance and user experience.
            </p>
            <span className="solutions-card-tag">Mobile</span>
          </motion.article>
          <motion.article
            className="solutions-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>Web Development</h3>
            <p>
              Creating responsive, scalable, and high-performance web applications tailored to your business needs.
            </p>
            <span className="solutions-card-tag">Web</span>
          </motion.article>
        </div>
      </motion.section>

      <motion.section
        className="solutions-section solutions-process"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="solutions-section-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>How we work</h2>
          <p>A proven process that keeps teams aligned and momentum high.</p>
        </motion.div>
        <div className="solutions-steps">
          <motion.div
            className="solutions-step"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.03, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>01</span>
            <h3>Align</h3>
            <p>Stakeholder interviews, KPI definition, and solution mapping.</p>
          </motion.div>
          <motion.div
            className="solutions-step"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>02</span>
            <h3>Build</h3>
            <p>Rapid prototyping, feedback loops, and iterative releases.</p>
          </motion.div>
          <motion.div
            className="solutions-step"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.17, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>03</span>
            <h3>Scale</h3>
            <p>Production hardening, monitoring, and enablement.</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="solutions-cta-section"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="solutions-cta-card"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>Ready to launch your next solution?</h2>
          <p>Let us know what you want to build. We will respond within 24 hours with a clear plan.</p>
          <a className="solutions-primary" href="/#contact">
            Start a project
          </a>
        </motion.div>
      </motion.section>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      >
        <PreFooterTiles />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Footer />
      </motion.div>
    </main>
  );
};

export default Solutions;
