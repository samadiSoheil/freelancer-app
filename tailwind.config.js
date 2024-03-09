/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Vazir: "Vazir",
        VazirThin: "VazirThin",
        VazirLight: "VazirLight",
        VazirMedium: "VazirMedium",
        VazirBold: "VazirBold",
      },
      colors: {
        secondary: {
          0: "#ffffff",
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          500: "#6b7280",
          600: "#4b5563",
          400: "#9ca3af",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        primary: {
          50: "#e4e9ff",
          100: "#dbe2ff",
          200: "#c9d3ff",
          300: "#b7c5ff",
          500: "#92a7ff",
          600: "#8099ff",
          400: "#a4b6ff",
          700: "#5c7cff",
          800: "#5c7cff",
          900: "#4d70ff",
        },
        success: "#00c073",
        warning: "#ff9900",
        error: "#ff4757",
      },
      borderRadius: {
        "radius-tiny": "3px",
        "radius-sm": "5px",
        "radius-md": "7px",
        "radius-lg": "9px",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
