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
        'main': '#506ee5',
        'secondary': '#7037cd',
        'background': '#d9d9d9',
      },
      fontFamily: {
        'main': ['Verdana, Arial, system-ui']
      },
      boxShadow: {
        'link': '0 0px 35px 10px rgba(0, 0, 0, 0.3)',
      },
      textColor: {
        'description': '#d9d9d9',
        'tittle': '#fff'
      }
    },
    variants: {},
    plugins: [],
  },
  plugins: [],
}
