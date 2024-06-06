/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        borderRadius: {
          radius: '20px',
        },
    danger: '#0FBA86',//azul
    pink: '#ec4899', 
        info:{
          900 : '#C1E5DA',//azulcielo
          800 : '#f43f5e',//purpura
          700: '#f0f9ff',//balnco
        }
        
      }
      
    },
    fontFamily: {
rale:['Raleway'],
    },
  },
  plugins: [],
}


