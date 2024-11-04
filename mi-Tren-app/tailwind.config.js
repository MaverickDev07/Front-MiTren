/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px',   // Ajustes para teléfonos pequeños
        'md': '640px',   // Teléfonos medianos
        'lg': '768px',   // Tablets
        'xl': '1024px',  // Pantallas grandes
      },
      backgroundImage: {
        doodle: "url('/backgrounds/doodle.svg')",
      },
      colors: {
        "mitren-primary": "#004195"
      }
    },
  },
  plugins: [],
}


