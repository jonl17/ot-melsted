const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      untitled: ['var(--font-untitled)'],
      untitledMedium: ['var(--font-medium)'],
    },
    fontSize: {
      large: ['36px', '45px'],
      largeMobile: ['20px', '28px'],
      medium: ['22px', 'normal'],
      small: ['11px', '18px'],
    },
    colors: {
      gray: '#E6E6E6',
      lightgray: '#F2F3F3',
      darkgray: '#BDBDBD',
      white: '#FFFFFF',
      black: 'rgba(0, 0, 0, 0.9)',
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
