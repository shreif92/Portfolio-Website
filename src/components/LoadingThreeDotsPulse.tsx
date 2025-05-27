import { motion } from "motion/react";

function LoadingThreeDotsPulse() {
  const dotVariants = {
    pulse: {
      scale: [1, 1.5, 1],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      animate="pulse"
      transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
      className="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-1.5"
    >
      <motion.div
        className="w-3 h-3 rounded-full bg-orange-600 transform"
        variants={dotVariants}
      />
      <motion.div
        className="w-3 h-3 rounded-full bg-orange-600 transform"
        variants={dotVariants}
      />
      <motion.div
        className="w-3 h-3 rounded-full bg-orange-600 transform"
        variants={dotVariants}
      />
    </motion.div>
  );
}

export default LoadingThreeDotsPulse;
