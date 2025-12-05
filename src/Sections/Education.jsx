import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="min-h-screen bg-base-100 flex items-center justify-center px-5 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full bg-base-200 rounded-2xl shadow-2xl p-8 md:p-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-10 text-center">
          Educational Qualification
        </h2>

        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="border-l-4 border-primary pl-6 space-y-6"
        >
          <h3 className="text-2xl font-semibold text-secondary">
            Bachelor of Science (BSc) in Physics
          </h3>

          <p className="text-lg text-base-content leading-8">
            I am currently pursuing my Bachelor of Science (BSc) degree in
            <span className="font-semibold text-primary"> Physics </span>
            under the <span className="font-semibold">National University</span> of
            Bangladesh, studying at
            <span className="font-semibold text-primary">
              {" "}
              Tongi Government College.
            </span>
          </p>

          <p className="text-lg text-base-content leading-8">
            Although I have not yet completed my graduation, my academic journey
            has helped me develop problem-solving abilities, analytical thinking,
            and discipline — which greatly complement my work as a MERN stack
            developer. Alongside my academic studies, I am continuously
            improving my programming skills and building real-world projects.
          </p>

          <p className="text-lg text-base-content leading-8">
            My goal is to successfully complete my graduation while growing as a
            professional web developer, combining both academic knowledge and
            practical experience to create impactful digital solutions.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <span className="badge badge-primary p-4">
              National University
            </span>
            <span className="badge badge-secondary p-4">
              Tongi Govt. College
            </span>
            <span className="badge badge-accent p-4">
              BSc in Physics
            </span>
            <span className="badge badge-info p-4">
              Ongoing
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
