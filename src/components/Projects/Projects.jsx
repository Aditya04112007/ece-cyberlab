import dice from "../../assets/projects/electronic-dice.png";
import ultrasonic from "../../assets/projects/ultrasonic-measure.png";
import traffic from "../../assets/projects/traffic-light.png";
import flappy from "../../assets/projects/lcd-flappy-bird.png";
import rgb from "../../assets/projects/rgb-blinker.png";
import alarm from "../../assets/projects/smart-alarm.png";
import "./Projects.css";

const projects = [
  {
    image: dice,
    title: "Arduino Electronic Dice",
    tech: "Arduino • Embedded C • LEDs",
    desc: "Designed an electronic dice using Arduino UNO, 6 LEDs, and a push button to generate random dice values using embedded programming.",
    demo: "https://youtu.be/VuWPQhAKK1o?si=-eshqNCRfhGq8dEN"
  },
  {
    image: ultrasonic,
    title: "Ultrasonic Measuring Tape",
    tech: "Arduino • HC-SR04 • LCD",
    desc: "Developed a digital distance measuring system using an ultrasonic sensor with real-time LCD display.",
    demo: "https://youtu.be/pk1fpDJxEBc?si=ixqziRbJtiefCRkk"
  },
  {
    image: rgb,
    title: "RGB LED Controller",
    tech: "Arduino • PWM",
    desc: "Built an RGB LED controller capable of generating multiple colors using PWM.",
    demo: "https://youtu.be/DkzVHoIqD7M?si=XMrbeVdg_F8nqSKw"
  },
  {
    image: traffic,
    title: "Smart Traffic Light",
    tech: "Arduino • Embedded C",
    desc: "Created an automatic traffic light controller demonstrating digital logic and signal timing.",
    demo: "https://youtu.be/E1-6JXQDhaE?si=SXIUc7cIg5QLC9PD"
  },
  {
    image: flappy,
    title: "LCD Car Game",
    tech: "Arduino • LCD 16×2",
    desc: "Built a playable CAR game on a 16×2 LCD with score tracking and collision detection.",
    demo: "https://youtube.com/shorts/yWdnO5J0FWA?si=Isp9mzZWzqqSINbt"
  },
  {
    image: alarm,
    title: "IIoT Monitoring System",
    tech: "ESP32 • IIoT • Sensors",
    desc: "Designed an Industrial IoT monitoring system for real-time sensor monitoring and cloud connectivity.",
    demo: "https://youtube.com/shorts/NoqCxtVB60o?si=iK0oj4sKHfyxUTq1"
  }
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <h4>MY WORK</h4>

      <h2>Featured Projects</h2>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img
  src={project.image}
  alt={project.title}
  className="project-image"
/>

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="tech-stack">
  {project.tech.split(" • ").map((item, index) => (
    <span key={index}>{item}</span>
  ))}
</div>

            <div className="project-buttons">
  <a
    href={project.demo}
    target="_blank"
    rel="noopener noreferrer"
    className="demo-btn"
  >
    ▶ Watch Demo
  </a>
</div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;