/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ebony: {
          50: '#f3f8fa',
          100: '#d8e5ef',
          200: '#b0cadf',
          300: '#81a5c7',
          400: '#577faa',
          500: '#3d648f',
          600: '#2f4d72',
          700: '#293f5c',
          800: '#24354b',
          900: '#222e3f',
          950: '#090e16',
        },
        purple: {
          50: '#f6f4fe',
          100: '#edeafd',
          200: '#ddd9fb',
          300: '#c4baf8',
          400: '#a792f3',
          500: '#8966ec',
          600: '#7b4ae2',
          700: '#6934cd',
          800: '#572bac',
          900: '#49258d',
          950: '#2d165f',
        },
      },

      fontFamily: {
        sans: 'var(--font-bai-jamjuree)',
      },
    },
  },
  plugins: [],
}
