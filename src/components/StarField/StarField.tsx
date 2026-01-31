import { useMemo } from "react";
import "./StarField.css";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  animationDelay: string;
  animationClass: string;
}

const StarField = () => {
  const stars = useMemo<Star[]>(() => {
    const starArray: Star[] = [];
    const animationClasses = ["animate-twinkle", "animate-twinkle-slow", "animate-twinkle-fast"];
    
    for (let i = 0; i < 100; i++) {
      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        animationDelay: `${Math.random() * 5}s`,
        animationClass: animationClasses[Math.floor(Math.random() * animationClasses.length)],
      });
    }
    return starArray;
  }, []);

  return (
    <div className="starfield">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star ${star.animationClass}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
      {/* Larger glowing stars */}
      <div className="star star-large animate-twinkle-slow" style={{ left: "10%", top: "15%" }} />
      <div className="star star-large animate-twinkle" style={{ left: "85%", top: "25%" }} />
      <div className="star star-large animate-twinkle-fast" style={{ left: "25%", top: "60%" }} />
      <div className="star star-large animate-twinkle-slow" style={{ left: "70%", top: "70%" }} />
      <div className="star star-large animate-twinkle" style={{ left: "45%", top: "10%" }} />
    </div>
  );
};

export default StarField;
