import { WorkItem } from "../components/WorkItem";
import { works } from "../data/works";

import { motion } from "framer-motion";
import { easeIn } from "../animations/motion";

export const WorkPage = () => {
  return (
    <div id="projectos" className="content overflow-x-hidden">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={easeIn(0.7, 0.3)}
        className="titulo-line text-3xl font-bold font-roboto"
      >
        <span className="text-lightGray">02.</span> Projectos
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
