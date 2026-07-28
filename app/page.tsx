import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ArchiveSection from "@/components/ArchiveSection";
import Manifesto from "@/components/Manifesto";
import FollowSection from "@/components/FollowSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee text="Parce que l'homme est pluriel" />
        <ArchiveSection />
        <Manifesto />
        <FollowSection />
      </main>
      <Footer />
    </>
  );
}
