import { Arrow } from "./Arrow";

export function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow reveal">
          <span>01</span> digital maker / human interface
        </p>
        <h1 className="reveal">
          I make things
          <br />
          <em>worth clicking.</em>
        </h1>
        <p className="hero-intro reveal">
          I&apos;m Nycthera, a front-end developer exploring the sweet spot
          between useful systems, expressive interfaces, and the web&apos;s
          little surprises.
        </p>
        <div className="hero-actions reveal">
          <a className="button button-dark" href="#work">
            Enter the archive <Arrow />
          </a>
          <a
            className="text-link"
            href="https://github.com/Nycthera"
            target="_blank"
            rel="noreferrer"
          >
            open github <Arrow />
          </a>
        </div>
      </div>
      <div className="hero-orbit reveal" aria-hidden="true">
        <div className="orbit-label orbit-label-top">curious / precise</div>
        <div className="orbit-ring ring-one" />
        <div className="orbit-ring ring-two" />
        <div className="signal-cube" aria-hidden="true">
          <span className="cube-face cube-front">NY / 01</span>
          <span className="cube-face cube-back">SIGNAL</span>
          <span className="cube-face cube-right">RX</span>
          <span className="cube-face cube-left">TX</span>
          <span className="cube-face cube-top">OPEN</span>
          <span className="cube-face cube-bottom">END</span>
        </div>
        <div className="signal-scan" />
        <div className="orbit-core">
          <span>NY</span>
        </div>
        <div className="orbit-label orbit-label-bottom">
          react · next · tailwind
        </div>
      </div>
    </section>
  );
}
