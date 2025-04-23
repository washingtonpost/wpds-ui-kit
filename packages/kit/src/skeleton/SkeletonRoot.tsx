import * as React from "react";
import { nanoid } from "nanoid";
import { theme, styled, keyframes } from "../theme";

const flowRight = keyframes({
  "0%": { backgroundPosition: "200% 0%" },
  "50%": { backgroundPosition: "0% 0%" },
  "100%": { backgroundPosition: "0% 0%" },
});

const col1 = theme.colors["alpha500-invert"].toString();
const col2 = theme.colors["alpha0-invert"].toString();

const StyledSvg = styled("svg", {
  backgroundColor: theme.colors.alpha400,
  variants: {
    animation: {
      shimmer: {
        backgroundImage: `linear-gradient(90deg, ${col1}, ${col1} 50%, ${col2} 75%, ${col1} 100%)`,
        backgroundSize: "200% 100%",
        animationName: `${flowRight}`,
        animationDelay: "300ms",
        animationDuration: "1400ms",
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        "@reducedMotion": {
          animation: "none",
        },
      },
      none: {
        animation: "none",
      },
    },
  },
});

export type SkeletonRootProps = React.ComponentPropsWithRef<typeof StyledSvg>;

export const SkeletonRoot = React.forwardRef<SVGSVGElement, SkeletonRootProps>(
  (
    {
      css,
      children,
      width = "300",
      height = "150",
      animation = "shimmer",
      ...props
    },
    ref
  ) => {
    const [maskId, setMaskId] = React.useState<string | undefined>();
    const id = nanoid(6);
    React.useEffect(() => {
      setMaskId(`wpds-skeleton-mask-${id}`);
    }, []);

    return (
      <StyledSvg
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        css={css}
        mask={`url(#${maskId})`}
        width={width}
        height={height}
        animation={animation}
        {...props}
      >
        <mask id={maskId}>{children}</mask>
      </StyledSvg>
    );
  }
);

SkeletonRoot.displayName = "SkeletonRoot";
