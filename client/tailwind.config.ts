import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#8e7d3e",
          "gold-light": "#b5a25c",
          "gold-dark": "#6d5f2d",
          teal: "#4a9fb8",
          "teal-dark": "#35758a",
          ink: "#050505",
          cream: "#f4f4f4",
          beige: "#d8c3af",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(5,5,5,0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
