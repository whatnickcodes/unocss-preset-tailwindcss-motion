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

[Giant Test Page](https://animations.tips.io)


## Why?

I needed a solid animation library for my side project that is heavily UnoCSS dependent. UnoCSS is truly a work of art and so is this library. Now you can have both. More on side project soon.

## Features

### Base Animations

#### Scale
```
motion-scale-in
motion-scale-in-(0|50|75|90|95|100|105|110|125|150)
motion-scale-in-[0.82|1.337|2.5] // JIT
```

#### Scale X
```
motion-scale-x-in
motion-scale-x-in-(0|50|75|90|95|100|105|110|125|150)
motion-scale-x-in-[0.82|1.337|2.5] // JIT
```

#### Scale Y
```
motion-scale-y-in
motion-scale-y-in-(0|50|75|90|95|100|105|110|125|150)
motion-scale-y-in-[0.82|1.337|2.5] // JIT
```

#### Scale Out
```
motion-scale-out
motion-scale-out-(0|50|75|90|95|100|105|110|125|150)
motion-scale-out-[0.82|1.337|2.5] // JIT
```

#### Scale X Out
```
motion-scale-x-out
motion-scale-x-out-(0|50|75|90|95|100|105|110|125|150)
motion-scale-x-out-[0.82|1.337|2.5] // JIT
```

#### Scale Y Out
```
motion-scale-y-out
motion-scale-y-out-(0|50|75|90|95|100|105|110|125|150)
motion-scale-y-out-[0.82|1.337|2.5] // JIT
```

#### Scale Loop
```
motion-scale-loop
motion-scale-loop-(0|50|75|90|95|100|105|110|125|150)
motion-scale-loop-[0.82|1.337|2.5] // JIT
motion-scale-loop-(0|50|75|2.5)/mirror
motion-scale-loop-(0|50|75|2.5)/reset
```

#### Scale X Loop
```
motion-scale-x-loop
motion-scale-x-loop-(0|50|75|2.5)
motion-scale-x-loop-(0|50|75|2.5)/mirror
motion-scale-x-loop-(0|50|75|2.5)/reset
```

#### Scale Y Loop
```
motion-scale-y-loop
motion-scale-y-loop-(0|50|75|2.5)
motion-scale-y-loop-(0|50|75|2.5)/mirror
motion-scale-y-loop-(0|50|75|2.5)/reset
```

#### Translate X In
```
motion-translate-x-in
motion-translate-x-in-(0|25|50|75|100|150)
motion-translate-x-in-[42px|13rem|27vw]
-motion-translate-x-in-50
motion-translate-x-in-[-15rem]
-motion-translate-x-in-[42px]
```

#### Translate Y In
```
motion-translate-y-in
motion-translate-y-in-(0|25|50|75|100|150)
motion-translate-y-in-[88vh|23px|7.5em]
-motion-translate-y-in-75
motion-translate-y-in-[-42vh]
-motion-translate-y-in-[65px]
```

#### Translate X Out
```
motion-translate-x-out
motion-translate-x-out-(0|25|50|75|100|150)
motion-translate-x-out-[42px]
-motion-translate-x-out-50
motion-translate-x-out-[-15rem]
```

#### Translate Y Out
```
motion-translate-y-out
motion-translate-y-out-(0|25|50|75|100|150)
motion-translate-y-out-[88vh]
-motion-translate-y-out-75
motion-translate-y-out-[-42vh]
```

#### Translate X Loop
```
motion-translate-x-loop
motion-translate-x-loop-(0|25|50|75|100|150)
motion-translate-x-loop-[42px]
-motion-translate-x-loop-50
motion-translate-x-loop-[-15rem]
motion-translate-x-loop-25/mirror
motion-translate-x-loop-50/reset
motion-translate-x-loop-[42px]/mirror
motion-translate-x-loop-[-15rem]/reset
```

#### Translate Y Loop
```
motion-translate-y-loop
motion-translate-y-loop-(0|25|50|75|100|150)
-motion-translate-y-loop-150
motion-translate-y-loop-[88vh]
-motion-translate-y-loop-75
motion-translate-y-loop-[-42vh]
motion-translate-y-loop-25/mirror
motion-translate-y-loop-50/reset
motion-translate-y-loop-[88vh]/mirror
motion-translate-y-loop-[-42vh]/reset
```

#### Rotate In
```
motion-rotate-in
motion-rotate-in-(0|1|2|3|6|12|45|90|180)
motion-rotate-in-[42deg]
-motion-rotate-in-45
motion-rotate-in-[-15deg]
```

#### Rotate Out
```
motion-rotate-out
motion-rotate-out-(0|1|2|3|6|12|45|90|180)
motion-rotate-out-[42deg]
-motion-rotate-out-45
motion-rotate-out-[-15deg]
```

#### Rotate Loop
```
motion-rotate-loop
motion-rotate-loop-(0|1|2|3|6|12|45|90|180)
motion-rotate-loop-[42deg]
-motion-rotate-loop-45
motion-rotate-loop-[-15deg]
motion-rotate-loop-25/mirror
motion-rotate-loop-50/reset
motion-rotate-loop-[42deg]/mirror
motion-rotate-loop-[-15deg]/reset
```

#### Opacity In
```
motion-opacity-in
motion-opacity-in-(0|25|50|75|100)
motion-opacity-in-[0.42|33%|0.875] // JIT
```

#### Opacity Out
```
motion-opacity-out
motion-opacity-out-(0|25|50|75|100)
motion-opacity-out-[0.42|33%|0.875] // JIT
```

#### Opacity Loop
```
motion-opacity-loop
motion-opacity-loop-(0|25|50|75|100)
motion-opacity-loop-[0.42|33%|0.875] // JIT
motion-opacity-loop-25/mirror
motion-opacity-loop-50/reset
motion-opacity-loop-[0.42]/mirror
motion-opacity-loop-[33%]/reset
```

#### Blur In
```
motion-blur-in
motion-blur-in-(sm|md|lg|xl|2xl)
motion-blur-in-[5px|10px|15px]
```

#### Blur Out
```
motion-blur-out
motion-blur-out-(sm|md|lg|xl|2xl)
motion-blur-out-[5px|10px|15px]
```

#### Blur Loop
```
motion-blur-loop
motion-blur-loop-(sm|md|lg|xl|2xl)
motion-blur-loop-[5px|10px|15px]
motion-blur-loop-sm/mirror
motion-blur-loop-md/reset
motion-blur-loop-[5px]/mirror
motion-blur-loop-[10px]/reset
```

#### Text In
```
motion-text-in
motion-text-in-(red-500|blue-500|green-500|purple-500)
motion-text-in-[#ff0000|#0000ff|#00ff00|#800080]
```

#### Text Out
```
motion-text-out
motion-text-out-(red-500|blue-500|green-500|purple-500)
motion-text-out-[#ff0000|#0000ff|#00ff00|#800080]
```

#### Text Loop
```
motion-text-loop
motion-text-loop-(red-500|blue-500|green-500|purple-500)
motion-text-loop-[#ff0000|#0000ff|#00ff00|#800080]
motion-text-loop-red-500/mirror
motion-text-loop-blue-500/reset
motion-text-loop-[#ff0000]/mirror
motion-text-loop-[#0000ff]/reset
```

#### Background In
```
motion-bg-in
motion-bg-in-(red-500|blue-500|green-500|purple-500)
motion-bg-in-[#ff0000|#0000ff|#00ff00|#800080]
```

#### Background Out
```
motion-bg-out
motion-bg-out-(red-500|blue-500|green-500|purple-500)
motion-bg-out-[#ff0000|#0000ff|#00ff00|#800080]
```

#### Background Loop
```
motion-bg-loop
motion-bg-loop-(red-500|blue-500|green-500|purple-500)
motion-bg-loop-[#ff0000|#0000ff|#00ff00|#800080]
motion-bg-loop-red-500/mirror
motion-bg-loop-blue-500/reset
motion-bg-loop-[#ff0000]/mirror
motion-bg-loop-[#0000ff]/reset
```

#### Grayscale In
```
motion-grayscale-in
motion-grayscale-in-(0|25|50|75|100)
motion-grayscale-in-[0.42|33%|0.875] // JIT
```

#### Grayscale Out
```
motion-grayscale-out
motion-grayscale-out-(0|25|50|75|100)
motion-grayscale-out-[0.42|33%|0.875] // JIT
```

#### Grayscale Loop
```
motion-grayscale-loop
motion-grayscale-loop-(0|25|50|75|100)
motion-grayscale-loop-[0.42|33%|0.875] // JIT
motion-grayscale-loop-25/mirror
motion-grayscale-loop-50/reset
motion-grayscale-loop-[0.42]/mirror
motion-grayscale-loop-[33%]/reset
```

#### Preset Animations

##### Slide
```
motion-preset-slide-down
motion-preset-slide-down-(sm|md|lg)
motion-preset-slide-up-right
motion-preset-slide-up-right-(sm|md|lg)
motion-preset-slide-up-left
motion-preset-slide-up-left-(sm|md|lg)
motion-preset-slide-down-left
motion-preset-slide-down-left-(sm|md|lg)
motion-preset-slide-down-right
motion-preset-slide-down-right-(sm|md|lg)
```

##### Focus
```
motion-preset-focus
motion-preset-focus-(sm|md|lg)
```

##### Blur
```
motion-preset-blur-right
motion-preset-blur-right-(sm|md|lg)
motion-preset-blur-left
motion-preset-blur-left-(sm|md|lg)
motion-preset-blur-up
motion-preset-blur-up-(sm|md|lg)
motion-preset-blur-down
motion-preset-blur-down-(sm|md|lg)
```

##### Rebound
```
motion-preset-rebound
motion-preset-rebound-(right|left|up|down)
```

##### Bounce
```
motion-preset-bounce
```

##### Expand
```
motion-preset-expand
```

##### Shrink
```
motion-preset-shrink
```

##### Pop
```
motion-preset-pop
```

##### Compress
```
motion-preset-compress
```

##### Shake
```
motion-preset-shake
```

##### Wiggle
```
motion-preset-wiggle
```

##### Confetti
```
motion-preset-confetti
```

##### Pulse
```
motion-preset-pulse
motion-preset-pulse-(sm|md|lg)
```

##### Wobble
```
motion-preset-wobble
motion-preset-wobble-(sm|md|lg)
```

##### Seesaw
```
motion-preset-seesaw
motion-preset-seesaw-(sm|md|lg)
```

##### Oscillate
```
motion-preset-oscillate
motion-preset-oscillate-(sm|md|lg)
```

##### Stretch
```
motion-preset-stretch
motion-preset-stretch-(sm|md|lg)
```

##### Float
```
motion-preset-float
motion-preset-float-(sm|md|lg)
```

##### Spin
```
motion-preset-spin
```

##### Blink
```
motion-preset-blink
```

##### Typewriter
```
motion-preset-typewriter-[<number of letters>]
```

##### Flomoji
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

#### Mirror and Reset
- **Mirror**: Reverses the animation direction after completion.
  - Example: `motion-scale-loop-50/mirror`
- **Reset**: Resets the animation to its initial state after completion.
  - Example: `motion-scale-loop-50/reset`

### Combining Animations
```
motion-scale-in-75 motion-translate-y-in-100 motion-rotate-in-90 motion-blur-in-md motion-opacity-in-0
motion-opacity-in-0 motion-translate-y-in-100 motion-scale-in-150 motion-rotate-in-180 motion-grayscale-in-75
motion-scale-in-75 motion-rotate-in-180 motion-translate-x-in-100 motion-blur-in-lg motion-bg-in-blue-500
motion-translate-x-in-100 motion-translate-y-in-50 motion-scale-in-125 motion-rotate-in-45 motion-text-in-purple-500
motion-preset-pop motion-preset-slide-up motion-preset-focus motion-delay-100
motion-preset-shake motion-preset-blur-right motion-preset-stretch motion-delay-200
motion-preset-wiggle motion-preset-slide-down motion-preset-blink motion-delay-150
motion-preset-pop motion-translate-y-loop-50 motion-scale-in-150 motion-rotate-in-360 motion-blur-in-xl
motion-preset-compress motion-translate-x-loop-75 motion-scale-loop-125 motion-rotate-loop-180 motion-delay-100
motion-preset-stretch motion-scale-in-[250%] motion-rotate-in-[720deg] motion-blur-in-[15px] motion-grayscale-in-100
motion-preset-oscillate motion-translate-x-in-[150%] motion-translate-y-in-[150%] motion-scale-in-[175%] motion-rotate-in-[1080deg]
motion-preset-slide-up motion-preset-blur-up motion-scale-in-[300%] motion-rotate-loop-[360deg] motion-delay-150
```



#### Animation State
```
motion-paused
motion-running
```

### Smart Extras

These are not part of the original library, see "What's Different" below for more info:

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

Tailwind compiles `:root {}` and `::backdrop {}` separately for variables since browsers treat them as distinct contexts. Unfortunately, you can't even do something like this `:root, ::backdrop {}` as that does not work.

That's a lot of bytes to do twice... So we skip `::backdrop`. It's rarely used anyway by people.

### typewriter effect supports custom fonts

Unlike the original library, this version doesn't set `font-family: monospace;` for the typewriter effect. This allows for greater flexibility in font choices and the animation, however it may require minor adjustments if spacing issues occur with various custom fonts. You can just do this instead:

```
motion-preset-typewriter-[29] font-mono
```

### confetti doesn't set margin and block

The preset `motion-preset-confetti` normally applies `display: block` and `margin: 0;`. This makes a ton of sense but also can be annoying because it can mess the layout when applying these animations (which goal wise we ideally don't want layout to ever shift when applying an animation). You can instead do this if you want it back perfectly to original:

```
motion-preset-confetti block m-0
```

### Flomoji is back and our version supports JIT

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