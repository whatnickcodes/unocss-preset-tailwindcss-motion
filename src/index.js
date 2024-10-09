/**
 * UnoCSS Fork of tailwindcss-motion
 * @see https://github.com/romboHQ/tailwindcss-motion
 * @version 1.0.0
 * @date 2024-10-09
 * @description This is a UnoCSS adaptation of the tailwindcss-motion plugin,
 * providing smooth animations and transitions for UnoCSS projects.
 */
import { defineConfig, toEscapedSelector as e } from 'unocss'






// Their stategy they pull off utility classes + animations...
let cssVars = {
    '--motion-default-timing': 'cubic-bezier(.165, .84, .44, 1)',
    '--motion-bounce': 'linear(0, 0.004, 0.016, 0.035, 0.063, 0.098, 0.141 13.6%, 0.25, 0.391, 0.563, 0.765,1, 0.891 40.9%, 0.848, 0.813, 0.785, 0.766, 0.754, 0.75, 0.754, 0.766, 0.785,0.813, 0.848, 0.891 68.2%, 1 72.7%, 0.973, 0.953, 0.941, 0.938, 0.941, 0.953,0.973, 1, 0.988, 0.984, 0.988, 1)',
    
    // from https://www.kvin.me/css-springs
    '--motion-spring-smooth': 'linear(0, 0.001 0.44%, 0.0045 0.94%, 0.0195 2.03%, 0.0446 3.19%, 0.0811 4.5%, 0.1598 6.82%, 0.3685 12.34%, 0.4693 15.17%, 0.5663, 0.6498 21.27%, 0.7215 24.39%, 0.7532 25.98%, 0.7829 27.65%, 0.8105, 0.8349 31.14%, 0.8573 32.95%, 0.8776 34.84%, 0.8964 36.87%, 0.9136 39.05%, 0.929 41.37%, 0.9421 43.77%, 0.9537 46.38%, 0.9636 49.14%, 0.9789 55.31%, 0.9888 62.35%, 0.9949 71.06%, 0.9982 82.52%, 0.9997 99.94%)', // Bounce: 0%
    '--motion-spring-snappy': 'linear(0, 0.0014, 0.0053 1.02%, 0.0126, 0.0227 2.18%, 0.0517 3.41%, 0.094 4.79%, 0.1865 7.26%, 0.4182 12.77%, 0.5246 15.46%, 0.6249, 0.7112, 0.7831 23.95%, 0.8146 25.4%, 0.844, 0.8699 28.45%, 0.8935, 0.9139 31.64%, 0.932, 0.9473, 0.9601 36.65%, 0.9714 38.47%, 0.9808 40.35%, 0.9948 44.49%, 1.0031 49.43%, 1.0057 53.35%, 1.0063 58.14%, 1.0014 80.78%, 1.0001 99.94%)', // Bounce: 15%
    '--motion-spring-bouncy': 'linear(0, 0.0018, 0.0069, 0.0151 1.74%, 0.0277 2.4%, 0.062 3.7%, 0.1115 5.15%, 0.2211 7.77%, 0.4778 13.21%, 0.5912 15.75%, 0.6987 18.44%, 0.7862 20.98%, 0.861 23.59%, 0.8926, 0.9205, 0.945 27.51%, 0.9671 28.89%, 0.9868, 1.003 31.79%, 1.0224 34.11%, 1.0358 36.58%, 1.0436 39.27%, 1.046 42.31%, 1.0446 44.71%, 1.0406 47.47%, 1.0118 61.84%, 1.0027 69.53%, 0.9981 80.49%, 0.9991 99.94%)', // Bounce: 30%
    '--motion-spring-bouncier': 'linear(0, 0.0023, 0.0088, 0.0194 1.59%, 0.035 2.17%, 0.078 3.33%, 0.1415 4.64%, 0.2054 5.75%, 0.2821 6.95%, 0.5912 11.45%, 0.7205 13.43%, 0.8393 15.45%, 0.936 17.39%, 0.9778, 1.015, 1.0477, 1.0759, 1.0998 22.22%, 1.1203, 1.1364, 1.1484 25.26%, 1.1586 26.61%, 1.1629 28.06%, 1.1613 29.56%, 1.1537 31.2%, 1.1434 32.6%, 1.1288 34.19%, 1.0508 41.29%, 1.0174 44.87%, 1.0025 46.89%, 0.9911 48.87%, 0.9826 50.9%, 0.9769 53.03%, 0.9735 56.02%, 0.9748 59.45%, 0.9964 72.64%, 1.0031 79.69%, 1.0042 86.83%, 1.0008 99.97%)', // Bounce: 50%
    '--motion-spring-bounciest': 'linear(0, 0.0032, 0.0131, 0.0294, 0.0524, 0.0824, 0.1192 1.54%, 0.2134 2.11%, 0.3102 2.59%, 0.4297 3.13%, 0.8732 4.95%, 1.0373, 1.1827 6.36%, 1.2972 7.01%, 1.3444, 1.3859, 1.4215, 1.4504, 1.4735, 1.4908, 1.5024, 1.5084 9.5%, 1.5091, 1.5061, 1.4993, 1.4886, 1.4745, 1.4565 11.11%, 1.4082 11.7%, 1.3585 12.2%, 1.295 12.77%, 1.0623 14.64%, 0.9773, 0.9031 16.08%, 0.8449 16.73%, 0.8014, 0.7701 17.95%, 0.7587, 0.7501, 0.7443, 0.7412 19.16%, 0.7421 19.68%, 0.7508 20.21%, 0.7672 20.77%, 0.7917 21.37%, 0.8169 21.87%, 0.8492 22.43%, 0.9681 24.32%, 1.0114, 1.0492 25.75%, 1.0789 26.41%, 1.1008, 1.1167, 1.1271, 1.1317 28.81%, 1.1314, 1.1271 29.87%, 1.1189 30.43%, 1.1063 31.03%, 1.0769 32.11%, 0.9941 34.72%, 0.9748 35.43%, 0.9597 36.09%, 0.9487, 0.9407, 0.9355, 0.933 38.46%, 0.9344 39.38%, 0.9421 40.38%, 0.9566 41.5%, 0.9989 44.12%, 1.0161 45.37%, 1.029 46.75%, 1.0341 48.1%, 1.0335 49.04%, 1.0295 50.05%, 1.0221 51.18%, 0.992 55.02%, 0.9854 56.38%, 0.9827 57.72%, 0.985 59.73%, 1.004 64.67%, 1.0088 67.34%, 1.0076 69.42%, 0.9981 74.28%, 0.9956 76.85%, 0.9961 79.06%, 1.0023 86.46%, 0.999 95.22%, 0.9994 100%)', // Bounce: 80%

    // Normally @tailwind defaults, doesn't really matter I think...
    '--motion-origin-scale-x': '1',
    '--motion-origin-scale-y': '1',
    '--motion-origin-translate-x': '0',
    '--motion-origin-translate-y': '0',
    '--motion-origin-rotate': '0',
    '--motion-origin-blur': '0',
    '--motion-origin-grayscale': '0',
    '--motion-origin-opacity': '1',
    '--motion-origin-background-color': '',
    '--motion-origin-text-color': '',
    '--motion-end-scale-x': '1',
    '--motion-end-scale-y': '1',
    '--motion-end-translate-x': '0',
    '--motion-end-translate-y': '0',
    '--motion-end-rotate': '0',
    '--motion-end-blur': '0',
    '--motion-end-grayscale': '0',
    '--motion-end-opacity': '1',
    '--motion-end-background-color': '',
    '--motion-end-text-color': '',
    '--motion-duration': '750ms',
    '--motion-timing': 'var(--motion-default-timing)',
    '--motion-perceptual-duration-multiplier': '1',
    '--motion-delay': '0ms',
    '--motion-scale-duration': 'var(--motion-duration)',
    '--motion-scale-timing': 'var(--motion-timing)',
    '--motion-scale-perceptual-duration-multiplier': 'var(--motion-perceptual-duration-multiplier)',
    '--motion-scale-delay': 'var(--motion-delay)',
    '--motion-translate-duration': 'var(--motion-duration)',
    '--motion-translate-timing': 'var(--motion-timing)',
    '--motion-translate-perceptual-duration-multiplier': 'var(--motion-perceptual-duration-multiplier)',
    '--motion-translate-delay': 'var(--motion-delay)',
    '--motion-rotate-duration': 'var(--motion-duration)',
    '--motion-rotate-timing': 'var(--motion-timing)',
    '--motion-rotate-perceptual-duration-multiplier': 'var(--motion-perceptual-duration-multiplier)',
    '--motion-rotate-delay': 'var(--motion-delay)',
    '--motion-filter-duration': 'var(--motion-duration)',
    '--motion-filter-timing': 'var(--motion-timing)',
    '--motion-filter-perceptual-duration-multiplier': 'var(--motion-perceptual-duration-multiplier)',
    '--motion-filter-delay': 'var(--motion-delay)',
    '--motion-opacity-duration': 'var(--motion-duration)',
    '--motion-opacity-timing': 'var(--motion-timing)',
    '--motion-opacity-perceptual-duration-multiplier': 'var(--motion-perceptual-duration-multiplier)',
    '--motion-opacity-delay': 'var(--motion-delay)',
    '--motion-background-color-duration': 'var(--motion-duration)',
    '--motion-background-color-timing': 'var(--motion-timing)',
    '--motion-background-color-perceptual-duration-multiplier': 'var(--motion-perceptual-duration-multiplier)',
    '--motion-background-color-delay': 'var(--motion-delay)',
    '--motion-text-color-duration': 'var(--motion-duration)',
    '--motion-text-color-timing': 'var(--motion-timing)',
    '--motion-text-color-perceptual-duration-multiplier': 'var(--motion-perceptual-duration-multiplier)',
    '--motion-text-color-delay': 'var(--motion-delay)',
    '--motion-scale-in-animation': 'none',
    '--motion-translate-in-animation': 'none',
    '--motion-rotate-in-animation': 'none',
    '--motion-filter-in-animation': 'none',
    '--motion-opacity-in-animation': 'none',
    '--motion-background-color-in-animation': 'none',
    '--motion-text-color-in-animation': 'none',
    '--motion-scale-out-animation': 'none',
    '--motion-translate-out-animation': 'none',
    '--motion-rotate-out-animation': 'none',
    '--motion-filter-out-animation': 'none',
    '--motion-opacity-out-animation': 'none',
    '--motion-background-color-out-animation': 'none',
    '--motion-text-color-out-animation': 'none',

    // These are key and are the ones that get set by the rules...
    '--motion-all-enter-animations': 'var(--motion-scale-in-animation), var(--motion-translate-in-animation), var(--motion-rotate-in-animation), var(--motion-filter-in-animation), var(--motion-opacity-in-animation), var(--motion-background-color-in-animation), var(--motion-text-color-in-animation)',
    '--motion-all-exit-animations': 'var(--motion-scale-out-animation), var(--motion-translate-out-animation), var(--motion-rotate-out-animation), var(--motion-filter-out-animation), var(--motion-opacity-out-animation), var(--motion-background-color-out-animation), var(--motion-text-color-out-animation)',
}
const convertCSSVarsToCSS = (selector, cssVars) => {
    const cssLines = []
    
    cssLines.push(selector + ' {')
    for (const [property, value] of Object.entries(cssVars)) {
        cssLines.push('  ' + property + ': ' + value + ';')
    }
    cssLines.push('}')

    const css = cssLines.join('\n')
    return css
}

