/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        mainColor: "#7c1f4c",
        secondColor: "#525C9C",
      },
      fontFamily: {
        'Oswald': ['Oswald', 'sans-serif'],
        'Inspiration': ['Inspiration', 'cursive'],
      },
    },
  },
  plugins: [],
};
