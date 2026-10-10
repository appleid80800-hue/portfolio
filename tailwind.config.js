/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#090909',
          secondary: '#151515',
          card: '#121212',
          hover: '#1a1a1a',
          surface: '#181818'
        },
        brand: {
          accent: '#C6FF00',
          accentHover: '#b0e600',
          dark: '#090909',
        },
        text: {
          primary: '#F5F5F0',
          secondary: '#969696',
          muted: '#666666',
        },
        border: {
          subtle: '#222222',
          light: '#2e2e2e',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
