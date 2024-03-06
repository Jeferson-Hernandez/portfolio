import { motion } from "framer-motion";
import { easeIn, fadeIn } from "../animations/motion";
import moment from 'moment';
import { fotoPerfil } from "../assets";

export const AboutPage = () => {
  const birthDate = moment([1999, 6, 5])
  const age = Math.abs(birthDate.diff(Date.now(), 'years'))
  
  return (
    <motion.section
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true, amount: 0.1 }}
      id="sobre"
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
            Hola, mi nombre es Jeferson, tengo {age} años y vivo en Medellín/Antioquia. <br />
            <br />
            Siempre me ha interesado la tecnología, lo cual me llevo a
            decantarme por estudiar algo relacionado, soy tecnólogo egresado del
            Sena en ADSI (Análisis y Desarrollo en los sistemas de información)
            el cual se enfoca en el estudio de algunos lenguajes como Python,
            JavaScript, .Net y Java, también en bases de datos relacionales como
            SqlServer, MySQL, Oracle y algunas metodologías ágiles como Scrum.
            <br /> <br />
            De lo enseñado lo que más llamo mi atención fueron Python y
            JavaScript, en los que ahora baso mi aprendizaje y utilizo para la creacion de Back-End/APIs (Node/Python) y Front-End (React).
          </motion.p>
        </div>
        <motion.div variants={easeIn(0.7, 0.3)} className="relative">
          <img
            src={fotoPerfil}
            alt="avatar"
            className="filter-photo rounded w-52 h-64 z-10"
          />
          <div className="absolute w-full h-full rounded border-2 border-brightBlue inset-0 translate-x-3 translate-y-3 -z-10" />
        </motion.div>
      </div>
    </motion.section>
  );
};
