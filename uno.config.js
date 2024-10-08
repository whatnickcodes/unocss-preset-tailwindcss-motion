import { defineConfig } from 'unocss'
import { presetUno } from 'unocss'


// Not ideal but it works...
import fs from 'fs'
import path from 'path'
const resetCSS = fs.readFileSync(
  path.resolve(process.cwd(), 'node_modules/@unocss/reset/tailwind.css'),
  'utf-8'
)


export default defineConfig({
    presets: [
        presetUno(),
    ],
    content: {
        filesystem: ['./compare-test/index.html']
    },
    preflights: [
        {
            getCSS: () => `
                ${resetCSS}
                nav {
                    border-top: 8px solid orange;
                }
            `
        }
    ]
})