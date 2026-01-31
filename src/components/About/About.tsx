import "./About.css";

const ABOUT_DATA = {
  title: "About Us",
  description: "We are a forward-thinking team dedicated to solving complex problems with elegant solutions.",
  stats: [
    { label: "Years Experience", value: "10+" },
    { label: "Projects Delivered", value: "50+" },
    { label: "Team Members", value: "20+" }
  ],
  content: "At Algoka, we believe in the power of algorithms to transform businesses. Our mission is to bridge the gap between theoretical computer science and practical application. We specialize in creating robust, scalable, and efficient software solutions tailored to your unique needs."
};

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">{ABOUT_DATA.title}</h2>
        <p className="about-description">{ABOUT_DATA.description}</p>
        
        <div className="about-content">
          <div className="about-text">
            <p>{ABOUT_DATA.content}</p>
          </div>
          
          <div className="about-stats">
            {ABOUT_DATA.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
