import { useState } from "react";
import { motion } from "framer-motion";
import logo from "/yin_yang.svg";
import mypic from "../assets/userAsset/me.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="flex flex-col mb-18 md:flex-row items-center justify-between p-6 md:px-0">
      <div className="flex flex-shrink-0 items-center mb-4 md:mb-0">
        <motion.div
          className="relative"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.img
            animate={{
              rotateY: isHovered ? 360 : 0,
            }}
            transition={{ duration: 0.6 }}
            src={logo}
            className="w-10"
            alt="Logo"
          />
          {isHovered && (
            <motion.img
              src={mypic}
              className="absolute top-0 left-0 w-10 h-10 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              alt="User"
            />
          )}
        </motion.div>
        <div className="flex flex-col ml-1">
          <h1>Avinash</h1>
          <h1>Manigam;</h1>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/avinash-manigam-2113a7242/"
          aria-label="LinkedIn Profile"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Avinash01-GIT"
          aria-label="GitHub Profile"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/AvinashManigam"
          aria-label="X Profile"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-6 h-6 text-white"
          >
            <path
              d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
