/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const {
  primary,
  primaryDark,
  primaryTeal,
  primaryBgDark,
  neutralWhite,
  secondaryTeal,
} = require("./lib/theme/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...colors,
      primary: {
        100: primary,
      },
      primaryDark: {
        100: primaryDark,
      },
      primaryTeal: {
        100: primaryTeal,
      },
      secondaryTeal: {
        100: secondaryTeal,
      },
      primaryBgDark: {
        100: primaryBgDark,
      },
      neutralWhite: {
        100: neutralWhite,
      },
      overlay: {
        100: "rgba(0,0,0,0.1)",
        200: "rgba(0,0,0,0.2)",
        300: "rgba(0,0,0,0.3)",
        400: "rgba(0,0,0,0.4)",
        500: "rgba(0,0,0,0.5)",
        600: "rgba(0,0,0,0.6)",
        700: "rgba(0,0,0,0.7)",
        800: "rgba(0,0,0,0.8)",
        900: "rgba(0,0,0,0.9)",
      },
    },
  },
  plugins: [],
};
