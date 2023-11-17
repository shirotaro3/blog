/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      ...require('./tailwind/colors'),
      ...require('./tailwind/animations'),
    },
    backgroundImage: {
      building: `url('/img/bg.webp')`,
      silhouette: `url('/img/siru.webp')`,
    },
  },
  plugins: [require('tailwindcss-content-visibility')],
}
