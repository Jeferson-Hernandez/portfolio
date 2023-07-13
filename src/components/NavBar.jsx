import { useState, useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import { AnimatePresence, motion } from "framer-motion";
import { easeIn, navFadeIn } from "../animations/motion";
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
      <motion.nav
        initial="hidden"
        animate="visible"
        className={`fixed w-full flex flex-row justify-between items-center px-7 py-4 md:py-6 sm:px-16  text-darkWhite  ${
          visible ? "top-0" : "-top-24"
        } ${
          prevScrollPos === 0 ? "" : "box-shadow"
        } transition-all duration-500 z-30`}
      >
        <motion.div variants={easeIn(0.5, 0.3)} className="relative">
          <div className="text-2xl font-roboto font-bold bg-veryDarkBlue px-3 py-2 hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-500 border border-brightBlue rounded">
            Jh
          </div>
          <span className="absolute bg-lightWhite inset-0 -z-10 rounded" />
        </motion.div>

        <img
          src={
            isToggle
              ? "./src/assets/close-icon.svg"
              : "./src/assets/hamburger-icon.svg"
          }
          alt="close menu icon"
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

        <AnimatePresence>
          {isToggle && (
            <motion.aside
              initial={"hidden"}
              animate={isToggle ? "visible" : "hidden"}
              variants={navFadeIn("right", 0.2)}
              exit={"hidden"}
              className="absolute text-center h-screen text-darkWhite left-[25%] inset-0  z-20"
            >
              <ul className="flex flex-col h-full bg-darkBlue items-center justify-center space-y-10 text-base">
                <NavItem name={"sobre"} index={1} aside />
                <NavItem name={"projectos"} index={2} aside />
                <NavItem name={"habilidades"} index={3} aside />
                <NavItem name={"contacto"} index={4} aside button={true} />
              </ul>
            </motion.aside>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
