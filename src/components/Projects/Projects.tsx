import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Projects.css";

interface Testimonial {
  title: string;
  quote: string;
  author: string;
  role: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    title: "Enterprise AI Transformation",
    quote: "“Algoka delivered a robust AI ecosystem aligned with our long-term digital strategy.” Their team demonstrated exceptional technical depth and strategic insight while architecting our AI infrastructure. The solution was not only scalable and secure but also seamlessly integrated into our existing enterprise systems. Algoka operates with the discipline and governance standards expected from top-tier technology partners.",
    author: "Vikram Sethi",
    role: "Chief Technology Officer, Apex Global Systems"
  },
  {
    title: "Large-Scale Application Development",
    quote: "“Execution excellence from architecture to deployment.” Algoka designed and deployed our enterprise-grade mobile application with precision. Their structured development methodology, documentation standards, and performance optimization exceeded expectations. The product has scaled reliably across multiple markets without compromise in stability.",
    author: "Ananya Rao",
    role: "VP – Digital Products, StratEdge Technologies"
  },
  {
    title: "Corporate Web & Platform Engineering",
    quote: "“A high-performance digital platform built for scale.” Algoka re-engineered our web infrastructure with a clear focus on scalability, cybersecurity, and conversion optimization. Their ability to balance design sophistication with backend resilience positioned us strongly in a competitive market. The measurable uplift in performance metrics validated our decision to partner with them.",
    author: "Rohan Mehta",
    role: "Director – Technology & Innovation, Vertex Consulting Group"
  },
  {
    title: "End-to-End Digital Transformation Partner",
    quote: "“Strategic thinking combined with world-class execution.” What differentiates Algoka is their consultative approach. They didn’t simply develop software — they co-created a technology roadmap aligned with our business objectives. From AI integration to full-stack platform deployment, their team maintained enterprise governance standards while delivering on aggressive timelines.",
    author: "Sana Khanna",
    role: "Chief Operating Officer, NovaCore Enterprises"
  }
];

const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
      className="relative h-full w-full perspective-1000"
    >
      <div
        style={{
          transform: "translateZ(30px)",
          transformStyle: "preserve-3d",
        }}
        className="h-full w-full"
      >
        {children}
      </div>
    </motion.div>
  );
};

const row1 = [...TESTIMONIALS_DATA];
const row2 = [...TESTIMONIALS_DATA].reverse();

const ProjectCardBody = ({ testimonial }: { testimonial: Testimonial }) => (
  <>
    <div className="project-card-header relative z-10">

      <h3 className="project-card-title">{testimonial.title}</h3>
    </div>
    <div className="flex-grow relative z-10">
      <p className="project-card-desc">{testimonial.quote}</p>
    </div>
    <div className="project-card-footer mt-auto pt-6 border-t border-white/10 flex items-center gap-4 relative z-10">
      <div className="avatar transparent-glow">
        {testimonial.author.charAt(0)}
      </div>
      <div>
        <div className="author-name">{testimonial.author}</div>
        <div className="author-role">{testimonial.role}</div>
      </div>
    </div>
  </>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="testimonial-wrapper">
    <TiltCard>
      <div className="project-card h-full flex flex-col">
        <ProjectCardBody testimonial={testimonial} />
      </div>
    </TiltCard>
  </div>
);

const Projects = () => {
  const [mobileIndex, setMobileIndex] = useState(0);
  const totalSlides = TESTIMONIALS_DATA.length;

  const goToPrevious = () => {
    setMobileIndex((current) => (current === 0 ? totalSlides - 1 : current - 1));
  };

  const goToNext = () => {
    setMobileIndex((current) => (current === totalSlides - 1 ? 0 : current + 1));
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="marquee-container">
          {/* First Row: Scrolling Left */}
          <div className="marquee-row">
            <div className="marquee-content scroll-left">
              <div className="marquee-strip">
                {row1.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </div>
              <div className="marquee-strip" aria-hidden="true">
                {row1.map((testimonial, index) => (
                  <TestimonialCard key={index + 'dupe'} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>

          {/* Second Row: Scrolling Right */}
          <div className="marquee-row mt-8">
            <div className="marquee-content scroll-right">
              <div className="marquee-strip">
                {row2.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </div>
              <div className="marquee-strip" aria-hidden="true">
                {row2.map((testimonial, index) => (
                  <TestimonialCard key={index + 'dupe'} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="projects-mobile-slider">
          <div className="projects-mobile-viewport">
            <div
              className="projects-mobile-track"
              style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
            >
              {TESTIMONIALS_DATA.map((testimonial, index) => (
                <div className="projects-mobile-slide" key={`mobile-${index}`}>
                  <div className="project-card mobile-project-card h-full flex flex-col">
                    <ProjectCardBody testimonial={testimonial} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="projects-mobile-controls">
            <button
              type="button"
              className="projects-mobile-btn"
              onClick={goToPrevious}
              aria-label="Previous project"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="projects-mobile-btn"
              onClick={goToNext}
              aria-label="Next project"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
