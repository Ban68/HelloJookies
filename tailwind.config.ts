import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        jookies: {
          beige: '#F5E6D3', // Warm cookie dough base
          chocolate: '#4A2C2A', // Dark chocolate text/accents
          gold: '#D4AF37', // Premium highlights
          turquoise: '#40E0D0', // Tropical pop (CTA)
          pink: '#FF69B4', // Fun pop (CTA)
          orange: '#FF8C00', // Urgency/Warmth
        },
      },
      fontFamily: {
        heading: ['var(--font-fraunces)'],
        body: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
