module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'trigger-navy': '#081120',
        'trigger-navy-light': '#0F172A',
        'trigger-blue': '#0052FF',
        'trigger-green': '#00FF85',
        'trigger-grey': '#1F2937',
        'trigger-white': '#FFFFFF',
        'trigger-grey-text': '#9CA3AF',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'trigger-glow': '0 0 20px rgba(0, 82, 255, 0.3)',
        'trigger-glow-green': '0 0 20px rgba(0, 255, 133, 0.2)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
