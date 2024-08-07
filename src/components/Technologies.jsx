import { SiMongodb, SiExpress, SiReact, SiTailwindcss  } from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-4xl my-20 text-center"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-500 p-4"
        >
          <SiMongodb className="text-6xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-500 p-4"
        >
          <SiExpress className="text-6xl text-gray-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-500 p-4"
        >
          <SiReact className="text-6xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-500 p-4"
        >
          <GrNode className="text-6xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-500 p-4"
        >
          <FaGitAlt className="text-6xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-500 p-4"
        >
          <IoLogoJavascript className="text-6xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-500 p-4"
        >
          <SiTailwindcss className="text-6xl  text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-500 p-4"
        >
          <IoLogoFirebase className="text-6xl text-orange-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
