/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Inclui rotas do App Router
    "./src/components/**/*.{js,ts,jsx,tsx}", // Inclui componentes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
