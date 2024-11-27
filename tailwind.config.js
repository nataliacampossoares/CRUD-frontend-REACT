export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat"],
      inter: ["Montserrat"], 
    },
    extend: {
      colors: {
        'yellow': '#FEAF00',
        'darkGray' : '#6C6C6C',
        'lightGray' : '#CDCDCD',
        'white' : '#FFFFFF',
      }
    }
  },
  plugins: [],
}