/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "390px",
        xl: "1440px",
      },
      colors: {
        white: "#FFFFFF",
        whiteMilky: "#F7F5F5",
        red: "#E3000B",
        black: "#171313",
        grey: "#606060",
        scrollBar: "#efefef",
      },
      fontFamily: {
        brotesk: "Brotesk, sans-serif",
        darkerBold: "Darker-Bold, sans-serif",
        darkerMedium: "Darker-Medium, sans-serif",
        dmSans: "DMSans, sans-serif",
        mustica: "Mustica, sans-serif",
        syne: "Syne, sans-serif",
        transforma: "Transforma, sans-serif",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "10px",
          sm: "10px",
          xl: "20px",
        },
        screens: {
          sm: "390px",
          xl: "1440px",
        },
      },
    },
  },
  plugins: [],
};
