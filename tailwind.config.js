/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:
      {
        'main-color': '#506ee5',
        'secondary-color': '#7037cd',
        'bg-color': '#d9d9d9',
      },
    },
    variants: {},
    plugins: [],
  },
  plugins: [],
}
