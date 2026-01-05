import React, { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import profileImg from '../assets/images/profile1.png';
import { Link } from "react-router"; 
import { Hexagon, Cpu } from "lucide-react"; 

// --- 1. ULTRA SMOOTH TYPEWRITING (SAME LOGIC) ---
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
  }, [text, count]);

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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen w-10/12 mx-auto overflow-hidden text-white font-sans bg-transparent">
      
      {/* Background Animation Removed - Shudhu Static Glow Rekhechi for Depth */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[120px]" />
      </div>

      {/* --- NAVBAR STICKY (ONLY CHANGE HERE) --- */}
      <header className="sticky top-0 z-[100] flex justify-between items-center py-8 bg-transparent">
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
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-black tracking-tighter leading-none">
              ALIF<span className="text-primary tracking-[0.1em]">.IO</span>
            </h1>
            <div className="flex items-center space-x-2 mt-1">
              <span className="h-[2px] w-4 bg-primary rounded-full"></span>
              <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-gray-400 font-bold">Core_Dev_Active</span>
            </div>
          </div>
        </motion.div>

        <nav className="hidden lg:flex items-center space-x-4">
          {['about', 'skills', 'projects', 'contact'].map((section) => (
            <button key={section} onClick={() => scrollToSection(section)} className="relative px-6 py-2 group">
              <span className="relative z-10 font-bold text-xs tracking-widest text-gray-400 group-hover:text-primary transition-all uppercase">{section}</span>
            </button>
          ))}
          <button onClick={() => scrollToSection('contact')} className="ml-6 px-10 py-3 relative font-black text-xs tracking-[0.3em] text-white overflow-hidden group">
            <span className="relative z-10">HIRE_NOW</span>
            <div className="absolute inset-0 border-2 border-primary border-dashed group-hover:animate-[spin_4s_linear_infinite]" />
            <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
          </button>
        </nav>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 pt-16 pb-24 relative z-10">
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
          </p>
          <div className="pt-6">
            <Link to={'#'}>
              <button className="bg-primary hover:bg-white hover:text-primary text-white font-bold py-3 px-8 rounded-md transition-all shadow-[0_0_20px_rgba(255,0,92,0.4)]">
                Download Resume
              </button>
            </Link>
          </div>
        </div>

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

            {/* Breathing Liquid Effect Background (SAME) */}
            <motion.div 
              animate={{ 
                borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 60% 70% 40%/50% 60% 30% 60%", "60% 40% 30% 70%/60% 30% 70% 40%"],
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ filter: "url(#liquid-filter)" }}
              className="w-full h-full bg-primary/30 absolute z-0 blur-md"
            />

            {/* Profile Image Frame (SAME Breathing) */}
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
          </div>
        </div>
      </main>
    </div>
  );
}