import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A961',
          light: '#D4AF6A',
          dark: '#A88B4A',
          metallic: '#B8941F',
        },
        burgundy: {
          DEFAULT: '#8B0000',
          light: '#A52A2A',
          dark: '#5C0000',
        },
        cream: '#F5F5DC',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
