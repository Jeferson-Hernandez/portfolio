import { useState, useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import { motion } from "framer-motion";
import { easeIn, fadeIn } from "../animations/motion";
import { NavItem } from "./NavItem";

export const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isToggle, setIsToggle] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    // console.log(currentScrollPos);
    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  isToggle ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <>
      <nav
        className={`sticky w-full flex flex-row justify-between items-center px-7 sm:px-16 py-3 text-lightBeige  ${
          visible ? "top-0" : "-top-20"
        } ${
          prevScrollPos === 0 ? "" : "box-shadow"
        } transition-all duration-500 z-30`}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={easeIn(0.5, 0.3)}
          className="relative"
        >
          <div className="text-2xl font-roboto font-bold bg-darkBlue px-2 py-1 hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-500 border border-lightBlue rounded">
            Jh
          </div>
          <span className="absolute bg-lightBeige inset-0 -z-10 rounded" />
        </motion.div>

        <img
          src={
            isToggle
              ? "./src/assets/close-icon.svg"
              : "./src/assets/hamburger-icon.svg"
          }
          alt="close mobile menu"
          onClick={() => setIsToggle(!isToggle)}
          className={
            isToggle
              ? "sm:hidden cursor-pointer mr-1 z-50"
              : "sm:hidden cursor-pointer "
          }
        />

        <ul className="hidden sm:flex flex-row space-x-10 text-xs">
          <NavItem name={"sobre"} index={1} />
          <NavItem name={"projectos"} index={2} />
          <NavItem name={"habilidades"} index={3} />
          <NavItem name={"contacto"} index={4} button={true} />
        </ul>

        {isToggle && (
          <motion.aside
            initial="hidden"
            animate="visible"
            variants={fadeIn("right", 0.3, 0.2)}
            className="absolute text-center text-lightBeige left-24 inset-0 z-20"
          >
            <ul className="flex flex-col h-screen bg-lightBlue items-center justify-center space-y-10 text-base">
              <NavItem name={"sobre"} index={1} aside />
              <NavItem name={"projectos"} index={2} aside />
              <NavItem name={"habilidades"} index={3} aside />
              <NavItem name={"contacto"} index={4} aside button={true} />
            </ul>
          </motion.aside>
        )}
      </nav>
    </>
  );
};
