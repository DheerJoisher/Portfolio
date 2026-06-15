import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: '#0a0f19',
        panel: '#111827',
        accent: '#7c3aed',
        glow: '#8b5cf6',
      },
      boxShadow: {
        soft: '0 40px 120px rgba(15, 23, 42, 0.25)',
      },
      backgroundImage: {
        radial: 'radial-gradient(circle at top, rgba(124, 58, 237, 0.18), transparent 35%), radial-gradient(circle at right, rgba(14, 165, 233, 0.14), transparent 30%), linear-gradient(180deg, #020617 0%, #08101d 100%)',
      },
    },
  },
  plugins: [],
};
