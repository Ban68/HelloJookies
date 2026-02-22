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
                    beige: '#FFFDF5',
                    cream: '#FFF8E7',
                    text: '#2D3436',
                    pink: '#FF80AB',
                    blue: '#4FC3F7',
                    yellow: '#FFF176',
                    green: '#4DB6AC',
                    primary: '#FF80AB',
                    secondary: '#4FC3F7',
                },
            },
            fontFamily: {
                heading: ['var(--font-fraunces)'],
                body: ['var(--font-inter)'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            boxShadow: {
                'elevated': '0 8px 30px rgba(0, 0, 0, 0.08)',
                'elevated-lg': '0 20px 60px rgba(0, 0, 0, 0.12)',
                'glow-pink': '0 0 40px rgba(255, 128, 171, 0.3)',
                'glow-blue': '0 0 40px rgba(79, 195, 247, 0.3)',
                'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.04)',
            },
        },
    },
    plugins: [],
}
