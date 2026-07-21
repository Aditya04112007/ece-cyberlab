import "./PCBBlueprint.css";

export default function PCBBlueprint() {
  return (
    <div className="pcb-bg">
      <svg
        className="pcb-svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
      >
        {/* Horizontal Traces */}
        <line x1="0" y1="220" x2="1920" y2="220" className="trace" />
        <line x1="0" y1="450" x2="1920" y2="450" className="trace" />
        <line x1="0" y1="700" x2="1920" y2="700" className="trace" />
        <line x1="0" y1="930" x2="1920" y2="930" className="trace" />

        {/* Vertical Traces */}
        <line x1="300" y1="0" x2="300" y2="1080" className="trace" />
        <line x1="650" y1="0" x2="650" y2="1080" className="trace" />
        <line x1="1000" y1="0" x2="1000" y2="1080" className="trace" />
        <line x1="1450" y1="0" x2="1450" y2="1080" className="trace" />
        <line x1="1750" y1="0" x2="1750" y2="1080" className="trace" />

        {/* ESP32 Chip */}
        <rect
          x="760"
          y="330"
          width="350"
          height="180"
          rx="12"
          className="chip"
        />

        {/* Arduino Chip */}
        <rect
          x="180"
          y="650"
          width="280"
          height="160"
          rx="12"
          className="chip"
        />

        {/* Small IC */}
        <rect
          x="1450"
          y="160"
          width="180"
          height="120"
          rx="10"
          className="chip"
        />

        {/* Solder Pads */}
        {[
          [300,220],[650,220],[1000,220],[1450,220],
          [300,450],[650,450],[1000,450],[1450,450],
          [300,700],[650,700],[1000,700],[1450,700],
          [300,930],[650,930],[1000,930],[1450,930]
        ].map(([cx, cy], index) => (
          <circle
            key={index}
            cx={cx}
            cy={cy}
            r="8"
            className="pad"
          />
        ))}
        {/* Animated Current */}

<path
d="M0 220 H1920"
className="signal"
/>

<path
d="M0 450 H1920"
className="signal delay1"
/>

<path
d="M0 700 H1920"
className="signal delay2"
/>
      </svg>
    </div>
  );
}