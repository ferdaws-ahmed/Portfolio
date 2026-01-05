import { useParams, Link } from "react-router"; 
import { projects } from "../Sections/Projects";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Github, Globe, Terminal, Box, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function ProjectDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  
  const project = Array.isArray(projects)
    ? projects.find((p) => p.id === parseInt(id))
    : null;

  const { scrollYProgress } = useScroll();
  const xTransform = useTransform(scrollYProgress, [0, 1], [0, -100]);

  if (!project) return <div className="bg-black h-screen" />;

  return (
    <section className="bg-[#050505] text-white selection:bg-cyan-500 selection:text-black">
      
      {/* --- Fixed Navigation --- */}
      <nav className="fixed top-0 w-full z-50 p-8 flex justify-between items-center mix-blend-difference">
        <Link to="/" className="flex items-center gap-2 group text-[10px] font-mono tracking-[0.4em] uppercase">
          <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> 
          [ Return_Home ]
        </Link>
        <div className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
          Project / 0{project.id}
        </div>
      </nav>

      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* --- Left Side: Hero Identity (Fixed on Large Screens) --- */}
        <div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 p-8 md:p-16 flex flex-col justify-center border-r border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-cyan-500 font-mono text-xs tracking-[0.5em] uppercase mb-6 block">
              {project.tagline || "Digital Experience"}
            </span>
            <h1 className="text-7xl md:text-[120px] font-black leading-[0.85] tracking-tighter uppercase mb-10">
              {project.name}<span className="text-cyan-500">.</span>
            </h1>

            <div className="flex gap-4">
              <a href={project.liveLink} target="_blank" className="px-8 py-4 bg-white text-black font-bold rounded-full text-[10px] uppercase tracking-widest hover:bg-cyan-400 transition-colors flex items-center gap-2">
                Launch App <Globe size={14} />
              </a>
              <a href={project.githubClient} target="_blank" className="p-4 border border-white/10 rounded-full hover:bg-white/5 transition-colors">
                <Github size={18} />
              </a>
            </div>
          </motion.div>

          {/* Background Decorative Text */}
          <motion.div style={{ x: xTransform }} className="absolute -bottom-10 left-0 text-[15rem] font-black text-white/[0.02] whitespace-nowrap pointer-events-none uppercase">
            {project.name} — {project.name}
          </motion.div>
        </div>

        {/* --- Right Side: Details & Story --- */}
        <div className="lg:w-1/2 p-8 md:p-24 space-y-32">
          
          {/* Section 1: Visual Reveal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="aspect-video w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <img src={project.image} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
          </motion.div>

          {/* Section 2: Core Concept */}
          <section className="space-y-8">
            <div className="flex items-center gap-4 text-cyan-500">
              <Terminal size={20} />
              <span className="font-mono text-xs tracking-widest uppercase">System.Log_</span>
            </div>
            <h2 className="text-3xl font-medium leading-snug text-zinc-200">
              {project.shortDesc}
            </h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </section>

          {/* Section 3: Tech Architecture */}
          <section className="space-y-12">
            <h3 className="text-sm font-mono text-zinc-500 tracking-widest uppercase flex items-center gap-3">
              <Box size={16} /> Integrated_Stack
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {(Array.isArray(project.stack) ? project.stack : project.stack?.split(",") || []).map((tech, i) => (
                <div key={i} className="group p-6 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/5 transition-all">
                  <span className="text-zinc-600 font-mono text-xs block mb-2">MOD_0{i+1}</span>
                  <span className="text-xl font-bold group-hover:text-cyan-400 transition-colors uppercase tracking-tighter">
                    {tech.trim()}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Narrative Details */}
          <div className="grid gap-12 text-zinc-400">
            <div className="space-y-4">
              <h4 className="text-white font-bold flex items-center gap-2 uppercase tracking-tighter italic">
                <ChevronRight size={14} className="text-cyan-500" /> Challenge
              </h4>
              <p className="leading-relaxed">{project.challenges || "Solving complex state management and UI performance issues."}</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold flex items-center gap-2 uppercase tracking-tighter italic">
                <ChevronRight size={14} className="text-cyan-500" /> Future Scalability
              </h4>
              <p className="leading-relaxed">{project.improvements || "Implementing AI-driven insights and real-time collaboration features."}</p>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="pt-24 pb-12">
            <Link to="/" className="group block text-center p-20 border border-white/5 rounded-[3rem] hover:bg-white hover:text-black transition-all duration-700">
               <p className="text-[10px] font-mono tracking-[0.5em] uppercase mb-4 opacity-50">End of File</p>
               <h3 className="text-5xl font-black uppercase tracking-tighter">Next Project</h3>
            </Link>
          </div>
        </div>
      </div>

      {/* Dynamic Cursor or Scroll Indicator could go here */}
    </section>
  );
}