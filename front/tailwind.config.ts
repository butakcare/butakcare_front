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
        key: "#65CCB2",
        sub: "#B2E2CC",
        white: "#FFFFFF",
        gray10: "#FCFCFB",
        gray20: "#F6F4ED",
        gray30: "#F0EEE5",
        gray90: "#3B3B3B",
        black: "#000000",
        stroke: "#909090",
      },
      screens: {
        mobile: "360px",
        tablet: "768px",
        desktop: "1100px",
      },
    },
  },
  plugins: [],
} satisfies Config;
