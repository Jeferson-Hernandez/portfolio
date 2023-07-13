import { motion } from "framer-motion";

import { fadeIn } from "../animations/motion";

export const VerticalLinks = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn("left", 1, 1.9)}
        className="hidden md:block fixed bottom-0  ml-5"
      >
        <ul
          orientation="left"
          className="vertical-line flex flex-col items-center space-y-5"
        >
          <li>
            <a href="#">
              <img
                src="./src/assets/github-repo.svg"
                alt="github_logo"
                className="md:w-[23px] md:h-[23px]"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="./src/assets/linkedin-icon.svg"
                alt="github_logo"
                className="md:w-[23px] md:h-[23px]"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="./src/assets/twitter-icon.svg"
                alt="github_logo"
                className="md:w-[23px] md:h-[23px]"
              />
            </a>
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn("right", 1, 1.9)}
        className="hidden md:block fixed bottom-0 right-5 ml-5"
      >
        <div
          orientation="right"
          className="vertical-line flex flex-col items-center "
        >
          <a
            href="mailto:jefry_2558@hotmail.com"
            className="text-lightWhite vertical-write"
          >
            Jefry_2558@hotmail.com
          </a>
        </div>
      </motion.div>
    </>
  );
};
