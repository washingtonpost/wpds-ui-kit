import * as React from "react";
import { styled } from "../theme";

const StyledRect = styled("rect", {});

export type SkeletonCircleProps = {
  density?: "compact" | "default";
} & Omit<React.ComponentPropsWithRef<typeof StyledRect>, "rx" | "ry" | "fill">;

export const SkeletonCircle = React.forwardRef<
  SVGRectElement,
  SkeletonCircleProps
>(({ width = 120, height = 40, density = "default", ...props }, ref) => {
  const internalRef = React.useRef<SVGRectElement>(null);
  if (density === "compact") {
    height = 32;
  }
  const radius = Math.min(Number(width), Number(height)) / 2;

  const [xRadius, setXRadius] = React.useState(radius);
  const [yRadius, setYRadius] = React.useState(radius);

  // make use of both external and internal ref
  React.useEffect(() => {
    if (!ref) return;
    if (!internalRef.current) return;
    typeof ref === "function"
      ? ref(internalRef.current)
      : (ref.current = internalRef.current);
  }, [ref, internalRef]);

  React.useEffect(() => {
    if (isNaN(xRadius) || isNaN(yRadius)) {
      const bBox = internalRef.current?.getBBox();
      const radius = Math.min(Number(bBox?.width), Number(bBox?.height)) / 2;
      setXRadius(radius);
      setYRadius(radius);
    }
  }, [xRadius, yRadius, setXRadius, setYRadius]);

  return (
    <StyledRect
      width={width}
      height={height}
      ref={internalRef}
      {...props}
      fill={isNaN(xRadius) || isNaN(yRadius) ? "none" : "white"}
      rx={xRadius}
      ry={yRadius}
    />
  );
});

SkeletonCircle.displayName = "SkeletonCircle";
