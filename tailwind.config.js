/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      screens: {
        xs: '300px',
        sm: '380px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1680px',
      },
    },
  },
  plugins: [
    require("tailwind-merge"),
  ],
}