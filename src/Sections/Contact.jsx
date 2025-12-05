import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen w-10/12 mx-auto flex items-center justify-center px-5 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full bg-base-100 rounded-2xl shadow-2xl p-8 md:p-12"
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Contact <span className="text-primary">Information</span>
        </h2>

        <p className="text-center text-base-content mb-12 max-w-2xl mx-auto">
          Want to work with me or have any questions? I’m always open to new
          opportunities, collaborations, and friendly conversations. Feel free
          to contact me anytime using the information below.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-base-200 shadow-lg flex flex-col items-center text-center gap-4"
          >
            <Mail size={40} className="text-primary" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-base-content/80 break-all">
              alifmahmud.dev@gmail.com
            </p>
            <a
              href="mailto:alifmahmud.dev@gmail.com"
              className="btn btn-primary btn-sm mt-2"
            >
              Send Email
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-base-200 shadow-lg flex flex-col items-center text-center gap-4"
          >
            <Phone size={40} className="text-secondary" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-base-content/80">+880 1610438236</p>
            <a
              href="tel:+8801XXXXXXXXX"
              className="btn btn-secondary btn-sm mt-2"
            >
              Call Now
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-base-200 shadow-lg flex flex-col items-center text-center gap-4"
          >
            <MessageCircle size={40} className="text-success" />
            <h3 className="text-xl font-semibold">WhatsApp</h3>
            <p className="text-base-content/80">+880 1610438236</p>
            <a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success btn-sm mt-2"
            >
              Message on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-base-content/70 mt-12"
        >
          I usually respond within 24 hours. Looking forward to hearing from
          you 🤝
        </motion.p>

      </motion.div>
    </section>
  );
}
