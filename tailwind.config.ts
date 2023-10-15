import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(23rem, 1fr))',
      },
      colors: {
        primary: '#8ACCBD',
        secondary: '#EBCE51',
        accent: '#A04659',
        background: '#071f21',
      },
    },
  },
  plugins: [],
};
export default config;
