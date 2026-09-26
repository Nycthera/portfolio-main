export function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow reveal">[ A WILD DEVELOPER APPEARED ]</p>
        <h1 className="reveal">
          NYCTHERA
        </h1>
        <p className="hero-role reveal">FRONT-END DEVELOPER · DIGITAL MAKER</p>

        <div className="dialogue-box reveal">
          <span className="dialogue-star" aria-hidden="true">*</span>
          <p>
            You found Nycthera — a developer crafting useful systems,
            expressive interfaces, and the web&apos;s little surprises.
          </p>
        </div>

        <div className="battle-menu reveal" aria-label="Quick links">
          <a href="#work"><span aria-hidden="true">♥</span> PROJECTS</a>
          <a href="#certificates"><span aria-hidden="true">✦</span> STATS</a>
          <a href="#music"><span aria-hidden="true">♫</span> MUSIC</a>
          <a href="https://github.com/Nycthera" target="_blank" rel="noreferrer">
            <span aria-hidden="true">↗</span> GITHUB
          </a>
        </div>
      </div>
      <div className="status-screen reveal" aria-label="Developer status">
        <div className="pixel-stars" aria-hidden="true">·  ✦  ·<br />✧  ·  ✦<br />·  ✧  ·</div>
        <div className="soul" aria-hidden="true">♥</div>
        <p className="status-name">NYCTHERA</p>
        <div className="status-line">
          <span>LV 20</span>
          <span>HP</span>
          <i aria-hidden="true" />
          <strong>99 / 99</strong>
        </div>
        <dl>
          <div><dt>AT</dt><dd>CURIOUS</dd></div>
          <div><dt>DF</dt><dd>PRECISE</dd></div>
          <div><dt>EXP</dt><dd>ALWAYS GROWING</dd></div>
        </dl>
      </div>
    </section>
  );
}
