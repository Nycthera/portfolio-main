import { Arrow } from "./Arrow";

export function SiteFooter() {
  return (
    <footer className="site-footer section-shell reveal">
      <div>
        <p className="eyebrow">
          <span>04</span> end of transmission
        </p>
        <h2>
          Let&apos;s make the
          <br />
          <em>next thing.</em>
        </h2>
      </div>
      <div className="footer-right">
        <a
          className="button button-dark"
          href="https://github.com/Nycthera"
          target="_blank"
          rel="noreferrer"
        >
          Say hello on GitHub <Arrow />
        </a>
        <p>
          © 2026 Nycthera
          <br />
          Built with curiosity.
        </p>
      </div>
    </footer>
  );
}
