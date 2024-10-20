# 😍 unocss-preset-tailwindcss-motion 😍 

![Motion Animation Preview](https://github.com/whatnickcodes/unocss-preset-tailwindcss-motion/blob/HEAD/cover.png?raw=true)

Port of the most beautiful animation Tailwind library [tailwindcss-motion](https://github.com/romboHQ/tailwindcss-motion) by @romboHQ.

## Get Started

This is for UnoCSS folks but should be really easy if you are familiar. Simply add the preset to your UnoCSS config.

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

## Demo

Coming soon. A big fancy demo and doc page will be coming soon. For now, please just reference the README and the index.html file.



## Why?

I needed a solid animation library for my side project that is heavily UnoCSS dependent. UnoCSS is truly a work of art and so is this library. Now you can have both. More on side project soon.

## Features

- Fully ported support as of 10/17/2024!
- Autocomplete (for UnoCSS people who need it)

Reference their docs, but here's the fast gist:

### Presets (easy combined ones)
- `motion-preset-fade(-sm|-md|-lg)?`
- `motion-preset-slide-(right|left|up|down)(-sm|-md|-lg)?`
- `motion-preset-slide-(up-right|up-left|down-left|down-right)(-sm|-md|-lg)?`
- `motion-preset-focus(-sm|-md|-lg)?`
- `motion-preset-blur-(right|left|up|down)(-sm|-md|-lg)?`
- `motion-preset-rebound-(right|left|up|down)(-sm|-md|-lg)?`
- `motion-preset-bounce`
- `motion-preset-expand`
- `motion-preset-shrink`
- `motion-preset-pop`
- `motion-preset-compress`
- `motion-preset-shake`
- `motion-preset-wiggle`
- `motion-preset-confetti`
- `motion-preset-typewriter-[<num>]`
- `motion-preset-flomoji-<emoji>`

### Base Animations

#### Scale
- `motion-scale-in(-<num>)?`
- `motion-scale-x-in(-<num>)?`
- `motion-scale-y-in(-<num>)?`
- `motion-scale-out(-<num>)?`
- `motion-scale-x-out(-<num>)?`
- `motion-scale-y-out(-<num>)?`

#### Translate
- `motion-translate-x-in(-<num>)?`
- `motion-translate-y-in(-<num>)?`
- `motion-translate-x-out(-<num>)?`
- `motion-translate-y-out(-<num>)?`

#### Rotate
- `motion-rotate-in(-<num>)?`
- `motion-rotate-out(-<num>)?`

#### Blur
- `motion-blur-in(-sm|-md|-lg|-xl|-2xl|-3xl)?`
- `motion-blur-out(-sm|-md|-lg|-xl|-2xl|-3xl)?`

#### Grayscale
- `motion-grayscale-in(-<num>)?`
- `motion-grayscale-out(-<num>)?`

#### Opacity
- `motion-opacity-in(-<num>)?`
- `motion-opacity-out(-<num>)?`

#### Background Color
- `motion-bg-in(-<color>)?`
- `motion-bg-out(-<color>)?`

#### Text Color
- `motion-text-in(-<color>)?`
- `motion-text-out(-<color>)?`

### Modifiers

#### Duration
- `motion-duration(-<num>)?`
- `motion-duration(-<num>)?/(scale|translate|rotate|blur|grayscale|opacity|background|text)`

#### Delay
- `motion-delay(-<num>)?`
- `motion-delay(-<num>)?/(scale|translate|rotate|blur|grayscale|opacity|background|text)`

#### Easing
- `motion-ease(-<easing>)?`
- `motion-ease(-<easing>)?/(scale|translate|rotate|blur|grayscale|opacity|background|text)`

### Smart Extras
- `.pause`
- `.play`
- `.wait`
- `.still`

### Example Combos

1. Scale, Slide Up & Rotate:
```html
<div class="motion-scale-in-75 motion-translate-y-in-100 motion-rotate-in-90">
```

2. Fade In & Slide Up:
```html
<div class="motion-opacity-in-0 motion-translate-y-in-100">
```

3. Zoom In & Rotate:
```html
<div class="motion-scale-in-75 motion-rotate-in-180">
```

4. Slide In & Blur:
```html
<div class="motion-translate-x-in-100 motion-blur-in-sm">
```

5. Pop & Color Change:
```html
<div class="motion-preset-pop motion-bg-in-sky-300">
```

6. Long Duration Rotate:
```html
<div class="motion-duration-2000 motion-rotate-in-180">
```

7. Delayed Fade In:
```html
<div class="motion-delay-500 motion-opacity-in-0">
```

8. Bouncy Scale:
```html
<div class="motion-timing-spring-bouncy motion-scale-in-75">
```

9. Combined Modifiers:
```html
<div class="motion-duration-2000 motion-rotate-in-180 motion-opacity-in-0">
```

10. Property-Specific Modifier:
```html
<div class="motion-delay-500/rotate motion-rotate-in-180 motion-opacity-in-0">
```

These combinations showcase how different motion classes can be combined to create complex animations. You can mix and match presets, base animations, modifiers, and easing functions to achieve the desired effect.




## What's different?

Not much. This should be near identical for 99% of purposes.

### prefers-reduced-motion

Currently, tailwindcss-motion manually applies the `@media screen and (prefers-reduced-motion: no-preference)` on [various animations](https://github.com/romboHQ/tailwindcss-motion/blob/main/src/keyframes.js) that have basically big translates. It's also applied on some of [their custom one-off](https://github.com/romboHQ/tailwindcss-motion/blob/main/src/presets.js) more fun animations like the emoji dancing one.

Rather than doing that, this library will automatically apply the following for simplicity:

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

If you prefer the other way, please create an issue and I can explain how to rebuild this with it or point you in the direction. This was a purposeful choice on my part.

### ::backdrop

I can't remember exactly where, possibly the Tailwind build process, but I don't manually add `::backdrop` to the CSS variables and just have it live at `::root` instead only. This is to save on size as it's rarely ever needed or used. I believe the Tailwind plugin will use ::backdrop though.

### Extra Classes

There's not a super solid way to on/off animations currently without completely adding/removing possibly multiple classes. For certain Tailwind environments, this is probably not an issue. For my purposes, I needed a simpler way to do "activate" the animation, like to easily trigger when it is scrollable viewport. It makes sense part of the library.

This may change in future versions:

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

## Testing

- The folder `tailwindcss-motion-detached-for-reference` is just for easy file comparison and is not used.
- To dev it up here just run `npm run dev`
- To see the test file, just run `open-test`
- For more, reference `package.json`. This may get more sophisticated later but does have a 1 vs the other mode.


## License

In honor of original library this is MIT.

## More

Via x.com/@whatnicktweets

https://www.npmjs.com/package/unocss-preset-tailwindcss-motion