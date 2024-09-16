/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        doodle: "url('/images/backgrounds/doodle.svg')",
        "pattern-left": "url('/images/brand/pattern-left.webp')",
        "pattern-right": "url('/images/brand/pattern-right.webp')",
        "train": "url('/images/backgrounds/train.svg')",
      },
      colors: {
        "mitren-primary": "#004195"
      },
      fontFamily: {
        interTight: '"Inter Tight", sans-serif',
        Inconsolata: '"Inconsolata", sans-serif',
      },
      animation: {
        "unnotted-decoration-left": "unnotted-decoration-left-animation 0.3s ease forwards",
        "unnotted-decoration-right": "unnotted-decoration-right-animation 0.3s ease forwards",
        "notted-decoration-left": "notted-decoration-left-animation 0.3s ease forwards",
        "notted-decoration-right": "notted-decoration-right-animation 0.3s ease forwards",
      },
      keyframes: {
        "unnotted-decoration-left-animation": {
          from: { 
            left: "-0.5rem",
            opacity: '1'
          },
          to: {
            left: "-8.6rem",
            opacity: '0.7'
          },
        },
        "unnotted-decoration-right-animation": {
          from: { 
            right: "-0.5rem",
            opacity: '1'
          },
          to: {
            right: "-8.6rem",
            opacity: '0.7'
          },
        },
        "notted-decoration-left-animation": {
          from: { 
            left: "-8.6rem",
            opacity: '0.7'
          },
          to: {
            left: "-0.5rem",
            opacity: '1'
          },
        },
        "notted-decoration-right-animation": {
          from: { 
            right: "-8.6rem",
            opacity: '0.7'
          },
          to: {
            right: "-0.5rem",
            opacity: '1'
          },
        },
      },
    },
    container: {
      screens: {
        sm: {
          min: "640px",
        },
        md: {
          min: "768px",
        },
        lg: {
          min: "1024px",
        },
        xl: {
          min: "1280px",
        },
        "2xl": {
          min: "1280px",
        },
      },
    },
  },
  plugins: [],
}
