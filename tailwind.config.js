module.exports = {
  darkMode: false,
  plugins: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  // or 'media' or 'class'
  theme: {
    colors: {
      "fern-green": "#1a431480",
      "forest-green": "#1a4314",
      "onyx-black": "#030104",
      "seafoam-green": "#b2d2a4",
      "snow-white": "#fafefe",
      "steel-grey": "#00000080"
    },
    extend: {
      borderWidth: {
        3: "3px"
      },
      fontSize: {
        "2xs": "10px"
      }
    },
    fontFamily: {
      sans: ["Raleway"]
    }
  },
  variants: {
    extend: {}
  }
}
