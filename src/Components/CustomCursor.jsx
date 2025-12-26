import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Smooth spring physics for fluid movement
  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check for links, buttons or cards
      const target = e.target;
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("button") || 
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      
      {/* 1. The Core - Diamond Shape */}
      <motion.div
        className="absolute w-4 h-4 bg-primary rotate-45 flex items-center justify-center shadow-[0_0_15px_#ff005c]"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          rotate: isHovered ? 225 : 45,
          scale: isClicked ? 0.8 : isHovered ? 1.5 : 1,
        }}
      >
        <div className="w-1 h-1 bg-white rounded-full"></div>
      </motion.div>

      {/* 2. The Liquid Halo (Slow Follower) */}
      <motion.div
        className="absolute w-12 h-12 border-2 border-primary/30 rounded-full"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          scale: isHovered ? 2 : 1,
          opacity: isHovered ? 0.8 : 0.4,
          borderStyle: isHovered ? "dashed" : "solid",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100, mass: 1 }}
        style={{ translateX: "-50%", translateY: "-50%" }}
      />

      {/* 3. Outer Interactive Circle */}
      <motion.div
        className="absolute w-2 h-2 bg-secondary/50 rounded-full blur-[2px]"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
        }}
        transition={{ type: "spring", damping: 10, stiffness: 50, mass: 2 }} 
        style={{ translateX: "-50%", translateY: "-50%" }}
      />

      {/* 4. Mouse Glow (Gradient) */}
      <div
        className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,0,92,0.15)_0%,transparent_70%)] rounded-full pointer-events-none"
        style={{
          left: mousePos.x - 200,
          top: mousePos.y - 200,
        }}
      />
    </div>
  );
}