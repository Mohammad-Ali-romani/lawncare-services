/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#CEDCFF',
          200: 'rgba(109, 145, 238, 0.7)',
          500: '#6D91EE',
          600: '#5180F6',
          700: '#324473',
          800: '#22366A',
          900: '#0C1E49'
        },
        gray: {
          1: '#333333',
          2: '#4F4F4F'
        }
      },
      fontSize: {
        64: 64
      },
      fontFamily: {
        'TT-hoves': 'TT hoves'
      },
      backgroundImage:{
        'about-us':'url("/assets/images/background about us.png")'
      },
      boxShadow:{
        'box-service':'0px 10px 30px 0px rgba(16, 51, 30, 0.10)'
      },
      animation:{
        'opacity':'opacity-an .5s linear',
      
      },
      keyframes:{
        'opacity-an':{
          from:{
            opacity: 0
          },
          to:{
            opacity: 1
            
          }
        },
      }
    },
  },
  plugins: [],
}

