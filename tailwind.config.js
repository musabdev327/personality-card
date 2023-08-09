module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "theme-orange": "#FFA573",
      "orange-600": "#FFA789",
      "detail-grey": "#505050",
      "detail-grey-100": "#909090",
      "white": "#FFFFFF",
      "chip": "#F2F2F2"
    },
    fontFamily: {
      "mont": ["montserrat"]
    },
    extend: {
      spacing: {
        '900': '900px'
      }
    }
  },
  plugins: [],
}