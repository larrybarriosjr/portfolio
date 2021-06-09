module.exports = {
  darkMode: false,
  plugins: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  // or 'media' or 'class'
  theme: {
    colors: {
      "forest-green": "#1a4314",
      "onyx-black": "#030104",
      "seafoam-green": "#b2d2a4",
      "snow-white": "#fafefe",
      "steel-grey": "#00000080",
      transparent: "transparent"
    },
    extend: {
      borderWidth: {
        3: "3px"
      }
    },
    fontFamily: {
      sans: ["Raleway", "sans serif"]
    },
    fontSize: {
      "2xs": ["0.75rem", "1rem"],
      xs: ["0.875rem", "1.25rem"],
      sm: ["1rem", "1.5rem"],
      base: ["1.125rem", "1.75rem"],
      lg: ["1.25rem", "1.75rem"],
      xl: ["1.5rem", "2rem"],
      "2xl": ["1.875rem", "2.25rem"],
      "3xl": ["2.25rem", "2.5rem"],
      "4xl": ["3rem", "1"],
      "5xl": ["3.75rem", "1"],
      "6xl": ["4.5rem", "1"],
      "7xl": ["6rem", "1"],
      "8xl": ["8rem", "1"]
    }
  },
  variants: {
    extend: {}
  }
}
