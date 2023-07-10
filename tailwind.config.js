/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#27374D",
        lightBlue: "#526D82",
        lightGray: "#9DB2BF",
        lightWhite: "#DDE6ED",
        darkBrown: "#393646",
        midBrown: "#4F4557",
        lightBrown: "#6D5D6E",
        lightBeige: "#F4EEE0",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};
