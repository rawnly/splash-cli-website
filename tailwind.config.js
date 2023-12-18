const radixColors = require('tailwind-radix-colors')

module.exports = {
  content: ['./src/**/*.{tsx,js,jsx,ts}'],
  theme: {
    colors: {
      ...radixColors.colors,
      white: 'white',
      black: 'black',
      transparent: 'transparent',
      base: '#0F1014',
      metal: '#fdfdfe',
      stone: '#9898a6',
      overlay: '#131317',
      kashmir: '#626983',
      focus: {
        medium: '#1A1B1F',
      }
    }
  },
  plugins: [
    radixColors.plugin
  ],
}