// Make these JS so we can assign multiple spots easily...
let keyframes = {
    'motion-scale-in': '{ 0% {scale: var(--motion-origin-scale-x) var(--motion-origin-scale-y);} 100% {scale: 1 1;} }',
    'motion-scale-out': '{ 0% {scale: 1 1;} 100% {scale: var(--motion-end-scale-x) var(--motion-end-scale-y);} }',
    'motion-translate-in': '{ 0% {translate: var(--motion-origin-translate-x) var(--motion-origin-translate-y);} 100% {translate: 0 0;} }',
    'motion-translate-out': '{ 0% {translate: 0 0;} 100% {translate: var(--motion-end-translate-x) var(--motion-end-translate-y);} }',
    'motion-rotate-in': '{ 0% {rotate: var(--motion-origin-rotate);} 100% {rotate: 0;} }',
    'motion-rotate-out': '{ 0% {rotate: 0;} 100% {rotate: var(--motion-end-rotate);} }',
    'motion-filter-in': '{ 0% {filter: blur(var(--motion-origin-blur)) grayscale(var(--motion-origin-grayscale));} 100% {filter: blur(0) grayscale(0);} }',
    'motion-filter-out': '{ 0% {filter: blur(0) grayscale(0);} 100% {filter: blur(var(--motion-end-blur)) grayscale(var(--motion-end-grayscale));} }',
    'motion-opacity-in': '{ 0% {opacity: var(--motion-origin-opacity);} }',
    'motion-opacity-out': '{ 100% {opacity: var(--motion-end-opacity);} }',
    'motion-background-color-in': '{ 0% {background-color: var(--motion-origin-background-color);} }',
    'motion-background-color-out': '{ 100% {background-color: var(--motion-end-background-color);} }',
    'motion-text-color-in': '{ 0% {color: var(--motion-origin-text-color);} }',
    'motion-text-color-out': '{ 100% {color: var(--motion-end-text-color);} }',
}

