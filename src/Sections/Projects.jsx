import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react"; 
import { useNavigate } from "react-router";

// Images import
import toyShopImg from "../assets/images/toyshop.png";
import habituoImg from "../assets/images/habituo.png";
import simpleApp from "../assets/images/simpleapp.png";

export const projects = [
  {
    id: 3,
    name: "Toy Shop",
    tagline: "Interactive Marketplace",
    image: toyShopImg,
    shortDesc: "Toy Shop is an interactive web application where users can browse kids' toys and play mini-games.",
    stack: ["React", "Firebase", "Tailwind", "Framer"],
    liveLink: "https://glittering-griffin-9cb94d.netlify.app/",
    githubClient: "https://github.com/ferdaws-ahmed/Toy-Shop",
  },
  {
    id: 2,
    name: "Habituo",
    tagline: "Habit Tracker",
    image: habituoImg,
    shortDesc: "Habituo helps users build better habits through a clean and interactive dashboard.",
    stack: ["MongoDB", "Express", "React", "Node"],
    liveLink: "https://habituo.netlify.app",
    githubClient: "https://github.com/ferdaws-ahmed/Habituo",
  },
  {
    id: 1,
    name: "Hero.io",
    tagline: "App Store Concept",
    image: simpleApp,
    shortDesc: "A mini project that showcases various applications in an app-store style interface.",
    stack: ["React", "Recharts", "Tailwind", "JSON"],
    liveLink: "https://splendorous-gnome-90efa8.netlify.app/",
    githubClient: "https://github.com/ferdaws-ahmed/Simple-app-store",
  },
];

export default function Projects() {
  const navigate = useNavigate();
  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

  return (
    <section id="projects" className="py-24  relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* --- Section Heading --- */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
            className="px-6 py-2 border border-cyan-500/20 rounded-full text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6 bg-cyan-500/5 backdrop-blur-sm"
          >
            Showcase
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
            className="text-5xl md:text-7xl font-black tracking-tighter"
          >
            Latest <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent italic">Works</span>
          </motion.h2>
        </div>

        {/* --- Projects Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] rounded-[2.5rem] overflow-hidden bg-[#0a0a0a] border border-white/5 shadow-2xl transform-gpu"
            >
              {/* Image Container */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-700 blur-[0.5px] group-hover:blur-0 transform-gpu"
                />
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent z-10 pointer-events-none" />

              {/* Card Contents */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <div className="transform group-hover:-translate-y-3 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                  <span className="text-cyan-400 font-bold text-[10px] tracking-[0.3em] uppercase block mb-2">
                    {project.tagline}
                  </span>
                  <h3 className="text-3xl font-black text-white mb-3 tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 line-clamp-2">
                    {project.shortDesc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                    {project.stack.map((s) => (
                      <span key={s} className="text-[9px] px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 backdrop-blur-md font-mono uppercase">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons (Color Updated) */}
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => navigate(`/projects/${project.id}`)}
                      className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] active:scale-95"
                    >
                      Case Study <ArrowUpRight size={16} />
                    </button>
                    <a 
                      href={project.githubClient} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-500 text-white"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Number Badge */}
              <div className="absolute top-6 left-6 w-11 h-11 rounded-2xl border border-white/10 flex items-center justify-center text-[11px] text-white/50 font-mono z-20 bg-black/40 backdrop-blur-xl group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-colors duration-500">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- View More CTA --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={transition}
          className="mt-20 flex justify-center"
        >
          <button className="relative group px-12 py-5 bg-transparent border border-cyan-500/30 text-white font-black rounded-full overflow-hidden transition-all duration-500 hover:border-cyan-400">
            <span className="relative z-10 uppercase tracking-[0.3em] text-[10px] group-hover:text-black transition-colors duration-500">
              Explore Full Archive
            </span>
            <div className="absolute inset-0 bg-cyan-400 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
          </button>
        </motion.div>
      </div>

      {/* Background Glows */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-0 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -z-0 pointer-events-none" />
    </section>
  );
}