/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark background colors
        "light-main-background": "#FAFAFA",
        "light-secondary-background": "#FFFFFF",
        // Dark background colors
        "dark-main-background": "#181818",
        "dark-secondary-background": "#1F1F1F",
        // Main colors
        "clinigen-darkgreen": "#005052",
        "clinigen-darkgreen-faded": "rgba(0, 80, 82, .2)",
        "clinigen-lightgreen": "#8cdb1f",
        "clinigen-smallgreen": "#E8F8D3",
        "clinigen-smalldarkgreen": "#01696b",
        "clinigen-smalldarkgreen-faded": "#BFECE1",
        // Other
        "overlay-color": "rgb(0, 140, 255)",
        "overlay-gradiant1": "#7AB33E",
        "overlay-gradiant2": "#005052",
        "main-column-table": "#005052",
      },
      fontFamily: {
        sans: "Inter, latin",
      },
      flex: {
        0: "0 0 auto",
      },
      keyframes: {
        popup: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      animation: {
        popup: "popup 0.1s linear",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(31 29 29) rgb(0 80 82)",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "white",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(31 41 55)",
            borderRadius: "20px",
            border: "1px solid white",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
  darkMode: "class",
};
