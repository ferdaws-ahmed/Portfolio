import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen w-10/12 mx-auto flex items-center justify-center  px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl bg-base-100 shadow-xl rounded-2xl p-8 md:p-12"
      >
        <h2 className="text-4xl font-bold text-primary mb-6">
          About Me
        </h2>

        <p className="text-lg text-base-content leading-8 mb-6">
          I am a passionate MERN stack developer who started my programming
          journey with curiosity about how websites and applications work
          behind the scenes. Over time, I fell in love with solving problems
          through code and building full-stack applications that are not only
          functional but also user-friendly and visually clean.
        </p>

        <p className="text-lg text-base-content leading-8 mb-6">
          I enjoy working on real-world projects where I can use JavaScript,
          React, Node.js, MongoDB, and modern UI frameworks like Tailwind CSS
          and DaisyUI. My main focus is on creating responsive, fast, and
          scalable web applications with clean and maintainable code. I prefer
          projects that challenge my creativity and logic at the same time.
        </p>

        <p className="text-lg text-base-content leading-8 mb-8">
          Outside of programming, I love traveling and exploring new places. 
          It refreshes my mind and gives me fresh ideas. I also enjoy learning
          new technologies, listening to music, and spending time thinking
          about innovative digital solutions. I am a curious person who never
          stops learning and always looks for ways to improve.
        </p>

        <div className="flex flex-wrap gap-3">
          <span className="badge badge-primary p-4">MERN Stack</span>
          <span className="badge badge-secondary p-4">JavaScript</span>
          <span className="badge badge-accent p-4">React</span>
          <span className="badge badge-info p-4">Node.js</span>
          <span className="badge badge-success p-4">MongoDB</span>
          <span className="badge badge-warning p-4">Traveling</span>
        </div>
      </motion.div>
    </section>
  );
}
