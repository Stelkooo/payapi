import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      colors: {
        'dark-pink': '#BA4270',
        'link-water-white': '#FBFCFE',
        'san-juan-blue': '#36536B',
        'mirage-blue': '#1B262F',
        'charm-pink': '#DA6D97',
        'light-san-juan-blue': '#6C8294',
      },
    },
  },
  plugins: [],
};
export default config;
