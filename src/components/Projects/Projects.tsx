import "./Projects.css";

interface Project {
  title: string;
  description: string;
  tags: string[];
}

const PROJECTS_DATA: Project[] = [
  {
    title: "Project Alpha",
    description: "A revolutionary AI platform for predictive analytics, helping businesses anticipate market trends.",
    tags: ["AI", "Python", "React"]
  },
  {
    title: "Project Beta",
    description: "Blockchain solution for supply chain transparency, ensuring traceability from source to consumer.",
    tags: ["Blockchain", "Solidity", "TypeScript"]
  },
  {
    title: "Project Gamma",
    description: "Next-gen e-commerce experience with VR integration for immersive product previews.",
    tags: ["VR", "Three.js", "Commerce"]
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Our Projects</h2>
        <div className="projects-grid">
          {PROJECTS_DATA.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
