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
          orange: '#F6A96B',
          brick: '#D4D5C6',
          arch: '#9A9B9C',
          base: '#000000',
        }
      },
    },
  },
  plugins: [],
};
export default config;