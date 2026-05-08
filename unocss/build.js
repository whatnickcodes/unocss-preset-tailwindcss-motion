import { createGenerator } from '@unocss/core'
import { presetUno } from '@unocss/preset-uno'
import { presetTailwindMotion } from './index.js'
import fs from 'fs'
import path from 'path'
import { watch } from 'chokidar'

// Get the reset CSS
const resetCSS = fs.readFileSync(
    path.resolve(process.cwd(), 'node_modules/@unocss/reset/tailwind.css'),
    'utf-8'
)

async function build() {
    try {
        // Read every test HTML file so any preset class used gets generated.
        // Drop new pages into test/ and they'll be picked up automatically.
        const testFiles = fs
            .readdirSync('test')
            .filter((f) => f.endsWith('.html'))
            .map((f) => path.join('test', f))
        const html = testFiles
            .map((f) => fs.readFileSync(f, 'utf-8'))
            .join('\n')

        // Create UnoCSS generator
        const uno = createGenerator({
            presets: [
                presetUno(),
                presetTailwindMotion()
            ],
            preflights: [
                {
                    getCSS: () => resetCSS
                }
            ]
        })

        // Generate CSS from HTML content
        const { css } = await uno.generate(html)

        // Write to file
        fs.writeFileSync('unocss/uno.css', css.replace(/[ \t]+$/gm, ''))
        console.log('CSS generated successfully')
    } catch (error) {
        console.error('Build failed:', error)
    }
}

// Watch mode
if (process.argv.includes('--watch')) {
    console.log('Watching for changes...')

    // Watch for changes
    const watcher = watch([
        'unocss/index.js',
        'test/*.html'
    ])

    watcher.on('change', async (path) => {
        console.log(`File ${path} changed, rebuilding...`)
        await build()
    })
} else {
    build()
}
