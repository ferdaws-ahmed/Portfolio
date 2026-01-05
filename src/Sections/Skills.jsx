import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaDatabase 
} from "react-icons/fa";
import { SiMongodb, SiFirebase, SiTailwindcss, SiNextdotjs, SiExpress } from "react-icons/si";

// --- PERFORMANCE OPTIMIZED NEON ORBS ---
const neonOrbs = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  size: Math.floor(Math.random() * 6) + 4,
  duration: 15 + (i % 5) * 5,
  color: i % i % 2 === 0 ? "shadow-[0_0_15px_#00f2ff] bg-cyan-400" : "shadow-[0_0_15px_#7000ff] bg-purple-500",
  // Layout property (left/top) er bodole transform (x/y) use hobe performance-er jonno
  startX: `${(i * 17) % 100}%`,
  startY: `${(i * 23) % 100}%`,
  moveX: [0, 100, -100, 0],
  moveY: [0, -150, 150, 0]
}));

function MagneticIcon({ icon, name, index }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const radius = 250;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < radius) {
      mouseX.set(distanceX * 0.4);
      mouseY.set(distanceY * 0.4);
    } else {
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col items-center justify-center p-8"
    >
      <motion.div
        ref={ref}
        style={{ x: dx, y: dy, willChange: "transform" }}
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0] 
        }}
        transition={{ 
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 },
          rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        whileHover={{ scale: 1.4 }}
        // text-white/40 hardcode kora hoyeche jate light mode-e mure na jay
        className="relative z-10 text-5xl md:text-7xl text-white/40 cursor-pointer transition-colors duration-300 group-hover:text-inherit group-hover:drop-shadow-[0_0_20px_rgba(0,242,255,0.8)]"
      >
        {icon}
      </motion.div>

      <p className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 text-cyan-400 text-[10px] md:text-[12px] font-bold tracking-widest uppercase pointer-events-none">
        {name}
      </p>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full bg-cyan-500/10 blur-[50px] -z-10" />
    </div>
  );
}

export default function SkillsSection() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> }, // text-white fixed
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> }, // text-gray fixed
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Database", icon: <FaDatabase className="text-gray-400" /> },
  ];

  return (
    // bg-[#050505] force kora hoyeche jate light mode-eo dark thake
    <section id="skills" className="relative py-12 md:py-24  overflow-hidden">
      
      {/* Background Orbs (Optimized with Translate) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {neonOrbs.map((orb) => (
          <motion.div
            key={orb.id}
            initial={{ left: orb.startX, top: orb.startY }}
            animate={{ 
              x: orb.moveX, 
              y: orb.moveY, 
              opacity: [0.2, 0.8, 0.2], 
              scale: [1, 1.5, 1] 
            }}
            transition={{ duration: orb.duration, repeat: Infinity, ease: "linear" }}
            className={`absolute rounded-full ${orb.color}`}
            style={{ width: orb.size, height: orb.size, willChange: "transform" }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Heading */}
        <div className="flex justify-center mb-20">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} className="relative p-[2px] rounded-full overflow-hidden flex items-center justify-center">
            <div className="absolute inset-[-300%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,#00f2ff,#7000ff,#ff00d0,#00f2ff)]" />
            {/* Dark bg forced here */}
            <div className="relative px-8 py-3 md:px-16 md:py-4 bg-[#0a0a0a] rounded-full z-10">
              <h2 className="text-2xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent uppercase tracking-[0.2em]">My Skills</h2>
            </div>
          </motion.div>
        </div>

        {/* Magnetic Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <MagneticIcon 
              key={index} 
              index={index} 
              icon={skill.icon} 
              name={skill.name} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}