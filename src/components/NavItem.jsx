/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn } from "../animations/motion";

export const NavItem = ({ name, index, button }) => {
  return (
    <motion.li
      initial="hidden"
      animate="visible"
      variants={fadeIn("top", index / 5, 0.6, 30)}
    >
      {button ? (
        <a
          href="mailto:jefry_2558@hotmail.com"
          className="py-3 px-3 border-2 font-bold border-lightBeige rounded-lg hover:bg-lightBeige hover:text-darkBlue  transition duration-500"
        >
          {name}
        </a>
      ) : (
        <a href={`#${name}`} className="links capitalize">
          <span className="font-roboto font-bold text-lightGray ">
            {index}.
          </span>{" "}
          {name}
        </a>
      )}
    </motion.li>
  );
};
