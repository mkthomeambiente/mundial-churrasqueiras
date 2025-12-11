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
          orange: '#CC6B2C',   // terracota quente
          brick:  '#8A4B2A',   // tijolo queimado / argila
          arch:   '#5E5E5F',   // aço escuro / ferrugem leve
          base:   '#1A1A1A',   // preto carvão
        }
      },
    },
  },
  plugins: [],
};

export default config;
