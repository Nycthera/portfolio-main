import { projects } from "../data";
import { Arrow } from "./Arrow";

export function WorkSection() {
  return (
    <section className="work-section section-shell" id="work">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">[ ENCOUNTERS ]</p>
          <h2>
            SELECTED<br /><em>PROJECTS</em>
          </h2>
        </div>
        <p className="section-note">
          Choose an encounter. Each project opens its source code in a new tab.
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
            <span className="project-heart" aria-hidden="true">♥</span>
            <span className="project-number">{project.number}</span>
            <span className="project-main">
              <span className="project-kind">{project.kind}</span>
              <strong>{project.title}</strong>
              <span className="project-description">{project.description}</span>
            </span>
            <span className="project-stack">[ {project.stack} ]</span>
            <span className="project-arrow">
              <Arrow />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
