import mater from "../assets/userAsset/master.gif";
import { ABOUT_TEXT } from "../Constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="overflow-y-hidden">
      <h1 className="my-20 text-4xl text-center ">About Me</h1>
      <div className="flex items-center flex-wrap overflow-x-hidden">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="lg:w-90 h-80" src={mater} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 pre-line">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
