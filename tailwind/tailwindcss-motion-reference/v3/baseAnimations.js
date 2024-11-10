import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

// animation strings
export const scaleInAnimation =
  "motion-scale-in calc(var(--motion-scale-duration) * var(--motion-scale-perceptual-duration-multiplier)) var(--motion-scale-timing) var(--motion-scale-delay) both";
export const scaleOutAnimation =
  "motion-scale-out calc(var(--motion-scale-duration) * var(--motion-scale-perceptual-duration-multiplier)) var(--motion-scale-timing) var(--motion-scale-delay) both";
export const translateInAnimation =
  "motion-translate-in calc(var(--motion-translate-duration) * var(--motion-translate-perceptual-duration-multiplier)) var(--motion-translate-timing) var(--motion-translate-delay) both";
export const translateOutAnimation =
  "motion-translate-out calc(var(--motion-translate-duration) * var(--motion-translate-perceptual-duration-multiplier)) var(--motion-translate-timing) var(--motion-translate-delay) both";
export const rotateInAnimation =
  "motion-rotate-in calc(var(--motion-rotate-duration) * var(--motion-rotate-perceptual-duration-multiplier)) var(--motion-rotate-timing) var(--motion-rotate-delay) both";
export const rotateOutAnimation =
  "motion-rotate-out calc(var(--motion-rotate-duration) * var(--motion-rotate-perceptual-duration-multiplier)) var(--motion-rotate-timing) var(--motion-rotate-delay) both";
export const filterInAnimation =
  "motion-filter-in calc(var(--motion-filter-duration) * var(--motion-filter-perceptual-duration-multiplier)) var(--motion-filter-timing) var(--motion-filter-delay) both";
export const filterOutAnimation =
  "motion-filter-out calc(var(--motion-filter-duration) * var(--motion-filter-perceptual-duration-multiplier)) var(--motion-filter-timing) var(--motion-filter-delay) both";
export const opacityInAnimation =
  "motion-opacity-in calc(var(--motion-opacity-duration) * var(--motion-opacity-perceptual-duration-multiplier)) var(--motion-opacity-timing) var(--motion-opacity-delay) both";
export const opacityOutAnimation =
  "motion-opacity-out calc(var(--motion-opacity-duration) * var(--motion-opacity-perceptual-duration-multiplier)) var(--motion-opacity-timing) var(--motion-opacity-delay) both";
export const backgroundColorInAnimation =
  "motion-background-color-in calc(var(--motion-background-color-duration) * var(--motion-background-color-perceptual-duration-multiplier)) var(--motion-background-color-timing) var(--motion-background-color-delay) both";
export const backgroundColorOutAnimation =
  "motion-background-color-out calc(var(--motion-background-color-duration) * var(--motion-background-color-perceptual-duration-multiplier)) var(--motion-background-color-timing) var(--motion-background-color-delay) both";
export const textColorInAnimation =
  "motion-text-color-in calc(var(--motion-text-color-duration) * var(--motion-text-color-perceptual-duration-multiplier)) var(--motion-text-color-timing) var(--motion-text-color-delay) both";
export const textColorOutAnimation =
  "motion-text-color-out calc(var(--motion-text-color-duration) * var(--motion-text-color-perceptual-duration-multiplier)) var(--motion-text-color-timing) var(--motion-text-color-delay) both";

/**
 * @param {import('tailwindcss/types/config').PluginAPI['matchUtilities']} matchUtilities
 * @param {import('tailwindcss/types/config').PluginAPI['theme']} theme
 * */
