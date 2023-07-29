import { hoobankImg, spaceTourismImg, sunnysideImg } from "../assets/works";

export const works = [
  {
    name: "Space Tourism",
    img: spaceTourismImg,
    desc: 'Proyecto realizado a partir de uno de los retos en <a href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3" classname="links text-lightWhite whitespace-nowrap" target="_blank" rel="noreferrer noopener">Frontend-Mentor</a> sobre una empresa que realiza viajes a varios planetas en la que se muestran los destinos, los equipos y los tipos de transporte.',
    technologies: ["React", "Tailwind", "React Router Dom"],
    github_url: "https://github.com/Jeferson-Hernandez/space-tourism",
    live_url: "https://space-tourism-0720.netlify.app/",
  },
  {
    name: "SunnySide",
    img: sunnysideImg,
    desc: 'Proyecto realizado a partir de uno de los retos en <a href="https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef" classname="links text-lightWhite whitespace-nowrap" target="_blank" rel="noreferrer noopener">Frontend-Mentor</a> sobre una agencia que ayuda a mejorar las marcas de compañias, tiene apartados de servicios, testimonials y proyectos.',
    technologies: ["Html", "Javascript", "Tailwind"],
    github_url:
      "https://github.com/Jeferson-Hernandez/SunnySide-FrontEndMentor",
    live_url: "https://sunnyside-2707.netlify.app/",
  },
  {
    name: "HooBank",
    img: hoobankImg,
    desc: "Proyecto realizado en un tutorial de youtube sobre un compañia de banco que ofrece servicios sobre esta, con testimonials, marcas que los apoyan y mas.",
    technologies: ["React", "Tailwind"],
    github_url:
      "https://github.com/Jeferson-Hernandez/bank-modern-app/tree/main",
    live_url: "https://hoobank-2707.netlify.app/",
  },
];
