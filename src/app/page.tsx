import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        {/* Testimonials section removed until real client quotes are available.
            To bring it back: add real testimonials to src/data/testimonials.ts,
            then re-import Testimonials from "@/components/sections/Testimonials"
            and add <Testimonials /> here. */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}