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
        // Read the HTML file
        const html = fs.readFileSync('test/index.html', 'utf-8')
        
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
        fs.writeFileSync('unocss/uno.css', css)
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
        'test/index.html'
    ])

    watcher.on('change', async (path) => {
        console.log(`File ${path} changed, rebuilding...`)
        await build()
    })
} else {
    build()
}
