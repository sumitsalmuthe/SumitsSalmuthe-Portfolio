import "./Sidebar.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar">

      <div className="sidebar-icons">

        <a
          href="https://github.com/sumitsalmuthe"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/sumit-salmuthe-85627927b"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="mailto:sumitsalmuthe509@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>

        <a
          href="/resume/Sumit-Salmuthe-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          aria-label="Resume"
        >
          <FaFileAlt />
        </a>

      </div>

      <div className="sidebar-line"></div>

    </aside>
  );
};

export default Sidebar;