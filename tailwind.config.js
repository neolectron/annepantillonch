module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xl: '1.3rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
