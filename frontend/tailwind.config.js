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
      building_sp: `url('/img/bg_sp.webp')`,
      silhouette_sp: `url('/img/siru_sp.webp')`,
    },
  },
  plugins: [require('tailwindcss-content-visibility')],
}
