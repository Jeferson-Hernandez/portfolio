import { WorkItem } from "../components/WorkItem";
import { works } from "../data/works";

import { motion } from "framer-motion";
import { easeIn } from "../animations/motion";

export const WorkPage = () => {
  return (
    <div id="proyectos" className="pb-32 overflow-x-hidden">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={easeIn(0.5, 0.1)}
        className="relative title-line flex items-center whitespace-nowrap"
      >
        Proyectos
      </motion.h1>

      {works.map(
        ({ name, desc, technologies, img, github_url, live_url }, index) => {
          return (
            <WorkItem
              key={name}
              name={name}
              desc={desc}
              technologies={technologies}
              img={img}
              github_url={github_url}
              live_url={live_url}
              direction={index % 2 === 0 ? "left" : "right"}
            />
          );
        }
      )}
    </div>
  );
};