// These are the reusable animation strings to actually create the animations...
const scaleInAnimation = 'motion-scale-in calc(var(--motion-scale-duration) * var(--motion-scale-perceptual-duration-multiplier)) var(--motion-scale-timing) var(--motion-scale-delay) both'
const scaleOutAnimation = 'motion-scale-out calc(var(--motion-scale-duration) * var(--motion-scale-perceptual-duration-multiplier)) var(--motion-scale-timing) var(--motion-scale-delay) both'
const translateInAnimation = 'motion-translate-in calc(var(--motion-translate-duration) * var(--motion-translate-perceptual-duration-multiplier)) var(--motion-translate-timing) var(--motion-translate-delay) both'
const translateOutAnimation = 'motion-translate-out calc(var(--motion-translate-duration) * var(--motion-translate-perceptual-duration-multiplier)) var(--motion-translate-timing) var(--motion-translate-delay) both'
const rotateInAnimation = 'motion-rotate-in calc(var(--motion-rotate-duration) * var(--motion-rotate-perceptual-duration-multiplier)) var(--motion-rotate-timing) var(--motion-rotate-delay) both'
const rotateOutAnimation = 'motion-rotate-out calc(var(--motion-rotate-duration) * var(--motion-rotate-perceptual-duration-multiplier)) var(--motion-rotate-timing) var(--motion-rotate-delay) both'
const filterInAnimation = 'motion-filter-in calc(var(--motion-filter-duration) * var(--motion-filter-perceptual-duration-multiplier)) var(--motion-filter-timing) var(--motion-filter-delay) both'
const filterOutAnimation = 'motion-filter-out calc(var(--motion-filter-duration) * var(--motion-filter-perceptual-duration-multiplier)) var(--motion-filter-timing) var(--motion-filter-delay) both'
const opacityInAnimation = 'motion-opacity-in calc(var(--motion-opacity-duration) * var(--motion-opacity-perceptual-duration-multiplier)) var(--motion-opacity-timing) var(--motion-opacity-delay) both'
const opacityOutAnimation = 'motion-opacity-out calc(var(--motion-opacity-duration) * var(--motion-opacity-perceptual-duration-multiplier)) var(--motion-opacity-timing) var(--motion-opacity-delay) both'
const backgroundColorInAnimation = 'motion-background-color-in calc(var(--motion-background-color-duration) * var(--motion-background-color-perceptual-duration-multiplier)) var(--motion-background-color-timing) var(--motion-background-color-delay) both'
const backgroundColorOutAnimation = 'motion-background-color-out calc(var(--motion-background-color-duration) * var(--motion-background-color-perceptual-duration-multiplier)) var(--motion-background-color-timing) var(--motion-background-color-delay) both'
const textColorInAnimation = 'motion-text-color-in calc(var(--motion-text-color-duration) * var(--motion-text-color-perceptual-duration-multiplier)) var(--motion-text-color-timing) var(--motion-text-color-delay) both'
const textColorOutAnimation = 'motion-text-color-out calc(var(--motion-text-color-duration) * var(--motion-text-color-perceptual-duration-multiplier)) var(--motion-text-color-timing) var(--motion-text-color-delay) both'



