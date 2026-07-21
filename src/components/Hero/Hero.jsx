
import PCBBackground from "../PCB/PCBBackground";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "../../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <PCBBackground />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <div className="hero-badges">
          <span>⚡ Electronics</span>
          <span>💻 Embedded Systems</span>
          <span>🌐 IIoT</span>
          <span>🔧 PCB Design</span>
        </div>

        <h1>Aditya Katare</h1>

        <TypeAnimation
          sequence={[
            "Embedded Systems Engineer",
            2000,
            "IoT Developer",
            2000,
            "PCB Designer",
            2000,
            "Electronics Engineer",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="typing-title"
        />

        <p className="hero-description">
          Passionate about Embedded Systems, IoT, PCB Design,
          Arduino, ESP32 and modern web technologies.
          I build intelligent hardware and software solutions.
        </p>

        <div className="hero-buttons">

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
          </motion.button>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="resume-btn"
          >
            Download Resume
          </motion.a>

        </div>
        

      </motion.div>

      <div className="scroll-indicator">
        ↓ Scroll
      </div>

    </section>
  );
}

export default Hero;