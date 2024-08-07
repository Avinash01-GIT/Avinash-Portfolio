import { motion } from "framer-motion";
import { HERO_CONTENT } from "../Constants";
import mypic from "../assets/userAsset/me.jpg";

const container = (delay) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="pb-2 lg:mb-35">
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-4xl font-thin tracking-tight lg:mt-10 lg:text-7xl"
            >
              <span className="text-3xl tracking-tight">Hello I&apos;m </span>
              Avi
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-600 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              A Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-4 lg:my-6 max-w-lg lg:max-w-2xl text-lg lg:text-xl font-light leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <motion.img
              initial={{x:100, opacity: 0}}
              animate={{x:0, opacity: 1}}
              transition={{duration: 1, delay:1.2}}
              src={ mypic }
              width={400} 
              height={400}
              alt="Avinash"
              className='rounded-full'
              />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;

