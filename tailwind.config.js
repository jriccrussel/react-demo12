module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sp': { 'raw': '(max-width: 425px)' },
        'tab': { 'raw': '(max-width: 768px)' },
      },
      width: {
        '23': '23%',
        '48': '48%',
      }
    },
    fontFamily: {
      dm : ['DM Serif Display', 'serif'],
      pop : ['Poppins', 'sans-serif'],
      robo : ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}