// Projects.jsx
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    image: "https://via.placeholder.com/400x200",
    shortDesc: "A modern portfolio website built with MERN stack.",
    stack: "React, Node.js, Express, MongoDB",
    liveLink: "#",
    githubClient: "#",
    challenges: "Making it fully responsive and animated.",
    improvements: "Add blog section in future."
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    image: "https://via.placeholder.com/400x200",
    shortDesc: "Online shopping site with full cart & checkout system.",
    stack: "React, Node.js, MongoDB, Stripe",
    liveLink: "#",
    githubClient: "#",
    challenges: "Payment integration and real-time cart updates.",
    improvements: "Add admin panel for product management."
  },
  {
    id: 3,
    name: "Chat Application",
    image: "https://via.placeholder.com/400x200",
    shortDesc: "Real-time chat app with rooms and private messaging.",
    stack: "React, Node.js, Socket.io",
    liveLink: "#",
    githubClient: "#",
    challenges: "Handling multiple users in rooms smoothly.",
    improvements: "Add file sharing and emoji support."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="bg-base-100 shadow-xl rounded-xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-base-content/70 mb-4">{project.shortDesc}</p>
                <button
                  className="btn btn-primary w-full"
                  onClick={() => alert(
                    `Project: ${project.name}\nStack: ${project.stack}\nLive: ${project.liveLink}\nGitHub: ${project.githubClient}\nChallenges: ${project.challenges}\nFuture: ${project.improvements}`
                  )}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
