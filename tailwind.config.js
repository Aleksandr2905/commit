/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brotesk: "Brotesk, sans-serif",
        darkerBold: "Darker-Bold, sans-serif",
        darkerMedium: "Darker-Medium, sans-serif",
        dmSans: "DMSans, sans-serif",
        mustica: "Mustica, sans-serif",
        syne: "Syne, sans-serif",
        transforma: "Transforma, sans-serif",
      },
    },
  },
  plugins: [],
};
