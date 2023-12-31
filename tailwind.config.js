import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "foreground-md": "#202020",
        "foreground-lg": "#181818",
        "foreground-xl": "#121212",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mona: ["var(--font-mona)", "sans-serif"],
      },
      container: {
        center: true,
        screens: {
          xl: "1760px",
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  darkMode: "class",
  plugins: [nextui(), require("@tailwindcss/aspect-ratio")],
};

export default config;
