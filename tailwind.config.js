/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#27374D",
        lightBlue: "#526D82",
        lightGray: "#9DB2BF",
        darkBrown: "#393646",
        midBrown: "#4F4557",
        lightBrown: "#6D5D6E",
        lightBeige: "#F4EEE0",
        brightBlue: "#0078AA",
        veryDarkBlue: "#1c2541",
        lightBlue2: "#3a506b",
        lightWhite: "#EAEAEA",
        darkWhite: "#B2B2B2",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto Slab", "serif"],
        lora: ["Lora", "serif"],
      },
      screens: {
        md: "640px",
        lg: "1000px",
      },
    },
  },
  plugins: [],
};
