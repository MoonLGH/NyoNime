/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/views/*.ejs', './src/app/views/**/*.ejs'],
  theme: {
    extend: {
      colors: {
        'keqing-main': '#ba95c8',
        'keqing-secondary': '#55336b',
        'keqing-secondary-jumbotron': '#916ba8',
        'keqing-tresier': '#d1b1c7',
        'keqing-tresier2': '#aa89bf',
        'keqing-tresier3': '#f4f2f5',
      },
    },
  },
  plugins: [require('daisyui')],

};
