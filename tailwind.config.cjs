/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html', './node_modules/flowbite/**/*.js', '*.ejs'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],

}