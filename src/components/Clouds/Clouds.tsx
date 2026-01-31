import "./Clouds.css";

const Clouds = () => {
  return (
    <div className="clouds-container">
      {/* Back layer clouds - slowest */}
      <div className="cloud-layer cloud-layer-back">
        <svg className="cloud cloud-1 animate-cloud-drift-slow" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="50" rx="50" ry="25" fill="hsl(var(--cloud-dark))" />
          <ellipse cx="100" cy="40" rx="45" ry="30" fill="hsl(var(--cloud-dark))" />
          <ellipse cx="140" cy="50" rx="40" ry="22" fill="hsl(var(--cloud-dark))" />
          <ellipse cx="80" cy="55" rx="55" ry="20" fill="hsl(var(--cloud-dark))" />
        </svg>
        <svg className="cloud cloud-7 animate-cloud-drift-slow" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="50" rx="50" ry="25" fill="hsl(var(--cloud-dark))" />
          <ellipse cx="100" cy="40" rx="45" ry="30" fill="hsl(var(--cloud-dark))" />
          <ellipse cx="140" cy="50" rx="40" ry="22" fill="hsl(var(--cloud-dark))" />
          <ellipse cx="80" cy="55" rx="55" ry="20" fill="hsl(var(--cloud-dark))" />
        </svg>
        <svg className="cloud cloud-2 animate-cloud-drift-slow" viewBox="0 0 180 70" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="45" rx="40" ry="22" fill="hsl(var(--cloud-dark))" />
          <ellipse cx="90" cy="35" rx="50" ry="28" fill="hsl(var(--cloud-dark))" />
          <ellipse cx="130" cy="45" rx="35" ry="20" fill="hsl(var(--cloud-dark))" />
        </svg>
        <svg className="cloud cloud-10 animate-cloud-drift-slow" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="50" rx="50" ry="25" fill="hsl(var(--cloud-dark))" />
          <ellipse cx="100" cy="40" rx="45" ry="30" fill="hsl(var(--cloud-dark))" />
          <ellipse cx="140" cy="50" rx="40" ry="22" fill="hsl(var(--cloud-dark))" />
          <ellipse cx="80" cy="55" rx="55" ry="20" fill="hsl(var(--cloud-dark))" />
        </svg>
        <svg className="cloud cloud-13 animate-cloud-drift-slow" viewBox="0 0 190 75" xmlns="http://www.w3.org/2000/svg">
           <ellipse cx="55" cy="48" rx="45" ry="23" fill="hsl(var(--cloud-dark))" />
           <ellipse cx="95" cy="38" rx="40" ry="28" fill="hsl(var(--cloud-dark))" />
           <ellipse cx="135" cy="48" rx="35" ry="20" fill="hsl(var(--cloud-dark))" />
        </svg>
      </div>

      {/* Middle layer clouds */}
      <div className="cloud-layer cloud-layer-mid">
        <svg className="cloud cloud-3 animate-cloud-drift" viewBox="0 0 220 90" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="70" cy="55" rx="55" ry="28" fill="hsl(var(--cloud-light) / 0.8)" />
          <ellipse cx="110" cy="45" rx="50" ry="32" fill="hsl(var(--cloud-light) / 0.9)" />
          <ellipse cx="160" cy="55" rx="45" ry="25" fill="hsl(var(--cloud-light) / 0.8)" />
          <ellipse cx="90" cy="60" rx="60" ry="22" fill="hsl(var(--cloud-light) / 0.7)" />
        </svg>
        <svg className="cloud cloud-8 animate-cloud-drift" viewBox="0 0 220 90" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="70" cy="55" rx="55" ry="28" fill="hsl(var(--cloud-light) / 0.8)" />
          <ellipse cx="110" cy="45" rx="50" ry="32" fill="hsl(var(--cloud-light) / 0.9)" />
          <ellipse cx="160" cy="55" rx="45" ry="25" fill="hsl(var(--cloud-light) / 0.8)" />
          <ellipse cx="90" cy="60" rx="60" ry="22" fill="hsl(var(--cloud-light) / 0.7)" />
        </svg>
        <svg className="cloud cloud-14 animate-cloud-drift" viewBox="0 0 210 85" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="65" cy="52" rx="50" ry="26" fill="hsl(var(--cloud-light) / 0.8)" />
          <ellipse cx="105" cy="42" rx="45" ry="30" fill="hsl(var(--cloud-light) / 0.9)" />
          <ellipse cx="155" cy="52" rx="40" ry="23" fill="hsl(var(--cloud-light) / 0.8)" />
        </svg>
        <svg className="cloud cloud-11 animate-cloud-drift" viewBox="0 0 220 90" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="70" cy="55" rx="55" ry="28" fill="hsl(var(--cloud-light) / 0.8)" />
          <ellipse cx="110" cy="45" rx="50" ry="32" fill="hsl(var(--cloud-light) / 0.9)" />
          <ellipse cx="160" cy="55" rx="45" ry="25" fill="hsl(var(--cloud-light) / 0.8)" />
          <ellipse cx="90" cy="60" rx="60" ry="22" fill="hsl(var(--cloud-light) / 0.7)" />
        </svg>

        <svg className="cloud cloud-4 animate-cloud-drift" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="55" cy="50" rx="45" ry="25" fill="hsl(var(--cloud-light) / 0.8)" />
          <ellipse cx="100" cy="40" rx="55" ry="30" fill="hsl(var(--cloud-light) / 0.9)" />
          <ellipse cx="150" cy="50" rx="40" ry="22" fill="hsl(var(--cloud-light) / 0.8)" />
        </svg>
      </div>

      {/* Front layer clouds - fastest (but still slow for parallax) */}
      <div className="cloud-layer cloud-layer-front">
        <svg className="cloud cloud-5" viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="60" rx="65" ry="32" fill="hsl(var(--cloud-light))" />
          <ellipse cx="130" cy="50" rx="60" ry="38" fill="hsl(var(--cloud-light))" />
          <ellipse cx="180" cy="60" rx="50" ry="28" fill="hsl(var(--cloud-light))" />
          <ellipse cx="100" cy="70" rx="70" ry="25" fill="hsl(var(--cloud-light) / 0.9)" />
        </svg>
        <svg className="cloud cloud-9" viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="60" rx="65" ry="32" fill="hsl(var(--cloud-light))" />
          <ellipse cx="130" cy="50" rx="60" ry="38" fill="hsl(var(--cloud-light))" />
          <ellipse cx="180" cy="60" rx="50" ry="28" fill="hsl(var(--cloud-light))" />
          <ellipse cx="100" cy="70" rx="70" ry="25" fill="hsl(var(--cloud-light) / 0.9)" />
        </svg>
        <svg className="cloud cloud-12" viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="60" rx="65" ry="32" fill="hsl(var(--cloud-light))" />
          <ellipse cx="130" cy="50" rx="60" ry="38" fill="hsl(var(--cloud-light))" />
          <ellipse cx="180" cy="60" rx="50" ry="28" fill="hsl(var(--cloud-light))" />
          <ellipse cx="100" cy="70" rx="70" ry="25" fill="hsl(var(--cloud-light) / 0.9)" />
        </svg>
        <svg className="cloud cloud-15" viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="60" rx="65" ry="32" fill="hsl(var(--cloud-light))" />
          <ellipse cx="130" cy="50" rx="60" ry="38" fill="hsl(var(--cloud-light))" />
          <ellipse cx="180" cy="60" rx="50" ry="28" fill="hsl(var(--cloud-light))" />
          <ellipse cx="100" cy="70" rx="70" ry="25" fill="hsl(var(--cloud-light) / 0.9)" />
        </svg>
        <svg className="cloud cloud-6" viewBox="0 0 200 85" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="55" rx="50" ry="28" fill="hsl(var(--cloud-light))" />
          <ellipse cx="110" cy="45" rx="55" ry="32" fill="hsl(var(--cloud-light))" />
          <ellipse cx="155" cy="55" rx="40" ry="24" fill="hsl(var(--cloud-light))" />
        </svg>
      </div>
    </div>
  );
};

export default Clouds;
