import { projects } from "../data";
import { Arrow } from "./Arrow";

export function WorkSection() {
  return (
    <section className="work-section section-shell" id="work">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">
            <span>02</span> selected transmissions
          </p>
          <h2>
            Built in public,
            <br />
            <em>still evolving.</em>
          </h2>
        </div>
        <p className="section-note">
          A handful of experiments, utilities, and websites from the GitHub
          archive. Click a project to inspect the source.
        </p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <a
            className={`project-row accent-${project.accent} reveal`}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            key={project.title}
          >
            <span className="project-number">{project.number}</span>
            <span className="project-main">
              <span className="project-kind">{project.kind}</span>
              <strong>{project.title}</strong>
              <span className="project-description">{project.description}</span>
            </span>
            <span className="project-stack">{project.stack}</span>
            <span className="project-arrow">
              <Arrow />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
