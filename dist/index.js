/**
 * UnoCSS Fork of tailwindcss-motion
 * @see https://github.com/romboHQ/tailwindcss-motion
 * @description This is a UnoCSS adaptation of the tailwindcss-motion plugin,
 * providing smooth animations and transitions for UnoCSS projects.
 */
import { toEscapedSelector as e } from '@unocss/core'



/*
//////////////////////////////////////////////////
// FROM defaults.js
//////////////////////////////////////////////////
*/
// Their stategy they pull off utility classes + animations...
let cssVars = {
    '--motion-default-timing': 'cubic-bezier(.165, .84, .44, 1)',

    '--motion-bounce': 'linear(0, 0.004, 0.016, 0.035, 0.063, 0.098, 0.141 13.6%, 0.25, 0.391, 0.563, 0.765,1, 0.891 40.9%, 0.848, 0.813, 0.785, 0.766, 0.754, 0.75, 0.754, 0.766, 0.785,0.813, 0.848, 0.891 68.2%, 1 72.7%, 0.973, 0.953, 0.941, 0.938, 0.941, 0.953,0.973, 1, 0.988, 0.984, 0.988, 1)',

    // from https://www.kvin.me/css-springs
    // Bounce: 0%
    '--motion-spring-smooth': 'linear(0, 0.001 0.44%, 0.0045 0.94%, 0.0195 2.03%, 0.0446 3.19%, 0.0811 4.5%, 0.1598 6.82%, 0.3685 12.34%, 0.4693 15.17%, 0.5663, 0.6498 21.27%, 0.7215 24.39%, 0.7532 25.98%, 0.7829 27.65%, 0.8105, 0.8349 31.14%, 0.8573 32.95%, 0.8776 34.84%, 0.8964 36.87%, 0.9136 39.05%, 0.929 41.37%, 0.9421 43.77%, 0.9537 46.38%, 0.9636 49.14%, 0.9789 55.31%, 0.9888 62.35%, 0.9949 71.06%, 0.9982 82.52%, 0.9997 99.94%)',

    // Bounce: 15%
    '--motion-spring-snappy': 'linear(0, 0.0014, 0.0053 1.02%, 0.0126, 0.0227 2.18%, 0.0517 3.41%, 0.094 4.79%, 0.1865 7.26%, 0.4182 12.77%, 0.5246 15.46%, 0.6249, 0.7112, 0.7831 23.95%, 0.8146 25.4%, 0.844, 0.8699 28.45%, 0.8935, 0.9139 31.64%, 0.932, 0.9473, 0.9601 36.65%, 0.9714 38.47%, 0.9808 40.35%, 0.9948 44.49%, 1.0031 49.43%, 1.0057 53.35%, 1.0063 58.14%, 1.0014 80.78%, 1.0001 99.94%)',

    // Bounce: 30%
    '--motion-spring-bouncy': 'linear(0, 0.0018, 0.0069, 0.0151 1.74%, 0.0277 2.4%, 0.062 3.7%, 0.1115 5.15%, 0.2211 7.77%, 0.4778 13.21%, 0.5912 15.75%, 0.6987 18.44%, 0.7862 20.98%, 0.861 23.59%, 0.8926, 0.9205, 0.945 27.51%, 0.9671 28.89%, 0.9868, 1.003 31.79%, 1.0224 34.11%, 1.0358 36.58%, 1.0436 39.27%, 1.046 42.31%, 1.0446 44.71%, 1.0406 47.47%, 1.0118 61.84%, 1.0027 69.53%, 0.9981 80.49%, 0.9991 99.94%)',

    // Bounce: 50%
    '--motion-spring-bouncier': 'linear(0, 0.0023, 0.0088, 0.0194 1.59%, 0.035 2.17%, 0.078 3.33%, 0.1415 4.64%, 0.2054 5.75%, 0.2821 6.95%, 0.5912 11.45%, 0.7205 13.43%, 0.8393 15.45%, 0.936 17.39%, 0.9778, 1.015, 1.0477, 1.0759, 1.0998 22.22%, 1.1203, 1.1364, 1.1484 25.26%, 1.1586 26.61%, 1.1629 28.06%, 1.1613 29.56%, 1.1537 31.2%, 1.1434 32.6%, 1.1288 34.19%, 1.0508 41.29%, 1.0174 44.87%, 1.0025 46.89%, 0.9911 48.87%, 0.9826 50.9%, 0.9769 53.03%, 0.9735 56.02%, 0.9748 59.45%, 0.9964 72.64%, 1.0031 79.69%, 1.0042 86.83%, 1.0008 99.97%)',

    // Bounce: 80%
    '--motion-spring-bounciest': 'linear(0, 0.0032, 0.0131, 0.0294, 0.0524, 0.0824, 0.1192 1.54%, 0.2134 2.11%, 0.3102 2.59%, 0.4297 3.13%, 0.8732 4.95%, 1.0373, 1.1827 6.36%, 1.2972 7.01%, 1.3444, 1.3859, 1.4215, 1.4504, 1.4735, 1.4908, 1.5024, 1.5084 9.5%, 1.5091, 1.5061, 1.4993, 1.4886, 1.4745, 1.4565 11.11%, 1.4082 11.7%, 1.3585 12.2%, 1.295 12.77%, 1.0623 14.64%, 0.9773, 0.9031 16.08%, 0.8449 16.73%, 0.8014, 0.7701 17.95%, 0.7587, 0.7501, 0.7443, 0.7412 19.16%, 0.7421 19.68%, 0.7508 20.21%, 0.7672 20.77%, 0.7917 21.37%, 0.8169 21.87%, 0.8492 22.43%, 0.9681 24.32%, 1.0114, 1.0492 25.75%, 1.0789 26.41%, 1.1008, 1.1167, 1.1271, 1.1317 28.81%, 1.1314, 1.1271 29.87%, 1.1189 30.43%, 1.1063 31.03%, 1.0769 32.11%, 0.9941 34.72%, 0.9748 35.43%, 0.9597 36.09%, 0.9487, 0.9407, 0.9355, 0.933 38.46%, 0.9344 39.38%, 0.9421 40.38%, 0.9566 41.5%, 0.9989 44.12%, 1.0161 45.37%, 1.029 46.75%, 1.0341 48.1%, 1.0335 49.04%, 1.0295 50.05%, 1.0221 51.18%, 0.992 55.02%, 0.9854 56.38%, 0.9827 57.72%, 0.985 59.73%, 1.004 64.67%, 1.0088 67.34%, 1.0076 69.42%, 0.9981 74.28%, 0.9956 76.85%, 0.9961 79.06%, 1.0023 86.46%, 0.999 95.22%, 0.9994 100%)',

    // They put these in @tailwind but I don't think it matters, them noting:
        // i didn't find a documented way to set these default variables
        // an issue and a discussion about this:
        // https://github.com/tailwindlabs/tailwindcss/issues/10514#issuecomment-1420879057
        // https://github.com/tailwindlabs/tailwindcss/discussions/8747
    '--motion-origin-scale-x': '100%',
    '--motion-origin-scale-y': '100%',
    '--motion-origin-translate-x': '0%',
    '--motion-origin-translate-y': '0%',
    '--motion-origin-rotate': '0deg',
    '--motion-origin-blur': '0px',
    '--motion-origin-grayscale': '0%',
    '--motion-origin-opacity': '100%',
    '--motion-origin-background-color': '',
    '--motion-origin-text-color': '',

    // exit animations end values
    '--motion-end-scale-x': '100%',
    '--motion-end-scale-y': '100%',
    '--motion-end-translate-x': '0%',
    '--motion-end-translate-y': '0%',
    '--motion-end-rotate': '0deg',
    '--motion-end-blur': '0px',
    '--motion-end-grayscale': '0%',
    '--motion-end-opacity': '100%',
    '--motion-end-background-color': '',
    '--motion-end-text-color': '',

    // loop animations values
    '--motion-loop-scale-x': '100%',
    '--motion-loop-scale-y': '100%',
    '--motion-loop-translate-x': '0%',
    '--motion-loop-translate-y': '0%',
    '--motion-loop-rotate': '0deg',
    '--motion-loop-blur': '0px',
    '--motion-loop-grayscale': '0%',
    '--motion-loop-opacity': '100%',
    '--motion-loop-background-color': '',
    '--motion-loop-text-color': '',

    // animation modifiers
    '--motion-duration': '750ms',
    '--motion-timing': 'var(--motion-default-timing)',
    '--motion-perceptual-duration-multiplier': '1',
    '--motion-delay': '0ms',
    '--motion-loop-count': 'infinite',

    //animation modifiers for each animation
    '--motion-scale-duration': 'var(--motion-duration)',
    '--motion-scale-timing': 'var(--motion-timing)',
    '--motion-scale-perceptual-duration-multiplier': 'var(--motion-perceptual-duration-multiplier)',
    '--motion-scale-delay': 'var(--motion-delay)',
    '--motion-scale-loop-count': 'var(--motion-loop-count)',

    '--motion-translate-duration': 'var(--motion-duration)',
    '--motion-translate-timing': 'var(--motion-timing)',
    '--motion-translate-perceptual-duration-multiplier': 'var(--motion-perceptual-duration-multiplier)',
    '--motion-translate-delay': 'var(--motion-delay)',
    '--motion-translate-loop-count': 'var(--motion-loop-count)',

    '--motion-rotate-duration': 'var(--motion-duration)',
    '--motion-rotate-timing': 'var(--motion-timing)',
    '--motion-rotate-perceptual-duration-multiplier': 'var(--motion-perceptual-duration-multiplier)',
    '--motion-rotate-delay': 'var(--motion-delay)',
    '--motion-rotate-loop-count': 'var(--motion-loop-count)',

    // filter groups blur and grayscale
    '--motion-filter-duration': 'var(--motion-duration)',
    '--motion-filter-timing': 'var(--motion-timing)',
    '--motion-filter-perceptual-duration-multiplier': 'var(--motion-perceptual-duration-multiplier)',
    '--motion-filter-delay': 'var(--motion-delay)',
    '--motion-filter-loop-count': 'var(--motion-loop-count)',

    '--motion-opacity-duration': 'var(--motion-duration)',
    '--motion-opacity-timing': 'var(--motion-timing)',
    '--motion-opacity-perceptual-duration-multiplier': 'var(--motion-perceptual-duration-multiplier)',
    '--motion-opacity-delay': 'var(--motion-delay)',
    '--motion-opacity-loop-count': 'var(--motion-loop-count)',

    '--motion-background-color-duration': 'var(--motion-duration)',
    '--motion-background-color-timing': 'var(--motion-timing)',
    '--motion-background-color-perceptual-duration-multiplier': 'var(--motion-perceptual-duration-multiplier)',
    '--motion-background-color-delay': 'var(--motion-delay)',
    '--motion-background-color-loop-count': 'var(--motion-loop-count)',

    '--motion-text-color-duration': 'var(--motion-duration)',
    '--motion-text-color-timing': 'var(--motion-timing)',
    '--motion-text-color-perceptual-duration-multiplier': 'var(--motion-perceptual-duration-multiplier)',
    '--motion-text-color-delay': 'var(--motion-delay)',
    '--motion-text-color-loop-count': 'var(--motion-loop-count)',

    // default animations to none
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

    '--motion-scale-loop-animation': 'none',
    '--motion-translate-loop-animation': 'none',
    '--motion-rotate-loop-animation': 'none',
    '--motion-filter-loop-animation': 'none',
    '--motion-opacity-loop-animation': 'none',
    '--motion-background-color-loop-animation': 'none',
    '--motion-text-color-loop-animation': 'none',

    // all animations
    '--motion-all-enter-animations': 'var(--motion-scale-in-animation), var(--motion-translate-in-animation), var(--motion-rotate-in-animation), var(--motion-filter-in-animation), var(--motion-opacity-in-animation), var(--motion-background-color-in-animation), var(--motion-text-color-in-animation)',
    '--motion-all-exit-animations': 'var(--motion-scale-out-animation), var(--motion-translate-out-animation), var(--motion-rotate-out-animation), var(--motion-filter-out-animation), var(--motion-opacity-out-animation), var(--motion-background-color-out-animation), var(--motion-text-color-out-animation)',
    '--motion-all-loop-animations': 'var(--motion-scale-loop-animation), var(--motion-translate-loop-animation), var(--motion-rotate-loop-animation), var(--motion-filter-loop-animation), var(--motion-opacity-loop-animation), var(--motion-background-color-loop-animation), var(--motion-text-color-loop-animation)',
    '--motion-all-loop-and-enter-animations': 'var(--motion-all-loop-animations), var(--motion-all-enter-animations)',
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




/*
//////////////////////////////////////////////////
// FROM keyframes.js
//////////////////////////////////////////////////
*/
// Make these JS so we can assign multiple spots easily...
// Remember when merging that background-color vs backgroundColor
let keyframes = {
    'motion-scale-in': '{ 0% {scale: var(--motion-origin-scale-x) var(--motion-origin-scale-y);} 100% {scale: 1 1;} }',
    'motion-scale-out': '{ 0% {scale: 1 1;} 100% {scale: var(--motion-end-scale-x) var(--motion-end-scale-y);} }',
    'motion-scale-loop-mirror': '{ 0%, 100% {scale: 1 1;} 50% {scale: var(--motion-loop-scale-x) var(--motion-loop-scale-y);} }',
    'motion-scale-loop-reset': '{ 0% {scale: 1 1;} 100% {scale: var(--motion-loop-scale-x) var(--motion-loop-scale-y);} }',

    'motion-translate-in': '{ 0% {translate: var(--motion-origin-translate-x) var(--motion-origin-translate-y);} 100% {translate: 0 0;} }',
    'motion-translate-out': '{ 0% {translate: 0 0;} 100% {translate: var(--motion-end-translate-x) var(--motion-end-translate-y);} }',
    'motion-translate-loop-mirror': '{ 0%, 100% {translate: 0 0;} 50% {translate: var(--motion-loop-translate-x) var(--motion-loop-translate-y);} }',
    'motion-translate-loop-reset': '{ 0% {translate: 0 0;} 100% {translate: var(--motion-loop-translate-x) var(--motion-loop-translate-y);} }',

    'motion-rotate-in': '{ 0% {rotate: var(--motion-origin-rotate);} 100% {rotate: 0;} }',
    'motion-rotate-out': '{ 0% {rotate: 0;} 100% {rotate: var(--motion-end-rotate);} }',
    'motion-rotate-loop-mirror': '{ 0%, 100% {rotate: 0deg;} 50% {rotate: var(--motion-loop-rotate);} }',
    'motion-rotate-loop-reset': '{ 0% {} 100% {rotate: var(--motion-loop-rotate);} }',

    'motion-filter-in': '{ 0% {filter: blur(var(--motion-origin-blur)) grayscale(var(--motion-origin-grayscale));} 100% {filter: blur(0) grayscale(0);} }',
    'motion-filter-out': '{ 0% {filter: blur(0) grayscale(0);} 100% {filter: blur(var(--motion-end-blur)) grayscale(var(--motion-end-grayscale));} }',
    'motion-filter-loop-mirror': '{ 0%, 100% {filter: blur(0) grayscale(0);} 50% {filter: blur(var(--motion-loop-blur)) grayscale(var(--motion-loop-grayscale));} }',
    'motion-filter-loop-reset': '{ 0% {filter: blur(0) grayscale(0);} 100% {filter: blur(var(--motion-loop-blur)) grayscale(var(--motion-loop-grayscale));} }',

    'motion-opacity-in': '{ 0% {opacity: var(--motion-origin-opacity);} }',
    'motion-opacity-out': '{ 100% {opacity: var(--motion-end-opacity);} }',
    'motion-opacity-loop-mirror': '{ 0%, 100% {} 50% {opacity: var(--motion-loop-opacity);} }',
    'motion-opacity-loop-reset': '{ 0% {} 100% {opacity: var(--motion-loop-opacity);} }',

    'motion-background-color-in': '{ 0% {background-color: var(--motion-origin-background-color);} }',
    'motion-background-color-out': '{ 100% {background-color: var(--motion-end-background-color);} }',
    'motion-background-color-loop-mirror': '{ 0%, 100% {} 50% {background-color: var(--motion-loop-background-color);} }',
    'motion-background-color-loop-reset': '{ 0% {} 100% {background-color: var(--motion-loop-background-color);} }',

    'motion-text-color-in': '{ 0% {color: var(--motion-origin-text-color);} }',
    'motion-text-color-out': '{ 100% {color: var(--motion-end-text-color);} }',
    'motion-text-color-loop-mirror': '{ 0%, 100% {} 50% {color: var(--motion-loop-text-color);} }',
    'motion-text-color-loop-reset': '{ 0% {} 100% {color: var(--motion-loop-text-color);} }',
}




/*
//////////////////////////////////////////////////
// FROM baseAnimations.js
//////////////////////////////////////////////////
*/
// These are the reusable animation strings to actually create the animations...
// animation strings
export const scaleInAnimation = 'motion-scale-in calc(var(--motion-scale-duration) * var(--motion-scale-perceptual-duration-multiplier)) var(--motion-scale-timing) var(--motion-scale-delay) both';
export const scaleOutAnimation = 'motion-scale-out calc(var(--motion-scale-duration) * var(--motion-scale-perceptual-duration-multiplier)) var(--motion-scale-timing) var(--motion-scale-delay) both';
export const scaleLoopAnimation = (type) => 'motion-scale-loop-' + type + ' calc(var(--motion-scale-duration) * var(--motion-scale-perceptual-duration-multiplier)) var(--motion-scale-timing) var(--motion-scale-delay) both var(--motion-scale-loop-count)';

export const translateInAnimation = 'motion-translate-in calc(var(--motion-translate-duration) * var(--motion-translate-perceptual-duration-multiplier)) var(--motion-translate-timing) var(--motion-translate-delay) both';
export const translateOutAnimation = 'motion-translate-out calc(var(--motion-translate-duration) * var(--motion-translate-perceptual-duration-multiplier)) var(--motion-translate-timing) var(--motion-translate-delay) both';
export const translateLoopAnimation = (type) => 'motion-translate-loop-' + type + ' calc(var(--motion-translate-duration) * var(--motion-translate-perceptual-duration-multiplier)) var(--motion-translate-timing) var(--motion-translate-delay) both var(--motion-translate-loop-count)';

export const rotateInAnimation = 'motion-rotate-in calc(var(--motion-rotate-duration) * var(--motion-rotate-perceptual-duration-multiplier)) var(--motion-rotate-timing) var(--motion-rotate-delay) both';
export const rotateOutAnimation = 'motion-rotate-out calc(var(--motion-rotate-duration) * var(--motion-rotate-perceptual-duration-multiplier)) var(--motion-rotate-timing) var(--motion-rotate-delay) both';
export const rotateLoopAnimation = (type) => 'motion-rotate-loop-' + type + ' calc(var(--motion-rotate-duration) * var(--motion-rotate-perceptual-duration-multiplier)) var(--motion-rotate-timing) var(--motion-rotate-delay) both var(--motion-rotate-loop-count)';

export const filterInAnimation = 'motion-filter-in calc(var(--motion-filter-duration) * var(--motion-filter-perceptual-duration-multiplier)) var(--motion-filter-timing) var(--motion-filter-delay) both';
export const filterOutAnimation = 'motion-filter-out calc(var(--motion-filter-duration) * var(--motion-filter-perceptual-duration-multiplier)) var(--motion-filter-timing) var(--motion-filter-delay) both';
export const filterLoopAnimation = (type) => 'motion-filter-loop-' + type + ' calc(var(--motion-filter-duration) * var(--motion-filter-perceptual-duration-multiplier)) var(--motion-filter-timing) var(--motion-filter-delay) both var(--motion-filter-loop-count)';

export const opacityInAnimation = 'motion-opacity-in calc(var(--motion-opacity-duration) * var(--motion-opacity-perceptual-duration-multiplier)) var(--motion-opacity-timing) var(--motion-opacity-delay) both';
export const opacityOutAnimation = 'motion-opacity-out calc(var(--motion-opacity-duration) * var(--motion-opacity-perceptual-duration-multiplier)) var(--motion-opacity-timing) var(--motion-opacity-delay) both';
export const opacityLoopAnimation = (type) => 'motion-opacity-loop-' + type + ' calc(var(--motion-opacity-duration) * var(--motion-opacity-perceptual-duration-multiplier)) var(--motion-opacity-timing) var(--motion-opacity-delay) both var(--motion-opacity-loop-count)';

export const backgroundColorInAnimation = 'motion-background-color-in calc(var(--motion-background-color-duration) * var(--motion-background-color-perceptual-duration-multiplier)) var(--motion-background-color-timing) var(--motion-background-color-delay) both';
export const backgroundColorOutAnimation = 'motion-background-color-out calc(var(--motion-background-color-duration) * var(--motion-background-color-perceptual-duration-multiplier)) var(--motion-background-color-timing) var(--motion-background-color-delay) both';
export const backgroundColorLoopAnimation = (type) => 'motion-background-color-loop-' + type + ' calc(var(--motion-background-color-duration) * var(--motion-background-color-perceptual-duration-multiplier)) var(--motion-background-color-timing) var(--motion-background-color-delay) both var(--motion-background-color-loop-count)';

export const textColorInAnimation = 'motion-text-color-in calc(var(--motion-text-color-duration) * var(--motion-text-color-perceptual-duration-multiplier)) var(--motion-text-color-timing) var(--motion-text-color-delay) both';
export const textColorOutAnimation = 'motion-text-color-out calc(var(--motion-text-color-duration) * var(--motion-text-color-perceptual-duration-multiplier)) var(--motion-text-color-timing) var(--motion-text-color-delay) both';
export const textColorLoopAnimation = (type) => 'motion-text-color-loop-' + type + ' calc(var(--motion-text-color-duration) * var(--motion-text-color-perceptual-duration-multiplier)) var(--motion-text-color-timing) var(--motion-text-color-delay) both var(--motion-text-color-loop-count)';

// In baseAnimations, but Tailwind Util taken from tailwindcss/lib/util/flattenColorPalette, just turns into big object
const flattenColorPalette = (colors) => Object.assign({}, ...Object.entries(colors ?? {}).flatMap(([color, values]) =>
    typeof values == "object"
        ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
            [color + (number === "DEFAULT" ? "" : `-${number}`)]: hex
        }))
        : [{ [`${color}`]: values }]
));




