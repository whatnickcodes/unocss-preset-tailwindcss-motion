import createPlugin from "tailwindcss/plugin";
import addKeyframes from "./keyframes";
import addDefaults from "./defaults";
import { addBaseAnimations, baseAnimationsTheme } from "./baseAnimations";
import { addModifiers, modifiersTheme } from "./modifiers";
import { addPresets } from "./presets";

/** @type {import('tailwindcss/types/config').PluginCreator} */
const pluginCreator = ({
  matchUtilities,
  theme,
  addBase,
  addUtilities,
  addComponents,
  matchComponents,
}) => {
  addDefaults(addBase);
  addKeyframes(addUtilities);
  addModifiers(matchUtilities, theme);
  addBaseAnimations(matchUtilities, theme);
  addPresets(addComponents, matchComponents, theme);
};

/** @type {import('tailwindcss/types/config').Config}*/
const pluginConfig = {
  theme: {
    ...modifiersTheme,
    ...baseAnimationsTheme,
  },
};

export default createPlugin(pluginCreator, pluginConfig);
