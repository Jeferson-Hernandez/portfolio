import { motion } from "framer-motion";
import { easeIn, fadeIn } from "../animations/motion";

export const AboutPage = () => {
  return (
    <motion.section
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true, amount: 0.7 }}
      id="sobre"
      className="content flex flex-col items-center space-y-10 xl:justify-between xl:space-y-0 xl:space-x-10 xl:text-left xl:flex-row "
    >
      <div className="flex flex-col space-y-5 xl:w-8/12">
        <motion.h1
          variants={easeIn(0.7, 0.3)}
          className="titulo-line text-3xl font-bold font-roboto"
        >
          <span className="text-lightGray">01.</span> Sobre mi
        </motion.h1>
        <motion.p variants={fadeIn("bottom", 0.7, 0.3, 50)}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
          distinctio consequuntur sint soluta fugit ullam illum molestiae
          ratione quis neque voluptatem, repudiandae, delectus est porro
          laudantium iste voluptate atque modi.
        </motion.p>
      </div>
      <motion.div variants={easeIn(0.7, 0.3)} className="w-44 h-44">
        <img src="./src/assets/avatar.svg" alt="" />
      </motion.div>
    </motion.section>
  );
};
