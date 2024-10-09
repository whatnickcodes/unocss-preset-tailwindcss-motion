/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: ['./index.html'],
    theme: {
        extend: {},
    },
    plugins: [require('tailwindcss-motion')],
}