/*
//////////////////////////////////////////////////
// FROM modifiers.js
//////////////////////////////////////////////////
*/
// used for this stuff: motion-duration: motion-delay... modifiers
const springPerceptualMultipliers = {
    'var(--motion-spring-smooth)': '1.66',
    'var(--motion-spring-snappy)': '1.66',
    'var(--motion-spring-bouncy)': '1.66',
    'var(--motion-spring-bouncier)': '2.035',
    'var(--motion-spring-bounciest)': '5.285',
    'var(--motion-bounce)': '2',
};

// Resolve a preset size token to a value. Accepts named tiers (xs/sm/md/lg)
// from the map, or arbitrary bracket syntax like `[10px]` / `[2rem]` / `[15%]`.
// Falls back to the map's `md` if the token is unknown.
const pickSize = (size, map) =>
    size && size.startsWith('[') ? size.slice(1, -1) : (map[size] || map.md);

const resolveTimeValue = (value, theme, defaultValue = theme.animationDuration.DEFAULT) => {
    if (value === 'DEFAULT') return defaultValue
    if (value.startsWith('[')) return value.slice(1, -1)
    if (theme.animationDuration[value]) return theme.animationDuration[value]
    if (/^-?(?:\d+|\d*\.\d+)(?:ms|s)$/.test(value)) return value
    return `${value}ms`
}

const negateCSSValue = (value) => value.startsWith('-') ? value.slice(1) : `calc(${value} * -1)`
const subtractCSSValue = (left, right) => String(right).startsWith('-')
    ? `calc(${left} + ${String(right).slice(1)})`
    : `calc(${left} - ${right})`
const normalizeScaleValue = (value) => {
    const text = String(value).trim()
    const percent = text.match(/^(-?(?:\d+|\d*\.\d+))%$/)
    return percent ? String(Number(percent[1]) / 100) : text
}

// Marker used by preset-mini's `variantNegative` to skip auto-negation. We
// already negate the relevant value in the rule body; without this marker,
// variantNegative also wraps every value in `calc(... * -1)`, which double-
// negates numbers and mangles `animation: var(...)` into invalid CSS.
// Adding this entry to a rule's return tells variantNegative to leave the
// body alone. The null value means it isn't emitted as CSS by entriesToCss.
const NO_NEG = '$$mini-no-negative'

const isNegativeMotionSelector = (rawSelector) =>
    /(?:^|:)-motion-(?:translate|rotate)-/.test(rawSelector)

// For rules that emit multi-selector raw CSS strings (wait/still/motion-paused/
// motion-running), UnoCSS can't auto-apply variants. This helper defers to
// UnoCSS's own applyVariants() to resolve the final selector + parent, then
// builds the multi-selector body around that selector.
const withVariants = (ctx, build) => {
    const result = ctx.generator.applyVariants(
        [0, ctx.rawSelector, [], undefined, ctx.variantHandlers ?? []],
        ctx.variantHandlers ?? [],
        ctx.rawSelector
    )
    const utilities = Array.isArray(result) ? result : [result]

    return utilities.map(({ selector, parent }) => {
        let css = build(selector)
        if (parent) css = `${parent}{${css}}`
        return css
    }).join('')
}

// =============================================================================
// step-N:  variant — sequential animation steps via per-step CSS vars.
// =============================================================================
// Tracks the highest N seen across all matched tokens during a build. The
// preflight reads this to emit step-1..N cumulative timing chains. Module-level
// is fine: each fresh build gets a fresh module load (Bun CLI), and reused
// generators just accumulate (extra unused vars are harmless).
let _motionStepMax = 0
let _motionScopeRules = new Set()
let _motionStepPathCandidates = new Map()
let _motionStepAnimationCandidates = new Map()
let _motionStepOpacityOutCandidates = new Map()
let _motionStepFilterOutCandidates = new Map()

const motionScopeSelector = '.motion-group'

const stepFamilies = [
    'scale',
    'translate',
    'rotate',
    'filter',
    'opacity',
    'background-color',
    'text-color',
]
const stepFamilyPattern = stepFamilies.join('|')
const stepAnimationVarRe = new RegExp(`^--motion-(${stepFamilyPattern})-(in|out|loop)-animation$`)
const stepFamilyModifierRe = new RegExp(`^--motion-(${stepFamilyPattern})-(duration|timing|perceptual-duration-multiplier|delay|loop-count)$`)
const stepGenericProps = new Set([
    '--motion-duration',
    '--motion-timing',
    '--motion-perceptual-duration-multiplier',
    '--motion-delay',
    '--motion-loop-count',
])
const stepTimelineProps = new Map([
    ['--motion-step-offset', 'offset'],
])
const stepValueVarRe = /^--motion-(origin|end|loop)-(.+)$/
const stepPathFamilies = new Set(['scale', 'translate', 'rotate'])

const stepVar = (N, name) => `--motion-step-${N}-${name}`

const scopedStepMatcher = (N, matcher) => e(`step-${N}:${matcher}`)

const addMotionScopeRule = (N, matcher, prop, val) => {
    if (!String(prop).startsWith(`--motion-step-${N}-`)) return
    const selector = scopedStepMatcher(N, matcher)
    _motionScopeRules.add(`${motionScopeSelector}:has(${selector}) { ${prop}: ${val}; }`)
}

const addMotionStepPathCandidate = (N, matcher, family, options = {}) => {
    if (!stepPathFamilies.has(family)) return
    const selector = scopedStepMatcher(N, matcher)
    const key = `${N}|${matcher}|${family}`
    _motionStepPathCandidates.set(key, { N, selector, family, ...options })
}

const addMotionStepAnimationCandidate = (N, matcher, options = {}) => {
    const selector = scopedStepMatcher(N, matcher)
    const key = `${N}|${matcher}|animation`
    _motionStepAnimationCandidates.set(key, { N, selector, ...options })
}

const addMotionStepOpacityOutCandidate = (N, matcher) => {
    const selector = scopedStepMatcher(N, matcher)
    const key = `${N}|${matcher}|opacity-out`
    _motionStepOpacityOutCandidates.set(key, { N, selector })
}

const addMotionStepFilterOutCandidate = (N, matcher) => {
    const selector = scopedStepMatcher(N, matcher)
    const key = `${N}|${matcher}|filter-out`
    _motionStepFilterOutCandidates.set(key, { N, selector })
}

