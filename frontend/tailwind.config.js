/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind/colors')
const animations = require('./tailwind/animations')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      ...colors,
      ...animations,
    },
    backgroundImage: {
      building: `url('${process.env.NEXT_PUBLIC_BASE_PATH}/img/bg.webp')`,
      silhouette: `url('${process.env.NEXT_PUBLIC_BASE_PATH}/img/siru.webp')`,
    },
  },
  plugins: [],
}
