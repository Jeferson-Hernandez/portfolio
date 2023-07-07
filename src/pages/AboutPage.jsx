export const AboutPage = () => {
  return (
    <div
      id="about"
      className="content flex flex-col items-center space-y-10 xl:justify-between xl:space-y-0 xl:space-x-10 xl:text-left xl:flex-row "
    >
      <div className="flex flex-col space-y-5 xl:w-8/12">
        <h1 className="text-3xl">01. About Me</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
          distinctio consequuntur sint soluta fugit ullam illum molestiae
          ratione quis neque voluptatem, repudiandae, delectus est porro
          laudantium iste voluptate atque modi.
        </p>
      </div>
      <div className="w-44 h-44">
        <img src="./src/assets/avatar.svg" alt="" />
      </div>
    </div>
  );
};
