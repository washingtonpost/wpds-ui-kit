# CSS Framework Selection

## Context

The current CSS framework, [Stitches](https://stitches.dev/), is no longer maintained, and we are facing limitations due to the inability to use a runtime CSS-in-JS framework with React 18's server components and the Next.js app router.

## Decision Drivers

* Similarity of new framework API to Stitches, both for consumer onboarding and automated conversion

* Ability to work with our current tooling. Storybook for development, tsup for compilation, and Next.js for production applications

* Ability to work with other styling options in current use including Tailwind. 

## Decision

We propose adopting Panda CSS, a compile-time CSS-in-JS framework, as the new CSS framework for WPDS.

We will continue to maintain a Tailwind theme that can be used in conjunction with our components for teams that prefer a utility class based approach to styling.

## Considered Options
* [Vanilla Extract](https://vanilla-extract.style/): Considered for its approach to type-safe styles and compile-time generation of stylesheets.
  * Uses external *.css.ts breaking our current colocated styles
  * Does not have a compatible plug-in for Next 13.x or 14.x
  * Documented integration with Storybook is broken
  * Approach to variants is significantly different from Stitches adding to level of effort

* [StyleX](https://stylexjs.com/): Examined for its runtime performance, support for dynamic theming, and expected long-term support from Meta.
  * No plugin is available for esbuild or tsup forcing a significant change to our compilation process
  * Override styles must use `stylex.create` , both className and style are actively discouraged or prevented. Generated classes are high strength and difficult to override
  * Approach to themes and variants is significantly different from Stitches adding to the level of effort

## Resources
[Panda CSS Spike](https://arcpublishing.atlassian.net/browse/SRED-318)
[Vanilla Extract CSS Spike](https://arcpublishing.atlassian.net/browse/SRED-317)
[StyleX CSS Spike](https://arcpublishing.atlassian.net/browse/SRED-643)

## Scope

Creating a new WPDS Theme formatted for Panda derived from existing tokens. Migrating components using Stitches to Panda CSS. Both these constitute breaking changes that would mean a 3.0 release of WPDS

Once complete product teams can then begin to opt in to 3.0

Tachyons is deprecated and will no longer receive updates, teams wanting to use utility classes should use Tailwind

## Status

Proposed
