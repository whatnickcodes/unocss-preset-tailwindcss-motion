export const presetCustom = () => ({
    name: 'preset-custom',
    rules: [
        ['custom-rule', { color: 'red' }]
    ],
    shortcuts: [
        ['custom-shortcut', 'text-lg text-orange hover:text-red']
    ],
    theme: {
        colors: {
            'custom-color': '#abcdef'
        }
    }
})