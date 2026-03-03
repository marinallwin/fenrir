/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F9F5',
          100: '#CCF3EB',
          200: '#99E7D7',
          300: '#66DBC3',
          400: '#33CFAF',
          500: '#0CC8A8',
          600: '#0AA086',
          700: '#087864',
          800: '#065042',
          900: '#042821',
        },
        severity: {
          critical: '#EF4444',
          high: '#F97316',
          medium: '#EAB308',
          low: '#22C55E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}