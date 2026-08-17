import "./Footer.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* Left */}

          <div className="footer-brand">

            <h2>sumit.</h2>

            <p>
              Frontend Engineer &
              <br />
              MERN Stack Developer
            </p>

            <div className="footer-social">

              <a
                href="https://github.com/sumitsalmuthe"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/sumit-salmuthe-85627927b"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sumitsalmuthe509@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Email me"
  title="Email me"
>
  <FaEnvelope />
</a>

            </div>

          </div>

          {/* Projects */}

          <div>

            <h4>Projects</h4>

            <ul>

              <li>Lumora</li>

              <li>Civixa</li>

              <li>AcademicHub</li>

              <li>SV Portfolio</li>

            </ul>

          </div>

          {/* Navigation */}

          <div>

            <h4>Navigation</h4>

            <ul>

              <li><a href="#projects">Projects</a></li>

              <li><a href="#experience">Experience</a></li>

              <li><a href="#skills">Skills</a></li>

              <li><a href="#about">About</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Sumit Salmuthe. All rights reserved.
          </p>

          <span>
            Built with React & Node.js
          </span>

        </div>

      </div>

    </footer>
  );
};

export default Footer;