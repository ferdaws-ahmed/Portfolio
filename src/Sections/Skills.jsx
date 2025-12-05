import React from "react";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaPython, FaJava 
} from "react-icons/fa";
import { SiMongodb, SiFirebase, SiTailwindcss, SiNextdotjs, SiExpress, SiRedux } from "react-icons/si";

export default function SkillsSection() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare size={40} className="text-yellow-400" /> },
    { name: "React", icon: <FaReact size={40} className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} className="text-gray-800 dark:text-white" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress size={40} className="text-gray-700" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-700" /> },
    { name: "Firebase", icon: <SiFirebase size={40} className="text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-sky-400" /> },
    { name: "Git", icon: <FaGitAlt size={40} className="text-red-500" /> },
    
    
    { name: "Database", icon: <FaDatabase size={40} className="text-gray-600" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-12"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5,  index  }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="flex flex-col items-center justify-center text-center p-4 bg-base-100 rounded-xl shadow-lg cursor-pointer"
            >
              {skill.icon}
              <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
