/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        container: "rgb(246,246,239)",
        "orange-nav": "rgb(254,114,54)",
      },
      maxWidth: {
        maxContent: "1440px"
      }
    },
  },
  plugins: [],
}

