import "./Projects.css";

import { projects } from "../../data/projects";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="projects" id="projects">

      <SectionTitle
  title="Selected Projects"
  subtitle="A collection of projects showcasing my experience in building modern full-stack web applications."
/>

      <div className="projects-grid">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </section>
  );
};

export default Projects;