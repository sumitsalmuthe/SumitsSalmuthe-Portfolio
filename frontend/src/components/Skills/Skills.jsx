import "./Skills.css";
import { skills } from "../../data/skills";
import SectionTitle from "../SectionTitle/SectionTitle";

const Skills = () => {
  return (
    <section className="skills" id="skills">

      <SectionTitle
        title="Skills"
        subtitle="Technologies and tools I use to build modern web applications."
      />

      <div className="skills-grid">

        {skills.map((group) => (

          <div className="skill-card" key={group.category}>

            <h3>{group.category}</h3>

            <div className="skill-items">

              {group.items.map((skill) => (

                <span key={skill}>
                  {skill}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Skills;