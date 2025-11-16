import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e69138",
        secondary: "#E69138",
        "background-light": "#FDFBF8",
        "background-dark": "#1C1B1A",
        "neutral-background": "#F5F3F0",
        "neutral-text": "#3C3A36",
        "dark-neutral-background": "#292724",
        "dark-text": "#E8E6E3",
        "dark-subtext": "#A8A29E",
      },
      fontFamily: {
        display: ["Arial", "Helvetica", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
export default config;
