export const SkillPage = () => {
  return (
    <div id="skills" className="content space-y-20 xl:text-left xl:flex-row ">
      <h1 className="text-3xl">03. Some of my skills</h1>
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-auto">
          <img
            src="./src/assets/skills/logo-html.svg"
            alt=""
            className="mx-auto pb-5"
          />
          <img
            src="./src/assets/skills/logo-css.svg"
            alt=""
            className="mx-auto pb-5"
          />
          <img
            src="./src/assets/skills/logo-javascript.svg"
            alt=""
            className="mx-auto pb-5"
          />
          <img
            src="./src/assets/skills/logo-tailwindcss.svg"
            alt=""
            className="mx-auto pb-5"
          />
          <img
            src="./src/assets/skills/logo-sass.svg"
            alt=""
            className="mx-auto pb-5"
          />
          <img
            src="./src/assets/skills/logo-react.svg"
            alt=""
            className="mx-auto pb-5"
          />
        </div>
      </div>
    </div>
  );
};
