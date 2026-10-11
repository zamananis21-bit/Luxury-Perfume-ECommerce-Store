/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#EBF0EE',
          100: '#D4DDD9',
          200: '#A6B5A2',
          300: '#7E9079',
          400: '#5B6E57',
          500: '#3D5239',
          600: '#2E412B',
          700: '#234022',
          800: '#1B3A2F',
          900: '#173C35',
          950: '#0D2520',
        },
        ivory: {
          50: '#FDFCF8',
          100: '#F8F4EC',
          200: '#F0E9DA',
          300: '#E6DBC4',
          400: '#D9C9A8',
        },
        champagne: {
          50: '#FBF6EC',
          100: '#F3E8D0',
          200: '#E8D4A8',
          300: '#DDBF85',
          400: '#D5BC8B',
          500: '#C9A86A',
          600: '#B89250',
          700: '#9A773F',
          800: '#7C5F33',
          900: '#5E4826',
        },
        charcoal: {
          50: '#F7F7F5',
          100: '#EDEDE9',
          200: '#D4D4CE',
          300: '#A8A89F',
          400: '#6E6E66',
          500: '#4A4A44',
          600: '#363632',
          700: '#2B2B27',
          800: '#252824',
          900: '#1A1C18',
        },
        sage: {
          100: '#E8EDE6',
          200: '#C9D4C5',
          300: '#A6B5A2',
          400: '#8A9B86',
          500: '#6E806A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 7vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'slide-right': 'slideRight 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.25s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
};
