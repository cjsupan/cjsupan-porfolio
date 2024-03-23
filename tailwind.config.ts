import type { Config } from "tailwindcss";
import colors, { cyan } from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: "class",
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      cyan: colors.cyan,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      primary: {
        light: "#42446E",
        dark: "#D9D9D9",
        DEFAULT: "#42446E",
      },
      secondary: {
        light: "#666666",
        dark: "#A7A7A7",
        DEFAULT: "#A7A7A7",
      },
      background: {
        light: "#FFFFFF",
        dark: "#191919",
        DEFAULT: "#FFFFFF",
      },
    },
    screens: {
      //mobile S
      xxs: "320px",
      //mobile L
      xs: "420px",
      // => @media (min-width: 480) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      //tablet
      md: "768px",
      // => @media (min-width: 768px) { ... }

      //laptop
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      //desktop
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      //4k
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    listStyleType: {
      square: "square",
      disc: "disc",
      decimal: "decimal",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
