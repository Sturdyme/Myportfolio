/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },

        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },

        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-5px)' },
          '40%': { transform: 'translateX(5px)' },
          '60%': { transform: 'translateX(-5px)' },
          '80%': { transform: 'translateX(5px)' },
        },

        glow: {
          '0%': { textShadow: '0 0 5px #3b82f6' },
          '100%': { textShadow: '0 0 20px #60a5fa' },
        },

        /* ✅ ADDED (you were missing this) */
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },

        /* Optional premium effect */
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },

      animation: {
        'fade-in-up': 'fadeInUp 1.2s ease-out forwards',
        shake: 'shake 3s ease-in-out',
        'spin-slow': 'spin 10s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        fadeIn: 'fadeIn 1.2s ease-out forwards',
        glow: 'glow 2s ease-in-out infinite alternate',
        slideIn: 'slideIn 1s ease-out forwards',

        /* Optional animated gradient */
        gradientShift: 'gradientShift 8s ease infinite',
      },
    },
  },
  plugins: [],
}