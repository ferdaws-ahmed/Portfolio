import { useParams, Link } from "react-router"; 
import { projects } from "../Sections/Projects";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const { id } = useParams();
  
  const project = Array.isArray(projects)
    ? projects.find((p) => p.id === parseInt(id))
    : null;

  if (!project) {
    return (
      <p className="text-center py-20 text-xl font-semibold">
        Project not found 😥
      </p>
    );
  }

  // Random left/right slide for text blocks
  const getTextVariants = () => {
    const fromLeft = Math.random() > 0.5;
    return {
      hidden: { opacity: 0, x: fromLeft ? -50 : 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };
  };

  return (
    <section className="py-24 bg-base-200 min-h-screen">
      {/* Back To Home Button */}
      <motion.div
        className="max-w-6xl mx-auto px-4 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/"
          className="inline-block mb-6 text-primary font-semibold hover:underline"
        >
          ← Back to Home
        </Link>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 space-y-6">
        {/* Project Name */}
        <motion.h2
          className="text-4xl font-bold text-primary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {project.name}
        </motion.h2>

        {/* Project Image (from right) */}
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover rounded-xl"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Short Description */}
        <motion.p
          className="text-lg font-medium text-gray-700"
          variants={getTextVariants()}
          initial="hidden"
          animate="visible"
        >
          {project.shortDesc}
        </motion.p>

        {/* Full Description */}
        <motion.p
          className="text-base-content/80"
          variants={getTextVariants()}
          initial="hidden"
          animate="visible"
        >
          {project.description}
        </motion.p>

        {/* Stack */}
        <motion.p
          className="text-base-content/80"
          variants={getTextVariants()}
          initial="hidden"
          animate="visible"
        >
          <strong>Main Technology Stack:</strong> {project.stack}
        </motion.p>

        {/* Challenges */}
        <motion.p
          className="text-base-content/80"
          variants={getTextVariants()}
          initial="hidden"
          animate="visible"
        >
          <strong>Challenges Faced:</strong> {project.challenges}
        </motion.p>

        {/* Future Improvements */}
        <motion.p
          className="text-base-content/80"
          variants={getTextVariants()}
          initial="hidden"
          animate="visible"
        >
          <strong>Potential Improvements / Future Plans:</strong> {project.improvements}
        </motion.p>

        {/* Links */}
        <motion.div
          className="flex gap-4 mt-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Live Project
          </a>
          <a
            href={project.githubClient}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            GitHub (Client)
          </a>
        </motion.div>
      </div>
    </section>
  );
}
