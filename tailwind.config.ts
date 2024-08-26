import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lrt_yellow: "rgb(var(--lrt-yellow))",
        lrt_blue: "rgb(var(--lrt-blue))",
        c_505:"rgb(var(--c-505))",
        c_507:"rgb(var(--c-507))",
        c_610:"rgb(var(--c-610))",
        c_614:"rgb(var(--c-614))",
        c_614p:"rgb(var(--c-614p))",
        c_615:"rgb(var(--c-615))",
        c_615p:"rgb(var(--c-615p))",
        c_705:"rgb(var(--c-705))",
        c_706:"rgb(var(--c-706))",
        c_751:"rgb(var(--c-751))",
        c_761p:"rgb(var(--c-761p))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
