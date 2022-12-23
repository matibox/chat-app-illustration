/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/index.html'],
  theme: {
    colors: {
      violet: {
        pale: 'hsl(276, 100%, 81%)',
        moderate: 'hsl(276, 55%, 52%)',
        dark: 'hsl(271, 15%, 43%)',
        'very-dark': 'hsl(271, 36%, 24%)',
        'grayish-dark': 'hsl(270, 7%, 64%)',
        light: 'hsl(264, 100%, 61%)',
        'grayish-light': 'hsl(270, 20%, 96%)',
      },
      blue: {
        grayish: 'hsl(206, 6%, 79%)',
      },
      magenta: {
        light: 'hsl(293, 100%, 63%)',
        'very-light': 'hsl(289, 100%, 72%)',
      },
      white: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      rubik: 'Rubik, sans-serif',
    },
  },
  plugins: [],
};
