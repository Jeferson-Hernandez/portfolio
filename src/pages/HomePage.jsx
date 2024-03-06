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
      className="min-h-screen h-screen flex items-center xl:text-left"
    >
      <motion.div
        variants={fadeIn("bottom", 0.7, 1.3, 20)}
        className="flex flex-col font-roboto space-y-3 md:space-y-4 pb-16"
      >
        <motion.h2
          variants={fadeIn("bottom", 0.7, 1.7, 20)}
          className="text-lg md:text-2xl ml-1 lg:mb-5"
        >
          Hola, mi nombre es
        </motion.h2>
        <motion.p
          variants={fadeIn("bottom", 0.7, 1.9, 20)}
          className="text-dynamic"
        >
          Jeferson Hernandez.
        </motion.p>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2800)
              .typeString("Desarrollador Web")
              .pauseFor(1500)
              .deleteChars(17)
              .typeString("Front-End/Back-End Developer")
              .start();
          }}
          options={{
            autoStart: true,
            deleteSpeed: 120,
            cursor: "_",
          }}
        />
        <motion.p
          variants={fadeIn("bottom", 0.7, 2.1, 20)}
          className="font-lora max-w-4xl"
        >
          Soy un desarrollador enfocado actualmente en
          <span className="text-lightWhite"> JavaScript/TypeScript,</span> específicamente
          en <span className="text-lightWhite">React/Next </span>para el Front-End y <span className="text-lightWhite">Python/Node</span> para el Back-End.<br />
          Manejo de bases de datos como <span className="text-lightWhite">Sql Server, MySQL, MongoDB y PostgreSQL</span><br/>
          Dispuesto a aprender nuevas tecnologías/herramientas.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};
