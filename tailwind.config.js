/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        Inter: 'Inter',
      },
      animation: {
        'flip': 'flip 6s infinite steps(2, end)',
        'rotate': 'rotate 3s linear infinite both',
        'slide': 'slide 2.5s linear infinite',
        'text-gradient': 'text-gradient 1.5s linear infinite',
        'background-shine': 'background-shine 2s linear infinite',
      },
      keyframes: {
        'background-shine': {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
        'text-gradient': {
          to: {
            backgroundPosition: '200% center',
          },
        },
        'slide': {
          '0%': { transform: 'translateY(100%)', opacity: 0.1 },
          '15%': { transform: 'translateY(0)', opacity: 1 },
          '30%': { transform: 'translateY(0)', opacity: 1 },
          '45%': { transform: 'translateY(-100%)', opacity: 1 },
          '100%': { transform: 'translateY(-100%)', opacity: 0.1 },
        },
        'flip': {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        'rotate': {
          to: {
            transform: 'rotate(90deg)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
