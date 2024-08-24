/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        customBlue: '#4B2AAD',
        customDig:'#9C8881',
        customFont:'#1A1715',
       buttonColor:'#9484C6',
       navy: '#001f3f',
       backgroundColor:'#F5EFEB',
      },
      fontFamily: {
        'serif-custom': ['Times New Roman', 'Georgia', 'Cambria', 'Palatino Linotype', 'serif'],
      },
      scale: {
        '110': '1.5', // Custom scale value for scaleX(1.1)
      },
      fontSize: {
        'xxs': '34.822px',  // Custom size for extra-extra-small text (10px)
        'xxl': '52.355px',    // Custom size for extra-extra-large text (28px)
        'huge': '4rem',
        'med':'16px',           // Custom size for very large text (64px)
      },
    },
  },
  plugins: [],
}

