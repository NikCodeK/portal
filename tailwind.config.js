/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#3B82F6',
        'brand-dark': '#1D4ED8',
        'brand-deep': '#0B2C8A',
        'brand-light': '#93C5FD',
        'brand-soft': '#E1EDFF',
        'text-primary': '#0F172A',
        'text-muted': '#4C5D7A',
        bg: '#FFFFFF',
        'bg-subtle': '#F3F6FF',
        card: '#FFFFFF',
        border: '#C5D6FF',
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
