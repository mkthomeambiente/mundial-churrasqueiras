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
          orange: '#CC6B2C', // Terracota Queimado (Ação)
          brick: '#8A4B2A',  // Tijolo (Detalhes)
          arch: '#5E5E5F',   // Ferro/Concreto (Texto Secundário)
          base: '#1A1A1A',   // Carvão/Preto (Fundo Forte)
          light: '#F5F5F0',  // Off-white (Fundo Claro)
        }
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'], // Legibilidade máxima
        display: ['var(--font-luckiest)', 'system-ui', 'sans-serif'], // Títulos (se a fonte Luckiest estiver carregada)
      },
      boxShadow: {
        'rust': '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
};
export default config;