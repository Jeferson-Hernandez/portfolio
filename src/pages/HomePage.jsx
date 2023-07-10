import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { easeIn, fadeIn } from "../animations/motion";

export const HomePage = () => {
  return (
    <motion.section
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true, amount: 0.5 }}
      id="home"
      className="content flex flex-col items-center space-y-20  xl:justify-between xl:space-y-0 xl:space-x-10 xl:text-left xl:flex-row "
    >
      <motion.div
        variants={fadeIn("bottom", 1, 1.3, 50)}
        className="flex flex-col space-y-5 "
      >
        <div className="text-2xl font-roboto">
          <Typewriter
            options={{ autoStart: true }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2000)
                .typeString("Hola, mi nombre es Jeferson")
                .typeString(
                  '<br/><span style="color: #526D82; font-weight: bold">Desarrollador Web</span>'
                )
                .pauseFor(2000)
                .deleteChars(17)
                .typeString(
                  '<span style="color: #526D82; font-weight: bold">Front-end Developer.</span>'
                )
                .start();
            }}
          />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
          distinctio consequuntur sint soluta fugit ullam illum molestiae
          ratione quis neque voluptatem, repudiandae, delectus est porro
          laudantium iste voluptate atque modi.
        </p>
      </motion.div>
      <motion.div variants={easeIn(1.2, 1.5)} className="max-w-[30rem] mx-auto">
        <img src="./src/assets/coding2.svg" alt="" />
      </motion.div>
    </motion.section>
  );
};
