module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1050px" },
    },
    extend: {
      colors: {
        gray_600: "#727272",
        black_900_00: "#00000000",
        black_900: "#000000",
        white_A700_89: "#ffffff89",
        bluegray_100: "#d9d9d9",
        blue_50_89: "#e0eefb89",
        black_900_14: "#00000014",
        white_A700: "#ffffff",
        gray_300: "#e7e6e6",
        light_blue_900: "#005797",
        gray_100: "#f3f3f3",
      },
      borderRadius: {
        radius6: "6px",
        radius7: "7px",
        radius9: "9px",
        radius12: "12px",
        radius18: "18px",
        radius25: "25px",
        radius27: "27px",
        radius33: "33px",
      },
      fontFamily: { inter: "Inter", inika: "Inika" },
      boxShadow: { bs: "0px 4px  16px 11px #00000014" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#00000000,#000000)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
