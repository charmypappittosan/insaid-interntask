/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        insaidtheme: {
          primary: "#395B64",
          secondary: "#A5C9CA",
          accent: "#7A86B6",
          neutral: "#A8A4CE",
          "base-100": "#ffffff",
        },
      },
      //  "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};