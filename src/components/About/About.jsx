import profile from "../../assets/profile.png";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-left">

        <div className="profile-card">
          <img
            src={profile}
            alt="Aditya Katare"
            className="profile-image"
          />
        </div>

      </div>

      <div className="about-right">

        <h4>ABOUT ME</h4>

        <h2>
          Electronics & Communication Engineering Student
        </h2>

        <p>
          I am a passionate Electronics & Communication Engineering student with
          a strong interest in Embedded Systems, IoT, IIoT, PCB Design and
          Electronics. I enjoy developing innovative hardware and software
          solutions using Arduino, ESP32, Embedded C, networking technologies
          and modern web development. My goal is to create intelligent systems
          that solve real-world engineering challenges while continuously
          learning and exploring emerging technologies.
        </p>

        <div className="about-stats">

          <div className="stat">
            <h3>15+</h3>
            <span>Projects Completed</span>
          </div>

          <div className="stat">
            <h3>12+</h3>
            <span>Technologies</span>
          </div>

          <div className="stat">
            <h3>100%</h3>
            <span>Dedication</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;