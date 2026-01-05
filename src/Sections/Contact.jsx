import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send, ExternalLink } from "lucide-react";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Ektu fast stagger performance-er jonno
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 }, // y distance komano hoyeche smoother feel-er jonno
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 80, // Stiffness komiye buttery smooth kora hoyeche
        damping: 15 
      }
    },
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex items-center justify-center px-5 py-24 overflow-hidden  text-white"
    >
      {/* Background Glow Decorations (Optimized) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-6xl w-full"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            variants={cardVariants}
            className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
          >
            Let's <span className="text-primary">Connect</span>
          </motion.h2>
          <motion.p 
            variants={cardVariants}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Want to work together or have a question? I'm always open to new
            opportunities, collaborations, and friendly conversations.
          </motion.p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Email Card - Fixed Colors */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative p-[1px] rounded-[2.5rem] bg-gradient-to-b from-primary/40 to-transparent shadow-2xl"
            style={{ willChange: "transform" }}
          >
            <div className="bg-[#0a0a0a] rounded-[2.4rem] p-10 h-full flex flex-col items-center text-center gap-6 border border-white/5">
              <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:rotate-[10deg] transition-all duration-500">
                <Mail size={40} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Email</h3>
                <p className="text-gray-400 text-sm break-all">alifmahmud.dev@gmail.com</p>
              </div>
              <a
                href="mailto:alifmahmud.dev@gmail.com"
                className="mt-auto flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
              >
                Send Mail <Send size={18} />
              </a>
            </div>
          </motion.div>

          {/* Phone Card - Fixed Secondary Color */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative p-[1px] rounded-[2.5rem] bg-gradient-to-b from-purple-500/40 to-transparent shadow-2xl"
            style={{ willChange: "transform" }}
          >
            <div className="bg-[#0a0a0a] rounded-[2.4rem] p-10 h-full flex flex-col items-center text-center gap-6 border border-white/5">
              <div className="w-20 h-20 rounded-3xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500 group-hover:rotate-[-10deg] transition-all duration-500">
                <Phone size={40} className="text-purple-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Phone</h3>
                <p className="text-gray-400 text-sm">+880 1610438236</p>
              </div>
              <a
                href="tel:+8801610438236"
                className="mt-auto flex items-center gap-2 text-purple-400 font-bold hover:gap-4 transition-all"
              >
                Call Now <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>

          {/* WhatsApp Card - Fixed Success Color */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative p-[1px] rounded-[2.5rem] bg-gradient-to-b from-emerald-500/40 to-transparent shadow-2xl"
            style={{ willChange: "transform" }}
          >
            <div className="bg-[#0a0a0a] rounded-[2.4rem] p-10 h-full flex flex-col items-center text-center gap-6 border border-white/5">
              <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-500">
                <MessageCircle size={40} className="text-emerald-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">WhatsApp</h3>
                <p className="text-gray-400 text-sm">+880 1610438236</p>
              </div>
              <a
                href="https://wa.me/8801610438236"
                target="_blank"
                rel="noreferrer"
                className="mt-auto flex items-center gap-2 text-emerald-400 font-bold hover:gap-4 transition-all"
              >
                WhatsApp Me <Send size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer Note - Optimized Pulse */}
        <motion.div 
          variants={cardVariants}
          className="mt-20 text-center bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl block mx-auto w-fit"
        >
          <p className="text-gray-300 flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Available for new projects & collaborations
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}