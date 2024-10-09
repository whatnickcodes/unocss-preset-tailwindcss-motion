// Vite is not used for builing and just easy preset testing...

import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        UnoCSS(),
    ],
})