const addStepPathVars = (lines, N, family) => {
    if (family === 'scale') {
        lines.push(`    --motion-step-${N}-scale-from-x: var(--motion-step-${N}-scale-chain-from-x);`)
        lines.push(`    --motion-step-${N}-scale-from-y: var(--motion-step-${N}-scale-chain-from-y);`)
        lines.push(`    --motion-step-${N}-scale-to-x: var(--motion-step-${N}-scale-chain-to-x);`)
        lines.push(`    --motion-step-${N}-scale-to-y: var(--motion-step-${N}-scale-chain-to-y);`)
    } else if (family === 'translate') {
        lines.push(`    --motion-step-${N}-translate-from-x: var(--motion-step-${N}-translate-chain-from-x);`)
        lines.push(`    --motion-step-${N}-translate-from-y: var(--motion-step-${N}-translate-chain-from-y);`)
        lines.push(`    --motion-step-${N}-translate-to-x: var(--motion-step-${N}-translate-chain-to-x);`)
        lines.push(`    --motion-step-${N}-translate-to-y: var(--motion-step-${N}-translate-chain-to-y);`)
    } else if (family === 'rotate') {
        lines.push(`    --motion-step-${N}-rotate-from: var(--motion-step-${N}-rotate-chain-from);`)
        lines.push(`    --motion-step-${N}-rotate-to: var(--motion-step-${N}-rotate-chain-to);`)
    }
}

const addStepNeutralProperty = (lines, family) => {
    if (family === 'scale') {
        lines.push('    scale: 1 1;')
    } else if (family === 'translate') {
        lines.push('    translate: 0 0;')
    } else if (family === 'rotate') {
        lines.push('    rotate: 0deg;')
    }
}

const buildStepPathRules = () => {
    const rules = []
    const candidates = Array.from(_motionStepPathCandidates.values())
    const animationCandidates = Array.from(_motionStepAnimationCandidates.values())

    for (const candidate of candidates) {
        const { N, selector, family } = candidate
        const otherStepSelectors = candidates
            .filter((other) => other.family === family && other.N !== N)
            .map((other) => `${selector}${other.selector}`)
        if (otherStepSelectors.length) {
            const lines = [`${otherStepSelectors.join(', ')} {`]
            addStepPathVars(lines, N, family)
            lines.push('}')
            rules.push(lines.join('\n'))
        }

        const earlierMotionSelectors = animationCandidates
            .filter((other) => other.N < N)
            .map((other) => `${selector}${other.selector}`)
        if (!earlierMotionSelectors.length) continue

        const stateLines = []
        addStepPathVars(stateLines, N, family)
        addStepNeutralProperty(stateLines, family)
        rules.push(`${earlierMotionSelectors.join(', ')} {\n${stateLines.join('\n')}\n}`)
    }

    return rules
}

const buildStepEntranceSuppressionRules = () => {
    const rules = []
    const candidates = Array.from(_motionStepAnimationCandidates.values())
    const opacityOutCandidates = Array.from(_motionStepOpacityOutCandidates.values())
    const filterOutCandidates = Array.from(_motionStepFilterOutCandidates.values())

    const selectorsSinceLastOut = (candidate, outCandidates, isUsableEarlier) =>
        candidates
            .filter((other) => other.N < candidate.N && isUsableEarlier(other))
            .map((other) => {
                const outGuards = outCandidates
                    .filter((out) => out.N > other.N && out.N < candidate.N)
                    .map((out) => `:not(${out.selector})`)
                    .join('')
                return `${candidate.selector}${other.selector}${outGuards}`
            })

    for (const candidate of candidates) {
        if (candidate.hasOpacityInAnimation) {
            const selectors = selectorsSinceLastOut(
                candidate,
                opacityOutCandidates,
                (other) => !other.hasOpacityOutAnimation
            )
            if (selectors.length) {
                rules.push(`${Array.from(new Set(selectors)).join(', ')} {\n    --motion-step-${candidate.N}-opacity-in-animation: none;\n    opacity: 1;\n}`)
            }
        }
        if (candidate.hasFilterInAnimation) {
            const selectors = selectorsSinceLastOut(
                candidate,
                filterOutCandidates,
                (other) => !other.hasFilterOutAnimation
            )
            if (selectors.length) {
                rules.push(`${Array.from(new Set(selectors)).join(', ')} {\n    --motion-step-${candidate.N}-filter-in-animation: none;\n    filter: blur(0) grayscale(0);\n}`)
            }
        }
    }

    return rules
}
const stepAnimationValue = (value, N, family) =>
    String(value)
        .replaceAll('motion-', `motion-step-${N}-`)
        .replaceAll(
            `var(--motion-step-${N}-${family}-duration)`,
            `var(--motion-step-${N}-${family}-duration, var(--motion-step-${N}-duration, var(--motion-step-duration-default)))`
        )
        .replaceAll(
            `var(--motion-step-${N}-${family}-timing)`,
            `var(--motion-step-${N}-${family}-timing, var(--motion-step-${N}-timing, var(--motion-timing)))`
        )
        .replaceAll(
            `var(--motion-step-${N}-${family}-perceptual-duration-multiplier)`,
            `var(--motion-step-${N}-${family}-perceptual-duration-multiplier, var(--motion-step-${N}-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier)))`
        )
        .replaceAll(
            `var(--motion-step-${N}-${family}-delay)`,
            `calc(var(--motion-step-${N}-resolved-delay) + var(--motion-step-${N}-${family}-delay, 0ms))`
        )
        .replaceAll(
            `var(--motion-step-${N}-${family}-loop-count)`,
            `var(--motion-step-${N}-${family}-loop-count, var(--motion-step-${N}-loop-count, var(--motion-loop-count)))`
        )
        .replace(/\bboth\b/, `var(--motion-step-${N}-fill-mode)`)

const stepInitialEntries = (N, family) => {
    switch (family) {
        case 'scale':
            return [['scale', `var(--motion-step-${N}-scale-from-x, 1) var(--motion-step-${N}-scale-from-y, 1)`]]
        case 'translate':
            return [['translate', `var(--motion-step-${N}-translate-from-x, var(--motion-origin-translate-x)) var(--motion-step-${N}-translate-from-y, var(--motion-origin-translate-y))`]]
        case 'rotate':
            return [['rotate', `var(--motion-step-${N}-rotate-from, var(--motion-origin-rotate))`]]
        case 'filter':
            return [['filter', `blur(var(--motion-step-${N}-origin-blur, var(--motion-origin-blur))) grayscale(var(--motion-step-${N}-origin-grayscale, var(--motion-origin-grayscale)))`]]
        case 'opacity':
            return [['opacity', `var(--motion-step-${N}-origin-opacity, var(--motion-origin-opacity))`]]
        case 'background-color':
            return []
        case 'text-color':
            return []
        default:
            return []
    }
}

const stepKeyframeCSS = (N) =>
    Object.entries(keyframes)
        .map(([name, content]) => {
            const stepName = name.replace(/^motion-/, `motion-step-${N}-`)
            let sourceContent = content
            if (name === 'motion-scale-in' || name === 'motion-scale-out') {
                sourceContent = `{ 0% {scale: var(--motion-step-${N}-scale-from-x, 1) var(--motion-step-${N}-scale-from-y, 1);} 100% {scale: var(--motion-step-${N}-scale-to-x, 1) var(--motion-step-${N}-scale-to-y, 1);} }`
            } else if (name === 'motion-scale-loop-mirror') {
                sourceContent = `{ 0%, 100% {scale: var(--motion-step-${N}-scale-chain-from-x) var(--motion-step-${N}-scale-chain-from-y);} 50% {scale: calc(var(--motion-step-${N}-scale-chain-from-x) * var(--motion-step-${N}-loop-scale-x, 1)) calc(var(--motion-step-${N}-scale-chain-from-y) * var(--motion-step-${N}-loop-scale-y, 1));} }`
            } else if (name === 'motion-scale-loop-reset') {
                sourceContent = `{ 0% {scale: var(--motion-step-${N}-scale-chain-from-x) var(--motion-step-${N}-scale-chain-from-y);} 100% {scale: calc(var(--motion-step-${N}-scale-chain-from-x) * var(--motion-step-${N}-loop-scale-x, 1)) calc(var(--motion-step-${N}-scale-chain-from-y) * var(--motion-step-${N}-loop-scale-y, 1));} }`
            } else if (name === 'motion-translate-in' || name === 'motion-translate-out') {
                sourceContent = `{ 0% {translate: var(--motion-step-${N}-translate-from-x, 0%) var(--motion-step-${N}-translate-from-y, 0%);} 100% {translate: var(--motion-step-${N}-translate-to-x, 0%) var(--motion-step-${N}-translate-to-y, 0%);} }`
            } else if (name === 'motion-translate-loop-mirror') {
                sourceContent = `{ 0%, 100% {translate: var(--motion-step-${N}-translate-chain-from-x) var(--motion-step-${N}-translate-chain-from-y);} 50% {translate: calc(var(--motion-step-${N}-translate-chain-from-x) + var(--motion-step-${N}-loop-translate-x, 0%)) calc(var(--motion-step-${N}-translate-chain-from-y) + var(--motion-step-${N}-loop-translate-y, 0%));} }`
            } else if (name === 'motion-translate-loop-reset') {
                sourceContent = `{ 0% {translate: var(--motion-step-${N}-translate-chain-from-x) var(--motion-step-${N}-translate-chain-from-y);} 100% {translate: calc(var(--motion-step-${N}-translate-chain-from-x) + var(--motion-step-${N}-loop-translate-x, 0%)) calc(var(--motion-step-${N}-translate-chain-from-y) + var(--motion-step-${N}-loop-translate-y, 0%));} }`
            } else if (name === 'motion-rotate-in' || name === 'motion-rotate-out') {
                sourceContent = `{ 0% {rotate: var(--motion-step-${N}-rotate-from, 0deg);} 100% {rotate: var(--motion-step-${N}-rotate-to, 0deg);} }`
            } else if (name === 'motion-rotate-loop-mirror') {
                sourceContent = `{ 0%, 100% {rotate: var(--motion-step-${N}-rotate-chain-from);} 50% {rotate: calc(var(--motion-step-${N}-rotate-chain-from) + var(--motion-step-${N}-loop-rotate, 0deg));} }`
            } else if (name === 'motion-rotate-loop-reset') {
                sourceContent = `{ 0% {rotate: var(--motion-step-${N}-rotate-chain-from);} 100% {rotate: calc(var(--motion-step-${N}-rotate-chain-from) + var(--motion-step-${N}-loop-rotate, 0deg));} }`
            } else if (name === 'motion-opacity-in') {
                sourceContent = '{ 0% {opacity: var(--motion-origin-opacity);} 100% {opacity: 1;} }'
            }
            const stepContent = sourceContent
                .replace(
                    /var\(--motion-(origin|end|loop)-([^)]+)\)/g,
                    `var(--motion-step-${N}-$1-$2, var(--motion-$1-$2))`
                )
            return '@keyframes ' + stepName + ' ' + stepContent
        })
        .join('\n')

// Transform a rule's CSS entries when wrapped in `step-N:`:
//   1. Namespaces value vars: --motion-origin-translate-y -> --motion-step-N-origin-translate-y
//   2. Namespaces timing vars: --motion-duration -> --motion-step-N-duration
//   3. Namespaces family vars: --motion-translate-duration -> --motion-step-N-translate-duration
//   4. Rewrites animation vars to use step-specific keyframes and resolved delays.
// This lets repeated families on one element run in separate timeline slots.
const transformStepBody = (entries, N, matcher) => {
    const out = []
    const ruleHasAnimation = entries.some(([prop]) =>
        prop === 'animation' || stepAnimationVarRe.test(String(prop))
    )
    let hasAnimation = false
    let hasOpacityInAnimation = false
    let hasOpacityOutAnimation = false
    let hasFilterInAnimation = false
    let hasFilterOutAnimation = false
    const pathFamilies = new Set()
    const inFamilies = new Set()

    for (const [prop, val] of entries) {
        if (prop === NO_NEG) {
            out.push([prop, val])
            continue
        }

        if (prop === 'animation') {
            hasAnimation = true
            continue
        }

        if (prop === 'animation-composition') {
            continue
        }

        if (stepGenericProps.has(prop)) {
            if (ruleHasAnimation && prop === '--motion-duration' && String(val) === '500ms') {
                continue
            }
            const stepProp = stepVar(N, prop.slice('--motion-'.length))
            out.push([stepProp, val])
            addMotionScopeRule(N, matcher, stepProp, val)
            continue
        }

        if (stepTimelineProps.has(prop)) {
            const stepProp = stepVar(N, stepTimelineProps.get(prop))
            out.push([stepProp, val])
            addMotionScopeRule(N, matcher, stepProp, val)
            continue
        }

        const modifier = String(prop).match(stepFamilyModifierRe)
        if (modifier) {
            const stepProp = stepVar(N, `${modifier[1]}-${modifier[2]}`)
            out.push([stepProp, val])
            addMotionScopeRule(N, matcher, stepProp, val)
            continue
        }

        const animation = String(prop).match(stepAnimationVarRe)
        if (animation) {
            hasAnimation = true
            if (stepPathFamilies.has(animation[1])) {
                pathFamilies.add(animation[1])
            }
            if (animation[1] === 'opacity' && animation[2] === 'in') {
                hasOpacityInAnimation = true
            }
            if (animation[1] === 'opacity' && animation[2] === 'out') {
                hasOpacityOutAnimation = true
                addMotionStepOpacityOutCandidate(N, matcher)
            }
            if (animation[1] === 'filter' && animation[2] === 'in') {
                hasFilterInAnimation = true
            }
            if (animation[1] === 'filter' && animation[2] === 'out') {
                hasFilterOutAnimation = true
                addMotionStepFilterOutCandidate(N, matcher)
            }
            if (animation[2] === 'in') inFamilies.add(animation[1])
            out.push([
                stepVar(N, `${animation[1]}-${animation[2]}-animation`),
                stepAnimationValue(val, N, animation[1]),
            ])
            continue
        }

        const valueVar = String(prop).match(stepValueVarRe)
        if (valueVar) {
            const phase = valueVar[1]
            const valueName = valueVar[2]
            const scaleMatch = valueName.match(/^scale-(x|y)$/)
            if (scaleMatch && (phase === 'origin' || phase === 'end')) {
                const axis = scaleMatch[1]
                const scale = normalizeScaleValue(val)
                const isOrigin = phase === 'origin'
                out.push([stepVar(N, `scale-from-${axis}`), isOrigin ? scale : '1'])
                out.push([stepVar(N, `scale-to-${axis}`), isOrigin ? '1' : scale])
                out.push([stepVar(N, `scale-${axis}-delta`), isOrigin ? subtractCSSValue('1', scale) : subtractCSSValue(scale, '1')])
                continue
            }
            if (scaleMatch && phase === 'loop') {
                const axis = scaleMatch[1]
                out.push([stepVar(N, `loop-scale-${axis}`), normalizeScaleValue(val)])
                continue
            }

            const translateMatch = valueName.match(/^translate-(x|y)$/)
            if (translateMatch && (phase === 'origin' || phase === 'end')) {
                const axis = translateMatch[1]
                const isOrigin = phase === 'origin'
                out.push([stepVar(N, `translate-from-${axis}`), isOrigin ? val : '0%'])
                out.push([stepVar(N, `translate-to-${axis}`), isOrigin ? '0%' : val])
                out.push([stepVar(N, `translate-${axis}-delta`), isOrigin ? negateCSSValue(String(val)) : val])
                continue
            }

            if (valueName === 'rotate' && (phase === 'origin' || phase === 'end')) {
                const isOrigin = phase === 'origin'
                out.push([stepVar(N, 'rotate-from'), isOrigin ? val : '0deg'])
                out.push([stepVar(N, 'rotate-to'), isOrigin ? '0deg' : val])
                out.push([stepVar(N, 'rotate-delta'), isOrigin ? negateCSSValue(String(val)) : val])
                continue
            }

            out.push([stepVar(N, `${valueVar[1]}-${valueVar[2]}`), val])
            continue
        }

        out.push([prop, val])
    }

    for (const family of inFamilies) {
        out.push(...stepInitialEntries(N, family))
    }

    if (hasAnimation) {
        out.push([stepVar(N, 'active'), '1'])
        addMotionScopeRule(N, matcher, stepVar(N, 'active'), '1')
        out.push([
            'animation',
            'var(--motion-all-loop-and-enter-animations), var(--motion-all-exit-animations), var(--motion-all-step-animations)',
        ])
        addMotionStepAnimationCandidate(N, matcher, {
            hasOpacityInAnimation,
            hasOpacityOutAnimation,
            hasFilterInAnimation,
            hasFilterOutAnimation,
        })
    }

    for (const family of pathFamilies) {
        addMotionStepPathCandidate(N, matcher, family)
    }

    return out
}

