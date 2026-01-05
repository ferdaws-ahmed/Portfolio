import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* BACKGROUND SCANNING LINE (Original) */}
          <motion.div 
            className="absolute inset-0 z-0 opacity-20 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent, #22d3ee, transparent)",
              height: "2px",
              width: "100%"
            }}
            animate={{ y: ["-100%", "1000%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative flex items-center justify-center">
            
            {/* SVG STROKE (Original) */}
            <svg className="w-48 h-48 -rotate-90">
              <motion.circle
                cx="96"
                cy="96"
                r="80"
                stroke="#22d3ee"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray="502"
                initial={{ strokeDashoffset: 502 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="drop-shadow-[0_0_15px_#22d3ee]"
              />
            </svg>

            {/* CORE ROTATING RING (Original) */}
            <motion.div
              className="absolute w-40 h-40 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/30" />
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]"
                  style={{
                    top: "0%",
                    left: "50%",
                    transformOrigin: "0 80px",
                    rotate: i * 120
                  }}
                />
              ))}
            </motion.div>

            {/* --- WRAPPER FOR TEXT + LOADING --- */}
            <div className="absolute flex flex-col items-center">
              
              {/* RANDOM ROTATION "ALIF" MOTION */}
              <div className="flex space-x-1.5 mb-2">
                {"ALIF".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    className="text-white text-xl md:text-2xl font-black tracking-tighter inline-block drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                    animate={{
                      rotateX: [0, 360, 0],
                      rotateY: [0, 180, 0],
                      rotateZ: [0, 45, -45, 0],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* SYSTEM LOADING TEXT */}
              <motion.div 
                className="flex items-center space-x-1.5"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-[7px] font-mono text-cyan-400/70 tracking-[0.4em] uppercase">
                  System_Loading
                </span>
                <span className="flex space-x-0.5">
                  {[0, 1, 2].map((dot) => (
                    <motion.span
                      key={dot}
                      className="w-0.5 h-0.5 bg-cyan-400 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: dot * 0.2 }}
                    />
                  ))}
                </span>
              </motion.div>
            </div>
          </div>

          {/* PROGRESS BAR (Original) */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 overflow-hidden w-40 h-[1px] bg-white/10">
            <motion.div 
              className="h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}