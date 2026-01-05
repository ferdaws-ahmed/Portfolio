import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Heart, Hexagon, Cpu } from "lucide-react";

export default function Footer() {
  // CSS Keyframes - Super Smooth GPU Motion
  const floatingStyle = `
    @keyframes smoothFloat {
      0% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(var(--move-x), var(--move-y)) rotate(180deg); }
      100% { transform: translate(0, 0) rotate(360deg); }
    }
    .footer-particle {
      animation: smoothFloat var(--duration) ease-in-out infinite;
      will-change: transform;
    }
  `;

  // Color ebong Shape variations setup
  
const particles = [...Array(15)].map((_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  // Ager theke speed pray double kora hoyeche
  duration: `${8 + Math.random() * 7}s`, 
  moveX: `${Math.random() * 120 - 60}px`,
  moveY: `${Math.random() * 120 - 60}px`,
  color: i % 3 === 0 ? "#ff005c" : i % 3 === 1 ? "#00f2ff" : "#7000ff",
  shapeType: i % 4
}));
  return (
    <footer className="relative  py-24 px-5 overflow-hidden border-t border-white/5 min-h-[450px] flex items-center justify-center">
      <style>{floatingStyle}</style>

      {/* --- Optimized Multi-Shape & Multi-Color BG --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="footer-particle absolute opacity-30"
            style={{
              left: p.left,
              top: p.top,
              "--duration": p.duration,
              "--move-x": p.moveX,
              "--move-y": p.moveY,
            }}
          >
            {/* Shape Logic */}
            {p.shapeType === 0 && (
               <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color, boxShadow: `0 0 10px ${p.color}` }} />
            )}
            {p.shapeType === 1 && (
               <div className="w-4 h-4 border rotate-45" style={{ borderColor: `${p.color}44`, borderTopColor: p.color }} />
            )}
            {p.shapeType === 2 && (
               <div className="w-3 h-3 border" style={{ borderColor: `${p.color}66` }} />
            )}
            {p.shapeType === 3 && (
               <div className="w-5 h-[1px]" style={{ backgroundColor: p.color, opacity: 0.5 }} />
            )}
          </div>
        ))}
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      {/* --- Main Content (Keeping your clean structure) --- */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* LOGO */}
        <motion.div 
          className="flex items-center space-x-5 cursor-pointer group mb-10"
          whileHover={{ scale: 1.02 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative flex items-center justify-center w-16 h-16">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 text-primary/20 group-hover:text-primary transition-all duration-700"
            >
              <Hexagon size={64} strokeWidth={1} />
            </motion.div>
            <div className="relative z-10 bg-primary/10 p-3 rounded-2xl border border-primary/20 group-hover:border-primary/50 transition-all duration-500">
              <Cpu size={30} className="text-primary group-hover:rotate-[180deg] transition-transform duration-1000" />
            </div>
          </div>
          <div className="flex flex-col text-left">
            <h1 className="text-4xl font-black tracking-tighter text-white">
              ALIF<span className="text-primary">.IO</span>
            </h1>
            <p className="text-[10px] font-mono tracking-[0.4em] text-gray-500 font-bold uppercase">System_Stable</p>
          </div>
        </motion.div>

        <p className="max-w-md mx-auto text-gray-400 mb-10 text-base">
          MERN Stack Developer building <span className="text-white">Clean & Animated</span> interfaces.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-12">
          {[
            { icon: <Github size={22} />, link: "https://github.com/ferdaws-ahmed" },
            { icon: <Linkedin size={22} />, link: "https://www.linkedin.com/in/md-ferdaws/" },
            { icon: <Facebook size={22} />, link: "https://www.facebook.com/profile.php?id=61556248924752" }
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              whileHover={{ y: -8, scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="p-4 bg-white/5 border border-white/10 rounded-2xl text-gray-400 hover:text-primary transition-all"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <div className="w-full max-w-xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-[11px] text-gray-500 font-bold tracking-[0.2em]">
          <span>© {new Date().getFullYear()} ALIF MAHMUD</span>
          <div className="flex items-center gap-3 px-5 py-2 bg-white/5 rounded-full border border-white/10">
            <span>Made with</span>
            <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <Heart size={14} className="text-primary fill-primary" />
            </motion.div>
            <span>by Alif</span>
          </div>
        </div>
      </div>
    </footer>
  );
}