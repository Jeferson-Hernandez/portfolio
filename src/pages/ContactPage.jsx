import { motion } from "framer-motion";
import { easeIn, fadeIn } from "../animations/motion";

export const ContactPage = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="habilidades"
      className="pb-32 space-y-10 xl:text-left xl:flex-row "
    >
      <motion.h1
        variants={easeIn(0.7, 0.3)}
        className="relative title-line flex items-center whitespace-nowrap"
      >
        Contacto
      </motion.h1>
      <motion.div
        className="font-lora flex flex-col items-center space-y-8"
        variants={fadeIn("bottom", 0.7, 0.3, 50)}
      >
        <h1 className="text-2xl md:text-3xl ml-1 lg:mb-5 text-center">
          Ponte en contacto conmigo
        </h1>
        <p className="text-center max-w-3xl">
          Ahora mismo estoy en la busqueda de mi primer trabajo como
          desarrollador, con muchas expectativas y ganas de mejorar cada vez mas
        </p>
        <a href="mailto:jefry_2558@hotmail.com" className="btn-nav">
          contacta me
        </a>
      </motion.div>
    </motion.section>
  );
};
