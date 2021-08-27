module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navColor: "#BE0AFF",
        sideBarColor: "#1245E3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
