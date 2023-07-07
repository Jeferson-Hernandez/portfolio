import { useState, useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

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
        <div className="relative ">
          <div className="cursor pointer text-2xl bg-darkBlue px-2 py-1 hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-500 border border-lightBlue rounded">
            Jh
          </div>
          <span className="absolute bg-lightBeige inset-0 -z-10 rounded" />
        </div>

        {isToggle ? (
          <img
            src="./src/assets/close-icon.svg"
            alt="close mobile menu"
            onClick={() => setIsToggle(!isToggle)}
            className="sm:hidden cursor-pointer z-50"
          />
        ) : (
          <img
            src="./src/assets/hamburger-icon.svg"
            alt="open mobile menu"
            onClick={() => setIsToggle(!isToggle)}
            className="sm:hidden cursor-pointer"
          />
        )}

        <ul className="hidden sm:flex flex-row space-x-10 text-xs">
          <li>
            <a href="#about" className="links">
              <span>01.</span> About
            </a>
          </li>
          <li>
            <a href="#work" className="links">
              <span>02.</span> Work
            </a>
          </li>
          <li>
            <a href="#skilss" className="links">
              <span>03.</span> Skills
            </a>
          </li>
          <li>
            <a
              href="mailto:jefry_2558@hotmail.com"
              className="py-3 px-3 border-2 border-lightBeige rounded-lg hover:bg-lightBeige hover:text-darkBlue transition duration-500"
            >
              Contact
            </a>
          </li>
        </ul>

        {isToggle && (
          <nav
            className={`absolute text-center text-lightBeige left-20 inset-0 z-20`}
          >
            <ul className="flex flex-col h-screen bg-lightBlue items-center justify-center space-y-10 text-base">
              <li>
                <span className="block">01.</span>
                <a
                  href="#about"
                  onClick={() => setIsToggle(!isToggle)}
                  className="links tracking-widest"
                >
                  About
                </a>
              </li>
              <li>
                <span className="block">02.</span>
                <a
                  href="#work"
                  onClick={() => setIsToggle(!isToggle)}
                  className="links tracking-widest"
                >
                  Work
                </a>
              </li>
              <li>
                <span className="block">03.</span>
                <a
                  href="#skills"
                  onClick={() => setIsToggle(!isToggle)}
                  className="links tracking-widest"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="mailto:jefry_2558@hotmail.com"
                  className="py-3 px-3 border-2 border-lightBeige rounded-lg hover:bg-lightBeige hover:text-darkBlue transition duration-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </nav>
    </>
  );
};
