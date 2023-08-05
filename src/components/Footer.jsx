import { githubRepo, linkedinIcon, twitterIcon } from "../assets";

export const Footer = () => {
  return (
    <div className="pt-5 pb-2 bg-veryDarkBlue text-center">
      <ul className="flex flex-row justify-center items-center pb-2 space-x-2 md:hidden">
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
      <p className="text-xs md:text-sm">Creado por Jeferson Hernandez</p>
      <p className="text-xs md:text-sm">
        Portafolio inspirado por{" "}
        <a
          href="https://v4.brittanychiang.com/"
          className="links text-lightWhite"
          target="_blank"
          rel="noreferrer"
        >
          Brittany Chiang
        </a>
      </p>
    </div>
  );
};
