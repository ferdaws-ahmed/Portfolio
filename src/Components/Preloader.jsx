import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}   
          transition={{ duration: 1 }}
        >
          {/* CENTER WRAPPER */}
          <div className="relative flex items-center justify-center w-40 h-40">

            {/* SCALE + FLOAT */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: [0, -4, 0], 
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* ROTATING RING */}
              <motion.div
                className="absolute inset-0 rounded-full border-[3px] border-cyan-400"
                style={{ transformOrigin: "50% 50%" }}
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear",
                }}
              />

              {/* INNER GLOW */}
              <div className="absolute inset-6 rounded-full bg-black shadow-[0_0_50px_#00fff7]" />

              {/* TEXT */}
              <motion.h1
                className="relative text-white text-xl tracking-[0.4em] font-light"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                ALIF
              </motion.h1>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
