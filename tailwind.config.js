/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '4xl': '1920px',
        'et1291': '800px',
      },
      backgroundImage: {
        doodle: "url('/images/backgrounds/doodle.svg')",
        "pattern-left": "url('/images/brand/pattern-left.webp')",
        "pattern-right": "url('/images/brand/pattern-right.webp')",
        "train": "url('/images/backgrounds/train.svg')",
        "circle": "url('/images/brand/circle.svg')",
        "circle2": "url('/images/brand/circle2.svg')"
      },
      colors: {
        "mitren-primary": "#004195"
      },
      fontFamily: {
        interTight: '"Inter Tight", sans-serif',
        Inconsolata: '"Inconsolata", sans-serif',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '3rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      animation: {
        "unnotted-decoration-left": "unnotted-decoration-left-animation 0.3s ease forwards",
        "unnotted-decoration-right": "unnotted-decoration-right-animation 0.3s ease forwards",
        "unnotted-decoration": "unnotted-decoration-animation 0.3s ease forwards",
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
        "unnotted-decoration-animation": {
          from: { 
            opacity: '1'
          },
          to: {
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
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

