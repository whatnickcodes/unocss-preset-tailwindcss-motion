/** @type {import('tailwindcss').Config} */


module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: ['./compare-test/index.html'],
    theme: {
        extend: {},
    },
    plugins: [require('tailwindcss-motion')],
}