// Tailwind Util taken from import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'
const flattenColorPalette = (colors) =>
    Object.assign({}, ...Object.entries(colors ?? {}).flatMap(([color, values]) =>
        typeof values == "object"
            ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
                [color + (number === "DEFAULT" ? "" : `-${number}`)]: hex
            }))
            : [{ [`${color}`]: values }]
    ));




export const presetTailwindMotion = () => defineConfig({
    name: 'tailwind-motion',
    presets: [],
    theme: {
        animation: {
            keyframes: keyframes,
            // durations: {
            //     fastest: '0.15s',
            //     faster: '0.3s',
            //     fast: '0.5s',
            //     normal: '0.8s',
            //     slow: '1s',
            //     slower: '1.5s',
            //     slowest: '2s',
            // },
            // timings: {
            //     default: 'ease',
            //     linear: 'linear',
            //     in: 'ease-in',
            //     out: 'ease-out',
            //     inOut: 'ease-in-out',
            // },
            // counts: {
            //     once: '1',
            //     twice: '2',
            //     infinite: 'infinite',
            // },
        },
   
        // Default values for the animations...
        motionScale: {
            0: '0',
            50: '.5',
            75: '.75',
            90: '.9',
            95: '.95',
            100: '1',
            105: '1.05',
            110: '1.1',
            125: '1.25',
            150: '1.5',
            DEFAULT: '0.5'
        },
        motionTranslate: {
            0: '0%',
            25: '25%',
            50: '50%',
            75: '75%',
            100: '100%',
            150: '150%',
            DEFAULT: '25%',
        },
        motionRotate: {
            DEFAULT: '12deg',
            0: '0deg',
            45: '45deg',
            90: '90deg',
            180: '180deg',
        },
        motionBlur: {
            DEFAULT: '8px',
            0: '0',
            sm: '4px',
            md: '8px',
            lg: '12px',
            xl: '16px',
            '2xl': '24px',
            '3xl': '32px',
        },
        motionGrayscale: {
            DEFAULT: '100%',
            0: '0',
            25: '25%',
            50: '50%',
            75: '75%',
            100: '100%',
        },
        motionOpacity: {
            DEFAULT: '0',
            0: '0.001',
            25: '0.25',
            50: '0.5',
            75: '0.75',
            100: '1',
        },
    },
    extendTheme: (theme) => ({
        ...theme,
        motionBackgroundColor: flattenColorPalette(theme.colors),
        motionTextColor: flattenColorPalette(theme.colors),
    }),
    rules: [

        // SCALES...
        [/^motion-scale-in(-(.+))?$/, ([, , size = 'DEFAULT'], { rawSelector, theme }) => {
            let scale = size === 'DEFAULT' ? theme.motionScale.DEFAULT : 
                        size.startsWith('[') ? size.slice(1, -1) : 
                        theme.motionScale[size] || size;
            let selector = e(rawSelector);

            if (rawSelector.startsWith('-')) {
                scale = `calc(${scale} * -1)`;
            }
            
            return `
                ${selector} {
                    --motion-origin-scale-x: ${scale};
                    --motion-origin-scale-y: ${scale};
                    --motion-scale-in-animation: ${scaleInAnimation};
                    animation: var(--motion-all-enter-animations);
                }
            `;
        }],
        [/^motion-scale-x-in(-(.+))?$/, ([, , size = 'DEFAULT'], { rawSelector, theme }) => {
            let scale = size === 'DEFAULT' ? theme.motionScale.DEFAULT : 
                        size.startsWith('[') ? size.slice(1, -1) : 
                        theme.motionScale[size] || size;
            let selector = e(rawSelector);

            if (rawSelector.startsWith('-')) {
                scale = `calc(${scale} * -1)`;
            }
            
            return `
                ${selector} {
                    --motion-origin-scale-x: ${scale};
                    --motion-scale-in-animation: ${scaleInAnimation};
                    animation: var(--motion-all-enter-animations);
                }
            `;
        }],
        [/^motion-scale-y-in(-(.+))?$/, ([, , size = 'DEFAULT'], { rawSelector, theme }) => {
            let scale = size === 'DEFAULT' ? theme.motionScale.DEFAULT : 
                        size.startsWith('[') ? size.slice(1, -1) : 
                        theme.motionScale[size] || size;
            let selector = e(rawSelector);

            if (rawSelector.startsWith('-')) {
                scale = `calc(${scale} * -1)`;
            }
            
            return `
                ${selector} {
                    --motion-origin-scale-y: ${scale};
                    --motion-scale-in-animation: ${scaleInAnimation};
                    animation: var(--motion-all-enter-animations);
                }
            `;
        }],
        [/^motion-scale-out(-(.+))?$/, ([, , size = 'DEFAULT'], { rawSelector, theme }) => {
            let scale = size === 'DEFAULT' ? theme.motionScale.DEFAULT : 
                        size.startsWith('[') ? size.slice(1, -1) : 
                        theme.motionScale[size] || size;
            let selector = e(rawSelector);

            if (rawSelector.startsWith('-')) {
                scale = `calc(${scale} * -1)`;
            }
            
            return `
                ${selector} {
                    --motion-end-scale-x: ${scale};
                    --motion-end-scale-y: ${scale};
                    --motion-scale-out-animation: ${scaleOutAnimation};
                    animation: var(--motion-all-exit-animations);
                }
            `;
        }],
        [/^motion-scale-x-out(-(.+))?$/, ([, , size = 'DEFAULT'], { rawSelector, theme }) => {
            let scale = size === 'DEFAULT' ? theme.motionScale.DEFAULT : 
                        size.startsWith('[') ? size.slice(1, -1) : 
                        theme.motionScale[size] || size;
            let selector = e(rawSelector);

            if (rawSelector.startsWith('-')) {
                scale = `calc(${scale} * -1)`;
            }
            
            return `
                ${selector} {
                    --motion-end-scale-x: ${scale};
                    --motion-scale-out-animation: ${scaleOutAnimation};
                    animation: var(--motion-all-exit-animations);
                }
            `;
        }],
        [/^motion-scale-y-out(-(.+))?$/, ([, , size = 'DEFAULT'], { rawSelector, theme }) => {
            let scale = size === 'DEFAULT' ? theme.motionScale.DEFAULT : 
                        size.startsWith('[') ? size.slice(1, -1) : 
                        theme.motionScale[size] || size;
            let selector = e(rawSelector);

            if (rawSelector.startsWith('-')) {
                scale = `calc(${scale} * -1)`;
            }
            
            return `
                ${selector} {
                    --motion-end-scale-y: ${scale};
                    --motion-scale-out-animation: ${scaleOutAnimation};
                    animation: var(--motion-all-exit-animations);
                }
            `;
        }],

        // TRANSLATES...
        [/^motion-translate-x-in(-(.+))?$/, ([, , size = 'DEFAULT'], { rawSelector, theme }) => {
            let translate = size === 'DEFAULT' ? theme.motionTranslate.DEFAULT : 
                            size.startsWith('[') ? size.slice(1, -1) : 
                            theme.motionTranslate[size] || size;
            let selector = e(rawSelector);

            if (rawSelector.startsWith('-')) {
                translate = `calc(${translate} * -1)`;
            }
            
            return `
                ${selector} {
                    --motion-origin-translate-x: ${translate};
                    --motion-translate-in-animation: ${translateInAnimation};
                    animation: var(--motion-all-enter-animations);
                }
            `;
        }],
        [/^motion-translate-y-in(-(.+))?$/, ([, , size = 'DEFAULT'], { rawSelector, theme }) => {
            let translate = size === 'DEFAULT' ? theme.motionTranslate.DEFAULT : 
                            size.startsWith('[') ? size.slice(1, -1) : 
                            theme.motionTranslate[size] || size;
            let selector = e(rawSelector);

            if (rawSelector.startsWith('-')) {
                translate = `calc(${translate} * -1)`;
            }
            
            return `
                ${selector} {
                    --motion-origin-translate-y: ${translate};
                    --motion-translate-in-animation: ${translateInAnimation};
                    animation: var(--motion-all-enter-animations);
                }
            `;
        }],
        [/^motion-translate-x-out(-(.+))?$/, ([, , size = 'DEFAULT'], { rawSelector, theme }) => {
            let translate = size === 'DEFAULT' ? theme.motionTranslate.DEFAULT : 
                            size.startsWith('[') ? size.slice(1, -1) : 
                            theme.motionTranslate[size] || size;
            let selector = e(rawSelector);

            if (rawSelector.startsWith('-')) {
                translate = `calc(${translate} * -1)`;
            }
            
            return `
                ${selector} {
                    --motion-end-translate-x: ${translate};
                    --motion-translate-out-animation: ${translateOutAnimation};
                    animation: var(--motion-all-exit-animations);
                }
            `;
        }],
        [/^motion-translate-y-out(-(.+))?$/, ([, , size = 'DEFAULT'], { rawSelector, theme }) => {
            let translate = size === 'DEFAULT' ? theme.motionTranslate.DEFAULT : 
                            size.startsWith('[') ? size.slice(1, -1) : 
                            theme.motionTranslate[size] || size;
            let selector = e(rawSelector);

            if (rawSelector.startsWith('-')) {
                translate = `calc(${translate} * -1)`;
            }
            
            return `
                ${selector} {
                    --motion-end-translate-y: ${translate};
                    --motion-translate-out-animation: ${translateOutAnimation};
                    animation: var(--motion-all-exit-animations);
                }
            `;
        }],

        // ROTATES...
        [/^motion-rotate-in(-(.+))?$/, ([, , size = 'DEFAULT'], { rawSelector, theme }) => {
            let rotate = size === 'DEFAULT' ? theme.motionRotate.DEFAULT : 
                         size.startsWith('[') ? size.slice(1, -1) : 
                         theme.motionRotate[size] || size;
            let selector = e(rawSelector);

            if (rawSelector.startsWith('-')) {
                rotate = `calc(${rotate} * -1)`;
            }
            
            return `
                ${selector} {
                    --motion-origin-rotate: ${rotate};
                    --motion-rotate-in-animation: ${rotateInAnimation};
                    animation: var(--motion-all-enter-animations);
                }
            `;
        }],
        [/^motion-rotate-out(-(.+))?$/, ([, , size = 'DEFAULT'], { rawSelector, theme }) => {
            let rotate = size === 'DEFAULT' ? theme.motionRotate.DEFAULT : 
                         size.startsWith('[') ? size.slice(1, -1) : 
                         theme.motionRotate[size] || size;
            let selector = e(rawSelector);

            if (rawSelector.startsWith('-')) {
                rotate = `calc(${rotate} * -1)`;
            }
            
            return `
                ${selector} {
                    --motion-end-rotate: ${rotate};
                    --motion-rotate-out-animation: ${rotateOutAnimation};
                    animation: var(--motion-all-exit-animations);
                }
            `;
        }],

        // BLURS
        [/^motion-blur-in(-(.+))?$/, ([, , size = 'DEFAULT'], { theme }) => {
            const blur = size === 'DEFAULT' ? theme.motionBlur.DEFAULT : 
                         size.startsWith('[') ? size.slice(1, -1) : 
                         theme.motionBlur[size] || size;
            return {
                '--motion-origin-blur': blur,
                '--motion-filter-in-animation': filterInAnimation,
                'animation': 'var(--motion-all-enter-animations)',
            };
        }],
        [/^motion-blur-out(-(.+))?$/, ([, , size = 'DEFAULT'], { theme }) => {
            const blur = size === 'DEFAULT' ? theme.motionBlur.DEFAULT : 
                         size.startsWith('[') ? size.slice(1, -1) : 
                         theme.motionBlur[size] || size;
            return {
                '--motion-end-blur': blur,
                '--motion-filter-out-animation': filterOutAnimation,
                'animation': 'var(--motion-all-exit-animations)',
            };
        }],

        // GRAYSCALES
        [/^motion-grayscale-in(-(.+))?$/, ([, , size = 'DEFAULT'], { theme }) => {
            const grayscale = size === 'DEFAULT' ? theme.motionGrayscale.DEFAULT : 
                              size.startsWith('[') ? size.slice(1, -1) : 
                              theme.motionGrayscale[size] || size;
            return {
                '--motion-origin-grayscale': grayscale,
                '--motion-filter-in-animation': filterInAnimation,
                'animation': 'var(--motion-all-enter-animations)',
            };
        }],
        [/^motion-grayscale-out(-(.+))?$/, ([, , size = 'DEFAULT'], { theme }) => {
            const grayscale = size === 'DEFAULT' ? theme.motionGrayscale.DEFAULT : 
                              size.startsWith('[') ? size.slice(1, -1) : 
                              theme.motionGrayscale[size] || size;
            return {
                '--motion-end-grayscale': grayscale,
                '--motion-filter-out-animation': filterOutAnimation,
                'animation': 'var(--motion-all-exit-animations)',
            };
        }],

        // FADES/OPACITY
        [/^motion-opacity-in(-(.+))?$/, ([, , size = 'DEFAULT'], { theme }) => {
            const opacity = size === 'DEFAULT' ? theme.motionOpacity.DEFAULT : 
                            size.startsWith('[') ? size.slice(1, -1) : 
                            theme.motionOpacity[size] || size;
            return {
                '--motion-origin-opacity': opacity,
                '--motion-opacity-in-animation': opacityInAnimation,
                'animation': 'var(--motion-all-enter-animations)',
            };
        }],
        [/^motion-opacity-out(-(.+))?$/, ([, , size = 'DEFAULT'], { theme }) => {
            const opacity = size === 'DEFAULT' ? theme.motionOpacity.DEFAULT : 
                            size.startsWith('[') ? size.slice(1, -1) : 
                            theme.motionOpacity[size] || size;
            return {
                '--motion-end-opacity': opacity,
                '--motion-opacity-out-animation': opacityOutAnimation,
                'animation': 'var(--motion-all-exit-animations)',
            };
        }],

        // BACKGROUND COLORS
        [/^motion-bg-in(-(.+))?$/, ([, , color = 'DEFAULT'], { theme }) => {
            const bgColor = color === 'DEFAULT' ? theme.motionBackgroundColor.DEFAULT : 
                            color.startsWith('[') ? color.slice(1, -1) : 
                            theme.motionBackgroundColor[color] || color;
            return {
                '--motion-origin-background-color': bgColor,
                '--motion-background-color-in-animation': backgroundColorInAnimation,
                'animation': 'var(--motion-all-enter-animations)',
            };
        }],
        [/^motion-bg-out(-(.+))?$/, ([, , color = 'DEFAULT'], { theme }) => {
            const bgColor = color === 'DEFAULT' ? theme.motionBackgroundColor.DEFAULT : 
                            color.startsWith('[') ? color.slice(1, -1) : 
                            theme.motionBackgroundColor[color] || color;
            return {
                '--motion-end-background-color': bgColor,
                '--motion-background-color-out-animation': backgroundColorOutAnimation,
                'animation': 'var(--motion-all-exit-animations)',
            };
        }],

        // TEXT COLORS
        [/^motion-text-in(-(.+))?$/, ([, , color = 'DEFAULT'], { theme }) => {
            const textColor = color === 'DEFAULT' ? theme.motionTextColor.DEFAULT : 
                              color.startsWith('[') ? color.slice(1, -1) : 
                              theme.motionTextColor[color] || color;
            return {
                '--motion-origin-text-color': textColor,
                '--motion-text-color-in-animation': textColorInAnimation,
                'animation': 'var(--motion-all-enter-animations)',
            };
        }],
        [/^motion-text-out(-(.+))?$/, ([, , color = 'DEFAULT'], { theme }) => {
            const textColor = color === 'DEFAULT' ? theme.motionTextColor.DEFAULT : 
                              color.startsWith('[') ? color.slice(1, -1) : 
                              theme.motionTextColor[color] || color;
            return {
                '--motion-end-text-color': textColor,
                '--motion-text-color-out-animation': textColorOutAnimation,
                'animation': 'var(--motion-all-exit-animations)',
            };
        }],

    ],
    preflights: [
        {
            // Get theme
            getCSS: ({ theme }) => {

                // console.log('flattener', flattenColorPalette(theme.colors))
                // console.log('motionBackgroundColor', theme.motionBackgroundColor)

                // let themeAsString = JSON.stringify(theme.motionBackgroundColor)
                // return '/* theme as string: ' + themeAsString + ' */'

                

            }
        },
        {
            // Add the CSS variables...
            getCSS: () => {
                let css = []

                // Add for elements...
                css.push(convertCSSVarsToCSS('*, ::before, ::after', cssVars))

                // Removed backdrop due to rare use, big CSS size it adds...
                // css.push(convertCSSVarsToCSS('::backdrop', cssVars))

                return css.join('\n')
            }
        },
        {
            // Add all @keyframes...
            getCSS: () => {
                return Object.entries(keyframes)
                    .map(([name, content]) => '@keyframes ' + name + ' ' + content)
                    .join('\n');
            }
        },
        {
            // Add a reduced motion...
            getCSS: () => {
                // Just super kill all animations for reduced motion vs trying to choose...
                return `
                    @media (prefers-reduced-motion: reduce) {
                        *, ::before, ::after {
                            --motion-duration: 0.01ms !important;
                            --motion-delay: 0ms !important;
                            animation-duration: 0.01ms !important;
                            animation-delay: 0ms !important;
                            transition-duration: 0.01ms !important;
                            transition-delay: 0ms !important;
                        }
                    }
                `
            }
        },
    ],
    variants: [
        
    ]
})

export default presetTailwindMotion