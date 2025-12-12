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
        mundial: {
          orange: '#CC6B2C',
          brick: '#8A4B2A',
          arch: '#5E5E5F',
          base: '#1A1A1A',
          light: '#F5F5F0',
        }
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;