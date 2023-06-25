/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['Cabinet Grotesk', 'sans serif'],
      },
      backgroundImage: {
        'hotdog': 'url(./src/assets/hotdogImage.png)'
      },
    },
  },
  plugins: [],
}