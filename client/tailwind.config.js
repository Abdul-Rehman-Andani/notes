/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        model : "rgba(0,0,0,0.6)",
        submit : "#fabd03"
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.masonry': {
          columnCount: '3',
          columnGap: '1rem',
        },
        '.masonry-item': {
          breakInside: 'avoid',
          marginBottom: '1rem',
        },
      })
    },
  ],
}