export function addBaseAnimations(matchUtilities, theme) {
  // scale
  matchUtilities(
    {
      "motion-scale-in": (value) => ({
        "--motion-origin-scale-x": value,
        "--motion-origin-scale-y": value,
        "--motion-scale-in-animation": scaleInAnimation,
        animation: "var(--motion-all-enter-animations)",
      }),
      "motion-scale-x-in": (value) => ({
        "--motion-origin-scale-x": value,
        "--motion-scale-in-animation": scaleInAnimation,
        animation: "var(--motion-all-enter-animations)",
      }),
      "motion-scale-y-in": (value) => ({
        "--motion-origin-scale-y": value,
        "--motion-scale-in-animation": scaleInAnimation,
        animation: "var(--motion-all-enter-animations)",
      }),

      "motion-scale-out": (value) => ({
        "--motion-end-scale-x": value,
        "--motion-end-scale-y": value,
        "--motion-scale-out-animation": scaleOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
      "motion-scale-x-out": (value) => ({
        "--motion-end-scale-x": value,
        "--motion-scale-out-animation": scaleOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
      "motion-scale-y-out": (value) => ({
        "--motion-end-scale-y": value,
        "--motion-scale-out-animation": scaleOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
    },
    {
      values: theme("motionScale"),
    }
  );

  // translate
  matchUtilities(
    {
      "motion-translate-x-in": (value) => ({
        "--motion-origin-translate-x": value,
        "--motion-translate-in-animation": translateInAnimation,
        animation: "var(--motion-all-enter-animations)",
      }),
      "motion-translate-y-in": (value) => ({
        "--motion-origin-translate-y": value,
        "--motion-translate-in-animation": translateInAnimation,
        animation: "var(--motion-all-enter-animations)",
      }),

      "motion-translate-x-out": (value) => ({
        "--motion-end-translate-x": value,
        "--motion-translate-out-animation": translateOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
      "motion-translate-y-out": (value) => ({
        "--motion-end-translate-y": value,
        "--motion-translate-out-animation": translateOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
    },
    {
      values: theme("motionTranslate"),
      supportsNegativeValues: true,
    }
  );

  // rotate
  matchUtilities(
    {
      "motion-rotate-in": (value) => ({
        "--motion-origin-rotate": value,
        "--motion-rotate-in-animation": rotateInAnimation,
        animation: "var(--motion-all-enter-animations)",
      }),

      "motion-rotate-out": (value) => ({
        "--motion-end-rotate": value,
        "--motion-rotate-out-animation": rotateOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
    },
    {
      values: theme("motionRotate"),
      supportsNegativeValues: true,
    }
  );

  // blur
  matchUtilities(
    {
      "motion-blur-in": (value) => ({
        "--motion-origin-blur": value,
        "--motion-filter-in-animation": filterInAnimation,
        animation: "var(--motion-all-enter-animations)",
      }),

      "motion-blur-out": (value) => ({
        "--motion-end-blur": value,
        "--motion-filter-out-animation": filterOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
    },
    {
      values: theme("motionBlur"),
    }
  );

  // grayscale
  matchUtilities(
    {
      "motion-grayscale-in": (value) => ({
        "--motion-origin-grayscale": value,
        "--motion-filter-in-animation": filterInAnimation,
        animation: "var(--motion-all-enter-animations)",
      }),

      "motion-grayscale-out": (value) => ({
        "--motion-end-grayscale": value,
        "--motion-filter-out-animation": filterOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
    },
    {
      values: theme("motionGrayscale"),
    }
  );

  // opacity
  matchUtilities(
    {
      "motion-opacity-in": (value) => ({
        "--motion-origin-opacity": value,
        "--motion-opacity-in-animation": opacityInAnimation,
        animation: "var(--motion-all-enter-animations)",
      }),

      "motion-opacity-out": (value) => ({
        "--motion-end-opacity": value,
        "--motion-opacity-out-animation": opacityOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
    },
    {
      values: theme("motionOpacity"),
    }
  );

  // background-color
  matchUtilities(
    {
      "motion-bg-in": (value) => ({
        "--motion-origin-background-color": value,
        "--motion-background-color-in-animation": backgroundColorInAnimation,
        animation: "var(--motion-all-enter-animations)",
      }),

      "motion-bg-out": (value) => ({
        "--motion-end-background-color": value,
        "--motion-background-color-out-animation": backgroundColorOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
    },
    {
      values: theme("motionBackgroundColor"),
      type: "color",
    }
  );

  // text-color
  matchUtilities(
    {
      "motion-text-in": (value) => ({
        "--motion-origin-text-color": value,
        "--motion-text-color-in-animation": textColorInAnimation,
        animation: "var(--motion-all-enter-animations)",
      }),

      "motion-text-out": (value) => ({
        "--motion-end-text-color": value,
        "--motion-text-color-out-animation": textColorOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
    },
    {
      values: theme("motionTextColor"),
      type: "color",
    }
  );
}

/** @type {import('tailwindcss/types/config').CustomThemeConfig} */
export const baseAnimationsTheme = {
  motionScale: (theme) => ({ ...theme("scale"), DEFAULT: "50%" }),
  motionTranslate: {
    0: "0%",
    25: "25%",
    50: "50%",
    75: "75%",
    100: "100%",
    150: "150%",
    DEFAULT: "25%",
  },
  motionRotate: (theme) => ({ ...theme("rotate"), DEFAULT: "12deg" }),
  motionBlur: (theme) => theme("blur"),
  motionGrayscale: (theme) => theme("grayscale"),
  motionOpacity: (theme) => ({ ...theme("opacity"), DEFAULT: "0", 0: "0.001" }),
  motionBackgroundColor: (theme) => flattenColorPalette(theme("colors")),
  motionTextColor: (theme) => flattenColorPalette(theme("colors")),
};
