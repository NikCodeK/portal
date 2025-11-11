/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#F38B1B',
        'text-primary': '#33373A',
        'text-muted': '#6B7280',
        bg: '#FFFFFF',
        'bg-subtle': '#F5F6F7',
        card: '#FFFFFF',
        border: '#E5E7EB',
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
