# 😍 unocss-preset-tailwindcss-motion 😍 

![Motion Animation Preview](https://github.com/whatnickcodes/unocss-preset-tailwindcss-motion/blob/HEAD/cover.png?raw=true)

Port of the most beautiful animation Tailwind library [tailwindcss-motion](https://github.com/romboHQ/tailwindcss-motion) by @romboHQ.

## Get Started

This is for UnoCSS folks but should be really easy if you are familiar. Simply add the preset to your UnoCSS config via our [NPM package](https://www.npmjs.com/package/unocss-preset-tailwindcss-motion).

```bash
npm i -D unocss-preset-tailwindcss-motion
```

```js
import { presetTailwindMotion } from 'unocss-preset-tailwindcss-motion'


export default defineConfig({
    presets: [
        presetUno(),
        presetTailwindMotion()
    ],
})
```

## Changelog

It is now updated to match `v4` of the Tailwind plugin.


## Demo

Coming soon. A big fancy demo and doc page will be coming soon. For now, please just reference the README and the `test/index.html file.`


## Why?

I needed a solid animation library for my side project that is heavily UnoCSS dependent. UnoCSS is truly a work of art and so is this library. Now you can have both. More on side project soon.

## Features

### Base Animations

#### Scale
```
motion-scale-in
motion-scale-in-(0|25|50|75|90|95|100|105|110|125|150)
```

#### Scale X
```
motion-scale-x-in
motion-scale-x-in-(0|25|50|75|90|95|100|105|110|125|150)
```

#### Scale Y
```
motion-scale-y-in
motion-scale-y-in-(0|25|50|75|90|95|100|105|110|125|150)
```

#### Scale Out
```
motion-scale-out
motion-scale-out-(0|25|50|75|90|95|100|105|110|125|150)
```

#### Scale Loop
```
motion-scale-loop
motion-scale-loop-(0|25|50|75|90|95|100|105|110|125|150)/mirror
motion-scale-loop-(0|25|50|75|90|95|100|105|110|125|150)/reset
```

#### Translate
```
motion-translate-x-in
motion-translate-x-in-(0|25|50|75|100|150)

motion-translate-y-in
motion-translate-y-in-(0|25|50|75|100|150)

motion-translate-x-out
motion-translate-x-out-(0|25|50|75|100|150)

motion-translate-y-out
motion-translate-y-out-(0|25|50|75|100|150)

motion-translate-x-loop
motion-translate-x-loop-(0|25|50|75|100|150)
motion-translate-x-loop-(0|25|50|75|100|150)/mirror
motion-translate-x-loop-(0|25|50|75|100|150)/reset
```

#### Rotate
```
motion-rotate-in
motion-rotate-in-(0|1|2|3|6|12|45|90|180|360)

motion-rotate-out
motion-rotate-out-(0|1|2|3|6|12|45|90|180|360)

motion-rotate-loop
motion-rotate-loop-(0|1|2|3|6|12|45|90|180|360)
motion-rotate-loop-(0|1|2|3|6|12|45|90|180|360)/mirror
motion-rotate-loop-(0|1|2|3|6|12|45|90|180|360)/reset
```

#### Blur
```
motion-blur-in
motion-blur-in-(0|none|sm|md|lg|xl|2xl|3xl)

motion-blur-out
motion-blur-out-(0|none|sm|md|lg|xl|2xl|3xl)

motion-blur-loop
motion-blur-loop-(0|none|sm|md|lg|xl|2xl|3xl)
motion-blur-loop-(0|none|sm|md|lg|xl|2xl|3xl)/mirror
motion-blur-loop-(0|none|sm|md|lg|xl|2xl|3xl)/reset
```

#### Background Color
```
motion-bg-in
motion-bg-in-{color}-{shade}

motion-bg-out
motion-bg-out-{color}-{shade}

motion-bg-loop
motion-bg-loop-{color}-{shade}
motion-bg-loop-{color}-{shade}/mirror
motion-bg-loop-{color}-{shade}/reset
```

#### Text Color
```
motion-text-in
motion-text-in-{color}-{shade}

motion-text-out
motion-text-out-{color}-{shade}

motion-text-loop
motion-text-loop-{color}-{shade}
motion-text-loop-{color}-{shade}/mirror
motion-text-loop-{color}-{shade}/reset
```

### Presets
```
motion-preset-fade
motion-preset-fade-(sm|md|lg)

motion-preset-slide-right
motion-preset-slide-right-(sm|md|lg)

motion-preset-slide-left
motion-preset-slide-left-(sm|md|lg)

motion-preset-slide-up
motion-preset-slide-up-(sm|md|lg)

motion-preset-slide-down
motion-preset-slide-down-(sm|md|lg)

motion-preset-focus
motion-preset-focus-(sm|md|lg)

motion-preset-blur-right
motion-preset-blur-right-(sm|md|lg)

motion-preset-blur-left
motion-preset-blur-left-(sm|md|lg)

motion-preset-blur-up
motion-preset-blur-up-(sm|md|lg)

motion-preset-blur-down
motion-preset-blur-down-(sm|md|lg)

motion-preset-stretch
motion-preset-stretch-(sm|md|lg)

motion-preset-blink
motion-preset-blink-(sm|md|lg)

motion-preset-pop

motion-preset-compress

motion-preset-shake

motion-preset-wiggle

motion-preset-confetti

motion-preset-pulse
motion-preset-pulse-(sm|md|lg)

motion-preset-wobble
motion-preset-wobble-(sm|md|lg)

motion-preset-seesaw
motion-preset-seesaw-(sm|md|lg)

motion-preset-oscillate
```

### Modifiers

#### Duration
```
motion-duration
motion-duration-(75|100|150|200|300|500|700|1000)
motion-duration-(75|100|150|200|300|500|700|1000)/(scale|translate|rotate|blur|grayscale|opacity|background|text)
```

#### Delay
```
motion-delay
motion-delay-(75|100|150|200|300|500|700|1000)
motion-delay-(75|100|150|200|300|500|700|1000)/(scale|translate|rotate|blur|grayscale|opacity|background|text)
```

#### Easing
```
motion-ease-(linear|in|out|in-out)
motion-ease-(spring-smooth|spring-snappy|spring-bouncy|spring-bouncier|spring-bounciest|bounce)
motion-ease-(linear|in|out|in-out)/(scale|translate|rotate|blur|grayscale|opacity|background|text)
```

#### Loop
```
motion-loop
motion-loop-infinite
motion-loop-[number]
motion-loop-(infinite|number)/(scale|translate|rotate|blur|grayscale|opacity|background|text)
```

#### Animation State
```
motion-paused
motion-running
```

### Smart Extras
```css
/* Short-hand pause */
.pause

/* Short-hand paly */
.play

/* Same as pause, but better name - meant to be used with JS to "remove this class" to trigger the animation */
.wait

/* Motion = 0, Completes the animations forcefully, this is technically different than pause */
.still
```

## What's different?

Not much. This should be near identical for 99% of purposes.

### prefers-reduced-motion

Currently, tailwindcss-motion manually applies the `@media screen and (prefers-reduced-motion: no-preference)` on [various keyframes](https://github.com/romboHQ/tailwindcss-motion/blob/main/src/keyframes.js) that have basically big translates. It's also applied on some of [their custom one-off](https://github.com/romboHQ/tailwindcss-motion/blob/main/src/presets.js) more fun animations (Flomoji, Typewriter).

Rather than doing that, this library will automatically add the following for simplicity to your CSS:

```css
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
```

### ::backdrop

Tailwind *I think* compiles to both `:root {}` and `::backdrop {}` separately for variables. Because of how browsers work, you can't even do this they are treated separately: `:root, ::backdrop {}`. That's a lot of extra bytes... So we purposely skip `::backdrop` it is rarely used.

### typewriter effect supports custom fonts

Unlike the original library, this version doesn't set `font-family: monospace;` for the typewriter effect. This allows for greater flexibility in font choices and the animation, however it may require minor adjustments if spacing issues occur with various custom fonts. You can just do this instead:

```
motion-preset-typewriter-[29] font-mono
```

### confetti doesn't set margin and block

The preset `motion-preset-confetti` normally applies `display: block` and `margin: 0;`. This makes a ton of sense but also can be annoying because it can mess the layout when applying these animations (which goal wise we ideally don't want to happen). You can instead do this if you want it back perfectly:

```
motion-preset-confetti block m-0
```

### Flomoji is back and supports JIT

For maximum port, I decided to add Flomoji back and with JIT support:

```
motion-preset-flomoji-👉
motion-preset-flomoji-🚀
motion-preset-flomoji-👀
motion-preset-flomoji-👍
motion-preset-flomoji-[🎉]
motion-preset-flomoji-[🌟]
motion-preset-flomoji-[🎸]
motion-preset-flomoji-[Woah!]
```

### Smart Classes

These are extra short-hands. Note that still and pause (or motion-pause) are different.

```css
.pause { animation-play-state: paused; }
.play { animation-play-state: running; }

/* You'll need to manually remove "wait" with JS to use this helper when you want the animation to start */
/* This is excellent for when triggering when in viewport */
/* Note: wait also applies to ::before and ::after pseudo-attributes */
.wait, .wait * { animation-play-state: paused; }

/* Note: still also applies to ::before and ::after pseudo-attributes */
.still, .still * {
    --motion-duration: 0.01ms !important;
    --motion-delay: 0ms !important;
    animation-duration: 0.01ms !important;
    animation-delay: 0ms !important;
    transition-duration: 0.01ms !important;
    transition-delay: 0ms !important;
}
```

## Contributing

- The folder tailwind is for the tailwind styles, `tailwindcss-motion-reference` is detached just for easy file comparison and is not used.
- To dev it up here... just run `npm run dev`
- To see the test file, just run `npm run serve`
- To build it all, just run `npm run build`
- For more, reference `package.json`. This may get more sophisticated later but does have a 1 vs the other mode.

## License

In honor of original library this is MIT.

## More

[Via x.com/@whatnicktweets](https://x.com/@whatnicktweets)

https://www.npmjs.com/package/unocss-preset-tailwindcss-motion