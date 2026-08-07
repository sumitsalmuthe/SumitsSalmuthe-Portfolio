import "./Header.css";

const Header = () => {
  return (
    <header className="header">

      <a href="/" className="logo">
        sumit.
      </a>

      <nav className="nav">

        <a href="#projects">Projects</a>

        <a href="#experience">Experience</a>

        <a href="#skills">Skills</a>

        <a href="#contact">Contact</a>

      </nav>

    </header>
  );
};

export default Header;