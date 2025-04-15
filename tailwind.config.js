/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Source Sans Pro', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#ff1a1a', // Red
          light: '#ff4d4d', // Light red
          dark: '#cc0000', // Dark red
        },
        secondary: {
          DEFAULT: '#800000', // Dark maroon
          light: '#b30000', // Light maroon
          dark: '#4d0000', // Very dark maroon
        },
        'accent': '#ff1a1a', // Red
        'accent-dark': '#cc0000', // Darker red
        'dark': '#000000', // Pure black
        'light': '#FFFFFF', // Pure white
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out 0.5s infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(1) rotate(0)' },
          '50%': { transform: 'scale(1.2) rotate(12deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 0, 0, 0.3)',
        'glow-accent': '0 0 15px rgba(255, 26, 26, 0.3)',
      },
    },
  },
  plugins: [],
}