import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen w-11/12 mx-auto flex items-center justify-center px-5 py-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl bg-gradient-to-br from-base-100 to-base-200 shadow-2xl rounded-3xl p-8 md:p-12 border border-base-300"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-8 text-center">
          About Me
        </h2>

        <p className="text-lg md:text-xl text-base-content leading-relaxed mb-6 text-justify">
          Hello! I’m a passionate <span className="font-semibold text-primary">MERN Stack Developer</span> who began exploring the inner workings of websites and applications out of sheer curiosity. Over the years, I developed a deep love for problem-solving through code and creating full-stack applications that are not only functional but also visually appealing and user-friendly.
        </p>

        <p className="text-lg md:text-xl text-base-content leading-relaxed mb-6 text-justify">
          I enjoy working on projects where I can leverage <span className="font-semibold">JavaScript, React, Node.js, MongoDB</span> along with modern UI frameworks like <span className="font-semibold">Tailwind CSS</span> and <span className="font-semibold">DaisyUI</span>. My focus is on building responsive, fast, and scalable web applications with clean and maintainable code. Projects that challenge both creativity and logic excite me the most.
        </p>

        <p className="text-lg md:text-xl text-base-content leading-relaxed mb-10 text-justify">
          Outside of coding, I love <span className="font-semibold text-accent">traveling</span> and exploring new places, which refreshes my mind and sparks creativity. I also enjoy learning new technologies, listening to music, and thinking about innovative digital solutions. I’m a curious individual who never stops learning and constantly seeks improvement.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          {[
            { name: "MERN Stack", color: "from-blue-500 to-purple-500" },
            { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
            { name: "React", color: "from-sky-400 to-blue-600" },
            { name: "Node.js", color: "from-green-400 to-green-600" },
            { name: "MongoDB", color: "from-green-600 to-green-800" },
            { name: "Traveling", color: "from-pink-400 to-pink-600" },
          ].map((badge, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`badge text-white font-semibold p-4 rounded-full bg-gradient-to-r ${badge.color} shadow-lg cursor-pointer`}
            >
              {badge.name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
