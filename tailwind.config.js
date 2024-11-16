/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        darkBlue: "hsl(209, 23%, 22%)", //Dark Mode Elements
        veryDarkBlue: "hsl(200, 15%, 8%)", //Light Mode Text
        darkGray: "hsl(0, 0%, 52%)",//Light Mode Input
        //white-Dark Mode Text & Light Mode Elements
      },
    },
  },
  plugins: [],
};
