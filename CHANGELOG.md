# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.0.3] - 2025-10-30

### Fixed
- Fixed Lighthouse CLS (Cumulative Layout Shift) false positives by changing all zero values to near-zero values (0.001) in motion properties
- Updated `motionScale` zero value from `0` to `0.001`
- Updated `motionTranslate` zero value from `0%` to `0.001%`
- Updated `motionRotate` zero value from `0deg` to `0.001deg`
- Updated `motionBlur` zero value from `0` to `0.001px`
- Updated `motionGrayscale` zero value from `0` to `0.001%`
- Updated 13 instances of `--motion-origin-opacity: 0` to `0.001` in animation presets (fade, slide, blur, rebound, bounce, expand, shrink, pop, compress, shake, wiggle)
- Updated `--motion-loop-opacity` in blink preset from `0` to `0.001`
- Note: `motionOpacity` was already using `0.001` to avoid this issue

### Technical Details
This addresses a known Lighthouse bug where animations starting at exactly 0 can trigger false positive CLS warnings during performance audits. The near-zero values (0.001) are visually identical but prevent the false warnings. This is particularly important for opacity-based animations which are commonly used in fade effects.

## [4.0.1] - Previous Release

(Add previous release notes here if available)

