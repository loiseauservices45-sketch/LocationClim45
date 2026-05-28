import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Plus Jakarta Sans", "sans-serif"] },
      colors: {
        navy: "#1E293B",
        "blue-brand": "#2563EB",
        sky: "#38BDF8",
      },
    },
  },
  plugins: [],
};
export default config;
