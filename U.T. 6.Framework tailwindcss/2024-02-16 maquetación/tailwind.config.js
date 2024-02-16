/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
      'imagen': "url('/assets/imagen.jpg')",
    }},
  },
  plugins: [],
}

