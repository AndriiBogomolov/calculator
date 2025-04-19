/** @type {import('tailwindcss').Config} */
export const content = [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
];
export const theme = {
    extend: {
        fontFamily: {
            sans: ['var(--font-family)', 'sans-serif'],
            inter: ['var(--inter-family)', 'sans-serif'],
            mono: ['IBM Plex Mono', 'monospace'],
        },
    },
};
export const plugins = [];

