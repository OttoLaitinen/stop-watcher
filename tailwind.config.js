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
      boxShadow: {
        "inner-md":
          "inset 0 4px 6px -1px rgb(0 0 0 / 0.1), inset 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
