/** @type {import('tailwindcss').Config} */
export default {
  // Paths to all template files - more specific for better purging
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.css",
    "./vercel.json",
  ],
  safelist: [
    // Safelist dynamic classes that might be purged
    "animate-spin",
    "animate-pulse",
    "translate-x-0",
    "translate-x-full",
    "opacity-0",
    "opacity-100",
    "scale-110",
    "scale-105",
    "bg-blue-600",
    "bg-blue-700",
    "text-blue-500",
    "hover:bg-blue-700",
    "dark:bg-gray-800",
    "dark:text-gray-300",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mono: ["monospace"],
      },
      animation: {
        typewriter: "typewriter 2s steps(11) forwards", // Typewriter effect
        caret:
          "typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s", // Caret and blink effect
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-in-out",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%", // End state of typewriter effect
          },
        },
        blink: {
          "0%": {
            opacity: "0", // Start invisible
          },
          "0.1%": {
            opacity: "1", // Become visible quickly
          },
          "50%": {
            opacity: "1", // Stay visible for half the time
          },
          "50.1%": {
            opacity: "0", // Become invisible quickly
          },
          "100%": {
            opacity: "0", // End invisible
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    }, // Extend Tailwind's default theme
  },
  plugins: [], // Tailwind plugins
  darkMode: "selector", // Dark mode configuration
};
