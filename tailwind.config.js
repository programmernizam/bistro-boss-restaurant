/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#EEFF25",
          "secondary": "#46c641",
          "accent": "#b2ffbd",
          "neutral": "#1F2937",
          "base-100": "#ffffff",
          "info": "#7ca0de",
          "success": "#0d5929",
          "warning": "#935a10",
          "error": "#e43f52",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}