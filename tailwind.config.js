const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      untitled: ['var(--font-untitled)'],
    },
    fontSize: {
      large: ['40px', '57.2px'],
      medium: ['20px', '30px'],
      small: ['11px', '18px'],
      nav: ['26px', '23.4px'],
    },
    colors: {
      lightgray: '#F2F3F3',
      white: '#FFFFFF',
      black: '#000000',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        lg: 0,
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {}),
    require('tailwindcss-safe-area'),
  ],
}
