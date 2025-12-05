import React, { useState } from "react";
import { Particles } from "react-tsparticles";
import { motion } from "framer-motion";
import profileImg from '../assets/images/profile.png';
import { Menu, X } from "lucide-react";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close mobile menu after click
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

      {/* Header */}
      <header className="flex justify-between items-center py-6 relative z-20">
        <div className="text-3xl font-bold">
          <span className="text-gray-100 dark:text-white">Alif's</span>
          <span className="text-primary">Portfolio</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          {["about","skills","projects","contact"].map(section => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-gray-300 hover:text-primary transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          {/* Hire Me Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-white font-semibold py-2 px-6 rounded-md hover:opacity-90 transition-opacity"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-300">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-base-100 shadow-lg rounded-b-xl z-20 flex flex-col items-center py-4 space-y-4">
          {["about","skills","projects","contact"].map(section => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-gray-700 dark:text-gray-200 font-medium hover:text-primary transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-white font-semibold py-2 px-6 rounded-md hover:opacity-90 transition-opacity"
          >
            Hire Me
          </button>
        </div>
      )}

      {/* Hero Content */}
      <main className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 pt-16 pb-24 relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 space-y-6"
        >
          <p className="text-lg font-medium text-gray-300 dark:text-gray-400">HELLO, I'M</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            <span className="text-primary text-shadow-primary">Md.Ferdaws</span>{" "}
            <span className="text-gray-100 dark:text-white">Alif</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-primary text-shadow-primary"
          >
            MERN Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base text-gray-400 dark:text-gray-500 max-w-xl leading-relaxed"
          >
            My expertise lies in the MERN stack, providing seamless end-to-end solutions from MongoDB to building backend APIs with Express & Node.js.
            I craft modern, responsive UIs using React and Tailwind CSS to deliver scalable and optimized web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center space-x-4 pt-4"
          >
            <div className="flex items-center space-x-4 pt-4">
              <a
                href="https://docs.google.com/document/d/1y7wCBbOHbtmAUwrEgJnk-2lP0f5pIG90kMRrnGiJJF0/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white font-semibold py-3 px-8 rounded-md hover:opacity-90 transition-opacity"
              >
                Download Resume
              </a>

              <button onClick={() => scrollToSection("contact")} className="border border-primary text-primary font-semibold py-3 px-8 rounded-md hover:bg-primary hover:text-white transition-colors">
              Contact Me
            </button>
          </div>
            
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="order-1 lg:order-2 flex justify-center items-center"
        >
          <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]">
            <div className="absolute inset-0 border-8 border-primary rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary rounded-full z-0"></div>
            <div className="w-full h-full rounded-full overflow-hidden relative z-10 transform scale-95">
              <img alt="Profile" className="w-full h-full object-cover grayscale" src={profileImg} />
            </div>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
