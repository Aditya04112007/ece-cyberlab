import "./PCBBackground.css";

export default function PCBBackground() {
  return (
    <div className="pcb-background">

      {/* Background Glow */}
      <div className="pcb-glow"></div>

      {/* Engineering Grid */}
      <div className="pcb-grid"></div>

      {/* Traces Layer */}
      <svg
        className="pcb-traces"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
      >

        {/* Horizontal */}

        <path
          d="M0 200 H500 V350 H900 V200 H1920"
          className="trace"
        />

        <path
          d="M0 500 H800 V650 H1300 V500 H1920"
          className="trace"
        />

        <path
          d="M0 850 H450 V950 H1500 V850 H1920"
          className="trace"
        />

        {/* Vertical */}

        <path
          d="M300 0 V250 H500"
          className="trace"
        />

        <path
          d="M1000 0 V300 H1250"
          className="trace"
        />

        <path
          d="M1600 1080 V780 H1400"
          className="trace"
        />

      </svg>

    </div>
  );
}