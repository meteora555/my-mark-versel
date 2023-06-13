/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./modules/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1670px',
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography'),
        // ...
    ],
    darkMode: 'class',
}
