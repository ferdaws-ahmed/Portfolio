import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"; 
import { useNavigate } from "react-router";
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

  return (
    <section id="projects" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* --- Section Heading --- */}
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 border border-primary/30 rounded-full text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 bg-primary/5"
          >
            Showcase
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-center"
          >
            Latest <span className="text-primary text-shadow-primary">Works</span>
          </motion.h2>
        </div>

        {/* --- Projects Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: false }}
              className="group relative h-[450px] rounded-3xl overflow-hidden bg-[#111] border border-white/10"
            >
              {/* Image with Zoom effect */}
              <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-all duration-500 group-hover:opacity-100" />

              {/* Content on Card */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="space-y-3"
                >
                  <span className="text-primary font-bold text-sm tracking-widest uppercase">{project.tagline}</span>
                  <h3 className="text-3xl font-black text-white">{project.name}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 transform group-hover:translate-y-0 transition-all">
                    {project.shortDesc}
                  </p>

                  {/* Tech Stack Bubbles */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.slice(0, 3).map((s) => (
                      <span key={s} className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-300">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={() => navigate(`/projects/${project.id}`)}
                      className="flex-1 bg-white text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors"
                    >
                      Case Study <ArrowUpRight size={18} />
                    </button>
                    <a 
                      href={project.githubClient} 
                      target="_blank" 
                      className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all"
                    >
                      <Github size={22} className="text-white" />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Floating ID badge */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white font-mono font-bold backdrop-blur-md">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- View More CTA (Optional) --- */}
        <motion.div 
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="mt-20 flex justify-center"
        >
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative px-10 py-4 bg-black rounded-full leading-none flex items-center divide-x divide-gray-600">
              <span className="pr-6 text-gray-100">Explore All Archives</span>
              <span className="pl-6 text-primary group-hover:text-gray-100 transition duration-200">Coming Soon &rarr;</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}