import "./Experience.css";
import { experiences } from "../../data/experience";
import SectionTitle from "../SectionTitle/SectionTitle";

const Experience = () => {
  return (
    <section className="experience" id="experience">

      <SectionTitle
        title="Experience"
        subtitle="My learning journey through education, training and real-world projects."
      />

      <div className="timeline">

        {experiences.map((item) => (
          <div className="timeline-item" key={item.id}>

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span>{item.duration}</span>

              <h3>{item.title}</h3>

              <h4>{item.organization}</h4>

              <p>{item.description}</p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Experience;