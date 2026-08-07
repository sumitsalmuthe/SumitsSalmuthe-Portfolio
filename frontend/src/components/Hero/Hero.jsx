import "./Hero.css";
import profile from "../../assets/images/profile.jpg";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-tag">
          Hello,
        </span>

        <h1 className="hero-title">
          I'm <br />
          <span>Sumit Salmuthe</span>
        </h1>

        <h2 className="hero-role">
          Frontend Engineer &
          <br />
          MERN Stack Developer
        </h2>

        <p className="hero-description">
          I build clean, responsive and scalable web applications
          using modern technologies with a strong focus on
          performance, user experience and maintainable code.
        </p>

       <div className="hero-buttons">

    <Button
        href="/resume/Sumit-Salmuthe-Resume.pdf"
    >
        Resume
    </Button>

    <Button
        href="#contact"
        variant="secondary"
    >
        Contact
    </Button>

</div>

      </div>

      <div className="hero-right">

        <div className="hero-image">

          <img
            src={profile}
            alt="Sumit Salmuthe"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;