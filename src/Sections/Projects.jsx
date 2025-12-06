import { motion } from "framer-motion";
import toyShopImg from "../assets/images/toyshop.png";
import habituoImg from "../assets/images/habituo.png";
import simpleApp from "../assets/images/simpleapp.png";
import { useNavigate } from "react-router";

export const projects = [
  {
  id: 3,
  name: "Toy Shop — Interactive Kids Toy Marketplace",
  image: toyShopImg,
  shortDesc:
    "Toy Shop is an interactive web application where users can browse kids' toys, view details, and manage their profiles through Firebase authentication.",

  description:
    "Toy Shop is a responsive and dynamic toy marketplace built with React and Firebase. Users can browse various toys, view complete details such as price, rating, and quantity, play mini-games in the Kids Play Zone, and update their profiles. Some pages are protected with private routes, accessible only after login.",

  stack:
    "React, Firebase, TailwindCSS, DaisyUI, React Router, React Toastify, Swiper, Framer Motion, React Helmet Async, React Fast Marquee, Lucide React",

  liveLink: "https://glittering-griffin-9cb94d.netlify.app/",

  githubClient: "https://github.com/ferdaws-ahmed/Toy-Shop",

  challenges:
    "Implementing secure authentication, managing private routes, handling dynamic toy data, and maintaining responsive design across all devices.",

  improvements:
    "Adding a payment system, admin dashboard for managing toys, advanced filters, and expanding the Kids Play Zone with more games.",
},
  {
  id: 2,
  name: "Habituo — Build Better Habits, Every Day",
  image: habituoImg, 
  shortDesc:
    "Habituo is a modern habit-tracking web application that helps users build better habits through a clean and interactive dashboard.",

  description:
    "Habituo is a modern habit-tracking web application that helps users build consistency, set goals, and stay motivated through a visually engaging and user-friendly interface. Users can track their habits, explore public habits, and stay consistent with progress-driven insights.",

  stack:
    "React, Tailwind CSS, DaisyUI, Framer Motion, React Router, Node.js, Express.js, MongoDB, Firebase Authentication, React Toastify",

  liveLink: "https://habituo.netlify.app",

  githubClient: "https://github.com/ferdaws-ahmed/Habituo",

  challenges:
    "Handling real-time data syncing between private and public habit collections, building secure authentication system with Firebase, and managing complex state for user-specific habits.",

  improvements:
    "Introducing AI-based habit recommendations, reminder notifications, mobile app version, and detailed analytics dashboard.",
},
  {
    id: 1,
    name: "Hero.io",
    image: simpleApp,
    shortDesc:
      "Hero.io is a React-based mini project that showcases various applications in an app-store style interface.",
    description:
      "Hero.io is a React-based mini project that showcases various applications — including their name, rating, downloads, reviews, and detailed descriptions — in an interface similar to an app store.",

    stack:
      "React, React Router DOM, Tailwind CSS, Font Awesome, Recharts, Local JSON",

    liveLink: "https://splendorous-gnome-90efa8.netlify.app/",
    githubClient: "https://github.com/ferdaws-ahmed/Simple-app-store",

    challenges:
      "Routing between pages, passing dynamic data, and implementing interactive charts were the major challenges.",

    improvements:
      "Add user authentication, dark mode, admin dashboard, and real-time backend integration.",
  },
];

export default function Projects() {
  const navigate = useNavigate();

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
  className="bg-base-100 shadow-xl rounded-xl overflow-hidden flex flex-col"
>
  <img
    src={project.image}
    alt={project.name}
    className="w-full h-48 object-cover"
  />

  <div className="p-6 flex flex-col flex-grow">
    <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>

    <p className="text-base-content/70 mb-4 flex-grow">{project.shortDesc}</p>

    
    <button
      className="btn btn-primary w-full mt-auto"
      onClick={() => navigate(`/projects/${project.id}`)}
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
