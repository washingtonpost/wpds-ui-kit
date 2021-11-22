# ignore plz

<Icon size="16" label="garlic">
    <Garlic />
</Icon>

## component api

-   viewBox will be `0 0 16 16` this will be controlled by the svg token (can not be overriden by consumer) - fill rule will also be controlled by svg token
-   size (16, 24, 32) - in pixels (for our size tokens)
-   fill color will use our color tokens (this will be managed by the actual SVG icon component)
-   label prop
-   react clone to deep merge the child icon component
-   will have strong opinions for a11y like ara label (https://www.radix-ui.com/docs/primitives/utilities/accessible-icon)
-   'aria-hidden': 'true',
    focusable: 'false',
    role: 'img' // See: https://allyjs.io/tutorials/focusing-in-svg.html#making-svg-elements-focusable

the svg icon component will be hidden from the a11y tree. it's presentational. The SVG's title node should be removed.
