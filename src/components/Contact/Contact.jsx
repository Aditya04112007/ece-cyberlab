import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaSnapchatGhost
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
  "service_f5kboot",
  "template_jwd8ckb",
  form.current,
  "BcX2a7hYgR4e6INzL"
)
      .then(
  () => {
    alert("✅ Message sent successfully!");
    form.current.reset();
  },
  (error) => {
    console.log("EmailJS Error:", error);
    alert(error.text || JSON.stringify(error));
  }
)
  };

  return (
    <section className="contact" id="contact">

      <h4>GET IN TOUCH</h4>

      <h2>Let's Build Something Amazing</h2>

      <p>
        Feel free to reach out for collaborations,
        internships, embedded systems projects or
        exciting opportunities.
      </p>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-card">
            <h3>📧 Email</h3>

            <span>
              <a href="mailto:adityakatare0411007@gmail.com">
                adityakatare0411007@gmail.com
              </a>
            </span>
          </div>

          <div className="info-card">
            <h3>📱 Phone</h3>

            <span>
              <a href="tel:+918073535739">
                +91 8073535739
              </a>
            </span>
          </div>

          <div className="info-card">
            <h3>📍 Location</h3>

            <span>Karnataka, India</span>
          </div>

         <div className="social-links">

  <a
    href="mailto:adityakatare0411007@gmail.com"
    target="_blank"
    rel="noreferrer"
    title="Email"
  >
    <FaEnvelope />
  </a>

  <a
    href="YOUR_LINKEDIN_URL"
    target="_blank"
    rel="noreferrer"
    title="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="YOUR_GITHUB_URL"
    target="_blank"
    rel="noreferrer"
    title="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="YOUR_INSTAGRAM_URL"
    target="_blank"
    rel="noreferrer"
    title="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="YOUR_SNAPCHAT_URL"
    target="_blank"
    rel="noreferrer"
    title="Snapchat"
  >
    <FaSnapchatGhost />
  </a>

</div>

        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;