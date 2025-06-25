import * as React from "react";
import { theme, styled } from "../theme";

const StyledRect = styled("rect", {});

export type SkeletonLineProps = {
  fontSize?:
    | "075"
    | "087"
    | "100"
    | "112"
    | "125"
    | "150"
    | "175"
    | "200"
    | "250";
  textAlign?: "justified" | "left" | "center" | "right";
} & Omit<React.ComponentPropsWithRef<typeof StyledRect>, "rx" | "ry" | "fill">;

export const SkeletonLine = React.forwardRef<SVGRectElement, SkeletonLineProps>(
  (
    {
      width = "100%",
      height = `${theme.sizes["100"].value}`,
      textAlign = "justified",
      fontSize,
      ...props
    },
    ref
  ) => {
    let transform;
    let transformOrigin;

    if (textAlign !== "justified") {
      transform = "scale(0.5 1)";
      transformOrigin = "left";
      if (textAlign === "center") {
        transformOrigin = "center";
      } else if (textAlign === "right") {
        transformOrigin = "right";
      }
    }

    if (fontSize) {
      height = `${theme.fontSizes[fontSize].value}`;
    }

    return (
      <StyledRect
        ref={ref}
        width={width}
        height={height}
        {...props}
        transform={transform}
        style={{ transformOrigin, ...props.style }}
        rx={theme.radii["025"].value}
        ry={theme.radii["025"].value}
        fill="white"
      />
    );
  }
);

SkeletonLine.displayName = "SkeletonLine";
