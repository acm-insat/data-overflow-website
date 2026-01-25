import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate"; // Import instead of require
import typography from "@tailwindcss/typography"; // Import instead of require

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
      },
      colors: {
        background: "#030712", // Deepest Blue/Black
        foreground: "#f8fafc",

        brand: {
          deep: "#050A1F", // The dark blue background of the poster
          primary: "#00F0FF", // The Electric Cyan
          secondary: "#3B82F6", // The Royal Blue
          glow: "rgba(0, 240, 255, 0.5)",
          surface: "rgba(5, 10, 31, 0.6)", // Glass card background
          border: "rgba(255, 255, 255, 0.1)",
        },
      },
      backgroundImage: {
        "liquid-gradient":
          "radial-gradient(circle at 50% 50%, #0a1033 0%, #000000 100%)",
      },
      animation: {
        blob: "blob 10s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [tailwindAnimate, typography],
};
export default config;
