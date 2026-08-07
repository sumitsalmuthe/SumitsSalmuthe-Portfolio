import "./About.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const About = () => {
  return (
    <section id="about" className="about">

      <SectionTitle
        title="About Me"
        subtitle="A quick introduction about who I am and what I do."
      />

      <div className="about-grid">

        {/* LEFT */}

        <div className="about-left">

          <p>
            I'm <strong>Sumit Salmuthe</strong>, a Computer Science Engineering
            student passionate about creating clean, modern and responsive web
            applications.
          </p>

          <p>
            I enjoy solving real-world problems through technology and building
            projects that focus on performance, scalability and user experience.
          </p>

          <p>
            My current focus is mastering the MERN Stack while continuously
            improving my frontend development skills, backend architecture and
            software engineering practices.
          </p>

        </div>

        {/* RIGHT */}

        <div className="about-right">

          <div className="about-card">

            <span>👩🏻‍🎓 Education</span>

            <h3>B.Tech Computer Science & Engineering</h3>

            <p>Sandip University, Nashik</p>

            <small>Expected Graduation • 2026</small>

          </div>

          <div className="about-card">

            <span> 📌 Location</span>

            <h3>Nashik, Maharashtra</h3>

            <p>Open to Internship Opportunities</p>

          </div>

          <div className="about-card">

            <span> 🔎 Current Focus</span>

            <div className="focus-tags">

              <span>React</span>

              <span>Node.js</span>

              <span>Express</span>

              <span>MongoDB</span>

              <span>REST APIs</span>

              <span>Responsive UI</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;