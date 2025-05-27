import { Download } from "lucide-react";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <section className="container min-h-fit grid place-items-center px-4 sm:px-6 lg:px-8 mx-auto mt-24 md:mt-32">
      <div className="grid md:grid-cols-2 items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-4xl font-bold text-white leading-tight mb-4"
          >
            Hello, I'm{" "}
            <span className="text-orange-600 block text-4xl md:text-5xl lg:text-6xl">
              Shreif Abdullah
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-2xl text-gray-300 mb-6 max-w-xl"
          >
            Passionate
            <span className="text-orange-500"> Backend Developer </span>
            with expertise in building efficient high-performance solutions
            using
            <span className="font-bold"> Django</span> and
            <span className="font-bold"> Fastapi</span> and
            <span className="font-bold"> MERN Stack</span>
          </motion.p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-lg font-medium transition"
            >
              My Work
            </motion.a>

            <motion.a
              href="/Sherif Abdullah - Backend Django - CV.pdf"
              download
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-lg font-medium transition"
            >
              <Download className="w-5 h-5" />
              Resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 aspect-square overflow-hidden shadow-2xl">
            <img
              src="/profile.png"
              alt="Shreif Abdullah"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
