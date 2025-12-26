import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollZoomImage() {
  const { scrollY } = useScroll();

  // Scroll scale 1 - 1.8  zoom 
  const scale = useTransform(scrollY, [0, 1000], [1, 1]);
  
  // Smooth motion setup
  const smoothScale = useSpring(scale, { stiffness: 80, damping: 20 });

  return (
    <motion.div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        scale: smoothScale,
        backgroundColor: "#050505", // Deep dark background
        // Horizontal Neon lines pattern (SVG)
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='1000' height='200' viewBox='0 0 1000 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 Q 250 50 500 100 T 1000 100' stroke='%2300f2ff' fill='none' stroke-width='2' opacity='0.4'/%3E%3Cpath d='M0 120 Q 250 170 500 120 T 1000 120' stroke='%237000ff' fill='none' stroke-width='2' opacity='0.3'/%3E%3C/svg%3E")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // Glow effect 
        boxShadow: "inset 0 0 100px rgba(0,0,0,1)",
        filter: "contrast(1.2) brightness(0.8)",
      }}
    >
      {/* Neon Glow Overlay  */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, transparent 0%, rgba(5,5,5,0.8) 100%)",
          filter: "blur(40px)",
        }} 
      />
    </motion.div>
  );
}