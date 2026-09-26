import { AnimatedPage } from "./components/AnimatedPage";
import { CertificatesSection } from "./components/CertificatesSection";
import { Hero } from "./components/Hero";
import { MarqueeBand } from "./components/MarqueeBand";
import { MusicPlayer } from "./components/MusicPlayer";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import { WorkSection } from "./components/WorkSection";

export default function Home() {
  return (
    <AnimatedPage>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="noise" aria-hidden="true" />
      <SiteNav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <MarqueeBand />
        <WorkSection />
        <MusicPlayer />
        <CertificatesSection />
      </main>
      <SiteFooter />
    </AnimatedPage>
  );
}
