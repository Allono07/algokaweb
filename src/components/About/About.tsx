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
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-copy">
            <p className="about-eyebrow">{ABOUT_DATA.eyebrow}</p>
            <h2 className="about-title">{ABOUT_DATA.title}</h2>
            <p className="about-description">{ABOUT_DATA.description}</p>

            <ul className="about-highlights">
              {ABOUT_DATA.highlights.map((item, index) => (
                <li key={index} className="about-highlight-item">
                  <span className="about-highlight-dot" />
                  <span>{item}</span>
                </li>
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
          </div>

          <div className="about-visual">
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
                <div key={index} className="about-stat-card">
                  <span className="about-stat-value">{stat.value}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="about-floating-orb about-orb-one" />
            <div className="about-floating-orb about-orb-two" />
            <div className="about-floating-orb about-orb-three" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
