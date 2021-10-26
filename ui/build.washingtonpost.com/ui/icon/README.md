# ignore plz

<Icon size=16 aria-label="garlic">
    <Garlic />
</Icon>

spit out the svg

with w and h viewbox
labels

## component api

-   viewBox will be `0 0 16 16` this will be controlled by the svg token (can not be overriden by consumer) - fill rule will also be controlled by svg token
-   size (16, 24, 32) - in pixels (for our size tokens)
-   fill color will use our color tokens
-   label prop
-   react clone to deep merge the child icon component
-   will have strong opinions for a11y like ara label (https://www.radix-ui.com/docs/primitives/utilities/accessible-icon)
-   'aria-hidden': 'true',
    focusable: 'false', // See: https://allyjs.io/tutorials/focusing-in-svg.html#making-svg-elements-focusable
