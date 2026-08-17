import "./Hero.css";
import profile from "../../assets/images/profile.jpg";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <span className="hero-tag">Hello,</span>

        <h1 className="hero-title">
          I'm
          <span>Sumit Salmuthe</span>
        </h1>

        <h2 className="hero-role">
          Frontend Engineer
          <br />
          <span>
            Building modern web applications with the MERN Stack.
          </span>
        </h2>

        <p className="hero-description">
          I build clean, responsive and scalable web applications with a
          strong focus on performance, user experience and maintainable code.
        </p>

        <div className="hero-buttons">
          <Button
  href="/resume/Sumit-Salmuthe-Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  Resume
</Button>

          <Button href="#contact" variant="secondary">
            Contact
          </Button>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image">
          <img
            src={profile}
            alt="Portrait of Sumit Salmuthe"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;