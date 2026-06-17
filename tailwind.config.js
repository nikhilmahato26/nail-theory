/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#FADADD',
        rose: '#F8C8DC',
        rosegold: '#B76E79',
        cream: '#FFFDFB',
        charcoal: '#2D2D2D',
        // soft supporting tints
        'rose-deep': '#9E5862',
        'blush-soft': '#FDEEF0',
        'pink-mist': '#FCE4EC',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        body: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(183, 110, 121, 0.25)',
        'soft-lg': '0 30px 60px -15px rgba(183, 110, 121, 0.30)',
        glow: '0 0 0 1px rgba(255,255,255,0.5), 0 8px 30px -8px rgba(248, 200, 220, 0.6)',
        card: '0 20px 50px -20px rgba(45, 45, 45, 0.18)',
      },
      backgroundImage: {
        'blush-gradient': 'linear-gradient(135deg, #FADADD 0%, #F8C8DC 50%, #FCE4EC 100%)',
        'rose-gradient': 'linear-gradient(135deg, #B76E79 0%, #F8C8DC 100%)',
        'cream-fade': 'linear-gradient(180deg, #FFFDFB 0%, #FDEEF0 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-22px) rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
