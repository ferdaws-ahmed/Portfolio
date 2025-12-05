import React from "react";
import { Particles } from "react-tsparticles";
import profileImg from '../assets/images/profile.png';

export default function HeroSection() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen w-10/12 mx-auto">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-10"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: "#ff005c" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: { min: 1, max: 4 } },
            move: { enable: true, speed: 2, direction: "none", outModes: "bounce" },
            links: { enable: true, distance: 120, color: "#ff005c", opacity: 0.4, width: 1 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
            modes: { repulse: { distance: 100 }, push: { quantity: 4 } },
          },
          detectRetina: true,
        }}
      />

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex justify-between items-center py-6">
          <div className="text-3xl font-bold">
            <span className="text-gray-100 dark:text-white">Alif's</span>
            <span className="text-primary">Portfolio</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection("about")} className="text-gray-300 hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection("skills")} className="text-gray-300 hover:text-primary transition-colors">Skills</button>
            <button onClick={() => scrollToSection("skills")} className="text-gray-300 hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-300 hover:text-primary transition-colors">Contact</button>
          </nav>

          <button onClick={() => scrollToSection("contact")} className="bg-primary text-white font-semibold py-2 px-6 rounded-md hover:opacity-90 transition-opacity">
            Hire Me
          </button>
        </header>

        {/* Main Hero Content */}
        <main className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 pt-16 pb-24">
          {/* Left Text */}
          <div className="space-y-6">
            <p className="text-lg font-medium text-gray-300 dark:text-gray-400">HELLO, I'M</p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              <span className="text-primary text-shadow-primary">Md.Ferdaws</span>{" "}
              <span className="text-gray-100 dark:text-white">Alif</span>
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-shadow-primary">
              MERN Stack Developer
            </h2>
            <p className="text-base text-gray-400 dark:text-gray-500 max-w-xl leading-relaxed">
              My expertise lies in the MERN stack, providing seamless end-to-end solutions from MongoDB to building backend APIs with Express & Node.js.
              I craft modern, responsive UIs using React and Tailwind CSS to deliver scalable and optimized web applications.
            </p>

            <div className="flex items-center space-x-4 pt-4">
              <button onClick={() => alert("Resume download clicked!")} className="bg-primary text-white font-semibold py-3 px-8 rounded-md hover:opacity-90 transition-opacity">
                Download Resume
              </button>
              <button onClick={() => scrollToSection("contact")} className="border border-primary text-primary font-semibold py-3 px-8 rounded-md hover:bg-primary hover:text-white transition-colors">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]">
              <div className="absolute inset-0 border-8 border-primary rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary rounded-full z-0"></div>
              <div className="w-full h-full rounded-full overflow-hidden relative z-10 transform scale-95">
                <img alt="Profile" className="w-full h-full object-cover grayscale" src={profileImg} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
