const { Theme } = require('tailwind-easy-theme');
const { colord } = require('colord');
const defaultColors = require('tailwindcss/colors');

const colors = {
  primary: '#146de1',
  'base-100': '#f7f7f7',
  'base-200': '#f3f3f3',
  'base-300': '#e8e8e8',
  info: '#8afaff',
  success: '#8aff8a',
  warning: '#fffa8a',
  error: '#ff8a8a',
};

const content = {
  'primary-content': colord(colors.primary).lighten(0.6).toHex(),
  'base-content': colord(colors['base-100']).darken(0.6).toHex(),
  'info-content': colord(colors.info).darken(0.6).toHex(),
  'success-content': colord(colors.success).darken(0.6).toHex(),
};

const focus = {
  'primary-focus': colord(colors.primary).darken(0.2).toHex(),
  'base-content-focus': colord(colors['base-content']).darken(0.2).toHex(),
};

const theme = new Theme({
  ...colors,
  ...content,
  ...focus,
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      black: defaultColors.black,
      white: defaultColors.white,
      transparent: defaultColors.transparent,
      current: defaultColors.current,
    },
    fontFamily: {
      heading: ['Playfair Display', 'serif'],
      text: ['Inter', 'sans-serif'],
    },
  },
  plugins: [theme.create()],
};
