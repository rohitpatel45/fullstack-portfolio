import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Technology from "@/components/Technologies";
import Users from "@/components/Users";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <Header /> */}
      <hr className="mt-2" />
      <HeroSection />
      <About />
      <Projects />
      <Technology />
      <Users />
      <FAQ />
      <Footer />
    </main>
  );
}
