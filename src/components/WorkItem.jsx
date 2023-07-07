/* eslint-disable react/prop-types */
export const WorkItem = ({
  name,
  desc,
  technologies,
  img,
  github_url,
  live_url,
}) => {
  return (
    <div className="works flex flex-col pb-20 xl:flex-row justify-center  odd:xl:flex-row-reverse">
      <div className="w-full max-w-[43rem] mt-5 mx-auto">
        <img src="./src/assets/works1.PNG" alt="" />
      </div>
      <div className="worksItem w-full xl:w-7/12 max-w-xl xl:-translate-x-5">
        <a href="#">{name}</a>
        <div className="bg-lightBlue rounded-sm py-3 px-2 mt-2 xl:w-96">
          <p className="text-xs py-3 px-5">{desc}</p>
        </div>
        <ol className="flex flex-row space-x-3 xl:justify-end">
          {technologies.map((name) => {
            return (
              <li key={name} href="#" className="text-xs p-1">
                {name}
              </li>
            );
          })}
        </ol>
        <div className="flex flex-row space-x-3 xl:justify-end">
          <a href={github_url} className="text-xs p-1">
            Github
          </a>
          <a href={live_url} className="text-xs p-1">
            Live
          </a>
        </div>
      </div>
    </div>
  );
};
