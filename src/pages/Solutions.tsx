import "./Solutions.css";
import Navbar from "@/components/Navbar/Navbar";
import StarField from "@/components/StarField/StarField";

const Solutions = () => {
  return (
    <main className="solutions-page">
      <StarField />
      <Navbar />

      <header className="solutions-hero">
        <div className="solutions-hero-content">
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
        </div>

        <div className="solutions-hero-panel">
          <div className="solutions-panel-header">
            <span>Delivery model</span>
            <strong>2-6 weeks</strong>
          </div>
          <div className="solutions-panel-body">
            <div className="solutions-panel-item">
              <h3>Discovery sprint</h3>
              <p>Define the problem, align stakeholders, and validate data readiness.</p>
            </div>
            <div className="solutions-panel-item">
              <h3>Prototype & test</h3>
              <p>Ship a working pilot with real workflows and measurable KPIs.</p>
            </div>
            <div className="solutions-panel-item">
              <h3>Production launch</h3>
              <p>Deploy with monitoring, guardrails, and training for your team.</p>
            </div>
          </div>
        </div>
      </header>

      <section className="solutions-section">
        <div className="solutions-section-header">
          <h2>What we deliver</h2>
          <p>Focused solution tracks that map to your business outcomes.</p>
        </div>
        <div className="solutions-card-grid">
          <article className="solutions-card">
            <h3>Strategy & Roadmapping</h3>
            <p>
              Identify high-value use cases, create a phased rollout plan, and build the executive alignment needed for
              adoption.
            </p>
            <span className="solutions-card-tag">Workshops</span>
          </article>
          <article className="solutions-card">
            <h3>AI Product Builds</h3>
            <p>
              From copilots to customer-facing assistants, we design and ship production-grade AI experiences fast.
            </p>
            <span className="solutions-card-tag">Product</span>
          </article>
          <article className="solutions-card">
            <h3>Automation & Ops</h3>
            <p>
              Automate workflows, integrate with your stack, and establish governance for safe, scalable operations.
            </p>
            <span className="solutions-card-tag">Operations</span>
          </article>
        </div>
      </section>

      <section className="solutions-section solutions-process">
        <div className="solutions-section-header">
          <h2>How we work</h2>
          <p>A proven process that keeps teams aligned and momentum high.</p>
        </div>
        <div className="solutions-steps">
          <div className="solutions-step">
            <span>01</span>
            <h3>Align</h3>
            <p>Stakeholder interviews, KPI definition, and solution mapping.</p>
          </div>
          <div className="solutions-step">
            <span>02</span>
            <h3>Build</h3>
            <p>Rapid prototyping, feedback loops, and iterative releases.</p>
          </div>
          <div className="solutions-step">
            <span>03</span>
            <h3>Scale</h3>
            <p>Production hardening, monitoring, and enablement.</p>
          </div>
        </div>
      </section>

      <section className="solutions-cta-section">
        <div className="solutions-cta-card">
          <h2>Ready to launch your next solution?</h2>
          <p>Let us know what you want to build. We will respond within 24 hours with a clear plan.</p>
          <a className="solutions-primary" href="/#contact">
            Start a project
          </a>
        </div>
      </section>
    </main>
  );
};

export default Solutions;
