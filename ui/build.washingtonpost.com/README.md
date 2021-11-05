# WPDS's UI Kit

This project structure is heavily inspired by Chakra UI, Radix UI, and others.

## Website on vercel

This is how storybook, playroom, and next.js will be under one domain

-   Playroom -> `/playroom/**/*`
-   Storybook -> `/storybook/**/*`
-   Website ->`/**/*`

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