// Build the preflight CSS for steps 1..max — cumulative timing chain.
const buildStepPreflight = (max) => {
    if (max < 1) return ''
    const rootLines = [':root {']
    rootLines.push('    --motion-step-duration-default: 500ms;')
    rootLines.push('    --motion-step-delay-default: 0ms;')
    rootLines.push('}')

    const lines = ['*, ::before, ::after {']
    lines.push('    --motion-all-step-animations: ' + Array.from({ length: max }, (_, i) => `var(--motion-step-${i + 1}-all-animations)`).join(', ') + ';')

    for (let i = 1; i <= max; i++) {
        lines.push(i === 1
            ? `    --motion-step-${i}-start: max(0ms, var(--motion-step-${i}-offset, 0ms));`
            : `    --motion-step-${i}-start: max(0ms, calc(var(--motion-step-${i - 1}-end) + var(--motion-step-${i}-offset, 0ms)));`
        )
        lines.push(`    --motion-step-${i}-fill-mode: ${i === 1 ? 'both' : 'forwards'};`)
        lines.push(`    --motion-step-${i}-resolved-delay: calc(var(--motion-step-${i}-start) + var(--motion-step-${i}-delay, var(--motion-step-delay-default)));`)
        lines.push(i === 1
            ? `    --motion-step-${i}-scale-chain-from-x: 1;`
            : `    --motion-step-${i}-scale-chain-from-x: var(--motion-step-${i - 1}-scale-chain-to-x);`
        )
        lines.push(i === 1
            ? `    --motion-step-${i}-scale-chain-from-y: 1;`
            : `    --motion-step-${i}-scale-chain-from-y: var(--motion-step-${i - 1}-scale-chain-to-y);`
        )
        lines.push(`    --motion-step-${i}-scale-chain-to-x: calc(var(--motion-step-${i}-scale-chain-from-x) + var(--motion-step-${i}-scale-x-delta, 0));`)
        lines.push(`    --motion-step-${i}-scale-chain-to-y: calc(var(--motion-step-${i}-scale-chain-from-y) + var(--motion-step-${i}-scale-y-delta, 0));`)
        lines.push(i === 1
            ? `    --motion-step-${i}-translate-chain-from-x: 0%;`
            : `    --motion-step-${i}-translate-chain-from-x: var(--motion-step-${i - 1}-translate-chain-to-x);`
        )
        lines.push(i === 1
            ? `    --motion-step-${i}-translate-chain-from-y: 0%;`
            : `    --motion-step-${i}-translate-chain-from-y: var(--motion-step-${i - 1}-translate-chain-to-y);`
        )
        lines.push(`    --motion-step-${i}-translate-chain-to-x: calc(var(--motion-step-${i}-translate-chain-from-x) + var(--motion-step-${i}-translate-x-delta, 0%));`)
        lines.push(`    --motion-step-${i}-translate-chain-to-y: calc(var(--motion-step-${i}-translate-chain-from-y) + var(--motion-step-${i}-translate-y-delta, 0%));`)
        lines.push(i === 1
            ? `    --motion-step-${i}-rotate-chain-from: 0deg;`
            : `    --motion-step-${i}-rotate-chain-from: var(--motion-step-${i - 1}-rotate-chain-to);`
        )
        lines.push(`    --motion-step-${i}-rotate-chain-to: calc(var(--motion-step-${i}-rotate-chain-from) + var(--motion-step-${i}-rotate-delta, 0deg));`)
        const active = `var(--motion-step-${i}-active, 0)`
        const activeDurationArgs = [
            `calc(${active} * var(--motion-step-${i}-duration, var(--motion-step-duration-default)))`,
            ...stepFamilies.map((family) => `calc(${active} * var(--motion-step-${i}-${family}-delay, 0ms) + ${active} * var(--motion-step-${i}-${family}-duration, var(--motion-step-${i}-duration, var(--motion-step-duration-default))) * var(--motion-step-${i}-${family}-perceptual-duration-multiplier, var(--motion-step-${i}-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier))))`),
        ]
        lines.push(`    --motion-step-${i}-active-duration: max(${activeDurationArgs.join(', ')});`)
        lines.push(`    --motion-step-${i}-end: calc(var(--motion-step-${i}-resolved-delay) + var(--motion-step-${i}-active-duration));`)
        lines.push(`    --motion-step-${i}-all-enter-animations: ${stepFamilies.map((family) => `var(--motion-step-${i}-${family}-in-animation, none)`).join(', ')};`)
        lines.push(`    --motion-step-${i}-all-exit-animations: ${stepFamilies.map((family) => `var(--motion-step-${i}-${family}-out-animation, none)`).join(', ')};`)
        lines.push(`    --motion-step-${i}-all-loop-animations: ${stepFamilies.map((family) => `var(--motion-step-${i}-${family}-loop-animation, none)`).join(', ')};`)
        lines.push(`    --motion-step-${i}-all-animations: var(--motion-step-${i}-all-loop-animations), var(--motion-step-${i}-all-enter-animations), var(--motion-step-${i}-all-exit-animations);`)
    }

    lines.push('}')

    const scopeLines = [`${motionScopeSelector} {`]
    for (let i = 1; i <= max; i++) {
        scopeLines.push(`    --motion-step-${i}-active: 0;`)
        scopeLines.push(`    --motion-step-${i}-delay: var(--motion-step-delay-default);`)
        scopeLines.push(`    --motion-step-${i}-duration: var(--motion-step-duration-default);`)
        scopeLines.push(`    --motion-step-${i}-timing: var(--motion-timing);`)
        scopeLines.push(`    --motion-step-${i}-perceptual-duration-multiplier: var(--motion-perceptual-duration-multiplier);`)
        scopeLines.push(`    --motion-step-${i}-loop-count: var(--motion-loop-count);`)
        scopeLines.push(`    --motion-step-${i}-offset: 0ms;`)
        for (const family of stepFamilies) {
            scopeLines.push(`    --motion-step-${i}-${family}-delay: 0ms;`)
            scopeLines.push(`    --motion-step-${i}-${family}-duration: var(--motion-step-${i}-duration);`)
            scopeLines.push(`    --motion-step-${i}-${family}-timing: var(--motion-step-${i}-timing);`)
            scopeLines.push(`    --motion-step-${i}-${family}-perceptual-duration-multiplier: var(--motion-step-${i}-perceptual-duration-multiplier);`)
            scopeLines.push(`    --motion-step-${i}-${family}-loop-count: var(--motion-step-${i}-loop-count);`)
        }
    }
    scopeLines.push('}')

    return rootLines
        .concat(lines)
        .concat(scopeLines)
        .concat(Array.from(_motionScopeRules).sort())
        .concat(buildStepPathRules().sort())
        .concat(buildStepEntranceSuppressionRules().sort())
        .join('\n')
}



