import * as React from "react";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { theme, styled } from "@washingtonpost/wpds-theme";

const NAME = "PaginationDots";
const ACTIVECOLOR = "primary";
const INACTIVECOLOR = "onDisabled";

const bind = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

interface PaginationDotsProps extends React.ComponentPropsWithRef<"div"> {
  /**
   * The 1-indexed position of the currently active dot
   * @default 1
   */
  index: number;
  /** The total amount of dots in range */
  amount: number;
  /**
   * The input's label text, required for accessibility
   * @default Pagination Dots
   */
  label?: string;
  /** Specifies the type of element represented by the dots (e.g., "Page") */
  unitName?: string;
  css?: WPDS.CSS;
}

const Dot = styled("div", {
  size: "$050",
  margin: "1px",
  borderRadius: "100%",
  flexShrink: 0,
  minHeight: "$050",
  transition: `transform ${theme.transitions.fast} ${theme.transitions.inOut}`,
  "@motion": {
    transition: "none",
  }
});

const PaginationContainer = styled("div", {
  maxWidth: `calc((${theme.sizes["050"]} + 2px) * 5)`,
  overflow: "hidden",
});

const PaginationSlider = styled("div", {
  display: "flex",
  flexWrap: "nowrap",
  transition: "transform .4s",
  transitionTimingFunction: "ease-out",
  "@motion": {
    transition: "none",
  },
});

export const PaginationDots = React.forwardRef<
  HTMLDivElement,
  PaginationDotsProps
>(
  (
    { index = 1, amount, unitName, label = "Pagination Dots", ...props },
    ref
  ) => {
    // Limit index within the bounds of the range
    if (!amount && !index) {
      return null;
    } else if (index < 1) {
      index = 1;
    } else if (index > amount) {
      index = amount;
    }
    // Limit component's support to 50 items
    if (amount > 50) {
      throw new Error("Please use an amount less than 50");
    }

    // Always show at least one dot
    const nPages = bind(Math.round(amount), 1, Infinity);

    // 'Index' is 1-indexed, but we want to use 0-indexed integers
    const activeIndex = bind(Math.round(index) - 1, 0, nPages - 1);

    // Construct the dot configurations, scaling dots based on position and total amount
    const dots = configureDots(nPages, activeIndex, amount);

    /**
     * All dots are displayed with a fixed width, even if they're invisible.
     * We want to move the container via `transform` so that the *visible* dots are centered.
     */
    const translate = getTranslate(nPages, activeIndex);
    return (
      <PaginationContainer
        ref={ref}
        role="progressbar"
        aria-label={label}
        aria-valuemin={1}
        aria-valuemax={nPages}
        aria-valuenow={activeIndex + 1}
        aria-valuetext={
          unitName ? `${unitName} ${activeIndex + 1} of ${nPages}` : undefined
        }
        {...props}
      >
        <PaginationSlider css={{ transform: `translate(${translate})` }}>
          {dots.map(({ scale, background }, i: number) => (
            <Dot
              key={i}
              css={{
                transform: `scale(${scale})`,
                background: `${theme.colors[background]}`,
              }}
            />
          ))}
        </PaginationSlider>
      </PaginationContainer>
    );
  }
);

PaginationDots.displayName = NAME;

export type { PaginationDotsProps };

function configureDots(nPages: number, activeIndex: number, amount: number) {
  // creates and returns dots array with each dot's background color and scale
  const dots: { background: string; scale: number }[] = [];
  for (let i = 0; i < nPages; i++) {
    const stepsFromActive = Math.abs(i - activeIndex);
    const isActive = stepsFromActive === 0;
    const background = isActive ? ACTIVECOLOR : INACTIVECOLOR;

    // SCALING DOTS
    // default: active dot has scale = 1, each dot previous/next's scale reduces by 25%
    let scale = 1 - stepsFromActive / 4;
    if (amount <= 5 && stepsFromActive > 1) {
      // if there are 5 or less dots, make all dots at least 4px
      scale = 0.5;
    } else if (
      // else if active dot is first or last in the arr, the 3rd-from-active dot should be 4px, not 2px
      (activeIndex === 0 && i > 2) ||
      (activeIndex === nPages - 1 && i < nPages - 3)
    ) {
      scale = 1.25 - stepsFromActive / 4;
    } else if (
      // else if there are more than 5 dots, dots on the end should be 2px
      amount > 5 &&
      stepsFromActive > 1 &&
      activeIndex > 1 &&
      activeIndex < nPages - 2
    ) {
      scale = 0.75 - stepsFromActive / 4;
    }
    scale = bind(scale, 0, 1);

    dots.push({ background, scale });
  }
  return dots;
}

function getTranslate(nPages: number, activeIndex: number) {
  if (nPages <= 5) {
    return "0px";
  } else {
    // Each dot is 8px wide with 2px margin (potentially scaled down within the 8px box)
    const dotContainerWidth = 10;
    let offset = -(activeIndex - 2);
    if (activeIndex < 3) {
      offset = 0;
    } else if (activeIndex >= nPages - 3) {
      offset = 5 - nPages;
    }
    return `${offset * dotContainerWidth}px`;
  }
}
