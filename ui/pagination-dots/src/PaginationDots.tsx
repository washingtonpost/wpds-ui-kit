import * as React from "react";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { theme, styled } from "@washingtonpost/wpds-theme";

const NAME = "PaginationDots";
const ACTIVECOLOR = "primary";
const INACTIVECOLOR = "onDisabled";

const bind = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

interface PaginationDotsProps extends React.ComponentPropsWithRef<"div"> {
  css?: WPDS.CSS;
  /** The 1-indexed position of the currently active dot */
  index: number;
  /** The total amount of dots in range */
  amount: number;
  /** The root node's label, required for accessibility */
  label: string;
  /** Specifies the type of element represented by the dots (e.g., "Page") */
  unitName?: string;
}

const Dot = styled("div", {
  size: "$050",
  margin: "1px",
  borderRadius: "100%",
  length: 0,
  minHeight: "$050",
});

const PaginationContainer = styled("div", {
  left: "50%",
  display: "flex",
  length: 0,
  overflow: "hidden",
  position: "absolute",
  transition: "transform .4s",
  transitionTimingFunction: "ease-out",
  top: "100%",
  marginTop: "$050",
});

export const PaginationDots = React.forwardRef<
  HTMLDivElement,
  PaginationDotsProps
>(({ css, index, amount, unitName, label }, ref) => {
  // catch this error gracefully
  if (!amount && !index) {
    return null;
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
      css={{ transform: `translate(${translate})`, ...css }}
      role="progressbar"
      aria-label={label}
      aria-valuemin={1}
      aria-valuemax={nPages}
      aria-valuenow={activeIndex + 1}
      aria-valuetext={
        unitName ? `${unitName} ${activeIndex + 1} of ${nPages}` : undefined
      }
    >
      {dots.map(({ scale, background }, i: number) => (
        <Dot
          key={i}
          css={{
            transform: `scale(${scale})`,
            background: `${theme.colors[background]}`,
          }}
        />
      ))}
    </PaginationContainer>
  );
});

PaginationDots.displayName = NAME;

export type { PaginationDotsProps };

function configureDots(nPages: number, activeIndex: number, amount: number) {
  // creates and returns dots array with each dot's background color and scale
  const dots: { background: string; scale: number }[] = new Array();
  for (let i: number = 0; i < nPages; i++) {
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
  let centeredDotIndex: number;
  if (nPages <= 5) {
    // Center all the dots because they're all always visible
    centeredDotIndex = 2.5;
  } else {
    switch (activeIndex) {
      case 0:
      case 1:
        // First or second dot active; first 5 dots visible
        centeredDotIndex = 2.5;
        break;
      case nPages - 1:
      case nPages - 2:
        // Last or second-to-last dot active; last 5 dots visible
        centeredDotIndex = nPages - 2.5;
        break;
      default:
        // 5 dots visible, active dot is in middle
        centeredDotIndex = activeIndex + 0.5;
    }
  }
  // Each dot is 8px wide with 2px margin (potentially scaled down within the 8px box)
  const dotContainerWidth = 10;
  return `-${dotContainerWidth * centeredDotIndex}px`;
}
