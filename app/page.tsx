import { About } from "./components/About";
import { Footer, FooterCta } from "./components/FooterCta";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MatchBar } from "./components/MatchBar";
import { News } from "./components/News";
import { Partners } from "./components/Partners";
import { QuickLinks } from "./components/QuickLinks";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <MatchBar />
        <QuickLinks />
        <About />
        <News />
        <Partners />
        <FooterCta />
      </main>
      <Footer />
    </>
  );
}
