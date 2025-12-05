
import Footer from "./Components/Footer"

import About from "./Sections/About"
import Contact from "./Sections/Contact"
import Education from "./Sections/Education"
import NavHero from "./Sections/NavHero"
import Projects from "./Sections/Projects"
import Skills from "./Sections/Skills"

function App() {
  return (
    <div className="bg-base-100 text-base-content">
     
      <NavHero/>
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
