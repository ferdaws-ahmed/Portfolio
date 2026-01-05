import { motion } from "framer-motion";
import { FaGraduationCap, FaMicroscope, FaAtom } from "react-icons/fa";

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    // Fixed Dark Background added
    <section id="education" className="relative min-h-screen  flex items-center justify-center px-5 py-20 overflow-hidden text-white">
      
      {/* Background Physics Elements (Floating Icons) */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-[10%] text-6xl text-primary/40"
        ><FaAtom /></motion.div>
        <motion.div 
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-[15%] text-7xl text-purple-500/30"
        ><FaMicroscope /></motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        // Backdrop and border fixed for consistent dark look
        className="relative max-w-5xl w-full bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 md:p-16 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        {/* Animated Background Tracing Line */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[2rem] pointer-events-none">
          <motion.div 
            animate={{ left: ["-100%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
          />
        </div>

        <motion.div variants={itemVariants} className="flex flex-col items-center mb-12">
          <div className="p-4 bg-primary/10 rounded-2xl mb-4 border border-primary/20">
            <FaGraduationCap className="text-5xl text-primary animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-center bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Educational Qualification
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-dashed border-primary/30 ml-4 md:ml-10 pl-8 md:pl-16 py-4">
          
          {/* Animated Pulse Dot on Timeline */}
          <div className="absolute top-0 -left-[9px] w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_#ff005c]">
            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
          </div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Bachelor of Science (BSc) in <span className="text-primary italic">Physics</span>
            </h3>

            <div className="space-y-4 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
              <motion.p variants={itemVariants}>
                I am currently pursuing my Bachelor of Science degree in 
                <span className="text-primary font-bold"> Physics </span> 
                at <span className="underline decoration-purple-500 underline-offset-4 font-semibold text-white">Tongi Government College</span>, under the National University of Bangladesh.
              </motion.p>

              <motion.p variants={itemVariants} className="bg-white/[0.03] p-6 rounded-2xl border-l-4 border-purple-500 italic shadow-inner text-gray-200">
                "My academic journey in Physics has sharpened my <span className="text-cyan-400 font-bold">analytical thinking</span> and complex <span className="text-cyan-400 font-bold">problem-solving</span> abilities—skills that I direct every day into building high-performance MERN stack applications."
              </motion.p>

              <motion.p variants={itemVariants}>
                My goal is to bridge the gap between scientific logic and digital innovation, creating impactful web solutions while completing my graduation.
              </motion.p>
            </div>

            {/* Glowing Badges - Fixed from DaisyUI dynamic classes */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-8">
              {[
                { label: "National University", border: "border-blue-500/50", text: "text-blue-400" },
                { label: "Tongi Govt. College", border: "border-purple-500/50", text: "text-purple-400" },
                { label: "BSc in Physics", border: "border-pink-500/50", text: "text-pink-400" },
                { label: "Ongoing", border: "border-cyan-500/50", text: "text-cyan-400" }
              ].map((b, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className={`px-5 py-2 rounded-full border ${b.border} ${b.text} text-xs font-bold uppercase tracking-widest bg-transparent shadow-lg transition-colors`}
                >
                  {b.label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}