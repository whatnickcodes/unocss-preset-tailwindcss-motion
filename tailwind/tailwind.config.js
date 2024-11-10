/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: ['./test/index.html', './tailwind/app.css'],
    theme: {
        extend: {},
    },
    plugins: [require('tailwindcss-motion')],
}