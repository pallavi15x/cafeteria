/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          dark: '#2C1A12',
          mocha: '#4B2E2B',
          beige: '#F5E6D3',
          cream: '#FFF8F0',
          caramel: '#C68B59',
        }
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(44, 26, 18, 0.1)',
      }
    },
  },
  plugins: [],
}
