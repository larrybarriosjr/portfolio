module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "forest-green": "#1a4314",
      "seafoam-green": "#b2d2a4",
      "fern-green": "#1a431480",
      "onyx-black": "#030104",
      "steel-grey": "#00000080",
      "snow-white": "#fafefe"
    },
    fontFamily: {
      sans: ["Raleway"]
    },
    extend: {
      borderWidth: {
        3: "3px"
      },
      fontSize: {
        "2xs": "10px"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
