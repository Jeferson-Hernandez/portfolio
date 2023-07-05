export const AboutPage = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-20 mx-10 my-10 py-10 px-10 md:justify-between md:space-y-0 md:space-x-10 md:text-left md:flex-row md:mx-16 md:py-20 md:px-20 text-lightBeige">
      <div className="flex flex-col space-y-5 md:w-8/12">
        <h1 className="text-3xl">Hello</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
          distinctio consequuntur sint soluta fugit ullam illum molestiae
          ratione quis neque voluptatem, repudiandae, delectus est porro
          laudantium iste voluptate atque modi.
        </p>
      </div>
      <div>
        <img src="./src/assets/coding2.svg" alt="" />
      </div>
    </div>
  );
};
