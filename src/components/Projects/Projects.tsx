import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
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

const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full w-full"
    >
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="h-full w-full"
      >
        {children}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Our Projects</h2>
        <div className="projects-grid">
          {PROJECTS_DATA.map((project, index) => (
            <TiltCard key={index}>
              <div className="project-card h-full">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
