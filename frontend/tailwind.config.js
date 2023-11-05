/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease',
        scrollLeft: 'scrollLeft 6s infinite linear',
        bgOpacity: 'bgOpacity 5s infinite linear'
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0.2,
            transform: 'translateY(0.5rem)'
          },
          '100%': {
            opacity: 1,
          }
        },
        scrollLeft: {
          '0%': {
            transform: 'translateX(100px)'
          },
          '50%': {
            transform: 'translateX(100px)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        },
        bgOpacity: {
          '0%': {
            '--bg-opacity': '0.5'
          },
          '50%': {
            '--bg-opacity': '0.2'
          },
          '100%': {
            '--bg-opacity': '0.5'
          }
        },
      },
    },
    backgroundImage: {
      building: "url('/img/bg.webp')",
      silhouette: "url('/img/siru.webp')"
    }
  },
  plugins: [],
}
