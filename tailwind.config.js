/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        brand: {
          dark: '#0F172A', // Slate 900
          primary: '#1E293B', // Slate 800 (Dark Gray)
          secondary: '#334155', // Slate 700
          accent: '#D4AF37', // Metallic Gold
          surface: '#F8FAFC', // Slate 50
        }
      },
      boxShadow: {
        'soft': '0 20px 40px -10px rgba(0,0,0,0.05)',
        'elegant': '0 0 30px rgba(0,0,0,0.08)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}