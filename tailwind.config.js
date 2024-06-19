/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.{html,js}"],
  darkMode : "class",
  theme: {
    extend: {
      fontFamily: {
        "Dana" : "Dana",
        "DanaMedium" : "DanaMedium",
        "DanaDemiBold" : "DanaDemiBold",
        "Morabba" : "Morabba",
        "MorabbaMedium" : "MorabbaMedium",
        "MorabbaBold" : "MorabbaBold",
      }
    },
  },
  plugins: [],
}