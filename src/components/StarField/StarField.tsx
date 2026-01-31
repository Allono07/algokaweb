import { useMemo } from "react";
import "./StarField.css";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  twinkleDelay: string;
  twinkleClass: string;
  moveClass: string;
}

const StarField = () => {
  const stars = useMemo<Star[]>(() => {
    const starArray: Star[] = [];
    const animationClasses = ["animate-twinkle", "animate-twinkle-slow", "animate-twinkle-fast"];
    const moveClasses = ["animate-star-move-slow", "animate-star-move-mid", "animate-star-move-fast"];
    
    for (let i = 0; i < 100; i++) {
      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        twinkleDelay: `${Math.random() * 5}s`,
        twinkleClass: animationClasses[Math.floor(Math.random() * animationClasses.length)],
        moveClass: moveClasses[Math.floor(Math.random() * moveClasses.length)],
      });
    }
    return starArray;
  }, []);

  return (
    <div className="starfield">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute ${star.moveClass}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
        >
          <div
            className={`star ${star.twinkleClass}`}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.twinkleDelay,
              position: "static" 
            }}
          />
        </div>
      ))}
      {/* Larger glowing stars */}
      <div className="absolute animate-star-move-slow" style={{ left: "10%", top: "15%" }}>
        <div className="star star-large animate-twinkle-slow" style={{ position: "static" }} />
      </div>
      <div className="absolute animate-star-move-mid" style={{ left: "85%", top: "25%" }}>
        <div className="star star-large animate-twinkle" style={{ position: "static" }} />
      </div>
      <div className="absolute animate-star-move-fast" style={{ left: "25%", top: "60%" }}>
        <div className="star star-large animate-twinkle-fast" style={{ position: "static" }} />
      </div>
      <div className="absolute animate-star-move-slow" style={{ left: "70%", top: "70%" }}>
        <div className="star star-large animate-twinkle-slow" style={{ position: "static" }} />
      </div>
      <div className="absolute animate-star-move-mid" style={{ left: "45%", top: "10%" }}>
        <div className="star star-large animate-twinkle" style={{ position: "static" }} />
      </div>
    </div>
  );
};

export default StarField;
