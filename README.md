# unocss-preset-tailwindcss-motion

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

## What This Adds

The base API tracks `v4` of the Tailwind plugin, then adds a few UnoCSS/Magic Fields focused pieces:

- Sequential steps with the `step-N:` variant. Example: `step-1:motion-preset-slide-up step-2:motion-preset-pop`.
- Grouped step timelines with `motion-group`. Groups read timing from any matching descendant, no matter how deeply nested.
- Same-element translate, rotate, and scale paths. Repeated `step-N:motion-preset-slide-up-lg` stacks upward, and repeated `step-N:motion-preset-expand` keeps growing instead of restarting from zero.
- Step timing offsets with `motion-gap-*` and `motion-overlap-*` for starting the next step later or earlier than the previous step end.
- Sequence repeat utilities: `motion-repeat`, `motion-repeat-delay-*`, `motion-repeat-count-*`, plus `dist/repeat.js` for replaying a completed step group.
- Time modifiers accept theme keys, raw millisecond values, raw seconds, and bracketed values: `motion-duration-5000`, `motion-duration-1s`, `motion-duration-[0.4s]`, `motion-delay-[250ms]`.
- Extra `xs` preset sizes, arbitrary preset values, reliable `wait`/`still`/pause/play overrides, fixed diagonal corner slides, fixed negative translate/rotate handling, and full UnoCSS variant support.
- Reduced motion hard-sets animation and transition durations/delays to `0s !important`.


## Demo

