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
      },
      screens : {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      container : {
        center : true,
      },
      letterSpacing: {
        "tightest" : "-0.065em"
      },
    },
  },
  plugins: [],
}