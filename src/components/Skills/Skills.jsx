import "./Skills.css";

const skills = [
  "Embedded C",
  "Arduino",
  "ESP32",
  "PCB Design",
  "IoT",
  "IIoT",
  "Networking",
  "Verilog",
  "HTML",
  "CSS",
  "JavaScript",
  "Git & GitHub"
];

function Skills() {
  return (
    <section className="skills" id="skills">

      <h4>TECH STACK</h4>

      <h2>Skills & Technologies</h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <span>{skill}</span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;