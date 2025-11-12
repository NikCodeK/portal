/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#51BDCB',
        'brand-dark': '#2E95A4',
        'brand-light': '#A7E6ED',
        'brand-soft': '#DBF2F4',
        'text-primary': '#111111',
        'text-muted': '#4F5D66',
        bg: '#FFFFFF',
        'bg-subtle': '#F4F4F4',
        card: '#FFFFFF',
        border: '#CFE3E7',
        'btn-primary': '#F18511',
        'btn-primary-dark': '#D9740E',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 6px 24px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
};
