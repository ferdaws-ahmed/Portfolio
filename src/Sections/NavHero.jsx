import React, { useState, useEffect } from "react";
import { Particles } from "react-tsparticles";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import profileImg from '../assets/images/profile1.png';
import { Link } from "react-router";
import { Hexagon, Cpu } from "lucide-react"; 

// --- 1. RANDOM GEOMETRIC SHAPES BG ---
const FloatingShapesBG = () => {
  const shapes = [
    { type: "circle", size: "w-24 h-24", color: "bg-cyan-500/20", top: "10%", left: "5%" },
    { type: "square", size: "w-16 h-16", color: "bg-primary/20", top: "70%", left: "10%" },
    { type: "triangle", size: "0", color: "border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-yellow-500/20", top: "20%", left: "80%" },
    { type: "circle", size: "w-32 h-32", color: "bg-purple-500/10", top: "50%", left: "40%" },
    { type: "square", size: "w-12 h-12", color: "bg-green-500/20", top: "85%", left: "85%" },
    { type: "circle", size: "w-20 h-20", color: "bg-blue-500/20", top: "5%", left: "60%" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-20">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.size} ${shape.color} blur-[2px]`}
          style={{
            top: shape.top,
            left: shape.left,
            borderRadius: shape.type === "circle" ? "50%" : shape.type === "square" ? "15%" : "0",
          }}
          animate={{
            y: [0, -100, 50, 0],
            x: [0, 50, -50, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// --- 2. ULTRA SMOOTH TYPEWRITING ---
const GlitchTypewriter = ({ text }) => {
  const count = useMotionValue(0);
  const [displayText, setDisplayText] = useState("");
  const letters = "X#%&@";

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1.5,
      onUpdate: (latest) => {
        const i = Math.round(latest);
        const randomChar = i < text.length && i > 0 ? letters[Math.floor(Math.random() * letters.length)] : "";
        setDisplayText(text.slice(0, i) + randomChar);
      }
    });
    return controls.stop;
  }, [text]);

  return (
    <span className="relative inline-block bg-gradient-to-r from-cyan-400 via-primary to-yellow-400 bg-clip-text text-transparent">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="ml-1 inline-block w-1 h-10 md:h-14 bg-primary shadow-[0_0_10px_#ff005c] align-middle"
      />
    </span>
  );
};

export default function HeroSection() {
  const techLogos = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", top: "5%", left: "5%" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", top: "80%", left: "0%" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", top: "10%", left: "85%" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", top: "75%", left: "90%" },
  ];

  // --- SMOOTH SCROLL FUNCTION ---
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen w-10/12 mx-auto overflow-hidden text-white font-sans bg-transparent">
      
      <FloatingShapesBG />

      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-10 opacity-30"
        options={{
          particles: {
            number: { value: 30 },
            color: { value: "#ff005c" },
            links: { enable: true, distance: 150, opacity: 0.1 },
            move: { enable: true, speed: 1 },
          },
        }}
      />

      <header className="flex justify-between items-center py-8 relative z-50">
        
        {/* LOGO */}
        <motion.div 
          className="flex items-center space-x-4 cursor-pointer group"
          whileHover={{ scale: 1.02 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative flex items-center justify-center w-14 h-14">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 text-primary/30 group-hover:text-primary transition-colors duration-500"
            >
              <Hexagon size={56} strokeWidth={1} />
            </motion.div>
            <div className="relative z-10 bg-primary/10 p-2 rounded-xl backdrop-blur-sm border border-primary/20 group-hover:border-primary/50 transition-all">
              <Cpu size={24} className="text-primary group-hover:rotate-[180deg] transition-transform duration-700" />
            </div>
            <div className="absolute inset-2 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-black tracking-tighter leading-none">
              ALIF<span className="text-primary tracking-[0.1em]">.IO</span>
            </h1>
            <div className="flex items-center space-x-2 mt-1">
              <span className="h-[2px] w-4 bg-primary rounded-full"></span>
              <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-gray-400">Core_Dev_Active</span>
            </div>
          </div>
        </motion.div>

        {/* NAV BUTTONS WITH SCROLL LOGIC */}
        <nav className="hidden lg:flex items-center space-x-4">
          
          <button onClick={() => scrollToSection('about')} className="relative px-6 py-2 group">
            <span className="relative z-10 font-bold text-xs tracking-widest text-gray-400 group-hover:animate-pulse group-hover:text-primary transition-all">ABOUT</span>
            <span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 border-x border-primary transition-all" />
          </button>

          <button onClick={() => scrollToSection('skills')} className="relative px-6 py-2 group overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-cyan-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 -z-10" />
            <span className="text-xs font-bold tracking-widest text-white mix-blend-difference uppercase">Skills</span>
          </button>

          <button onClick={() => scrollToSection('projects')} className="relative px-6 py-2 group">
            <span className="text-xs font-bold tracking-widest text-gray-400 group-hover:text-yellow-400 transition-all uppercase">Projects</span>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            <div className="absolute -bottom-1 left-0 w-1 h-1 bg-yellow-400 rounded-full scale-0 group-hover:scale-100 transition-all" />
          </button>

          <button onClick={() => scrollToSection('contact')} className="relative px-6 py-2 group border-b-2 border-transparent hover:border-green-500 transition-all">
            <span className="text-xs font-bold tracking-widest text-gray-400 group-hover:text-green-400 transition-all">CONTACT</span>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-green-500 opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all">10101</div>
          </button>

         
            <button onClick={() => scrollToSection('contact')} className="ml-6 px-10 py-3 relative font-black text-xs tracking-[0.3em] text-white overflow-hidden group">
              <span className="relative z-10">HIRE_NOW</span>
              <div className="absolute inset-0 border-2 border-primary border-dashed group-hover:animate-[spin_4s_linear_infinite]" />
              <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
            </button>
          
        </nav>
      </header>

      {/* --- MAIN SECTION --- */}
      <main className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 pt-16 pb-24 relative z-10">
        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-4">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-primary tracking-widest uppercase text-xs italic">
            // Open to Work...
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight min-h-[1.2em]">
            <GlitchTypewriter text="Md. Ferdaws Alif" />
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-300 italic">MERN Stack Developer</h2>
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed border-l-4 border-primary pl-6">
           My expertise lies in the MERN stack, providing seamless end-to-end solutions from MongoDB to building backend APIs with Express & Node.js.
            I craft modern, responsive UIs using React and Tailwind CSS.
          </p>
          <div className="flex gap-4 pt-6">
           <Link to={'https://docs.google.com/document/d/1y7wCBbOHbtmAUwrEgJnk-2lP0f5pIG90kMRrnGiJJF0/edit?usp=sharing'}>
            <button className="bg-primary hover:bg-white hover:text-primary text-white font-bold py-3 px-8 rounded-md transition-all shadow-[0_0_20px_rgba(255,0,92,0.4)]">
              Download Resume
            </button>
           </Link>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="order-1 lg:order-2 flex justify-center items-center relative">
          <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] flex justify-center items-center">
            {techLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut" }}
                className="absolute z-20 w-10 h-10 bg-white/10 p-2 rounded-lg backdrop-blur-md border border-white/20 shadow-xl"
                style={{ top: logo.top, left: logo.left }}
              >
                <img src={logo.src} alt="tech" className="w-full h-full object-contain" />
              </motion.div>
            ))}
            <svg className="absolute w-0 h-0">
              <filter id="liquid-filter">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="liquid" />
              </filter>
            </svg>
            <motion.div 
              animate={{ 
                borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 60% 70% 40%/50% 60% 30% 60%", "60% 40% 30% 70%/60% 30% 70% 40%"],
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ filter: "url(#liquid-filter)" }}
              className="w-full h-full bg-primary/30 absolute z-0 blur-md"
            />
            <motion.div 
              animate={{ 
                borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 60% 70% 40%/50% 60% 30% 60%", "60% 40% 30% 70%/60% 30% 70% 40%"],
                scale: [1, 1.05, 1] 
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[92%] h-[92%] overflow-hidden relative z-10 border-4 border-primary shadow-[0_0_40px_rgba(255,0,92,0.4)] bg-black"
            >
              <img src={profileImg} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110" alt="Alif" />
            </motion.div>
            <div className="absolute inset-0 bg-primary/30 blur-[120px] rounded-full -z-10 animate-pulse" />
          </div>
        </div>
      </main>
    </div>
  );
}