import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pbg: "#171717",
      },
      //   fontFamily: {
      //     sans: ['Inter', 'sans-serif'],
      //   },
    },
  },
  plugins: [],
};

export default config;
