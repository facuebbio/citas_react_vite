/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"], //"**" nos permite que busque dentro de "src" todos los archivos para que se apliado tailwind, luego con "*.jsx" buscara los archivos "jsx".
  theme: {
    extend: {},
  },
  plugins: [],
}

