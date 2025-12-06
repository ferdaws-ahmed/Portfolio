import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-base-300 py-16 px-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >


        {/* Logo / Name */}
        <h2 className="text-3xl font-bold mb-3">
          Alif <span className="text-primary">Mahmud</span>
        </h2>

        {/* Description */}
        <p className="max-w-xl mx-auto text-base-content/70 mb-8">
          MERN Stack Developer focused on building clean, user-friendly and
          animated web interfaces. Always learning, always building.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/ferdaws-ahmed" target="_blank"
            className="p-3 bg-base-100 rounded-full shadow-md hover:text-primary transition"
          >
            <Github />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/md-ferdaws/" target="_black"
            className="p-3 bg-base-100 rounded-full shadow-md hover:text-primary transition"
          >
            <Linkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.facebook.com/profile.php?id=61556248924752" target="_blank"
            className="p-3 bg-base-100 rounded-full shadow-md hover:text-primary transition"
          >
            <Facebook />
          </motion.a>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-base-content/20 my-6"></div>

        {/* Copyright */}
        <p className="text-sm text-base-content/60 flex items-center justify-center gap-2">
          <Code2 size={16} />
          © {new Date().getFullYear()} Alif Mahmud — All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
