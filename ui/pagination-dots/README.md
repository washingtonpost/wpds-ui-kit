# PaginationDots

Pagination dots show progress over a range of items (such as a carousel of images). Mandatory props are `amount` (the total amount of dots) and `index` (the 1-indexed position of the currently active dot). Optional prop is `unitName`, which describes the type of item the dots represent (such as `page` or `image`). When `unitName` is specified, the `aria-valuetext` will read "[unitName] x of y", where x and y are numbers ([More on aria-valuetext here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)).

The PaginationDots component is meant to be controlled by another component, such as a Carousel which sets/updates `amount` and `index` to represent the items being traversed.

The parent element is meant to have a `position: relative` or `position: absolute` in order for the dots to attach to the element.

```jsx
import { PaginationDots } from "@washingtonpost/wpds-ui-kit";

function Component() {
  return <PaginationDots amount={5} index={1} unitName="Page" />;
}
```
