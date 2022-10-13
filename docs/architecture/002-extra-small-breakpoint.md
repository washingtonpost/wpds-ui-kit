# Add an Extra Small Breakpoint

## Context

The smallest breakpoint available to us is over 700 pixels wide. This works well enough in most cases for styling, but the screen sizes captured by "less than 700 some pixels" have too much variety. A design can look great at 640 pixels and unreadable at 320 pixels, a factor of 2 difference.

Spectrum introduced a bug ticket on 20 September 2022 called [Reporter Insights: timestamp stacking on smaller screens](https://arcpublishing.atlassian.net/browse/SPECT-2625). The root cause of the bug was a lack of space on extra small screen sizes to accomodate a label, timestamp and button all on the same row while keeping the label customizable and the timestamp legible. Pauline Nidea suggested that starting below 360 pixels, the timestamp should be stacked above the label instead of being inline to the right of it. This was implemented ad hoc in Spectrum, but raised a larger question of introducing a standardized "extra small" breakpoint into the WPDS UI Kit.

## Decision

Introduce an extra small breakpoint into WPDS Design Kit. The breakpoint will be set to 360 pixels. Breakpoints should be included for media queries above and below 360 pixels so we can use Stitches as follows:

```
const a = styled(A, {
  "@xs": {
    display: "none"
  }
})

const b = styled(B, {
  "@notXs": {
    display: "none"
  }
})
```

## Scope

This proposal will be opt in. It will not affect any of the other breakpoints we currently have, nor break existing code. The new breakpoint will only come into effect should developers choose to use it in new circumstances.

## Getting an ADR Approved

- Proposals are introduced at the beginning of a new sprint cycle
- A conclusion is made by the end of a sprint cycle
- Conclusion Details are amended to this ADR

## Status

Proposed
