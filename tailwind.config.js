/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f1ff",
          100: "#e6e4ff",
          200: "#d0ccff",
          300: "#aea5ff",
          400: "#8b7bff",
          500: "#6c4fff",
          600: "#5a32f5",
          700: "#4c25d1",
          800: "#3f21a8",
          900: "#361f85",
          950: "#211258",
        },
        surface: "#f6f6f4",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.94)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in-left": "fade-in-left 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in-right": "fade-in-right 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "scale-in": "scale-in 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}