import "./Flame.css";

interface FlameProps {
  isHovered?: boolean;
}

const Flame = ({ isHovered = false }: FlameProps) => {
  return (
    <div className={`flame-container ${isHovered ? "flame-intense" : ""}`}>
      {/* Main flame layers */}
      <div className="flame flame-outer" />
      <div className="flame flame-middle" />
      <div className="flame flame-inner" />
      <div className="flame flame-core" />
      
      {/* Flame particles */}
      <div className="flame-particles">
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
      </div>
    </div>
  );
};

export default Flame;
