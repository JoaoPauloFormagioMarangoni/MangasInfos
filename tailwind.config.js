module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#996DFF",
          500: "#8257e6",
        }
      },
      fontFamily: {
        'title': ['Palette Mosaic', 'cursive']
      },
      backgroundImage: {
        'backgroundHome': "url('src/assets/background.jpg')"
      }
    },
  },
  plugins: [
  //   require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}

