import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Heart, Hexagon, Cpu } from "lucide-react";

// Particle values setup
const particlesData = Array.from({ length: 15 }).map(() => ({
  leftPath: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
  topPath: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
  duration: Math.random() * 15 + 10,
  scale: Math.random() * 0.5 + 0.3,
}));

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] py-16 px-5 overflow-hidden border-t border-white/5 min-h-[400px] flex items-center justify-center">
      
      {/* --- Floating Elements (Background) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particlesData.map((p, i) => (
          <motion.div
            key={i}
            animate={{
              left: p.leftPath,
              top: p.topPath,
              opacity: [0, 0.4, 0],
              scale: [p.scale, p.scale + 0.3, p.scale],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute"
            style={{ width: '10px', height: '10px' }}
          >
            {i % 2 === 0 ? (
              <div className="w-1.5 h-1.5 bg-primary rounded-full blur-[0.5px] shadow-[0_0_8px_#ff005c]" />
            ) : (
              <div className="w-3 h-3 border-t border-l border-white/20 rotate-45" />
            )}
          </motion.div>
        ))}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[100px]" />
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* LOGO - Fixed Logic */}
        <motion.div 
          className="flex items-center space-x-4 cursor-pointer group mb-6"
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
          <div className="flex flex-col text-left">
            <h1 className="text-3xl font-black tracking-tighter leading-none text-white">
              ALIF<span className="text-primary tracking-[0.1em]">.IO</span>
            </h1>
            <div className="flex items-center space-x-2 mt-1">
              <span className="h-[2px] w-4 bg-primary rounded-full"></span>
              <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-gray-400">Core_Dev_Active</span>
            </div>
          </div>
        </motion.div>

        <p className="max-w-md mx-auto text-gray-400 mb-8 text-sm md:text-base px-4">
          MERN Stack Developer building <span className="text-white">Clean & Animated</span> web interfaces.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-10">
          {[
            { icon: <Github size={20} />, link: "https://github.com/ferdaws-ahmed" },
            { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/md-ferdaws/" },
            { icon: <Facebook size={20} />, link: "https://www.facebook.com/profile.php?id=61556248924752" }
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/5 border border-white/10 rounded-xl transition-all hover:bg-white/10 text-gray-300 hover:text-primary"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <div className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom text */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
          <span>© {new Date().getFullYear()} ALIF MAHMUD</span>
          <div className="flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full border border-white/10">
            <span>Made with</span>
            <motion.div 
              animate={{ scale: [1, 1.4, 1] }} 
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={12} className="text-red-500 fill-red-500" />
            </motion.div>
            <span>by Alif</span>
          </div>
        </div>
      </div>
    </footer>
  );
}