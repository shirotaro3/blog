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
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease',
        growWidth: 'growWidth 0.8s ease',
        growHeight: 'growHeight 0.8s ease',
        fadeInColor: 'fadeInColor 0.6s ease',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '30%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        growWidth: {
          '0%': {
            width: 0,
            opacity: 1,
          },
          '30%': {
            width: '100%',
            opacity: 0.7,
          },
          '100%': {
            opacity: 0,
          },
        },
        growHeight: {
          '0%': {
            height: 0,
            opacity: 1,
          },
          '30%': {
            height: '100%',
            opacity: 0.7,
          },
          '100%': {
            opacity: 0,
          },
        },
        fadeInColor: {
          '0%': {
            '--bg-opacity': 0,
            'border-opacity': 0,
          },
          '30%': {
            '--bg-opacity': 0,
            'border-opacity': 0,
          },
          '100%': {
            '--bg-opacity': 1,
            'border-opacity': 1,
          },
        },
      },
    },
    backgroundImage: {
      building: `url('${process.env.NEXT_PUBLIC_BASE_PATH}/img/bg.webp')`,
      silhouette: `url('${process.env.NEXT_PUBLIC_BASE_PATH}/img/siru.webp')`,
    },
  },
  plugins: [],
}
