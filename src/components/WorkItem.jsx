import { motion } from "framer-motion";
import { fadeIn } from "../animations/motion";

/* eslint-disable react/prop-types */
export const WorkItem = ({
  name,
  desc,
  technologies,
  img,
  github_url,
  live_url,
  direction,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeIn(direction, 0.8, 0.5)}
      viewport={{ once: true, amount: 0.5 }}
      className="works flex flex-col pt-20 pb-10 items-center xl:flex-row justify-center odd:xl:flex-row-reverse"
    >
      <div className="w-full mt-5 mx-auto lg:h-[20rem]">
        <img
          src="./src/assets/works1.PNG"
          alt=""
          className="h-full object-cover"
        />
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
        <div className="flex flex-row space-x-1 xl:justify-end">
          <a href={github_url} className="text-xs p-1">
            <img src="./src/assets/github-repo.svg" alt="" />
          </a>
          <a href={live_url} className="text-xs p-1">
            <img src="./src/assets/external-link.svg" alt="" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
