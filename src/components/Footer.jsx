export const Footer = () => {
  return (
    <div className="pt-5 pb-2 bg-veryDarkBlue text-center">
      <p className="text-xs md:text-sm text-lightWhite">
        Creado por Jeferson Hernandez
      </p>
      <p className="text-xs md:text-sm text-lightWhite">
        Portafolio inspirado por{" "}
        <a
          href="https://v4.brittanychiang.com/"
          className="links text-brightBlue"
          target="_blank"
          rel="noreferrer"
        >
          Brittany Chiang
        </a>
      </p>
    </div>
  );
};
