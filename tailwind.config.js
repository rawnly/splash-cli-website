const radixColors = require('tailwind-radix-colors')

module.exports = {
  content: ['./src/pages/**/*.{tsx,js,jsx,ts}', './src/components/**/*.{tsx,js,jsx,ts}'],
  theme: {
    colors: {
      ...radixColors.colors,
      white: 'white',
      black: 'black',
      transparent: 'transparent',
    }
  },
  plugins: [
    radixColors.plugin
  ],
}
