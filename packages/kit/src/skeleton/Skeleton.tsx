import { forwardRef } from "react";
import { styled, theme, keyframes } from "../theme";

import type { Token } from "@stitches/react/types/theme";
import type * as WPDS from "../theme";

const flowRight = keyframes({
  from: { backgroundPosition: "200% 0%" },
  to: { backgroundPosition: "0% 0%" },
});

const Bone = styled("div", {
  backgroundImage: `linear-gradient(90deg,${theme.colors.gray300.toString()}, ${theme.colors.gray400.toString()}, ${theme.colors.gray300.toString()}, ${theme.colors.gray300.toString()})`,
  backgroundSize: "200% 100%",
  animation: `${flowRight} 3s linear infinite`,
  "@reducedMotion": {
    animation: "none",
  },
  variants: {
    variant: {
      default: {
        borderRadius: 0,
      },
      rounded: {
        borderRadius: theme.radii["025"],
      },
      circle: {
        borderRadius: theme.radii.round,
      },
    },
  },
});

export type SkeletonProps = {
  css?: WPDS.CSS;
  width?: number | Token<keyof typeof theme.sizes, string, "space", "wpds">;
  height?: number | Token<keyof typeof theme.sizes, string, "space", "wpds">;
} & React.ComponentPropsWithRef<typeof Bone>;

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ css, variant = "default", width = 100, height = 100, ...props }, ref) => {
    return (
      <Bone
        variant={variant}
        css={{
          width: width + (typeof width === "number" ? "px" : ""),
          height: height + (typeof width === "number" ? "px" : ""),
          ...css,
        }}
        ref={ref}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";
