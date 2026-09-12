import { Arrow } from "./Arrow";

export function SiteNav() {
  return (
    <nav className="site-nav reveal">
      <a className="wordmark" href="#top">
        N<span>/</span>YCTHERA
      </a>
      <div className="nav-links">
        <a href="#work">
          work <span>01</span>
        </a>
        <a href="#certificates">
          certificates <span>02</span>
        </a>
        <a href="https://github.com/Nycthera" target="_blank" rel="noreferrer">
          github <Arrow />
        </a>
      </div>
      <span className="nav-status">
        <i className="pulse-dot" /> available for a good idea
      </span>
    </nav>
  );
}
