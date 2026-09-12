import { AnimatedPage } from "./components/AnimatedPage";
import { CertificatesSection } from "./components/CertificatesSection";
import { Hero } from "./components/Hero";
import { MarqueeBand } from "./components/MarqueeBand";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import { WorkSection } from "./components/WorkSection";

export default function Home() {
  return (
    <AnimatedPage>
      <div className="noise" />
      <SiteNav />
      <Hero />
      <MarqueeBand />
      <WorkSection />
      <CertificatesSection />
      <SiteFooter />
    </AnimatedPage>
  );
}
