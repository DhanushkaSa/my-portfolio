/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blinkCursor: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },

        flip: {
          '0%': { transform: 'perspective(600px) rotateY(0deg)' },
          '50%': { transform: 'perspective(600px) rotateY(180deg)' },
          '100%': { transform: 'perspective(600px) rotateY(360deg)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out',
        'typewriter': 'typewriter 4s steps(30, end) forwards',
        'blink-cursor': 'blinkCursor 0.75s step-end infinite',
        'flip': 'flip 8s infinite',
      },


    },
  },
  plugins: [],
};
