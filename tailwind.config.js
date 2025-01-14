/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Ensure Tailwind scans your JSX files
  ],
  theme: {
    extend: {
      animation: {
        'fade-up': 'fadeUp 1s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        'scale-up': 'scaleUp 0.5s ease-out forwards',
        'scale-down': 'scaleDown 0.5s ease-out forwards',
        'slide-right': 'slideRight 1s ease-out forwards',
        'slide-left': 'slideLeft 1s ease-out forwards',
        'pulse-slow': 'pulse-slow 5s infinite',
        'pulse-fast': 'pulse-fast 3s infinite',
      },
      colors: {
        'lightpink': 'f0416f',
        'cloudflare': "#f38020",
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        scaleDown: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0.9)', opacity: 0 },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 0.8, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        'pulse-fast': {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.1)' },
        },
      },
      dropShadow: {
        'glow': '0 0 8px rgba(255, 255, 255, 0.8)', // Glow effect for hover
      },
      transformOrigin: {
        'center': 'center',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.icon': {
          '@apply text-6xl transition-transform duration-300 transform hover:scale-125 hover:drop-shadow-glow': {},
        },
      });
    },
  ],
};
