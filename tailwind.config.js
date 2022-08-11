/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
        rale: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "hsl-yellow": "#F2B52C",
        "hsl-lightGreen": "#63BE1E",
        "hsl-black-text": "#333333",
        "hsl-lightGrey-text": "#666666",
      },
    },
  },
  plugins: [],
};
