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
        dark: "#42446E",
        DEFAULT: "#42446E",
      },
      secondary: {
        light: "#666666",
        dark: "#666666",
        DEFAULT: "#666666",
      },
      background: {
        light: "#FFFFFF",
        dark: "#191919",
        DEFAULT: "#FFFFFF",
      },
    },
    screens: {
      xs: "480px",
      // => @media (min-width: 480) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

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
