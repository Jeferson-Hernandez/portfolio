/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn } from "../animations/motion";

export const NavItem = ({
  name,
  index,
  button = false,
  aside = false,
  toggleAside = () => {},
}) => {
  return (
    <motion.li
      initial="hidden"
      animate="visible"
      variants={
        aside
          ? fadeIn("bottom", index / 5, 0.4, 30)
          : fadeIn("top", index / 5, 0.9, 30)
      }
    >
      {button ? (
        <a href="#" className={aside ? "btn-aside" : "btn-nav"}>
          {name}
        </a>
      ) : (
        <>
          <span className={aside ? "index-aside block" : "index-nav mr-1"}>
            0{index}.
          </span>
          <a
            href={`#${name}`}
            onClick={() => toggleAside(false)}
            className={
              aside
                ? "links capitalize text-lg"
                : "links capitalize text-sm lg:text-base"
            }
          >
            {name}
          </a>
        </>
      )}
    </motion.li>
  );
};
