import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primario": "#1A1347",
        "secundario": "#b88fd2",
        "auxiliar": "#A486B0",
        "recuadros": "#e4e4e4",
      },
    },
  },
  plugins: [],
} satisfies Config;
