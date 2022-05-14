module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-final': "url('https://res.cloudinary.com/din1guyfa/image/upload/v1652130742/Hero-Fondo_mxjcwr.jpg')"
      },
      fontFamily: {
        'sans': [['Poppins', 'sans-serif']]
      },
      colors: {
        'button-color': '#8C12F6',
        'article-title': '#2f2e8b',
        'content-article':'#344b80'
      },
      padding:{
        '0.4': '0.4rem',
      },
      height:{
        '98': '35rem',
      },
      width:{
        '26%': '26%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
