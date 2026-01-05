import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function About() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(springY, [-100, 100], [10, -10]);
  const rotateY = useTransform(springX, [-100, 100], [-10, 10]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", damping: 25, stiffness: 80, duration: 1 }
    },
  };

  return (
    // bg-black add kora hoyeche jate light mode-eo pichone kalo thake
    <section id="about" className="relative min-h-screen w-full flex items-center justify-center px-5 py-24 overflow-hidden  text-white">
      
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" 
        />
      </div>

      <motion.div
        style={{ perspective: 1000, rotateX, rotateY, willChange: "transform" }}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        // bg-white/5 ke hardcode kora hoyeche jate white mode-e background sada na hoye jay
        className="relative max-w-4xl backdrop-blur-md bg-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-[40px] p-8 md:p-16 border border-white/10 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-primary rounded-tl-[40px]" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-primary rounded-br-[40px]" />

        <motion.h2 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-black mb-10 text-center bg-gradient-to-r from-primary via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm"
        >
          About Me
        </motion.h2>

        <div className="space-y-6">
          {/* text-gray-300 use kora hoyeche jate light mode-e text ube na jay */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
            Hello! I’m a passionate <span className="font-bold text-primary italic">MERN Stack Developer</span> who began exploring the inner workings of websites and applications out of sheer curiosity. Over the years, I developed a deep love for problem-solving through code and creating full-stack applications that are not only functional but also visually appealing and user-friendly.
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
            I enjoy working on projects where I can leverage <span className="text-primary font-bold">JavaScript, React, Node.js, MongoDB</span> along with modern UI frameworks like <span className="text-cyan-400 font-bold">Tailwind CSS</span>. My focus is on building responsive, fast, and scalable web applications with clean and maintainable code.
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 text-justify">
            Outside of coding, I love <span className="text-purple-400 font-bold">traveling</span> and exploring new places, which refreshes my mind and sparks creativity. I also enjoy learning new technologies, listening to music, and thinking about innovative digital solutions.
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mt-12">
          {[
            { name: "MERN Stack", color: "from-blue-600 to-purple-600" },
            { name: "JavaScript", color: "from-yellow-400 to-orange-500" },
            { name: "React", color: "from-sky-400 to-blue-500" },
            { name: "Node.js", color: "from-green-500 to-emerald-700" },
            { name: "MongoDB", color: "from-emerald-600 to-green-900" },
            { name: "Traveling", color: "from-pink-500 to-rose-600" },
          ].map((badge, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.15, rotate: [0, 2, -2, 0], boxShadow: "0px 0px 25px rgba(255, 0, 92, 0.6)" }}
              className={`px-6 py-2 text-white font-bold text-sm rounded-full bg-gradient-to-r ${badge.color} shadow-xl cursor-pointer border border-white/20`}
            >
              {badge.name}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}