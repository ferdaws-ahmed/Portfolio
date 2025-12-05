import NavHero from "../Sections/NavHero";
import About from "../Sections/About";
import Skills from "../Sections/Skills";
import Education from "../Sections/Education";
import Projects from "../Sections/Projects";
import Contact from "../Sections/Contact";

export default function Home() {
  return (
    <>
    <div className="w-10/12 mx-auto">
        <NavHero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
      
    </>
  );
}
