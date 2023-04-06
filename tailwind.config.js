/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      extend: {
        animation: {
          shine: 'shine 1s',
        },
        keyframes: {
          shine: {
            '100%': {left: '125%'},
          },
        },
      },
    },
  },
  plugins: [],
};
