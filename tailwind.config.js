/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontWeight: {
      ...defaultTheme.fontWeight,
      semibold: 500,
    },
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        login: 'url("/src/Pages/Login/Assets/background-auth.png")',
      },
    },
  },
  plugins: [],
};
