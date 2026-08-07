import "./Header.css";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">

      <a href="#home" className="logo">
        sumit.
      </a>

      <nav className={`nav ${menuOpen ? "active" : ""}`}>

        <a href="#projects" onClick={closeMenu}>Projects</a>

        <a href="#experience" onClick={closeMenu}>Experience</a>

        <a href="#skills" onClick={closeMenu}>Skills</a>

        <a href="#about" onClick={closeMenu}>About</a>

        <a href="#contact" onClick={closeMenu}>Contact</a>

      </nav>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
      </button>

    </header>
  );
};

export default Header;