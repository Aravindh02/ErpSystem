/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Open Sans","Poppins", "sans-serif"],
        popps :["Poppins"]
      },
      colors: {
        primary:"#070F2B",
        secondary:"#1B1A55",
        logo:"#FF4301",
        litwhite:"#f7f7f7",
        graphclr: "#413ea0",
      },
      },
    },
  plugins: [],
};
