# WPDS's UI Kit

This project structure is heavily inspired by Chakra UI, Radix UI, and others.

## Websites

- the ssr-testing/kitchen sink is on vercel
- storybook will be on chromatic
- playroom will probably be added to ssr-testing/vercel

## [Contributing](docs/CONTRIBUTING.md)

## Naming packages, components, utilities

-   `@washingtonpost/wpds-${thing}`

## CSS Framework To Do

`@washingtonpost/wpds-tokens`

```jsx
import "@washingtonpost/wpds-tokens/index.css"; (implied that dark and light tokens/css custom properties and class (dark-mode))
```

```css
@import "@washingtonpost/wpds-tokens/index.css";
```

-   export CSS custom properties from stitches (colors, fonts, fontSizes)
-   two stylesheets w/ the custom properties, light and dark theme (would use "dark-theme" class to toggle)
