import { skills } from "../data/skills";

import { motion } from "framer-motion";
import { fadeIn } from "../animations/motion";

export const SkillPage = () => {
  return (
    <div
      id="habilidades"
      className="content space-y-20 xl:text-left xl:flex-row "
    >
      <h1 className="titulo-line text-3xl font-bold font-roboto">
        <span className="  text-lightGray">03.</span> Algunas de mis habilidades
      </h1>
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-auto">
          {skills.map((skill, index) => (
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={fadeIn("bottom", (index + 1) / 5, 0.4, 20)}
              viewport={{ once: true }}
              key={skill.name}
              src={skill.url}
              alt={`logo-${skill.name}`}
              className="mx-auto pb-5"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