export const presetTailwindMotion = () => ({
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
            0: '0.001', // Use 0.001 instead of 0 to avoid Lighthouse CLS false positives
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
            0: '0.001%', // Use 0.001% instead of 0% to avoid Lighthouse CLS false positives
            25: '25%',
            50: '50%',
            75: '75%',
            100: '100%',
            150: '150%',
            DEFAULT: '25%',
        },
        motionRotate: {
            0: '0.001deg', // Use 0.001deg instead of 0deg to avoid Lighthouse CLS false positives
            1: '1deg',
            2: '2deg',
            3: '3deg',
            6: '6deg',
            12: '12deg',
            45: '45deg',
            90: '90deg',
            180: '180deg',
            DEFAULT: '12deg',
        },
        motionBlur: {
            DEFAULT: '8px',
            0: '0.001px', // Use 0.001px instead of 0 to avoid Lighthouse CLS false positives
            sm: '4px',
            md: '8px',
            lg: '12px',
            xl: '16px',
            '2xl': '24px',
            '3xl': '32px',
        },
        motionGrayscale: {
            DEFAULT: '100%',
            0: '0.001%', // Use 0.001% instead of 0 to avoid Lighthouse CLS false positives
            25: '25%',
            50: '50%',
            75: '75%',
            100: '100%',
        },
        motionOpacity: {
            DEFAULT: '0.001', // probably they added this because of the lighthouse issues stuff
            0: '0.001',
            25: '0.25',
            50: '0.5',
            75: '0.75',
            100: '1',
        },
    },
    extendTheme: (theme) => ({
        ...theme,
        motionBackgroundColor: {
            DEFAULT: 'currentColor',
            ...flattenColorPalette(theme.colors),
        },
        motionTextColor: {
            DEFAULT: 'currentColor',
            ...flattenColorPalette(theme.colors),
        },
        animationDuration: {
            DEFAULT: '750ms',
            ...theme.duration,
            1500: "1500ms",
            2000: "2000ms",
        },
        animationTimingFunction: {
            DEFAULT: 'linear',
            ...theme.easing,

            'spring-smooth': 'var(--motion-spring-smooth)',
            'spring-snappy': 'var(--motion-spring-snappy)', 
            'spring-bouncy': 'var(--motion-spring-bouncy)',
            'spring-bouncier': 'var(--motion-spring-bouncier)',
            'spring-bounciest': 'var(--motion-spring-bounciest)',

            bounce: 'var(--motion-bounce)',

            'in-quad': 'cubic-bezier(.55, .085, .68, .53)',
            'in-cubic': 'cubic-bezier(.550, .055, .675, .19)',
            'in-quart': 'cubic-bezier(.895, .03, .685, .22)',
            'in-back': 'cubic-bezier(0.6,-0.28,0.74,0.05)',

            'out-quad': 'cubic-bezier(.25, .46, .45, .94)',
            'out-cubic': 'cubic-bezier(.215, .61, .355, 1)',
            'out-quart': 'cubic-bezier(.165, .84, .44, 1)',
            'out-back': 'cubic-bezier(0.18,0.89,0.32,1.27)',

            'in-out-quad': 'cubic-bezier(.455, .03, .515, .955)',
            'in-out-cubic': 'cubic-bezier(.645, .045, .355, 1)',
            'in-out-quart': 'cubic-bezier(.77, 0, .175, 1)',
            'in-out-back': 'cubic-bezier(0.68,-0.55,0.27,1.55)',
        },
        animationLoopCount: {
            DEFAULT: 'infinite',
            infinite: 'infinite',
            once: '1',
            twice: '2',
        },
    }),
    rules: [





        /*=================================
        *                                 *
        *        BASE ANIMATIONS          *
        *                                 *
        ==================================*/
        
        // SCALES...
        [/^motion-scale-in(-([^<>\s]+))?$/, ([, , size = 'DEFAULT'], { theme }) => {
            const scale = size === 'DEFAULT' ? theme.motionScale.DEFAULT :
                          size.startsWith('[') ? size.slice(1, -1) :
                          theme.motionScale[size] || size;
            return {
                '--motion-origin-scale-x': scale,
                '--motion-origin-scale-y': scale,
                '--motion-scale-in-animation': scaleInAnimation,
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-scale-in', 'motion-scale-in-<num>', 'motion-scale-in-(0|50|75|90|95|100|105|110|125|150)'] }],
        [/^motion-scale-x-in(-([^<>\s]+))?$/, ([, , size = 'DEFAULT'], { theme }) => {
            const scale = size === 'DEFAULT' ? theme.motionScale.DEFAULT :
                          size.startsWith('[') ? size.slice(1, -1) :
                          theme.motionScale[size] || size;
            return {
                '--motion-origin-scale-x': scale,
                '--motion-scale-in-animation': scaleInAnimation,
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-scale-x-in', 'motion-scale-x-in-<num>', 'motion-scale-x-in-(0|50|75|90|95|100|105|110|125|150)'] }],
        [/^motion-scale-y-in(-([^<>\s]+))?$/, ([, , size = 'DEFAULT'], { theme }) => {
            const scale = size === 'DEFAULT' ? theme.motionScale.DEFAULT :
                          size.startsWith('[') ? size.slice(1, -1) :
                          theme.motionScale[size] || size;
            return {
                '--motion-origin-scale-y': scale,
                '--motion-scale-in-animation': scaleInAnimation,
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-scale-y-in', 'motion-scale-y-in-<num>', 'motion-scale-y-in-(0|50|75|90|95|100|105|110|125|150)'] }],
        [/^motion-scale-out(-([^<>\s]+))?$/, ([, , size = 'DEFAULT'], { theme }) => {
            const scale = size === 'DEFAULT' ? theme.motionScale.DEFAULT :
                          size.startsWith('[') ? size.slice(1, -1) :
                          theme.motionScale[size] || size;
            return {
                '--motion-end-scale-x': scale,
                '--motion-end-scale-y': scale,
                '--motion-scale-out-animation': scaleOutAnimation,
                'animation': 'var(--motion-all-exit-animations)',
            };
        }, { autocomplete: ['motion-scale-out', 'motion-scale-out-<num>', 'motion-scale-out-(0|50|75|90|95|100|105|110|125|150)'] }],
        [/^motion-scale-x-out(-([^<>\s]+))?$/, ([, , size = 'DEFAULT'], { theme }) => {
            const scale = size === 'DEFAULT' ? theme.motionScale.DEFAULT :
                          size.startsWith('[') ? size.slice(1, -1) :
                          theme.motionScale[size] || size;
            return {
                '--motion-end-scale-x': scale,
                '--motion-scale-out-animation': scaleOutAnimation,
                'animation': 'var(--motion-all-exit-animations)',
            };
        }, { autocomplete: ['motion-scale-x-out', 'motion-scale-x-out-<num>', 'motion-scale-x-out-(0|50|75|90|95|100|105|110|125|150)'] }],
        [/^motion-scale-y-out(-([^<>\s]+))?$/, ([, , size = 'DEFAULT'], { theme }) => {
            const scale = size === 'DEFAULT' ? theme.motionScale.DEFAULT :
                          size.startsWith('[') ? size.slice(1, -1) :
                          theme.motionScale[size] || size;
            return {
                '--motion-end-scale-y': scale,
                '--motion-scale-out-animation': scaleOutAnimation,
                'animation': 'var(--motion-all-exit-animations)',
            };
        }, { autocomplete: ['motion-scale-y-out', 'motion-scale-y-out-<num>', 'motion-scale-y-out-(0|50|75|90|95|100|105|110|125|150)'] }],
        [/^motion-scale-x-loop(?:-([^/]+))?(?:\/([^<>\s]+))?$/, ([, size = 'DEFAULT', modifier], { theme }) => {
            const scale = size === 'DEFAULT' ? theme.motionScale.DEFAULT :
                          size.startsWith('[') ? size.slice(1, -1) :
                          theme.motionScale[size] || size;
            return {
                '--motion-loop-scale-x': scale,
                '--motion-scale-loop-animation': scaleLoopAnimation(modifier || "mirror"),
                'animation-composition': 'accumulate',
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-scale-x-loop', 'motion-scale-x-loop-<num>', 'motion-scale-x-loop-(0|50|75|90|95|100|105|110|125|150)/mirror', 'motion-scale-x-loop-(0|50|75|90|95|100|105|110|125|150)/reset'] }],
        [/^motion-scale-y-loop(?:-([^/]+))?(?:\/([^<>\s]+))?$/, ([, size = 'DEFAULT', modifier], { theme }) => {
            const scale = size === 'DEFAULT' ? theme.motionScale.DEFAULT :
                          size.startsWith('[') ? size.slice(1, -1) :
                          theme.motionScale[size] || size;
            return {
                '--motion-loop-scale-y': scale,
                '--motion-scale-loop-animation': scaleLoopAnimation(modifier || "mirror"),
                'animation-composition': 'accumulate',
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-scale-y-loop', 'motion-scale-y-loop-<num>', 'motion-scale-y-loop-(0|50|75|90|95|100|105|110|125|150)/mirror', 'motion-scale-y-loop-(0|50|75|90|95|100|105|110|125|150)/reset'] }],
        [/^motion-scale-loop(?:-([^/]+))?(?:\/([^<>\s]+))?$/, ([, size = 'DEFAULT', modifier], { theme }) => {
            const scale = size === 'DEFAULT' ? theme.motionScale.DEFAULT :
                          size.startsWith('[') ? size.slice(1, -1) :
                          theme.motionScale[size] || size;
            return {
                '--motion-loop-scale-x': scale,
                '--motion-loop-scale-y': scale,
                '--motion-scale-loop-animation': scaleLoopAnimation(modifier || "mirror"),
                'animation-composition': 'accumulate',
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-scale-loop', 'motion-scale-loop-<num>', 'motion-scale-loop-(0|50|75|90|95|100|105|110|125|150)/mirror', 'motion-scale-loop-(0|50|75|90|95|100|105|110|125|150)/reset'] }],



        // TRANSLATES...
        [/^motion-translate-x-in(-([^<>\s]+))?$/, ([, , size = 'DEFAULT'], { rawSelector, theme }) => {
            let translate = size === 'DEFAULT' ? theme.motionTranslate.DEFAULT :
                            size.startsWith('[') ? size.slice(1, -1) :
                            theme.motionTranslate[size] || size;
            if (isNegativeMotionSelector(rawSelector)) translate = `calc(${translate} * -1)`;
            return {
                [NO_NEG]: '',
                '--motion-origin-translate-x': translate,
                '--motion-translate-in-animation': translateInAnimation,
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-translate-x-in', 'motion-translate-x-in-<num>', 'motion-translate-x-in-(0|25|50|75|100|150)'] }],
        [/^motion-translate-y-in(-([^<>\s]+))?$/, ([, , size = 'DEFAULT'], { rawSelector, theme }) => {
            let translate = size === 'DEFAULT' ? theme.motionTranslate.DEFAULT :
                            size.startsWith('[') ? size.slice(1, -1) :
                            theme.motionTranslate[size] || size;
            if (isNegativeMotionSelector(rawSelector)) translate = `calc(${translate} * -1)`;
            return {
                [NO_NEG]: '',
                '--motion-origin-translate-y': translate,
                '--motion-translate-in-animation': translateInAnimation,
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-translate-y-in', 'motion-translate-y-in-<num>', 'motion-translate-y-in-(0|25|50|75|100|150)'] }],
        [/^motion-translate-x-out(-([^<>\s]+))?$/, ([, , size = 'DEFAULT'], { rawSelector, theme }) => {
            let translate = size === 'DEFAULT' ? theme.motionTranslate.DEFAULT :
                            size.startsWith('[') ? size.slice(1, -1) :
                            theme.motionTranslate[size] || size;
            if (isNegativeMotionSelector(rawSelector)) translate = `calc(${translate} * -1)`;
            return {
                [NO_NEG]: '',
                '--motion-end-translate-x': translate,
                '--motion-translate-out-animation': translateOutAnimation,
                'animation': 'var(--motion-all-exit-animations)',
            };
        }, { autocomplete: ['motion-translate-x-out', 'motion-translate-x-out-<num>', 'motion-translate-x-out-(0|25|50|75|100|150)'] }],
        [/^motion-translate-y-out(-([^<>\s]+))?$/, ([, , size = 'DEFAULT'], { rawSelector, theme }) => {
            let translate = size === 'DEFAULT' ? theme.motionTranslate.DEFAULT :
                            size.startsWith('[') ? size.slice(1, -1) :
                            theme.motionTranslate[size] || size;
            if (isNegativeMotionSelector(rawSelector)) translate = `calc(${translate} * -1)`;
            return {
                [NO_NEG]: '',
                '--motion-end-translate-y': translate,
                '--motion-translate-out-animation': translateOutAnimation,
                'animation': 'var(--motion-all-exit-animations)',
            };
        }, { autocomplete: ['motion-translate-y-out', 'motion-translate-y-out-<num>', 'motion-translate-y-out-(0|25|50|75|100|150)'] }],
        [/^motion-translate-x-loop(?:-([^/]+))?(?:\/([^<>\s]+))?$/, ([, size = 'DEFAULT', modifier], { rawSelector, theme }) => {
            let translate = size === 'DEFAULT' ? theme.motionTranslate.DEFAULT :
                            size.startsWith('[') ? size.slice(1, -1) :
                            theme.motionTranslate[size] || size;
            if (isNegativeMotionSelector(rawSelector)) translate = `calc(${translate} * -1)`;
            return {
                [NO_NEG]: '',
                '--motion-loop-translate-x': translate,
                '--motion-translate-loop-animation': translateLoopAnimation(modifier || "mirror"),
                'animation-composition': 'accumulate',
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-translate-x-loop', 'motion-translate-x-loop-<num>', 'motion-translate-x-loop-(0|25|50|75|100|150)/mirror', 'motion-translate-x-loop-(0|25|50|75|100|150)/reset'] }],
        [/^motion-translate-y-loop(?:-([^/]+))?(?:\/([^<>\s]+))?$/, ([, size = 'DEFAULT', modifier], { rawSelector, theme }) => {
            let translate = size === 'DEFAULT' ? theme.motionTranslate.DEFAULT :
                            size.startsWith('[') ? size.slice(1, -1) :
                            theme.motionTranslate[size] || size;
            if (isNegativeMotionSelector(rawSelector)) translate = `calc(${translate} * -1)`;
            return {
                [NO_NEG]: '',
                '--motion-loop-translate-y': translate,
                '--motion-translate-loop-animation': translateLoopAnimation(modifier || "mirror"),
                'animation-composition': 'accumulate',
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-translate-y-loop', 'motion-translate-y-loop-<num>', 'motion-translate-y-loop-(0|25|50|75|100|150)/mirror', 'motion-translate-y-loop-(0|25|50|75|100|150)/reset'] }],
        [/^motion-translate-loop(?:-([^/]+))?(?:\/([^<>\s]+))?$/, ([, size = 'DEFAULT', modifier], { rawSelector, theme }) => {
            let translate = size === 'DEFAULT' ? theme.motionTranslate.DEFAULT :
                            size.startsWith('[') ? size.slice(1, -1) :
                            theme.motionTranslate[size] || size;
            if (isNegativeMotionSelector(rawSelector)) translate = `calc(${translate} * -1)`;
            return {
                [NO_NEG]: '',
                '--motion-loop-translate-x': translate,
                '--motion-loop-translate-y': translate,
                '--motion-translate-loop-animation': translateLoopAnimation(modifier || "mirror"),
                'animation-composition': 'accumulate',
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-translate-loop', 'motion-translate-loop-<num>', 'motion-translate-loop-(0|25|50|75|100|150)/mirror', 'motion-translate-loop-(0|25|50|75|100|150)/reset'] }],




        // ROTATES...
        [/^motion-rotate-in(-([^<>\s]+))?$/, ([, , size = 'DEFAULT'], { rawSelector, theme }) => {
            let rotate = size === 'DEFAULT' ? theme.motionRotate.DEFAULT :
                         size.startsWith('[') ? size.slice(1, -1) :
                         theme.motionRotate[size] || size;
            if (isNegativeMotionSelector(rawSelector)) rotate = `calc(${rotate} * -1)`;
            return {
                [NO_NEG]: '',
                '--motion-origin-rotate': rotate,
                '--motion-rotate-in-animation': rotateInAnimation,
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-rotate-in', 'motion-rotate-in-<num>', 'motion-rotate-in-(0|45|90|180)'] }],
        [/^motion-rotate-out(-([^<>\s]+))?$/, ([, , size = 'DEFAULT'], { rawSelector, theme }) => {
            let rotate = size === 'DEFAULT' ? theme.motionRotate.DEFAULT :
                         size.startsWith('[') ? size.slice(1, -1) :
                         theme.motionRotate[size] || size;
            if (isNegativeMotionSelector(rawSelector)) rotate = `calc(${rotate} * -1)`;
            return {
                [NO_NEG]: '',
                '--motion-end-rotate': rotate,
                '--motion-rotate-out-animation': rotateOutAnimation,
                'animation': 'var(--motion-all-exit-animations)',
            };
        }, { autocomplete: ['motion-rotate-out', 'motion-rotate-out-<num>', 'motion-rotate-out-(0|45|90|180)'] }],
        [/^motion-rotate-loop(?:-([^/]+))?(?:\/([^<>\s]+))?$/, ([, size = 'DEFAULT', modifier], { rawSelector, theme }) => {
            let rotate = size === 'DEFAULT' ? theme.motionRotate.DEFAULT :
                         size.startsWith('[') ? size.slice(1, -1) :
                         theme.motionRotate[size] || size;
            if (isNegativeMotionSelector(rawSelector)) rotate = `calc(${rotate} * -1)`;
            return {
                [NO_NEG]: '',
                '--motion-loop-rotate': rotate,
                '--motion-rotate-loop-animation': rotateLoopAnimation(modifier || "mirror"),
                'animation-composition': 'accumulate',
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-rotate-loop', 'motion-rotate-loop-<num>', 'motion-rotate-loop-(0|45|90|180)/mirror', 'motion-rotate-loop-(0|45|90|180)/reset'] }],




        // BLURS
        [/^motion-blur-in(-([^<>\s]+))?$/, ([, , size = 'DEFAULT'], { theme }) => {
            const blur = size === 'DEFAULT' ? theme.motionBlur.DEFAULT : 
                         size.startsWith('[') ? size.slice(1, -1) : 
                         theme.motionBlur[size] || size;
            return {
                '--motion-origin-blur': blur,
                '--motion-filter-in-animation': filterInAnimation,
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-blur-in', 'motion-blur-in-(sm|md|lg|xl|2xl|3xl)'] }],
        [/^motion-blur-out(-([^<>\s]+))?$/, ([, , size = 'DEFAULT'], { theme }) => {
            const blur = size === 'DEFAULT' ? theme.motionBlur.DEFAULT : 
                         size.startsWith('[') ? size.slice(1, -1) : 
                         theme.motionBlur[size] || size;
            return {
                '--motion-end-blur': blur,
                '--motion-filter-out-animation': filterOutAnimation,
                'animation': 'var(--motion-all-exit-animations)',
            };
        }, { autocomplete: ['motion-blur-out', 'motion-blur-out-(sm|md|lg|xl|2xl|3xl)'] }],
        [/^motion-blur-loop(?:-([^/]+))?(?:\/([^<>\s]+))?$/, ([, size = 'DEFAULT', modifier], { theme }) => {
            const blur = size === 'DEFAULT' ? theme.motionBlur.DEFAULT : 
                         size.startsWith('[') ? size.slice(1, -1) : 
                         theme.motionBlur[size] || size;
            return {
                '--motion-loop-blur': blur,
                '--motion-filter-loop-animation': filterLoopAnimation(modifier || "mirror"),
                'animation-composition': 'accumulate',
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-blur-loop', 'motion-blur-loop-(sm|md|lg|xl|2xl|3xl)/mirror', 'motion-blur-loop-(sm|md|lg|xl|2xl|3xl)/reset'] }],
        



        // GRAYSCALES
        [/^motion-grayscale-in(-([^<>\s]+))?$/, ([, , size = 'DEFAULT'], { theme }) => {
            const grayscale = size === 'DEFAULT' ? theme.motionGrayscale.DEFAULT : 
                              size.startsWith('[') ? size.slice(1, -1) : 
                              theme.motionGrayscale[size] || size;
            return {
                '--motion-origin-grayscale': grayscale,
                '--motion-filter-in-animation': filterInAnimation,
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-grayscale-in', 'motion-grayscale-in-(0|25|50|75|100)'] }],
        [/^motion-grayscale-out(-([^<>\s]+))?$/, ([, , size = 'DEFAULT'], { theme }) => {
            const grayscale = size === 'DEFAULT' ? theme.motionGrayscale.DEFAULT : 
                              size.startsWith('[') ? size.slice(1, -1) : 
                              theme.motionGrayscale[size] || size;
            return {
                '--motion-end-grayscale': grayscale,
                '--motion-filter-out-animation': filterOutAnimation,
                'animation': 'var(--motion-all-exit-animations)',
            };
        }, { autocomplete: ['motion-grayscale-out', 'motion-grayscale-out-(0|25|50|75|100)'] }],
        [/^motion-grayscale-loop(?:-([^/]+))?(?:\/([^<>\s]+))?$/, ([, size = 'DEFAULT', modifier], { theme }) => {
            const grayscale = size === 'DEFAULT' ? theme.motionGrayscale.DEFAULT : 
                              size.startsWith('[') ? size.slice(1, -1) : 
                              theme.motionGrayscale[size] || size;
            return {
                '--motion-loop-grayscale': grayscale,
                '--motion-filter-loop-animation': filterLoopAnimation(modifier || "mirror"),
                'animation-composition': 'accumulate',
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-grayscale-loop', 'motion-grayscale-loop-(0|25|50|75|100)/mirror', 'motion-grayscale-loop-(0|25|50|75|100)/reset'] }],




        // OPACITYS
        [/^motion-opacity-in(-([^<>\s]+))?$/, ([, , size = 'DEFAULT'], { theme }) => {
            const opacity = size === 'DEFAULT' ? theme.motionOpacity.DEFAULT : 
                            size.startsWith('[') ? size.slice(1, -1) : 
                            theme.motionOpacity[size] || size;
            return {
                '--motion-origin-opacity': opacity,
                '--motion-opacity-in-animation': opacityInAnimation,
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-opacity-in', 'motion-opacity-in-(0|25|50|75|100)'] }],
        [/^motion-opacity-out(-([^<>\s]+))?$/, ([, , size = 'DEFAULT'], { theme }) => {
            const opacity = size === 'DEFAULT' ? theme.motionOpacity.DEFAULT : 
                            size.startsWith('[') ? size.slice(1, -1) : 
                            theme.motionOpacity[size] || size;
            return {
                '--motion-end-opacity': opacity,
                '--motion-opacity-out-animation': opacityOutAnimation,
                'animation': 'var(--motion-all-exit-animations)',
            };
        }, { autocomplete: ['motion-opacity-out', 'motion-opacity-out-(0|25|50|75|100)'] }],
        [/^motion-opacity-loop(?:-([^/]+))?(?:\/([^<>\s]+))?$/, ([, size = 'DEFAULT', modifier], { theme }) => {
            const opacity = size === 'DEFAULT' ? theme.motionOpacity.DEFAULT : 
                           size.startsWith('[') ? size.slice(1, -1) : 
                           theme.motionOpacity[size] || size;
            return {
                '--motion-loop-opacity': opacity,
                '--motion-opacity-loop-animation': opacityLoopAnimation(modifier || "mirror"),
                // no animation composition because it makes opacity not work
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-opacity-loop', 'motion-opacity-loop-(0|25|50|75|100)/mirror', 'motion-opacity-loop-(0|25|50|75|100)/reset'] }],





        // BACKGROUND COLORS
        [/^motion-bg-in(-([^<>\s]+))?$/, ([, , color = 'DEFAULT'], { theme }) => {
            const bgColor = color === 'DEFAULT' ? theme.motionBackgroundColor.DEFAULT : 
                            color.startsWith('[') ? color.slice(1, -1) : 
                            theme.motionBackgroundColor[color] || color;
            return {
                '--motion-origin-background-color': bgColor,
                '--motion-background-color-in-animation': backgroundColorInAnimation,
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-bg-in', 'motion-bg-in-$colors'] }],
        [/^motion-bg-out(-([^<>\s]+))?$/, ([, , color = 'DEFAULT'], { theme }) => {
            const bgColor = color === 'DEFAULT' ? theme.motionBackgroundColor.DEFAULT : 
                            color.startsWith('[') ? color.slice(1, -1) : 
                            theme.motionBackgroundColor[color] || color;
            return {
                '--motion-end-background-color': bgColor,
                '--motion-background-color-out-animation': backgroundColorOutAnimation,
                'animation': 'var(--motion-all-exit-animations)',
            };
        }, { autocomplete: ['motion-bg-out', 'motion-bg-out-$colors'] }],
        [/^motion-bg-loop(?:-([^/]+))?(?:\/([^<>\s]+))?$/, ([, color = 'DEFAULT', modifier], { theme }) => {
            const bgColor = color === 'DEFAULT' ? theme.motionBackgroundColor.DEFAULT : 
                           color.startsWith('[') ? color.slice(1, -1) : 
                           theme.motionBackgroundColor[color] || color;
            return {
                '--motion-loop-background-color': bgColor,
                '--motion-background-color-loop-animation': backgroundColorLoopAnimation(modifier || "mirror"),
                // no animation composition because it makes colors add
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-bg-loop', 'motion-bg-loop-$colors/mirror', 'motion-bg-loop-$colors/reset'] }],




        // TEXT COLORS
        [/^motion-text-in(-([^<>\s]+))?$/, ([, , color = 'DEFAULT'], { theme }) => {
            const textColor = color === 'DEFAULT' ? theme.motionTextColor.DEFAULT : 
                              color.startsWith('[') ? color.slice(1, -1) : 
                              theme.motionTextColor[color] || color;
            return {
                '--motion-origin-text-color': textColor,
                '--motion-text-color-in-animation': textColorInAnimation,
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-text-in', 'motion-text-in-$colors'] }],
        [/^motion-text-out(-([^<>\s]+))?$/, ([, , color = 'DEFAULT'], { theme }) => {
            const textColor = color === 'DEFAULT' ? theme.motionTextColor.DEFAULT : 
                              color.startsWith('[') ? color.slice(1, -1) : 
                              theme.motionTextColor[color] || color;
            return {
                '--motion-end-text-color': textColor,
                '--motion-text-color-out-animation': textColorOutAnimation,
                'animation': 'var(--motion-all-exit-animations)',
            };
        }, { autocomplete: ['motion-text-out', 'motion-text-out-$colors'] }],
        [/^motion-text-loop(?:-([^/]+))?(?:\/([^<>\s]+))?$/, ([, color = 'DEFAULT', modifier], { theme }) => {
            const textColor = color === 'DEFAULT' ? theme.motionTextColor.DEFAULT : 
                             color.startsWith('[') ? color.slice(1, -1) : 
                             theme.motionTextColor[color] || color;
            return {
                '--motion-loop-text-color': textColor,
                '--motion-text-color-loop-animation': textColorLoopAnimation(modifier || "mirror"),
                'animation-composition': 'accumulate',
                'animation': 'var(--motion-all-loop-and-enter-animations)',
            };
        }, { autocomplete: ['motion-text-loop', 'motion-text-loop-$colors/mirror', 'motion-text-loop-$colors/reset'] }],












        /*=================================
        *                                 *
        *            MODIFIERS            *
        *                                 *
        ==================================*/


        // MOTION DURATION
        [/^motion-duration(-([^<>\s]+?))?(\/(scale|translate|rotate|blur|grayscale|opacity|background|text))?$/, ([, , value = 'DEFAULT', , modifier], { theme }) => {
            const duration = resolveTimeValue(value, theme);

            if (modifier) {
                switch (modifier) {
                    case "scale":
                        return { "--motion-scale-duration": duration };
                    case "translate":
                        return { "--motion-translate-duration": duration };
                    case "rotate":
                        return { "--motion-rotate-duration": duration };
                    case "blur":
                    case "grayscale":
                        return { "--motion-filter-duration": duration };
                    case "opacity":
                        return { "--motion-opacity-duration": duration };
                    case "background":
                        return { "--motion-background-color-duration": duration };
                    case "text":
                        return { "--motion-text-color-duration": duration };
                }
            }

            return { "--motion-duration": duration };
        }, { autocomplete: ['motion-duration', 'motion-duration-(75|100|150|200|300|500|700|1000)', 'motion-duration-[<num>]', 'motion-duration-<num>/(scale|translate|rotate|blur|grayscale|opacity|background|text)'] }],

        // MOTION DELAY
        [/^motion-delay(-([^<>\s]+?))?(\/(scale|translate|rotate|blur|grayscale|opacity|background|text))?$/, ([, , value = 'DEFAULT', , modifier], { theme }) => {
            const delay = resolveTimeValue(value, theme);

            if (modifier) {
                switch (modifier) {
                    case "scale":
                        return { "--motion-scale-delay": delay };
                    case "translate":
                        return { "--motion-translate-delay": delay };
                    case "rotate":
                        return { "--motion-rotate-delay": delay };
                    case "blur":
                    case "grayscale":
                        return { "--motion-filter-delay": delay };
                    case "opacity":
                        return { "--motion-opacity-delay": delay };
                    case "background":
                        return { "--motion-background-color-delay": delay };
                    case "text":
                        return { "--motion-text-color-delay": delay };
                }
            }

            return { "--motion-delay": delay };
        }, { autocomplete: ['motion-delay', 'motion-delay-(75|100|150|200|300|500|700|1000)', 'motion-delay-[<num>]', 'motion-delay-<num>/(scale|translate|rotate|blur|grayscale|opacity|background|text)'] }],

        // MOTION STEP TIMELINE OFFSET
        [/^motion-gap(?:-([^<>\s]+?))?$/, ([, value = 'DEFAULT'], { theme }) => {
            return { '--motion-step-offset': resolveTimeValue(value, theme, '0ms') };
        }, { autocomplete: ['motion-gap', 'motion-gap-(50|75|100|150|200|300|500|1000)', 'motion-gap-[<num>]'] }],

        [/^motion-overlap(?:-([^<>\s]+?))?$/, ([, value = 'DEFAULT'], { theme }) => {
            return { '--motion-step-offset': negateCSSValue(resolveTimeValue(value, theme, '0ms')) };
        }, { autocomplete: ['motion-overlap', 'motion-overlap-(50|75|100|150|200|300|500|1000)', 'motion-overlap-[<num>]'] }],

        // MOTION EASE
        [/^motion-ease(-([^<>\s]+?))?(\/(scale|translate|rotate|blur|grayscale|opacity|background|text))?$/, ([, , value = 'DEFAULT', , modifier], { theme }) => {
            let ease;
            if (value === 'DEFAULT') {
                ease = theme.animationTimingFunction.DEFAULT;
            } else if (value.startsWith('[')) {
                ease = value.slice(1, -1);
            } else {
                // Correct mapping for ease-in, ease-out, and ease-in-out
                switch (value) {
                    case 'in':
                        ease = theme.animationTimingFunction['ease-in'] || 'ease-in';
                        break;
                    case 'out':
                        ease = theme.animationTimingFunction['ease-out'] || 'ease-out';
                        break;
                    case 'in-out':
                        ease = theme.animationTimingFunction['ease-in-out'] || 'ease-in-out';
                        break;
                    default:
                        ease = theme.animationTimingFunction[value] || value;
                }
            }

            const perceptualDurationMultiplier = springPerceptualMultipliers[ease] || 1;
            const isSpringWithBounce = ['var(--motion-spring-bouncy)', 'var(--motion-spring-bouncier)', 'var(--motion-spring-bounciest)', 'var(--motion-bounce)'].includes(ease);

            if (modifier) {
                const prop = modifier === 'blur' || modifier === 'grayscale' ? 'filter' :
                            modifier === 'background' ? 'background-color' :
                            modifier === 'text' ? 'text-color' :
                            modifier;
                return {
                    [`--motion-${prop}-timing`]: ease,
                    [`--motion-${prop}-perceptual-duration-multiplier`]: `${perceptualDurationMultiplier}`,
                };
            }

            if (isSpringWithBounce) {
                return {
                    '--motion-timing': ease,
                    '--motion-perceptual-duration-multiplier': `${perceptualDurationMultiplier}`,
                    '--motion-filter-timing': 'var(--motion-spring-smooth)',
                    '--motion-opacity-timing': 'var(--motion-spring-smooth)',
                    '--motion-background-color-timing': 'var(--motion-spring-smooth)',
                    '--motion-text-color-timing': 'var(--motion-spring-smooth)',
                    '--motion-filter-perceptual-duration-multiplier': '1.66',
                    '--motion-opacity-perceptual-duration-multiplier': '1.66',
                    '--motion-background-color-perceptual-duration-multiplier': '1.66',
                    '--motion-text-color-perceptual-duration-multiplier': '1.66',
                };
            }

            return {
                '--motion-timing': ease,
                '--motion-perceptual-duration-multiplier': `${perceptualDurationMultiplier}`,
            };
        }, { autocomplete: ['motion-ease', 'motion-ease-(linear|in|out|in-out|spring-smooth|spring-snappy|spring-bouncy|spring-bouncier|spring-bounciest|bounce)', 'motion-ease-(linear|in|out|in-out|spring-smooth|spring-snappy|spring-bouncy|spring-bouncier|spring-bounciest|bounce)/(scale|translate|rotate|blur|grayscale|opacity|background|text)'] }],

        // MOTION LOOP
        [/^motion-loop(-([^<>\s]+?))?(\/(scale|translate|rotate|blur|grayscale|opacity|background|text))?$/, ([, , value = 'DEFAULT', , modifier], { theme }) => {
            const loopCount = value === 'DEFAULT' ? theme.animationLoopCount.DEFAULT : 
                            value.startsWith('[') ? value.slice(1, -1) : 
                            theme.animationLoopCount[value] || value;

            if (modifier) {
                switch (modifier) {
                    case "scale":
                        return { "--motion-scale-loop-count": loopCount };
                    case "translate":
                        return { "--motion-translate-loop-count": loopCount };
                    case "rotate":
                        return { "--motion-rotate-loop-count": loopCount };
                    case "blur":
                    case "grayscale":
                        return { "--motion-filter-loop-count": loopCount };
                    case "opacity":
                        return { "--motion-opacity-loop-count": loopCount };
                    case "background":
                        return { "--motion-background-color-loop-count": loopCount };
                    case "text":
                        return { "--motion-text-color-loop-count": loopCount };
                }
            }

            return { "--motion-loop-count": loopCount };
        }, { autocomplete: ['motion-loop', 'motion-loop-infinite', 'motion-loop-[<num>]', 'motion-loop-<num>/(scale|translate|rotate|blur|grayscale|opacity|background|text)'] }],

        [/^motion-paused$/, (_, ctx) => withVariants(ctx, (sel) => `
            ${sel},
            ${sel}::before,
            ${sel}::after {
                animation-play-state: paused !important;
            }
        `), { autocomplete: 'motion-paused' }],

        [/^motion-running$/, (_, ctx) => withVariants(ctx, (sel) => `
            ${sel},
            ${sel}::before,
            ${sel}::after {
                animation-play-state: running !important;
            }
        `), { autocomplete: 'motion-running' }],







        /*=================================
        *                                 *
        *              PRESETS            *
        *                                 *
        ==================================*/
        // Fades
        [/^motion-preset-fade(-([^<>\s]+))?$/, ([, , size = 'DEFAULT']) => {
            const durations = {
                xs: "150ms",
                sm: "300ms",
                md: "500ms",
                lg: "800ms",
            };

            return {
                "--motion-origin-opacity": 0.001, // Use 0.001 instead of 0 to avoid Lighthouse CLS false positives
                "--motion-duration": pickSize(size, durations),
                "--motion-opacity-in-animation": opacityInAnimation,
                animation: "var(--motion-all-loop-and-enter-animations)",
            };
        }, { autocomplete: ['motion-preset-fade', 'motion-preset-fade-(xs|sm|md|lg)', 'motion-preset-fade-[<num>]'] }],

        // Slides
        [/^motion-preset-slide-(right|left|up|down)(?!-(?:right|left))(-([^<>\s]+))?$/, ([, direction, , size = 'DEFAULT']) => {
            const distance = {
                xs: "2%",
                sm: "5%",
                md: "25%",
                lg: "100%",
            };
            const translateProperty = direction === 'right' || direction === 'left' ? 'x' : 'y';
            const sign = direction === 'right' || direction === 'down' ? '-' : '';

            return {
                [`--motion-origin-translate-${translateProperty}`]: `${sign}${pickSize(size, distance)}`,
                "--motion-origin-opacity": 0.001, // Use 0.001 instead of 0 to avoid Lighthouse CLS false positives
                "--motion-opacity-in-animation": opacityInAnimation,
                "--motion-translate-in-animation": translateInAnimation,
                animation: "var(--motion-all-loop-and-enter-animations)", // Updated to match reference
            };
        }, { autocomplete: ['motion-preset-slide-right', 'motion-preset-slide-left', 'motion-preset-slide-up', 'motion-preset-slide-down', 'motion-preset-slide-(right|left|up|down)-(xs|sm|md|lg)', 'motion-preset-slide-(right|left|up|down)-[<num>]'] }],
        // Slide in 4 corners
        [/^motion-preset-slide-(up-right|up-left|down-left|down-right)(-([^<>\s]+))?$/, ([, direction, , size = 'DEFAULT']) => {
            const distance = {
                xs: "2%",
                sm: "5%",
                md: "25%",
                lg: "100%",
            };
            const [vertical, horizontal] = direction.split('-');
            const signX = horizontal === 'right' ? '-' : '';
            const signY = vertical === 'down' ? '-' : '';

            return {
                "--motion-origin-translate-x": `${signX}${pickSize(size, distance)}`,
                "--motion-origin-translate-y": `${signY}${pickSize(size, distance)}`,
                "--motion-origin-opacity": 0.001, // Use 0.001 instead of 0 to avoid Lighthouse CLS false positives
                "--motion-opacity-in-animation": opacityInAnimation,
                "--motion-translate-in-animation": translateInAnimation,
                animation: "var(--motion-all-loop-and-enter-animations)",
            };
        }, { autocomplete: ['motion-preset-slide-up-right', 'motion-preset-slide-up-left', 'motion-preset-slide-down-left', 'motion-preset-slide-down-right', 'motion-preset-slide-(up-right|up-left|down-left|down-right)-(sm|md|lg)'] }],

        // Blurs
        [/^motion-preset-focus(-([^<>\s]+))?$/, ([, , size = 'DEFAULT']) => {
            const blurSizes = {
                xs: "0.5px",
                sm: "1.25px",
                md: "5px",
                lg: "10px",
            };
            return {
                "--motion-origin-blur": pickSize(size, blurSizes),
                "--motion-origin-opacity": 0.001, // Use 0.001 instead of 0 to avoid Lighthouse CLS false positives
                "--motion-opacity-in-animation": opacityInAnimation,
                "--motion-filter-in-animation": filterInAnimation,
                animation: "var(--motion-all-loop-and-enter-animations)",
            };
        }, { autocomplete: ['motion-preset-focus', 'motion-preset-focus-(xs|sm|md|lg)', 'motion-preset-focus-[<num>]'] }],
        [/^motion-preset-blur-(right|left|up|down)(-([^<>\s]+))?$/, ([, direction, , size = 'DEFAULT']) => {
            const blurSizes = {
                xs: "0.5px",
                sm: "1.25px",
                md: "5px",
                lg: "10px",
            };
            const distance = {
                xs: "0.25%",
                sm: "1%",
                md: "5%",
                lg: "25%",
            };
            const translateProperty = direction === 'right' || direction === 'left' ? 'x' : 'y';
            const sign = direction === 'right' || direction === 'down' ? '-' : '';

            return {
                "--motion-origin-blur": pickSize(size, blurSizes),
                [`--motion-origin-translate-${translateProperty}`]: `${sign}${pickSize(size, distance)}`,
                "--motion-origin-opacity": 0.001, // Use 0.001 instead of 0 to avoid Lighthouse CLS false positives
                "--motion-opacity-in-animation": opacityInAnimation,
                "--motion-filter-in-animation": filterInAnimation,
                "--motion-translate-in-animation": translateInAnimation,
                animation: "var(--motion-all-loop-and-enter-animations)",
            };
        }, { autocomplete: ['motion-preset-blur', 'motion-preset-blur-right', 'motion-preset-blur-left', 'motion-preset-blur-up', 'motion-preset-blur-down', 'motion-preset-blur-(right|left|up|down)-(xs|sm|md|lg)', 'motion-preset-blur-(right|left|up|down)-[<num>]'] }],

        // Rebound
        [/^motion-preset-rebound(-([^<>\s]+))?$/, ([, , direction = 'left']) => {
            const directions = {
                right: {
                    "--motion-origin-translate-x": "-25%",
                },
                left: {
                    "--motion-origin-translate-x": "25%",
                },
                up: {
                    "--motion-origin-translate-y": "25%",
                },
                down: {
                    "--motion-origin-translate-y": "-25%",
                },
            };
            return {
                ...directions[direction],
                "--motion-translate-timing": "var(--motion-spring-bouncier)",
                "--motion-translate-perceptual-duration-multiplier": springPerceptualMultipliers["var(--motion-spring-bouncier)"],
                "--motion-origin-opacity": 0.001, // Use 0.001 instead of 0 to avoid Lighthouse CLS false positives
                "--motion-opacity-in-animation": opacityInAnimation,
                "--motion-translate-in-animation": translateInAnimation,
                animation: "var(--motion-all-loop-and-enter-animations)",
            };
        }, { autocomplete: ['motion-preset-rebound', 'motion-preset-rebound-right', 'motion-preset-rebound-left', 'motion-preset-rebound-up', 'motion-preset-rebound-down'] }],

        // Bounce
        [/^motion-preset-bounce$/, () => ({
            "--motion-duration": "300ms",
            "--motion-translate-timing": "var(--motion-bounce)",
            "--motion-translate-perceptual-duration-multiplier": springPerceptualMultipliers["var(--motion-bounce)"],
            "--motion-origin-opacity": 0.001, // Use 0.001 instead of 0 to avoid Lighthouse CLS false positives
            "--motion-origin-translate-y": "-25%",
            "--motion-opacity-in-animation": opacityInAnimation,
            "--motion-translate-in-animation": translateInAnimation,
            animation: "var(--motion-all-loop-and-enter-animations)",
        }), { autocomplete: 'motion-preset-bounce' }],

        // Expand
        [/^motion-preset-expand$/, () => ({
            "--motion-origin-scale-x": "50%",
            "--motion-origin-scale-y": "50%",
            "--motion-origin-opacity": 0.001, // Use 0.001 instead of 0 to avoid Lighthouse CLS false positives
            "--motion-opacity-in-animation": opacityInAnimation,
            "--motion-scale-in-animation": scaleInAnimation,
            animation: "var(--motion-all-loop-and-enter-animations)",
        }), { autocomplete: 'motion-preset-expand' }],

        // Shrink
        [/^motion-preset-shrink$/, () => ({
            "--motion-origin-scale-x": "150%",
            "--motion-origin-scale-y": "150%",
            "--motion-origin-opacity": 0.001, // Use 0.001 instead of 0 to avoid Lighthouse CLS false positives
            "--motion-opacity-in-animation": opacityInAnimation,
            "--motion-scale-in-animation": scaleInAnimation,
            animation: "var(--motion-all-loop-and-enter-animations)",
        }), { autocomplete: 'motion-preset-shrink' }],

        // Pop
        [/^motion-preset-pop$/, () => ({
            "--motion-origin-scale-x": "50%",
            "--motion-origin-scale-y": "50%",
            "--motion-origin-opacity": 0.001, // Use 0.001 instead of 0 to avoid Lighthouse CLS false positives
            "--motion-scale-timing": "var(--motion-spring-bouncier)",
            "--motion-scale-perceptual-duration-multiplier": springPerceptualMultipliers["var(--motion-spring-bouncier)"],
            "--motion-opacity-in-animation": opacityInAnimation,
            "--motion-scale-in-animation": scaleInAnimation,
            animation: "var(--motion-all-loop-and-enter-animations)",
        }), { autocomplete: 'motion-preset-pop' }],

        // Compress
        [/^motion-preset-compress$/, () => ({
            "--motion-origin-scale-x": "150%",
            "--motion-origin-scale-y": "150%",
            "--motion-origin-opacity": 0.001, // Use 0.001 instead of 0 to avoid Lighthouse CLS false positives
            "--motion-scale-timing": "var(--motion-spring-bouncier)",
            "--motion-scale-perceptual-duration-multiplier": springPerceptualMultipliers["var(--motion-spring-bouncier)"],
            "--motion-opacity-in-animation": opacityInAnimation,
            "--motion-scale-in-animation": scaleInAnimation,
            animation: "var(--motion-all-loop-and-enter-animations)",
        }), { autocomplete: 'motion-preset-compress' }],

        // SHAKE
        [/^motion-preset-shake$/, () => ({
            "--motion-duration": "300ms",
            "--motion-origin-rotate": "15deg",
            "--motion-origin-opacity": 0.001, // Use 0.001 instead of 0 to avoid Lighthouse CLS false positives
            "--motion-rotate-timing": "var(--motion-spring-bounciest)", 
            "--motion-rotate-perceptual-duration-multiplier": springPerceptualMultipliers["var(--motion-spring-bounciest)"],
            "--motion-opacity-in-animation": opacityInAnimation,
            "--motion-rotate-in-animation": rotateInAnimation,
            animation: "var(--motion-all-loop-and-enter-animations)",
        }), { autocomplete: 'motion-preset-shake' }],

        // WIGGLE
        [/^motion-preset-wiggle$/, () => ({
            "--motion-duration": "300ms",
            "--motion-origin-rotate": "15deg",
            "--motion-origin-translate-x": "-25%",
            "--motion-origin-translate-y": "-10%",
            "--motion-origin-opacity": 0.001, // Use 0.001 instead of 0 to avoid Lighthouse CLS false positives
            "--motion-timing": "var(--motion-spring-bounciest)",
            "--motion-perceptual-duration-multiplier": "5.285",
            "--motion-opacity-timing": "var(--motion-spring-smooth)",
            "--motion-opacity-perceptual-duration-multiplier": springPerceptualMultipliers["var(--motion-spring-smooth)"],
            "--motion-opacity-in-animation": opacityInAnimation,
            "--motion-rotate-in-animation": rotateInAnimation,
            "--motion-translate-in-animation": translateInAnimation,
            animation: "var(--motion-all-loop-and-enter-animations)",
        }), { autocomplete: 'motion-preset-wiggle' }],

        // CONFETTI
        [/^motion-preset-confetti$/, (_, ctx) => {
            // Not that this is changed from the library...
            // ${selector} {
            //     margin: 0;
            //     display: block;
            // }
            return `
                @keyframes RomboConfettiPop {
                    0% { opacity: 0; transform: scale(1); }
                    33% { opacity: 1; transform: scale(1.15); }
                    50% { transform: scale(0.975); }
                    65% { transform: scale(1.025); }
                    80% { transform: scale(0.99); }
                    87% { transform: scale(1.01); }
                    100% { opacity: 1; transform: scale(1); }
                }
                @keyframes topfetti {
                    0% { background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%; }
                    50% { background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%; }
                    100% { 
                        background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
                        background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
                    }
                }
                @keyframes bottomfetti {
                    0% { background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,70% -10%, 70% 0%; }
                    50% { background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%; }
                    100% { 
                        background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
                        background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
                    }
                }
                ${withVariants(ctx, (selector) => `
                ${selector} {
                    -webkit-appearance: none;
                    appearance: none;
                    position: relative;
                    outline: 0;
                    z-index: 1;
                    animation: RomboConfettiPop var(--motion-duration) var(--motion-timing) both;
                }
                ${selector}:after {
                    display: block;
                    animation-duration: var(--motion-duration);
                    animation-timing-function: var(--motion-timing);
                    animation-iteration-count: 1;
                    animation-direction: normal;
                    animation-fill-mode: forwards;
                    animation-name: bottomfetti;
                    position: absolute;
                    content: " ";
                    z-index: -1;
                    width: 100%;
                    height: 100%;
                    left: -20%;
                    top: 100%;
                    transition: all var(--motion-timing) var(--motion-duration);
                    background-repeat: no-repeat;
                    background-image: radial-gradient(circle, #a2dd60 20%, transparent 20%),radial-gradient(circle, transparent 20%, #ee65a9 20%, transparent 30%),radial-gradient(circle, #6092dd 20%, transparent 20%),radial-gradient(circle, #f3c548 20%, transparent 20%),radial-gradient(circle, transparent 10%, #46ec99 15%, transparent 20%),radial-gradient(circle, #f03e47 20%, transparent 20%),radial-gradient(circle, #7b4df7 20%, transparent 20%),radial-gradient(circle, #3ff1bc 20%, transparent 20%);
                    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
                    z-index: -1;
                }
                ${selector}:before {
                    display: block;
                    animation-duration: var(--motion-duration);
                    animation-timing-function: var(--motion-timing);
                    animation-iteration-count: 1;
                    animation-direction: normal;
                    animation-fill-mode: forwards;
                    animation-name: topfetti;
                    position: absolute;
                    content: " ";
                    width: 100%;
                    height: 100%;
                    left: -5%;
                    background-repeat: no-repeat;
                    transition: all var(--motion-timing) var(--motion-duration);
                    z-index: -1;
                    top: -90%;
                    background-image: radial-gradient(circle, #a2dd60 30%, transparent 20%),radial-gradient(circle, transparent 20%, #ee65a9 40%, transparent 20%),radial-gradient(circle, #6092dd 30%, transparent 20%),radial-gradient(circle, #f3c548 30%, transparent 20%),radial-gradient(circle, transparent 10%, #46ec99 15%, transparent 20%),radial-gradient(circle, #f03e47 30%, transparent 20%),radial-gradient(circle, #7b4df7 30%, transparent 30%),radial-gradient(circle, #3ff1bc 30%, transparent 20%),radial-gradient(circle, #48f088 30%, transparent 30%);
                    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 25% 25%;
                }
                `)}
            `;
        }, { autocomplete: 'motion-preset-confetti' }],
        // PULSE
        [/^motion-preset-pulse(?:-([^<>\s]+))?$/, ([, size = 'md']) => {
            const sizes = {
                xs: '1.05',
                sm: '1.1',
                md: '1.25',
                lg: '1.5'
            };
            const v = pickSize(size, sizes);
            return {
                '--motion-loop-scale-x': v,
                '--motion-loop-scale-y': v,
                '--motion-timing': 'cubic-bezier(0.4, 0, 0.2, 1)',
                '--motion-scale-loop-animation': scaleLoopAnimation('mirror'),
                'animation': 'var(--motion-all-loop-and-enter-animations)'
            };
        }, { autocomplete: ['motion-preset-pulse-(xs|sm|md|lg)', 'motion-preset-pulse-[<num>]'] }],

        // WOBBLE
        [/^motion-preset-wobble(?:-([^<>\s]+))?$/, ([, size = 'md']) => {
            const sizes = {
                xs: '2%',
                sm: '5%',
                md: '15%',
                lg: '25%'
            };
            return {
                '--motion-loop-translate-x': pickSize(size, sizes),
                '--motion-timing': 'cubic-bezier(0.4, 0, 0.2, 1)',
                '--motion-translate-loop-animation': translateLoopAnimation('mirror'),
                'animation': 'var(--motion-all-loop-and-enter-animations)'
            };
        }, { autocomplete: ['motion-preset-wobble-(xs|sm|md|lg)', 'motion-preset-wobble-[<num>]'] }],

        // SEESAW
        [/^motion-preset-seesaw(?:-([^<>\s]+))?$/, ([, size = 'md']) => {
            const sizes = {
                xs: '1deg',
                sm: '3deg',
                md: '6deg',
                lg: '12deg'
            };
            return {
                '--motion-loop-rotate': pickSize(size, sizes),
                '--motion-rotate-loop-animation': rotateLoopAnimation('mirror'),
                '--motion-rotate-timing': 'var(--motion-spring-bounciest)',
                '--motion-rotate-perceptual-duration-multiplier': springPerceptualMultipliers['var(--motion-spring-bounciest)'],
                'animation': 'var(--motion-all-loop-and-enter-animations)'
            };
        }, { autocomplete: ['motion-preset-seesaw-(xs|sm|md|lg)', 'motion-preset-seesaw-[<num>]'] }],

        // OSCILLATE
        [/^motion-preset-oscillate(?:-([^<>\s]+))?$/, ([, size = 'md']) => {
            const sizes = {
                xs: '2%',
                sm: '5%',
                md: '15%',
                lg: '25%'
            };
            return {
                '--motion-loop-translate-y': pickSize(size, sizes),
                '--motion-timing': 'cubic-bezier(0.4, 0, 0.2, 1)',
                '--motion-translate-loop-animation': translateLoopAnimation('mirror'),
                'animation': 'var(--motion-all-loop-and-enter-animations)'
            };
        }, { autocomplete: ['motion-preset-oscillate-(xs|sm|md|lg)', 'motion-preset-oscillate-[<num>]'] }],

        // STRETCH
        [/^motion-preset-stretch(?:-([^<>\s]+))?$/, ([, size = 'md']) => {
            const xSizes = {
                xs: '98%',
                sm: '95%',
                md: '85%',
                lg: '75%'
            };
            const ySizes = {
                xs: '102%',
                sm: '105%',
                md: '115%',
                lg: '125%'
            };
            return {
                '--motion-loop-scale-x': pickSize(size, xSizes),
                '--motion-loop-scale-y': pickSize(size, ySizes),
                '--motion-scale-timing': 'var(--motion-spring-bouncier)',
                '--motion-scale-perceptual-duration-multiplier': springPerceptualMultipliers['var(--motion-spring-bouncier)'],
                '--motion-scale-loop-animation': scaleLoopAnimation('mirror'),
                'animation': 'var(--motion-all-loop-and-enter-animations)'
            };
        }, { autocomplete: ['motion-preset-stretch-(xs|sm|md|lg)'] }],

        // FLOAT
        [/^motion-preset-float(?:-([^<>\s]+))?$/, ([, size = 'md']) => {
            const sizes = {
                xs: '25%',
                sm: '50%',
                md: '100%',
                lg: '150%'
            };
            return {
                '--motion-loop-translate-y': pickSize(size, sizes),
                '--motion-translate-timing': 'var(--motion-spring-bouncier)',
                '--motion-translate-perceptual-duration-multiplier': springPerceptualMultipliers['var(--motion-spring-bouncier)'],
                '--motion-duration': '2000ms',
                '--motion-translate-loop-animation': translateLoopAnimation('mirror'),
                'animation': 'var(--motion-all-loop-and-enter-animations)'
            };
        }, { autocomplete: ['motion-preset-float-(xs|sm|md|lg)', 'motion-preset-float-[<num>]'] }],

        
        // SPIN
        [/^motion-preset-spin$/, () => {
            return {
                '--motion-loop-rotate': '360deg',
                '--motion-timing': 'linear',
                '--motion-rotate-loop-animation': rotateLoopAnimation('reset'),
                'animation': 'var(--motion-all-loop-and-enter-animations)'
            };
        }, { autocomplete: 'motion-preset-spin' }],

        // BLINK  
        [/^motion-preset-blink$/, () => {
            return {
                '--motion-loop-opacity': '0.001', // Use 0.001 instead of 0 to avoid Lighthouse CLS false positives
                '--motion-opacity-loop-animation': opacityLoopAnimation('mirror'),
                'animation': 'var(--motion-all-loop-and-enter-animations)'
            };
        }, { autocomplete: 'motion-preset-blink' }],

        

        // TYPEWRITER
        [/^motion-preset-typewriter-\[([^<>\s]+)\]$/, ([, value], ctx) => {
            return `
                ${withVariants(ctx, (selector) => `
                ${selector} {
                    --motion-duration: 2000ms;
                    --motion-typewriter-value: ${value}ch;
                    animation: typing var(--motion-duration) steps(${value}) var(--motion-loop-count), blink 0.4s step-end infinite alternate;
                    white-space: nowrap;
                    border-right: 2px solid;
                    overflow: hidden;
                }
                `)}

                @keyframes typing {
                    10%, 90% { width: 0; }
                    40%, 60% { width: calc(var(--motion-typewriter-value) + 1px); }
                }
                @keyframes blink {
                    50% { border-color: transparent; }
                }
            `;
        }, { autocomplete: 'motion-preset-typewriter-[<num>]' }],

        // FLOMOJI
        [/^motion-preset-flomoji(-\[([^<>\s]+)\]|-([^<>\s]+))$/, ([, , arbitraryValue, presetValue], ctx) => {
            // Use the arbitrary value if provided, otherwise use the preset value
            let emoji = arbitraryValue || presetValue;
            
            return `
                ${withVariants(ctx, (selector) => `
                ${selector} {
                    position: relative;
                }
                ${selector}:before {
                    content: "${emoji}";
                    animation: emojiAnim 3000ms infinite cubic-bezier(0, 0.2, 0.2, 1) both;
                    top: 0px;
                    left: 0px;
                    display: block;
                    position: absolute;
                    z-index: 1000;
                    background: rgba(255,255,255,0.3);
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 100%;
                    padding: 2px;
                    padding-bottom: 6px;
                }
                `)}
                @keyframes emojiAnim {
                    0% { transform: translateY(-200%) rotate(60deg); }
                    30% { transform: rotate(50deg); }
                    40% { transform: rotate(55deg); }
                    50% { transform: rotate(45deg); }
                    60% { transform: rotate(40deg); }
                    100% { transform: translateY(-200%) rotate(25deg); }
                }
            `;
        }, { autocomplete: ['motion-preset-flomoji-👉', 'motion-preset-flomoji-🚀', 'motion-preset-flomoji-👀', 'motion-preset-flomoji-👍'] }],













        /*===================================
        *                                 *
        *          SMART EXTRAS           *
        *                                 *
        ===================================*/
        // Pause rule (short hand)
        ['pause', {
            'animation-play-state': 'paused !important',
        }, { autocomplete: 'pause' }],
        ['play', {
            'animation-play-state': 'running !important',
        }, { autocomplete: 'play' }],

        ['motion-group', {
            '--motion-scope': '1',
        }, { autocomplete: 'motion-group' }],

        ['motion-repeat', {
            '--motion-repeat': '1',
            '--motion-repeat-delay': '0ms',
            '--motion-repeat-count': 'infinite',
        }, { autocomplete: 'motion-repeat' }],
        [/^motion-repeat-delay(?:-([^<>\s]+?))?$/, ([, value = 'DEFAULT'], { theme }) => {
            return { '--motion-repeat-delay': resolveTimeValue(value, theme, '0ms') };
        }, { autocomplete: ['motion-repeat-delay', 'motion-repeat-delay-(500|1000|1500|2000)', 'motion-repeat-delay-[<num>]'] }],
        [/^motion-repeat-count(?:-([^<>\s]+?))?$/, ([, value = 'infinite'], { theme }) => {
            return { '--motion-repeat-count': theme.animationLoopCount[value] || value };
        }, { autocomplete: ['motion-repeat-count-infinite', 'motion-repeat-count-(2|3|4|5)', 'motion-repeat-count-[<num>]'] }],

        // Wait is ideal for loading animations... just add and then remove when you want it to run...
        [/^wait$/, (_, ctx) => withVariants(ctx, (sel) => `
            ${sel}, ${sel}::before, ${sel}::after,
            ${sel} *, ${sel} *::before, ${sel} *::after {
                animation-play-state: paused !important;
            }
        `), { autocomplete: 'wait' }],

        // Extra for super pausing...
        [/^still$/, (_, ctx) => withVariants(ctx, (sel) => `
            ${sel}, ${sel}::before, ${sel}::after,
            ${sel} *, ${sel} *::before, ${sel} *::after {
                --motion-duration: 0ms !important;
                --motion-delay: 0ms !important;
                animation-duration: 0ms !important;
                animation-delay: 0ms !important;
                transition-duration: 0ms !important;
                transition-delay: 0ms !important;
            }
        `), { autocomplete: 'still' }],




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
                // Reverted to `*, ::before, ::after` because :root scoping
                // exposed a bug somewhere (under investigation). Step chain
                // preflight stays on :root since cross-element stepping needs
                // inheritance; we'll fix the regression separately.
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
                            --motion-duration: 0s !important;
                            --motion-delay: 0s !important;
                            animation-duration: 0s !important;
                            animation-delay: 0s !important;
                            transition-duration: 0s !important;
                            transition-delay: 0s !important;
                        }
                    }
                `
            }
        },
        // Sequential step timing — per-step CSS vars (cumulative chain),
        // emitted only up to the highest step N actually used in the project.
        {
            getCSS: () => buildStepPreflight(_motionStepMax)
        },
        {
            getCSS: () => Array.from({ length: _motionStepMax }, (_, i) => stepKeyframeCSS(i + 1)).join('\n')
        },
    ],
    variants: [
        // step-N:  — sequential animation steps.
        // Strips the prefix, body transform threads per-step delay/duration
        // overrides into the underlying motion class. See transformStepBody.
        (matcher) => {
            const m = /^step-(\d+):/.exec(matcher)
            if (!m) return matcher
            const rest = matcher.slice(m[0].length)
            // Only apply to motion-* classes (and negative -motion-*); skip
            // anything else so users can't accidentally step random utilities.
            if (!rest.startsWith('motion-') && !rest.startsWith('-motion-')) return matcher
            const N = +m[1]
            if (N < 1) return matcher
            if (N > _motionStepMax) _motionStepMax = N
            return {
                matcher: rest,
                body: (entries) => transformStepBody(entries, N, rest),
            }
        },
    ],
})

export default presetTailwindMotion
