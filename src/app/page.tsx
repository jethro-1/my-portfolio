// src/app/page.tsx
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <>
      {/* Hero Carousel - Right after navigation */}
      <HeroCarousel />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </>
  );
}