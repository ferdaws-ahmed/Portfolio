import React from "react";
import { motion } from "framer-motion";
import GitHubMatrix from "./GithubMatrix";

export default function GitHubActivity() {
  const githubUsername = "ferdaws-ahmed";

  return (
    <section className="py-24 relative bg-transparent overflow-hidden">
      {/* --- DYNAMIC RGB BACKGROUND BEAM --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-red-500/10 blur-[150px] -z-10 animate-hue-rotate" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Heading with Glitch Effect */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-red-500 bg-clip-text text-transparent uppercase tracking-[0.25em] relative group cursor-default"
          >
            Github Contribution
            {/* Glitch Overlay */}
            <span className="absolute top-0 left-0 w-full h-full text-cyan-500/30 -z-10 translate-x-[2px] animate-pulse">Github Contribution</span>
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 bg-gradient-to-r from-cyan-500 via-purple-500 to-red-500 mt-4 rounded-full shadow-[0_0_20px_rgba(0,242,255,0.8)]"
          />
        </div>

        {/* --- MAIN RGB CARD --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#050505]/95 backdrop-blur-3xl p-6 md:p-12 rounded-[2.5rem] border border-white/5 overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,1)]"
        >
          {/* Animated Border Flow */}
          <div className="absolute inset-0 p-[1px] -z-10 rounded-[2.5rem] overflow-hidden">
            <div className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00f2ff_0%,#a855f7_50%,#ff0000_100%)] opacity-20 group-hover:opacity-40 transition-opacity" />
          </div>

          {/* Header Info */}
          <div className="flex justify-between items-center mb-10 border-b border-white/5 pb-6">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex items-center gap-4"
            >
              <div className="relative">
                <img
                  src={`https://github.com/${githubUsername}.png`}
                  alt="Profile"
                  className="w-14 h-14 rounded-full border-2 border-cyan-500/50 p-1 group-hover:border-cyan-400 transition-colors"
                />
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md animate-pulse -z-10" />
              </div>
              <div>
                <h3 className="text-white font-bold tracking-tight text-lg group-hover:text-cyan-400 transition-colors">
                  @{githubUsername}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                  <p className="text-cyan-500 text-[10px] uppercase tracking-widest font-mono font-bold">
                    SYSTEM_LINK: ACTIVE
                  </p>
                </div>
              </div>
            </motion.div>
            
            <div className="hidden md:flex flex-col items-end font-mono text-[10px] text-gray-500 tracking-widest">
              <span className="animate-pulse text-purple-400">DATA_SYNC_MODE: FULL_RGB</span>
              <span>EST. 2025_CORE_V5</span>
            </div>
          </div>

          {/* GitHub Matrix Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full overflow-x-auto custom-scrollbar flex justify-center py-6 relative"
          >
            {/* Scanline Effect Overlay */}
            <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-[0.03] z-20" />
            
            <div className="min-w-[850px] md:w-full flex justify-center">
              <GitHubMatrix username={githubUsername} year={2025} />
            </div>
          </motion.div>

          {/* Bottom Stats/Legend with RGB nodes */}
          <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-[0.2em] gap-6">
            <div className="flex gap-8">
               <div className="flex items-center gap-3 text-gray-500">
                  <div className="w-3 h-3 bg-[#1d1d1d] rounded-sm border border-white/5" />
                  <span>Dormant</span>
               </div>
               <div className="flex items-center gap-3 text-cyan-400">
                  <div className="w-3 h-3 bg-cyan-500 rounded-sm shadow-[0_0_10px_#00f2ff] animate-bounce" />
                  <span>Neural_Active</span>
               </div>
            </div>

            <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-gray-400">
               Total Nodes Scanned: <span className="text-white font-bold">365_DAYS</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ADDITIONAL STYLES FOR MATHA NOSTO LOOK */}
      <style>
        {`
          @keyframes hue-rotate {
            from { filter: hue-rotate(0deg); }
            to { filter: hue-rotate(360deg); }
          }
          .animate-hue-rotate {
            animation: hue-rotate 10s linear infinite;
          }

          .custom-scrollbar::-webkit-scrollbar { height: 4px; }
          .custom-scrollbar::-webkit-scrollbar-thumb { 
            background: linear-gradient(to right, #00f2ff, #a855f7, #ff0000); 
            border-radius: 10px; 
          }

          .bg-scanlines {
            background: linear-gradient(
              to bottom,
              transparent 50%,
              rgba(0, 255, 255, 0.5) 50%
            );
            background-size: 100% 4px;
          }
        `}
      </style>
    </section>
  );
}