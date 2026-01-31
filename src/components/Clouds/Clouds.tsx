import "./Clouds.css";

// Flag to shift to the old clouds (false) or new image clouds (true)
const USE_IMAGE_CLOUDS = true;

const Clouds = () => {
  if (USE_IMAGE_CLOUDS) {
    return (
      <div className="clouds-container">
        <img src="/clouds.png" alt="Clouds" className="clouds-image" />
      </div>
    );
  }

  // Restored Old SVG Clouds
  const cloudPath = "M25,60 a20,20 0 0,1 0,-40 h50 a70,70 0 0,1 50,70 v10 z";
  
  return (
    <div className="clouds-container old-clouds-impl">
      <div className="cloud-layer cloud-layer-back">
        {Array.from({ length: 4 }).map((_, i) => (
          <svg key={`back-${i}`} className="cloud" width="200" height="100" viewBox="0 0 200 100" style={{ opacity: 0.5, transform: `scale(${0.8 + Math.random() * 0.4})` }}>
            <path fill="currentColor" d={cloudPath} />
          </svg>
        ))}
      </div>
      <div className="cloud-layer cloud-layer-mid">
        {Array.from({ length: 3 }).map((_, i) => (
          <svg key={`mid-${i}`} className="cloud" width="250" height="125" viewBox="0 0 200 100" style={{ opacity: 0.7, transform: `scale(${0.9 + Math.random() * 0.4}) translateX(${i * 20}px)` }}>
            <path fill="currentColor" d={cloudPath} />
          </svg>
        ))}
      </div>
      <div className="cloud-layer cloud-layer-front">
        {Array.from({ length: 2 }).map((_, i) => (
          <svg key={`front-${i}`} className="cloud" width="300" height="150" viewBox="0 0 200 100" style={{ opacity: 0.9, transform: `scale(${1 + Math.random() * 0.4})` }}>
            <path fill="currentColor" d={cloudPath} />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default Clouds;
