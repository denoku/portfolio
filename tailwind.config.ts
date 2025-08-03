// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'roboto-condensed': ['var(--font-roboto-condensed)'],
        'roboto-mono': ['var(--font-roboto-mono)'],
        'raleway': ['var(--font-raleway)'],
        'source-code-pro': ['var(--font-source-code-pro)'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out forwards',
        },
    }
  },
}