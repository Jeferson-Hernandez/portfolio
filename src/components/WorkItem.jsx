import { motion } from "framer-motion";
import { fadeIn } from "../animations/motion";
import parse from "html-react-parser";

import { githubRepo, externalLink } from "../assets";

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
      variants={fadeIn(direction, 0.8, 0.2)}
      viewport={{ once: true, amount: 0.3 }}
      className="works flex flex-col pt-20 pb-16 space-y-8 items-center xl:space-y-0 xl:flex-row justify-center odd:xl:flex-row-reverse"
    >
      <div className="w-full mt-5 mx-auto lg:h-[20rem] max-w-2xl">
        <img
          src={img}
          alt={name}
          className="h-full object-cover mx-auto rounded"
        />
      </div>
      <div className="worksItem w-full max-w-xl xl:w-7/12">
        <span className="text-lightWhite text-lg md:text-xl lg:text-2xl">
          {name}
        </span>
        <div className="bg-lightBlue2 rounded-sm py-3 px-2 mt-4 xl:w-[27rem]">
          <p className="text-sm py-3 px-5 md:text-base">{parse(desc)}</p>
        </div>
        <ol className="flex flex-row space-x-3 xl:justify-end">
          {technologies.map((name) => {
            return (
              <li key={name} href="#" className="text-xs p-1 md:text-sm">
                {name}
              </li>
            );
          })}
        </ol>
        <div className="flex flex-row space-x-1 xl:justify-end">
          <a
            href={github_url}
            className="p-1"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={githubRepo}
              alt="github_logo"
              className="md:w-[23px] md:h-[23px]"
            />
          </a>
          <a
            href={live_url}
            className="p-1"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={externalLink}
              alt="external-link_logo"
              className="md:w-[23px] md:h-[23px]"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
