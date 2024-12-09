import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        martinique: {
        '50': '#f1f2fc',
        '100': '#e5e9fa',
        '200': '#d0d5f5',
        '300': '#b3baee',
        '400': '#9597e4',
        '500': '#7f7bd9',
        '600': '#6d61cb',
        '700': '#5e50b2',
        '800': '#4d4390',
        '900': '#413c73',
        '950': '#272343',
    },
    lightgray: {
      '50': '#f7f8f8',
      '100': '#f0f2f3',
      '200': '#d8dddf',
      '300': '#b5c0c4',
      '400': '#8d9da3',
      '500': '#6f8288',
      '600': '#596a70',
      '700': '#49565b',
      '800': '#3f494d',
      '900': '#374043',
      '950': '#25292c',
  },
  midgray: {
        '50': '#f7f7f8',
        '100': '#eeeef0',
        '200': '#dad9de',
        '300': '#b9b8c1',
        '400': '#91919f',
        '500': '#757483',
        '600': '#636270',
        '700': '#4d4d57',
        '800': '#43424a',
        '900': '#3a3a40',
        '950': '#27262b',
    },
    easternblue: {
        '50': '#ebfffd',
        '100': '#cdfffe',
        '200': '#a2ffff',
        '300': '#62fdfe',
        '400': '#1beff5',
        '500': '#00d2db',
        '600': '#029fae',
        '700': '#098695',
        '800': '#126b78',
        '900': '#135866',
        '950': '#063b46',
    },
    
    
  
    
      },
    },
  },
  plugins: [],
} satisfies Config;
