import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primario": "#1A1347",
        "secundario": "#8c5ca2",
        "auxiliar": "#A486B0",
        "recuadros": "#e4e4e4",
        "texto": "#c6a7e3",
        "header-color": "#1E1B24",
        "gris": "#888787",
        "rosa": "#ce83bf",
      },
    },
  },
  plugins: [],
} satisfies Config;
