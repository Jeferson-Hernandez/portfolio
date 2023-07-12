import { skills } from "../data/skills";

import { motion } from "framer-motion";
import { easeIn, fadeIn } from "../animations/motion";

export const SkillPage = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="habilidades"
      className="content pb-32 space-y-20 xl:text-left xl:flex-row "
    >
      <motion.h1
        variants={easeIn(0.7, 0.3)}
        className="relative title-line flex items-center whitespace-nowrap"
      >
        Habilidades
      </motion.h1>
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-auto">
          {skills.map((skill, index) => (
            <motion.img
              variants={fadeIn("bottom", (index + 1) / 5, 0.4, 20)}
              key={skill.name}
              src={skill.url}
              alt={`logo-${skill.name}`}
              className="mx-auto pb-5"
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
