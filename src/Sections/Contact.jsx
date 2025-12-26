import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send, ExternalLink } from "lucide-react";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    },
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex items-center justify-center px-5 py-24 overflow-hidden"
    >
      {/* Background Glow Decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

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
          
          {/* Email Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative p-1 rounded-[2.5rem] bg-gradient-to-b from-primary/50 to-transparent shadow-2xl transition-all"
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

          {/* Phone Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative p-1 rounded-[2.5rem] bg-gradient-to-b from-secondary/50 to-transparent shadow-2xl transition-all"
          >
            <div className="bg-[#0a0a0a] rounded-[2.4rem] p-10 h-full flex flex-col items-center text-center gap-6 border border-white/5">
              <div className="w-20 h-20 rounded-3xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:rotate-[-10deg] transition-all duration-500">
                <Phone size={40} className="text-secondary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Phone</h3>
                <p className="text-gray-400 text-sm">+880 1610438236</p>
              </div>
              <a
                href="tel:+8801610438236"
                className="mt-auto flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all"
              >
                Call Now <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative p-1 rounded-[2.5rem] bg-gradient-to-b from-success/50 to-transparent shadow-2xl transition-all"
          >
            <div className="bg-[#0a0a0a] rounded-[2.4rem] p-10 h-full flex flex-col items-center text-center gap-6 border border-white/5">
              <div className="w-20 h-20 rounded-3xl bg-success/10 flex items-center justify-center group-hover:bg-success group-hover:scale-110 transition-all duration-500">
                <MessageCircle size={40} className="text-success group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
                <p className="text-gray-400 text-sm">+880 1610438236</p>
              </div>
              <a
                href="https://wa.me/8801610438236"
                target="_blank"
                rel="noreferrer"
                className="mt-auto flex items-center gap-2 text-success font-bold hover:gap-4 transition-all"
              >
                WhatsApp Me <Send size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div 
          variants={cardVariants}
          className="mt-20 text-center bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl inline-block left-1/2 relative -translate-x-1/2"
        >
          <p className="text-gray-300 flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
            </span>
            Available for new projects & collaborations
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}