import { useState, useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import { AnimatePresence, motion } from "framer-motion";
import { easeIn, navFadeIn } from "../animations/motion";
import { NavItem } from "./NavItem";
import { closeIcon, hamburgerIcon } from "../assets";

export const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isToggle, setIsToggle] = useState(false);

  const getCurrentDimension = () => window.innerWidth;

  // const handleScreenWidth = () => {
  //   const screenWidth = window.innerWidth;
  //   if (screenWidth > 700) {
  //     setIsToggle(false);
  //   }
  //   console.log(screenWidth);
  // };

  useEffect(() => {
    const updateDimension = () => {
      setScreenWidth(getCurrentDimension());
    };

    //Scroll to toggle de navbar
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setPrevScrollPos(currentScrollPos);
    };

    if (screenWidth >= 670) {
      setIsToggle(false);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateDimension);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [screenWidth, prevScrollPos]);

  //Disable scrollY if aside is toggle
  isToggle ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        className={`fixed left-0 right-0 flex flex-row justify-between items-center px-7 py-4 md:py-6 md:px-16  text-darkWhite  ${
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
        <motion.img
          variants={easeIn(0.5, 0.3)}
          src={isToggle ? closeIcon : hamburgerIcon}
          alt="close menu icon"
          onClick={() => setIsToggle(!isToggle)}
          className={
            isToggle
              ? "md:hidden cursor-pointer mr-1 z-50"
              : "md:hidden cursor-pointer "
          }
        />

        <ul className="hidden md:flex flex-row space-x-10 text-xs">
          <NavItem name={"sobre"} index={1} />
          <NavItem name={"proyectos"} index={2} />
          <NavItem name={"habilidades"} index={3} />
          <NavItem name={"Hoja de vida"} index={4} button={true} />
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
                <NavItem
                  name={"sobre"}
                  index={1}
                  aside
                  toggleAside={setIsToggle}
                />
                <NavItem
                  name={"proyectos"}
                  index={2}
                  aside
                  toggleAside={setIsToggle}
                />
                <NavItem
                  name={"habilidades"}
                  index={3}
                  aside
                  toggleAside={setIsToggle}
                />
                <NavItem
                  name={"Hoja de vida"}
                  index={4}
                  aside
                  toggleAside={setIsToggle}
                  button={true}
                />
              </ul>
            </motion.aside>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
