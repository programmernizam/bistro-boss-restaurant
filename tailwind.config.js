/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2c6f8c",
          "secondary": "#edccff",
          "accent": "#ffc4ce",
          "neutral": "#2a2432",
          "base-100": "#ffffff",
          "info": "#90dae9",
          "success": "#47d7cb",
          "warning": "#a35e0f",
          "error": "#fa2e4d",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}