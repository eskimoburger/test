module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      
        orangeSuper:'#FB4F14'
      }
    },fontFamily:{
      body:['Sarabun']
    }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
