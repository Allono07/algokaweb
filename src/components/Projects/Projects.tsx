import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, type PanInfo } from "framer-motion";
import "./Projects.css";

interface Testimonial {
  title: string;
  quote: string;
  author: string;
  role: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    title: "Microsoft",
    quote:
      "Our strategic partnership with Algoka marks a significant milestone in our mission to accelerate enterprise AI transformation. By integrating Algoka's advanced conversational and GenAI capabilities with Microsoft's robust cloud and AI services, we are enabling enterprises to adopt AI at scale and with enterprise-grade security.",
    author: "Mark Jackson",
    role: "Director, Global HR Technology",
  },
  {
    title: "AMD",
    quote:
      "In the moments that matter most, employees want to connect with people. Algoka frees HR professionals to engage with the employees they serve and be present in the interactions that deliver higher satisfaction.",
    author: "Rohan Mehta",
    role: "VP, Enterprise Systems",
  },
  {
    title: "AWS",
    quote:
      "We are excited to expand our collaboration and reinforce our shared commitment to empowering customers in the AI era with secure, scalable platforms.",
    author: "Elena Brooks",
    role: "Head of Cloud Partnerships",
  },
  {
    title: "Vertex",
    quote:
      "As a global leader in AI, we saw a clear opportunity to bring that leadership into our own workplace. Our work with Algoka shows what is possible when you use AI to enhance how people work, connect, and lead.",
    author: "Sana Khanna",
    role: "Chief Operating Officer",
  },
  {
    title: "NovaCore",
    quote:
      "Algoka's team brought enterprise-level discipline to every sprint. They aligned stakeholders fast and delivered a reliable production launch on schedule.",
    author: "Vikram Sethi",
    role: "Chief Technology Officer",
  },
];

const getLayout = (width: number) => {
  if (width < 768) return { cardsPerView: 1, gap: 16 };
  if (width < 1200) return { cardsPerView: 2, gap: 20 };
  return { cardsPerView: 4, gap: 24 };
};

const Projects = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const wheelAccumulatorRef = useRef(0);
  const wheelTimerRef = useRef<number | null>(null);
  const wheelLockTimerRef = useRef<number | null>(null);
  const isWheelLockedRef = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [gap, setGap] = useState(24);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateLayout = () => {
      const { cardsPerView: nextCards, gap: nextGap } = getLayout(window.innerWidth);
      setCardsPerView(nextCards);
      setGap(nextGap);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    const updateCardWidth = () => {
      if (!viewportRef.current) return;

      const viewportWidth = viewportRef.current.clientWidth;
      const calculated = (viewportWidth - gap * (cardsPerView - 1)) / cardsPerView;
      setCardWidth(calculated);
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, [cardsPerView, gap]);

  const maxIndex = Math.max(0, TESTIMONIALS_DATA.length - cardsPerView);
  const step = cardWidth + gap;
  const maxTranslate = maxIndex * step;
  const targetX = -(currentIndex * step);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    return () => {
      if (wheelTimerRef.current !== null) {
        window.clearTimeout(wheelTimerRef.current);
      }
      if (wheelLockTimerRef.current !== null) {
        window.clearTimeout(wheelLockTimerRef.current);
      }
    };
  }, []);

  const sliderTrackStyle = useMemo(
    () => ({
      gap: `${gap}px`,
    }),
    [gap]
  );

  const slideStyle = useMemo(
    () => ({
      width: cardWidth > 0 ? `${cardWidth}px` : undefined,
      minWidth: cardWidth > 0 ? `${cardWidth}px` : undefined,
    }),
    [cardWidth]
  );

  const handlePrevious = () => setCurrentIndex((current) => Math.max(0, current - 1));
  const handleNext = () => setCurrentIndex((current) => Math.min(maxIndex, current + 1));

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (cardWidth <= 0) return;

    const dragThreshold = cardWidth * 0.18;
    const swipeVelocity = 520;

    if (info.offset.x <= -dragThreshold || info.velocity.x <= -swipeVelocity) {
      handleNext();
      return;
    }

    if (info.offset.x >= dragThreshold || info.velocity.x >= swipeVelocity) {
      handlePrevious();
    }
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const dominantDelta =
      Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;

    if (Math.abs(dominantDelta) < 2) return;

    const direction = dominantDelta > 0 ? 1 : -1;
    const atStart = currentIndex === 0;
    const atEnd = currentIndex === maxIndex;

    // Allow normal page scroll if slider cannot move in requested direction.
    if ((direction < 0 && atStart) || (direction > 0 && atEnd)) {
      return;
    }

    event.preventDefault();

    if (isWheelLockedRef.current) {
      return;
    }

    // Resistive wheel threshold: users can scroll naturally and it snaps after intent is clear.
    wheelAccumulatorRef.current += dominantDelta * 0.14;
    const threshold = 132;
    let didNavigate = false;

    if (wheelAccumulatorRef.current >= threshold) {
      handleNext();
      wheelAccumulatorRef.current = 0;
      didNavigate = true;
    } else if (wheelAccumulatorRef.current <= -threshold) {
      handlePrevious();
      wheelAccumulatorRef.current = 0;
      didNavigate = true;
    }

    if (wheelTimerRef.current !== null) {
      window.clearTimeout(wheelTimerRef.current);
    }

    wheelTimerRef.current = window.setTimeout(() => {
      wheelAccumulatorRef.current *= 0.12;
      if (Math.abs(wheelAccumulatorRef.current) < 1) {
        wheelAccumulatorRef.current = 0;
      }
    }, 80);

    if (didNavigate) {
      isWheelLockedRef.current = true;
      if (wheelLockTimerRef.current !== null) {
        window.clearTimeout(wheelLockTimerRef.current);
      }
      wheelLockTimerRef.current = window.setTimeout(() => {
        isWheelLockedRef.current = false;
      }, 260);
    }
  };

  return (
    <motion.section
      className="projects-section"
      id="projects"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h2 className="projects-title">Projects</h2>
            <p className="projects-subtitle">
              Discover how organizations deliver AI value with Algoka.
            </p>
          </div>

          <div className="projects-controls" aria-label="Testimonials navigation">
            <button
              type="button"
              className="projects-nav-btn"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="projects-nav-btn"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next testimonials"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        <div className="projects-slider-viewport" ref={viewportRef} onWheel={handleWheel}>
          <motion.div
            className="projects-slider-track"
            style={sliderTrackStyle}
            drag="x"
            dragConstraints={{ left: -maxTranslate, right: 0 }}
            dragElastic={0.07}
            dragMomentum
            onDragEnd={handleDragEnd}
            animate={{ x: targetX }}
            transition={{ type: "spring", stiffness: 118, damping: 30, mass: 1.2 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {TESTIMONIALS_DATA.map((testimonial, index) => (
              <motion.article
                key={`${testimonial.title}-${index}`}
                className="project-card"
                style={slideStyle}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="project-card-title">{testimonial.title}</h3>
                <p className="project-card-desc">{testimonial.quote}</p>
                <footer className="project-card-footer">
                  <p className="project-card-author">{testimonial.author}</p>
                  <p className="project-card-role">{testimonial.role}</p>
                </footer>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
