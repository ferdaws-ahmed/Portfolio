import { motion, useScroll, useSpring } from "framer-motion";

const RGBScrollbar = () => {
  const { scrollYProgress } = useScroll();
  
  // Scroll motion smooth 
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 right-0 w-1.5 h-full bg-white/5 z-[9999] pointer-events-none">
      <motion.div
        className="absolute top-0 left-0 right-0 origin-top"
        style={{ 
          scaleY,
          background: "linear-gradient(to bottom, #ff005c, #7000ff, #00d4ff, #ff005c)",
          height: "100%",
          boxShadow: "0px 0px 15px rgba(255, 0, 92, 0.5)"
        }}
      />
      
    </div>
  );
};

export default RGBScrollbar;