[Giant Test Page](https://animations.tips.io)

This repo also includes local torture pages. Run `npm run build`, serve this folder, then open:

- `test/docs.html` — source-derived class reference and options.
- `test/individual-animations.html` — base utilities, presets, arbitrary values, combinations, and Flomoji.
- `test/variants.html` — `hover:`, `focus:`, `group-hover:`, `peer-*`, `dark:`, responsive, structural, and stacked variants.
- `test/modifiers.html` — duration, delay, easing, loop, wait/still/pause/play, repeat, group, and step modifiers.
- `test/nested.html` — nested and unnested step/group behavior.
- `test/step-loops.html` — looping inside steps vs replaying a whole step sequence.
- `test/step-path-torture.html` — same-element paths, skipped steps, explicit exits, display-ad style timelines, and `wait` sanity checks.

For example:

```bash
npm run build
python3 -m http.server 1778
# http://127.0.0.1:1778/test/docs.html
```


## Why?

I needed a solid animation library for my side project that is heavily UnoCSS dependent. UnoCSS is truly a work of art and so is this library. Now you can have both. More on side project soon.

## Features

Please reference the [official plugin docs](https://github.com/romboHQ/tailwindcss-motion) for a better explanation. Basically it comes down to:

```html
<!--
PRESETS
These are easy perfectly built out-of-the-box animations.
-->
<div class="motion-preset-slide-up"></div>
<div class="motion-preset-bounce"></div>
<div class="motion-preset-confetti"></div>
Etc...


<!--
BASE ANIMATIONS
These are specific one-offs.
-->
<div class="motion-translate-y">Default</div>
<div class="motion-translate-y-75">Custom</div>
<div class="motion-translate-y-[25px]">JIT</div>

<div class="motion-rotate-in">Default</div>
<div class="motion-rotate-in-45">Custom</div>
<div class="motion-rotate-in-[69deg]">JIT support</div>
Etc...


<!--
COMBINING ANIMATIONS
The real power comes in combining these
-->
<div class="motion-translate-y-in motion-rotate-in-45"></div>


<!-- 
MODIFIERS
Adjust duration, spring, delay and loop modifiers
-->
<div class="motion-translate-y-in">Normal</div>
<div class="motion-translate-y-in motion-duration-2000">2000ms speed</div>
<div class="motion-translate-y-in motion-ease-spring-bouncy">Bouncy</div>
<div class="motion-translate-y-in motion-delay-300">300ms delay</div>
<div class="motion-translate-y-loop-75 motion-loop-twice">Loop 2x</div>
<div class="motion-translate-y-in motion-duration-2000 motion-ease-spring-bouncy">2000ms speed, bouncy</div>


<!--
SEQUENTIAL STEPS
Use step-N: to put motion utilities on a timeline.
-->
<div class="step-1:motion-preset-slide-up step-2:motion-preset-pop"></div>


<!--
GROUPED TIMELINES
Use motion-group when different descendants need to share one timeline.
-->
<div class="motion-group">
    <h1 class="step-1:motion-preset-slide-down-lg step-1:motion-duration-5000">Hello</h1>
    <h2 class="step-2:motion-preset-slide-up-sm">World</h2>
</div>

```

## Sequential Steps and Groups

Steps let you write a timeline directly in class names. Prefix any motion utility with `step-N:` and that utility runs in that numbered slot.

```html
<div class="step-1:motion-preset-fade step-2:motion-preset-slide-up step-3:motion-preset-pop">
    I fade, then slide, then pop.
</div>
```

No step prefix means normal motion behavior. One element with multiple `step-N:` utilities becomes a sequence on that element.

```html
<h1 class="step-1:motion-preset-slide-up-lg step-2:motion-preset-expand step-3:motion-preset-expand">
    Same element path
</h1>
```

A `motion-group` lets separate descendants share one sequence clock.

```html
<div class="motion-group">
    <h1 class="step-1:motion-preset-slide-down-lg step-1:motion-duration-5000">
        Hello
    </h1>

    <h2 class="step-2:motion-preset-slide-up-sm">
        World
    </h2>
</div>
```

In that example, `World` waits for step 1's 5000ms animation before step 2 starts. The group reads step timing modifiers from matching descendants anywhere inside the group, so nested wrappers are fine:

```html
<div class="motion-group">
    <div class="layout-wrapper">
        <h1 class="step-1:motion-preset-slide-up step-1:motion-duration-1000">
            Nested step 1
        </h1>
    </div>

    <section>
        <div>
            <p class="step-2:motion-preset-fade">
                Deeply nested step 2
            </p>
        </div>
    </section>
</div>
```

Without a group, each element computes its own timeline. That is useful when you want independent animations. Add `motion-group` when separate children should behave like one timeline.

```html
<!-- Unnested timelines: these do not wait for each other. -->
<h1 class="step-1:motion-preset-slide-up">One</h1>
<p class="step-2:motion-preset-fade">Two</p>

<!-- Shared timeline: Two waits for One. -->
<div class="motion-group">
    <h1 class="step-1:motion-preset-slide-up">One</h1>
    <p class="step-2:motion-preset-fade">Two</p>
</div>
```

Missing steps collapse to `0ms`. If a group has `step-1:` and `step-5:` only, step 5 starts as soon as step 1 ends unless you add an explicit gap/delay.

### How Steps Work

This is CSS-only. UnoCSS transforms the `step-N:` prefix at build time:

```html
<div class="step-1:motion-preset-fade step-2:motion-preset-slide-up"></div>
```

becomes step-scoped variables and animations:

```css
--motion-step-1-opacity-in-animation: motion-step-1-opacity-in ...;
--motion-step-2-translate-in-animation: motion-step-2-translate-in ...;
animation: var(--motion-all-loop-and-enter-animations),
           var(--motion-all-exit-animations),
           var(--motion-all-step-animations);
```

The generated preflight builds a cumulative clock:

```css
--motion-step-1-start: 0ms;
--motion-step-1-end: calc(var(--motion-step-1-resolved-delay) + var(--motion-step-1-active-duration));
--motion-step-2-start: calc(var(--motion-step-1-end) + var(--motion-step-2-offset));
```

`motion-group` uses `:has()` to hoist matching child step variables to the group:

```css
.motion-group:has(.step-1\:motion-duration-1000) {
    --motion-step-1-duration: 1000ms;
}
```

Because CSS custom properties inherit, every descendant inside the group can read the same step clock. That is why arbitrarily nested and unnested timelines work without JavaScript.

### Same-Element Paths

On the same element, stepped translate, rotate, and scale utilities move from the current state instead of restarting from zero. This makes repeated directional and growth motion behave like a path.

```html
<h2 class="step-1:motion-preset-slide-up-lg step-2:motion-preset-slide-down-lg step-3:motion-preset-slide-right-lg">
    What is up?
</h2>
```

If all three steps were `motion-preset-slide-up-lg`, the element would keep moving higher on each step. Repeated scale presets like `step-1:motion-preset-expand step-2:motion-preset-expand` grow again on each step. A separate child with only `step-2:motion-preset-slide-up-lg` still behaves like a normal delayed entrance.

Path chaining applies to translate, rotate, and scale. Opacity, filter, background color, and text color still behave like state changes instead of geometric paths.

### Gap and Overlap

Use `motion-gap-*` and `motion-overlap-*` through a step prefix to start a step later or earlier relative to the previous step end.

```html
<div class="motion-group">
    <div class="step-1:motion-preset-fade step-1:motion-duration-1000">One</div>
    <div class="step-2:motion-preset-slide-up step-2:motion-overlap-300">Two</div>
    <div class="step-3:motion-preset-pop step-3:motion-gap-[1.2s]">Three</div>
</div>
```

`step-2:motion-overlap-300` starts 300ms before step 1 ends. `step-3:motion-gap-[1.2s]` starts 1.2s after step 2 ends.

### Repeating a Sequence

`motion-repeat` marks a group for replay. The CSS utilities configure the repeat, and the JS helper does the actual replay by measuring the completed step animations and remounting the group.

```html
<div class="motion-group motion-repeat motion-repeat-delay-[5s] motion-repeat-count-3">
    <h1 class="step-1:motion-preset-slide-up">Frame one</h1>
    <p class="step-2:motion-preset-fade">Frame two</p>
</div>

<script type="module">
    import { startMotionRepeats } from 'unocss-preset-tailwindcss-motion/dist/repeat.js'

    startMotionRepeats()
</script>
```

`motion-repeat` defaults to infinite repeats with no hold delay. `motion-repeat-delay-[5s]` holds the final state for 5 seconds before replay. `motion-repeat-count-3` means three total plays, including the first render. If you only generate the CSS and never call the helper, the repeat variables exist but the full sequence will not replay.

The helper also exports lower-level functions:

```js
import {
    initMotionRepeats,
    observeMotionRepeats,
    scheduleMotionRepeat,
    clearMotionRepeat,
    startMotionRepeats,
} from 'unocss-preset-tailwindcss-motion/dist/repeat.js'
```

Magic Fields injects a small guarded version of this helper automatically, but only when a rendered page contains a standalone `motion-repeat` class.

## Full Docs & Reference


### Base Animations

#### Scale
```
motion-scale-<in|out|loop>
motion-scale-<in|out|loop>-[0|50|75|90|95|100|105|110|125|150]
motion-scale-<in|out|loop>-[value]

motion-scale-in
motion-scale-out
motion-scale-loop
motion-scale-in-75
motion-scale-out-150
motion-scale-loop-[1.337]
motion-scale-in-[0.5]
motion-scale-loop-75/mirror
motion-scale-loop-[1.5]/reset
```

#### Scale X/Y
``` 
motion-scale-<x|y>-<in|out|loop>
motion-scale-<x|y>-<in|out|loop>-[0|50|75|90|95|100|105|110|125|150]
motion-scale-<x|y>-<in|out|loop>-[value]

motion-scale-x-in
motion-scale-y-out
motion-scale-x-loop
motion-scale-x-in-75
motion-scale-y-out-150
motion-scale-x-loop-[0.82]
motion-scale-y-in-[1.25]
motion-scale-x-loop-75/mirror
motion-scale-y-loop-[1.5]/reset
```

#### Translate
```
motion-translate-<x|y>-<in|out|loop>
motion-translate-<x|y>-<in|out|loop>-(0|25|50|75|100|150)
motion-translate-<x|y>-<in|out|loop>-[value]

motion-translate-x-in
motion-translate-y-out
motion-translate-x-loop
motion-translate-x-in-75
motion-translate-y-out-150
motion-translate-x-loop-[42px]
motion-translate-y-in-[-15rem]
motion-translate-x-loop-25/mirror
motion-translate-y-loop-[88vh]/reset
```

#### Rotate
```
motion-rotate-<in|out|loop>
motion-rotate-<in|out|loop>-(0|1|2|3|6|12|45|90|180)
motion-rotate-<in|out|loop>-[value]

motion-rotate-in
motion-rotate-out-45
motion-rotate-loop
motion-rotate-in-[42deg]
motion-rotate-out-[-15deg]
motion-rotate-loop-90/mirror
motion-rotate-loop-[180deg]/reset
```

#### Opacity
```
motion-opacity-<in|out|loop>
motion-opacity-<in|out|loop>-(0|25|50|75|100)
motion-opacity-<in|out|loop>-[value]

motion-opacity-in
motion-opacity-out-50
motion-opacity-loop
motion-opacity-in-[0.42]
motion-opacity-out-[33%]
motion-opacity-loop-75/mirror
motion-opacity-loop-[0.875]/reset
```

#### Blur
```
motion-blur-<in|out|loop>
motion-blur-<in|out|loop>-(sm|md|lg|xl|2xl|3xl)
motion-blur-<in|out|loop>-[value]

motion-blur-in
motion-blur-out-lg
motion-blur-loop
motion-blur-in-[5px]
motion-blur-out-[10px]
motion-blur-loop-xl/mirror
motion-blur-loop-[15px]/reset
```

#### Text Color
```
motion-text-<in|out|loop>
motion-text-<in|out|loop>-{color}
motion-text-<in|out|loop>-[value]

motion-text-in
motion-text-out-red-500
motion-text-loop-blue-500
motion-text-in-[#ff0000]
motion-text-out-purple-500
motion-text-loop-blue-500/mirror
motion-text-loop-[#0000ff]/reset
```

#### Background Color
```
motion-bg-<in|out|loop>
motion-bg-<in|out|loop>-{color}
motion-bg-<in|out|loop>-[value]

motion-bg-in
motion-bg-out-red-500
motion-bg-loop-blue-500
motion-bg-in-[#ff0000]
motion-bg-out-purple-500
motion-bg-loop-blue-500/mirror
motion-bg-loop-[#0000ff]/reset
```

#### Grayscale
```
motion-grayscale-<in|out|loop>
motion-grayscale-<in|out|loop>-(0|25|50|75|100)
motion-grayscale-<in|out|loop>-[value]

motion-grayscale-in
motion-grayscale-out-50
motion-grayscale-loop
motion-grayscale-in-[0.42]
motion-grayscale-out-[33%]
motion-grayscale-loop-75/mirror
motion-grayscale-loop-[0.875]/reset
```

#### Preset Animations

##### Classics
```
motion-preset-fade
motion-preset-fade-(xs|sm|md|lg)
motion-preset-fade-[<duration>]      // e.g. motion-preset-fade-[1200ms]

motion-preset-slide-<right|left|up|down>
motion-preset-slide-<right|left|up|down>-(xs|sm|md|lg)
motion-preset-slide-<right|left|up|down>-[<value>]    // motion-preset-slide-up-[10px], -[3rem], -[2%]

motion-preset-slide-<up-right|up-left|down-left|down-right>
motion-preset-slide-<up-right|up-left|down-left|down-right>-(xs|sm|md|lg)
motion-preset-slide-<up-right|up-left|down-left|down-right>-[<value>]

motion-preset-focus
motion-preset-focus-(xs|sm|md|lg)
motion-preset-focus-[<blur>]         // e.g. motion-preset-focus-[2px]

motion-preset-blur-<right|left|up|down>
motion-preset-blur-<right|left|up|down>-(xs|sm|md|lg)
motion-preset-blur-<right|left|up|down>-[<blur>]      // e.g. motion-preset-blur-up-[3px]

motion-preset-rebound
motion-preset-rebound-(right|left|up|down)

motion-preset-bounce
motion-preset-expand
motion-preset-shrink
motion-preset-pop
motion-preset-compress
motion-preset-shake
motion-preset-wiggle
```

##### Loops

```
motion-preset-pulse
motion-preset-pulse-(xs|sm|md|lg)
motion-preset-pulse-[<scale>]        // e.g. motion-preset-pulse-[1.05]

motion-preset-wobble
motion-preset-wobble-(xs|sm|md|lg)
motion-preset-wobble-[<value>]       // e.g. motion-preset-wobble-[20%]

motion-preset-seesaw
motion-preset-seesaw-(xs|sm|md|lg)
motion-preset-seesaw-[<deg>]         // e.g. motion-preset-seesaw-[2deg]

motion-preset-oscillate
motion-preset-oscillate-(xs|sm|md|lg)
motion-preset-oscillate-[<value>]    // e.g. motion-preset-oscillate-[20%]

motion-preset-stretch
motion-preset-stretch-(xs|sm|md|lg)

motion-preset-float
motion-preset-float-(xs|sm|md|lg)
motion-preset-float-[<value>]        // e.g. motion-preset-float-[200%]

motion-preset-spin

motion-preset-blink
```

##### Fun
```
motion-preset-typewriter-[<number of letters>]

motion-preset-confetti

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
motion-duration-(75|100|150|200|300|500|700|1000|1500|2000)
motion-duration-<number>            // motion-duration-5000 => 5000ms
motion-duration-<seconds>           // motion-duration-1s
motion-duration-[<value>]           // motion-duration-[0.4s], motion-duration-[250ms], motion-duration-[var(--speed)]
motion-duration-(75|100|150|200|300|500|700|1000|1500|2000)/(scale|translate|rotate|blur|grayscale|opacity|background|text)
motion-duration-[<value>]/(scale|translate|rotate|blur|grayscale|opacity|background|text)
```

#### Delay
```
motion-delay
motion-delay-(75|100|150|200|300|500|700|1000)
motion-delay-<number>               // motion-delay-5000 => 5000ms
motion-delay-<seconds>              // motion-delay-1s
motion-delay-[<value>]              // motion-delay-[0.4s], motion-delay-[250ms], motion-delay-[var(--wait)]
motion-delay-(75|100|150|200|300|500|700|1000)/(scale|translate|rotate|blur|grayscale|opacity|background|text)
motion-delay-[<value>]/(scale|translate|rotate|blur|grayscale|opacity|background|text)
```

#### Step Variant
```
step-<n>:motion-*
step-<n>:-motion-*

step-1:motion-preset-slide-up
step-2:motion-preset-pop
step-3:-motion-translate-x-in-100

step-<n>:motion-duration-*
step-<n>:motion-delay-*
step-<n>:motion-ease-*
```

Each step defaults to `500ms`. `step-N:motion-duration-*` changes the length of that step. `step-N:motion-delay-*` adds delay inside that step after the step's calculated start time.

Use `motion-group` when separate descendants should share one step timeline:

```html
<div class="motion-group">
    <div class="step-1:motion-preset-fade">First</div>
    <div class="step-2:motion-preset-slide-up">Second</div>
</div>
```

Without `motion-group`, each element owns its own step clock.

#### Step Gap and Overlap
```
step-<n>:motion-gap
step-<n>:motion-gap-(50|75|100|150|200|300|500|1000)
step-<n>:motion-gap-<seconds>
step-<n>:motion-gap-[<value>]

step-<n>:motion-overlap
step-<n>:motion-overlap-(50|75|100|150|200|300|500|1000)
step-<n>:motion-overlap-<seconds>
step-<n>:motion-overlap-[<value>]
```

#### Easing
```
// Basic easings
motion-ease-(linear|in|out|in-out)

// Spring & bounce easings
motion-ease-(spring-smooth|spring-snappy|spring-bouncy|spring-bouncier|spring-bounciest|bounce)

// Additional cubic-bezier easings
motion-ease-(in-quad|in-cubic|in-quart|in-back)
motion-ease-(out-quad|out-cubic|out-quart|out-back)
motion-ease-(in-out-quad|in-out-cubic|in-out-quart|in-out-back)

// Per-property targeting
motion-ease-{any-of-above}/(scale|translate|rotate|blur|grayscale|opacity|background|text)
```

#### Loop
```
motion-loop
motion-loop-infinite
motion-loop-once
motion-loop-twice
motion-loop-[number]
motion-loop-(infinite|once|twice|number)/(scale|translate|rotate|blur|grayscale|opacity|background|text)
```

#### Repeat Sequence
```
motion-repeat
motion-repeat-delay
motion-repeat-delay-(500|1000|1500|2000)
motion-repeat-delay-<seconds>
motion-repeat-delay-[<value>]

motion-repeat-count-infinite
motion-repeat-count-once
motion-repeat-count-twice
motion-repeat-count-<number>
```

`motion-repeat` marks a group for the `dist/repeat.js` helper. It does not replay the whole group by itself without the helper.

```html
<div class="motion-group motion-repeat motion-repeat-delay-[1.2s] motion-repeat-count-3">
    <div class="step-1:motion-preset-slide-up">One</div>
    <div class="step-2:motion-preset-pop">Two</div>
</div>
```

#### Group
```
motion-group
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

These are not part of the original library, see "What's Different" below for more info. Pause/state helpers apply with `!important` so they reliably override animation state regardless of source-order or specificity.

```css
/* Short-hand pause (animation-play-state: paused) */
.pause

/* Short-hand play (animation-play-state: running) */
.play

/* Same as pause, but better name — designed to be removed via JS or
   IntersectionObserver when you want the animation to start. Cascades to
   children + ::before/::after so the whole subtree freezes. */
.wait

/* Motion = 0, completes (or kills) animations forcefully — different from pause.
   Sets every duration and delay to 0ms !important and cascades to children. */
.still

/* Shared timeline for descendant step animations */
.motion-group

/* Repeat markers for the dist/repeat.js helper */
.motion-repeat
.motion-repeat-delay-*
.motion-repeat-count-*
```


## What's different?

The core animation utilities are still intended to be near identical to the Tailwind plugin. The sections below cover the main UnoCSS-specific differences and extra utilities.



### prefers-reduced-motion

Currently, tailwindcss-motion manually applies the `@media screen and (prefers-reduced-motion: no-preference)` on [various keyframes](https://github.com/romboHQ/tailwindcss-motion/blob/main/src/keyframes.js) that have basically big translates. It's also applied on some of [their custom one-off](https://github.com/romboHQ/tailwindcss-motion/blob/main/src/presets.js) more fun animations (Flomoji, Typewriter).

Rather than doing that, this library will automatically add the following for simplicity to your CSS:

```css
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
```

This intentionally uses `0s`, not a tiny fallback duration. The tiny-duration trick can leave weird timing and end-state behavior in real sequences.

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

These are extra short-hands. Note that still and pause (or motion-paused) are different. Every utility below uses `!important` so it always wins.

```css
.pause { animation-play-state: paused !important; }
.play  { animation-play-state: running !important; }

/* You'll need to manually remove "wait" with JS when you want the animation to start.
   This is excellent for triggering when in viewport.
   Note: wait also applies to ::before, ::after, and all descendants. */
.wait, .wait::before, .wait::after,
.wait *, .wait *::before, .wait *::after {
    animation-play-state: paused !important;
}

/* Note: still also applies to ::before, ::after, and all descendants. */
.still, .still::before, .still::after,
.still *, .still *::before, .still *::after {
    --motion-duration: 0ms !important;
    --motion-delay: 0ms !important;
    animation-duration: 0ms !important;
    animation-delay: 0ms !important;
    transition-duration: 0ms !important;
    transition-delay: 0ms !important;
}
```

### Variants (`hover:`, `focus:`, `md:`, `dark:`, `group-hover:` …)

You don't need to do anything special — every UnoCSS variant from `presetUno` / `presetWind4` works on every motion utility automatically. Examples:

```html
<!-- pseudo-classes -->
<button class="hover:motion-preset-pulse-md">hover to pulse</button>
<input class="focus:motion-preset-pulse-sm" />

<!-- breakpoints -->
<div class="md:motion-preset-fade-lg">only fades at ≥ md</div>

<!-- dark mode -->
<div class="dark:motion-preset-blur-up-md">animates in dark mode</div>

<!-- group / peer -->
<div class="group">
  <span class="group-hover:motion-preset-slide-right-md">child slides when parent is hovered</span>
</div>

<!-- stacked -->
<div class="md:hover:motion-preset-shake">≥md AND hovered</div>

<!-- helpers also support variants now -->
<div class="motion-preset-pulse-md hover:wait">freezes mid-loop on hover</div>
```

## Contributing

- The folder `tailwind` is for the Tailwind comparison styles. `tailwindcss-motion-reference` is detached for file comparison and is not used by the preset.
- To develop the UnoCSS output, run `npm run dev`.
- To build everything, run `npm run build`.
- For the current demo pages, serve this package folder and open `test/docs.html`, `test/individual-animations.html`, `test/variants.html`, `test/modifiers.html`, `test/nested.html`, `test/step-loops.html`, or `test/step-path-torture.html`.
- For more, reference `package.json`.

## License

In honor of original library this is MIT.

## More

[Via x.com/@whatnicktweets](https://x.com/@whatnicktweets)

https://www.npmjs.com/package/unocss-preset-tailwindcss-motion
