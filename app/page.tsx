import Navbar from "@/components/Navbar";
import Effects from "@/components/Effects";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Background from "@/components/Background";
import NextChapter from "@/components/NextChapter";
import Contact from "@/components/Contact";
import CVModal from "@/components/CVModal";

export default function Page() {
  return (
    <>
      <Effects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Projects />
        <Publications />
        <Background />
        <NextChapter />
        <Contact />
      </main>
      <footer className="mono">© {new Date().getFullYear()} Manpreet Singh · AI/ML Research Portfolio</footer>
      <CVModal />
    </>
  );
}
