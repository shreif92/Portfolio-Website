import { motion } from "motion/react";
import { Code2, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-5 md:mt-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          About Me
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          I'm a software engineer passionate about building robust backend
          systems and continuously improving through learning and real-world
          experience.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex flex-col items-center gap-4 text-gray-400 text-sm sm:text-lg text-center"
      >
        <div className="flex items-center gap-3">
          <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
          <span>Bachelor's degree, Educational/Instructional Technology</span>
        </div>
        <div className="flex items-center gap-3">
          <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
          <span>Backend Development with Django, Fastapi and Node.js</span>
        </div>
        <div className="flex items-center gap-3">
          <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
          <span>Experience in building real-world applications</span>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
