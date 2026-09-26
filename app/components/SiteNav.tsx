export function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a className="wordmark" href="#top">
        <span aria-hidden="true">♥</span> NYCTHERA
      </a>
      <div className="nav-links">
        <a href="#work">Projects</a>
        <a href="#music">Music</a>
        <a href="#certificates">Save points</a>
      </div>
      <a
        className="nav-status"
        href="https://github.com/Nycthera"
        target="_blank"
        rel="noreferrer"
      >
        GitHub ↗
      </a>
    </nav>
  );
}
