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

        {/* GitHub */}
        <a
          href="https://github.com/sumitsalmuthe"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/sumit-salmuthe-85627927b"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sumitsalmuthe509@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email me"
          title="Email me"
        >
          <FaEnvelope />
        </a>

        {/* Resume */}
        <a
          href="/resume/Sumit-Salmuthe-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Resume"
          title="Open Resume"
        >
          <FaFileAlt />
        </a>

      </div>

      <div className="sidebar-line"></div>
    </aside>
  );
};

export default Sidebar;