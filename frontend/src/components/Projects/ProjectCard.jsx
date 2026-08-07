import "./ProjectCard.css";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">

      <div className="project-image">

        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-placeholder">
            <h3>{project.title}</h3>
            <span>Project Preview</span>
          </div>
        )}

      </div>

      <div className="project-content">

        <div className="project-body">

          <h3>{project.title}</h3>

          <p>{project.description}</p>

        </div>

        <div className="project-bottom">

          <div className="project-tech">

            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}

          </div>

          <div className="project-footer">

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            {project.live && (

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
                <HiOutlineArrowTopRightOnSquare />
              </a>

            )}

          </div>

        </div>

      </div>

    </article>
  );
};

export default ProjectCard;