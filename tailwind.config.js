/** @type {import('tailwindcss').Config} */
module.exports = {
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
                    beige: '#FFFDF5', // Lighter cream base
                    text: '#2D3436', // Dark grey for better contrast with pastels
                    pink: '#FF80AB', // J & Bakery
                    blue: '#4FC3F7', // O, S
                    yellow: '#FFF176', // K
                    green: '#4DB6AC', // I, E
                    primary: '#FF80AB', // Main brand color
                    secondary: '#4FC3F7',
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
}
