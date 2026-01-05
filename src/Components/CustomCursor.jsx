import { useEffect, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Physics Config: Dot hobe fast, Bubble hobe ektu 'floaty'
  const dotSpring = { damping: 40, stiffness: 800, mass: 0.1 };
  const bubbleSpring = { damping: 25, stiffness: 180, mass: 0.6 };

  const dotX = useSpring(mouseX, dotSpring);
  const dotY = useSpring(mouseY, dotSpring);
  
  const bubbleX = useSpring(mouseX, bubbleSpring);
  const bubbleY = useSpring(mouseY, bubbleSpring);

  const handleMouseMove = useCallback((e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      
      {/* 1. Realistic Floating Bubble (Distance Maintaining) */}
      <motion.div
        className="absolute w-6 h-6 rounded-full border border-white/25"
        style={{ 
          x: bubbleX, 
          y: bubbleY, 
          // translateX/Y ekhane distance control korche
          translateX: "12px", 
          translateY: "12px",
          background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.15) 0%, transparent 60%)",
          boxShadow: "inset -1px -1px 4px rgba(255,255,255,0.1), 0 5px 15px rgba(0,0,0,0.2)",
          backdropFilter: "blur(1px)" // Khub halka blur jate realistic lage
        }}
      >
        {/* Specular Highlight (The 'fota' inside bubble) */}
        <div className="absolute top-1 left-1 w-1 h-1 bg-white/50 rounded-full blur-[0.2px]" />
      </motion.div>

      {/* 2. Sharp Neon Pointer (The Center) */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-[#ff005c] rounded-full shadow-[0_0_12px_#ff005c]"
        style={{ 
          x: dotX, 
          y: dotY, 
          translateX: "-50%", 
          translateY: "-50%" 
        }}
      />

    </div>
  );
}