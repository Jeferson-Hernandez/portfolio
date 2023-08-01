import { motion } from "framer-motion";
import { fadeIn } from "../animations/motion";

import { githubRepo, linkedinIcon, twitterIcon } from "../assets";

export const VerticalLinks = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn("left", 1, 1.9)}
        className="hidden md:block fixed bottom-0 left-7 lg:left-12"
      >
        <ul className="vertical-line flex flex-col items-center space-y-5">
          <li>
            <a href="https://github.com/Jeferson-Hernandez">
              <img
                src={githubRepo}
                alt="github_logo"
                className="md:w-[23px] md:h-[23px] hover:-translate-y-1  transition-transform duration-200"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jefer-hernandez/">
              <img
                src={linkedinIcon}
                alt="linkedin_logo"
                className="md:w-[23px] md:h-[23px] hover:-translate-y-1 transition-transform duration-200"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Blakintk">
              <img
                src={twitterIcon}
                alt="twitter_logo"
                className="md:w-[23px] md:h-[23px] hover:-translate-y-1 transition-transform duration-200"
              />
            </a>
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn("right", 1, 1.9)}
        className="hidden md:block fixed bottom-0 right-7 lg:right-12"
      >
        <div className="vertical-line flex flex-col items-center ">
          <a
            href="mailto:jefry_2558@hotmail.com"
            className="vertical-write text-lightWhite font-roboto tracking-widest  hover:mb-1 transition-all duration-200"
          >
            Jefry_2558@hotmail.com
          </a>
        </div>
      </motion.div>
    </>
  );
};
