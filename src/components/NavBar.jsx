import { useState, useEffect } from "react";

export const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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

  return (
    <nav
      className={`sticky w-full flex flex-row justify-between items-center px-16 py-3 text-lightBeige  ${
        visible ? "top-0" : "-top-20"
      } ${
        prevScrollPos === 0 ? "" : "box-shadow"
      } transition-all duration-500 z-50`}
    >
      <div className="relative z-10">
        <div className="cursor pointer text-2xl bg-darkBlue px-2 py-1 hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-500 border border-lightBlue rounded">
          Jh
        </div>
        <span className="absolute bg-lightBeige inset-0 -z-10 rounded" />
      </div>
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
    </nav>
  );
};
