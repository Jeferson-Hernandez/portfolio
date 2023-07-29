import { motion } from "framer-motion";
import { easeIn, fadeIn } from "../animations/motion";

import { avatar } from "../assets";

export const AboutPage = () => {
  const age = new Date().getFullYear() - 1999;

  return (
    <motion.section
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true, amount: 0.7 }}
      id="sobre"
      className=""
    >
      <motion.h1
        variants={easeIn(0.7, 0.3)}
        className="relative title-line flex items-center whitespace-nowrap"
      >
        Sobre mi
      </motion.h1>
      <div className="flex flex-col items-center pb-20 pt-10 space-y-10 xl:justify-between xl:space-y-0 xl:space-x-10 xl:text-left xl:flex-row xl:items-start">
        <div className="flex flex-col space-y-5 xl:w-8/12">
          <motion.p
            className="font-lora"
            variants={fadeIn("bottom", 0.7, 0.3, 50)}
          >
            Hola, mi nombre es Jeferson, tengo {age} años y vivo en Medellín, me
            gusta el baloncesto, voleibol, los videojuegos y la lectura. <br />
            <br />
            Siempre me ha interesado la tecnología, lo cual me llevo a
            decantarme por estudiar algo relacionado, soy tecnólogo egresado del
            Sena en ADSI (Análisis y Desarrollo en los sistemas de información)
            el cual se enfoca en el estudio de algunos lenguajes como Python,
            JavaScript, .Net y Java también en bases de datos relacionales como
            SqlServer, MySQL, Oracle y algunas metodologías ágiles como Scrum.
            <br /> <br />
            De lo enseñado lo que más llamo mi atención fueron Python y
            JavaScript, pero al final me decante por este último principalmente
            React, aunque pienso seguir aprendiendo Python, ya que es un
            lenguaje muy versátil.
          </motion.p>
        </div>
        <motion.div variants={easeIn(0.7, 0.3)} className="w-44 h-44">
          <img src={avatar} alt="avatar" />
        </motion.div>
      </div>
    </motion.section>
  );
};
