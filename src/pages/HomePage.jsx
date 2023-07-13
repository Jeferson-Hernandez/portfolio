import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/motion";

export const HomePage = () => {
  return (
    <motion.section
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true, amount: 0.5 }}
      id="home"
      className="content min-h-screen h-screen flex items-center xl:text-left"
    >
      <motion.div
        variants={fadeIn("bottom", 1, 1.3, 50)}
        className="flex flex-col space-y-9 pb-16"
      >
        <div className="md:text-4xl lg:text-5xl font-lora">
          <Typewriter
            options={{ autoStart: true, cursor: "" }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2000)
                .typeString(
                  '<span class="heading1" style="color: #EAEAEA" >Hola, mi nombre es</span>'
                )
                .typeString(
                  '<span class="heading2" >Jeferson Hernandez.</span>'
                )
                .typeString(
                  '<span class="heading2" style="color: #3a506b; font-weight: bold">Desarrollador Web</span>'
                )
                .pauseFor(2000)
                .deleteChars(17)
                .typeString(
                  '<span class="heading2" style="color: #3a506b; font-weight: bold">Front-end Developer.</span>'
                )
                .start();
            }}
          />
        </div>
        <p className="font-lora">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
          distinctio consequuntur sint soluta fugit ullam illum molestiae
          ratione quis neque voluptatem, repudiandae, delectus est porro
          laudantium iste voluptate atque modi.
        </p>
      </motion.div>
    </motion.section>
  );
};
