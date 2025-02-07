module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  purge: {
    enabled: true,
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
  },
  theme: {
    fontFamily: {
      serif: ['Inter', 'sans-serif'],
      sans: ['Inter', 'sans-serif'],
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
    },
    extend: {
      fontSize: {
        '2xs': '10px',
        tiny: '13px',
      },
      colors: {
        black: {
          900: '#000000',
          800: '#080808',
          700: '#101111',
          600: '#141515',
          500: '#1B1B1B',
          400: '#2F2F2F',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
}
