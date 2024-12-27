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
        background: 'var(--background-rgb)',
        primary: {
          default: 'var(--primary-color)',
          light: 'var(--primary-color-light)',
        },
        secondery: {
          default: 'var(--secondery-color)',
          light: 'var(--secondery-color-light)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
