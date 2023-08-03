/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Amatic: ['Amatic SC', 'cursive'],
        Josefin: ['Josefin Sans', 'sans-serif'],
      },
      boxShadow: {
        formShadow: '0 4px 0 0',
        formShadowHover: '0 2px 0 0',
      },
      transitionTimingFunction: {
        buttonHover: 'cubic-bezier(0.6, 0.6, 0, 1)',
      },
      keyframes: {
        linePencil: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-150px)' },
        },
      },
      animation: {
        linePencil: 'linePencil 0.8s infinite linear',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: 'hsla(0, 0%, 100%, 1)',
        black: 'hsla(0, 0%, 0%, 1)',
        primary: 'hsla(174, 38%, 95%, 1)',
        secondary: 'hsla(196, 100%, 44%, 1)',
        tertiary: 'hsla(231, 53%, 17%, 1)',
        hoverLight: 'hsla(180, 27%, 86%, 1)',
        hoverMedium: 'hsla(190, 55%, 80%, 1)',
        backgroundLines: 'hsla(231, 53%, 17%, 0.1)',
        error: 'hsla(0, 100%, 66%, 1)',
      },
    },
  },
  plugins: [],
};
