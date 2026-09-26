import { Arrow } from "./Arrow";

export function SiteFooter() {
  return (
    <footer className="site-footer section-shell reveal">
      <div>
        <p className="eyebrow">[ THE END...? ]</p>
        <h2>
          LET&apos;S BUILD<br /><em>SOMETHING.</em>
        </h2>
      </div>
      <div className="footer-right">
        <a
          className="button button-dark"
          href="https://github.com/Nycthera"
          target="_blank"
          rel="noreferrer"
        >
          * SAY HELLO <Arrow />
        </a>
        <p>
          © 2026 Nycthera
          <br />
          Built with determination.
        </p>
      </div>
    </footer>
  );
}
