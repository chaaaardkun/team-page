module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      body: ['Mulish', 'sans-serif'],
      display: ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#232323',
        secondary: '#4F4F4F',
        placeholder: '#DDDDDD',
      },
      fontSize: {
        '4xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
