import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Technology from "@/components/Technologies";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <hr className="mt-2" />
      <HeroSection />
      <Projects />
      <Technology />
    </main>
  );
}
