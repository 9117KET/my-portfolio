/** @type {import('tailwindcss').Config} */
export default {
  // Paths to all template files
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {}, // Extend Tailwind's default theme
    // Custom animations
    animation: {
        typewriter: 'typewriter 2s steps(11) forwards', // Typewriter effect
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s', // Caret and blink effect
      },
      // Keyframes for custom animations
      keyframes: {
        typewriter: {
          to: {
            left: '100%', // End state of typewriter effect
          },
        },
        blink: {
          '0%': {
            opacity: '0', // Start invisible
          },
          '0.1%': {
            opacity: '1', // Become visible quickly
          },
          '50%': {
            opacity: '1', // Stay visible for half the time
          },
          '50.1%': {
            opacity: '0', // Become invisible quickly
          },
          '100%': {
            opacity: '0', // End invisible
          },
        },
      },
  },
  plugins: [], // Tailwind plugins
  darkMode: 'selector' // Dark mode configuration
}

