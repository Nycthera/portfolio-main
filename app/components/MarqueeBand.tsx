export function MarqueeBand() {
  const sequence = (
    <>
      REACT <span>✳</span> TAILWIND <span>✳</span> REACT NATIVE <span>✳</span>{" "}
      NEXT.JS <span>✳</span> VUE <span>✳</span> REACT <span>✳</span> TAILWIND{" "}
      <span>✳</span> REACT NATIVE <span>✳</span>
    </>
  );

  return (
    <section className="marquee-band" aria-label="skills">
      <div className="marquee-track">
        <span className="marquee-group">{sequence}</span>
        <span className="marquee-group" aria-hidden="true">
          {sequence}
        </span>
      </div>
    </section>
  );
}
