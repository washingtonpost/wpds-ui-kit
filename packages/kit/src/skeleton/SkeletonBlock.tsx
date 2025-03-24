import * as React from "react";
import { styled } from "../theme";

const parseValue = (value: string): [number, string] => {
  if (value.length > 1000) {
    throw new Error("Input too long");
  }

  const match = value.match(/(\d+)([a-zA-Z%]+)/);
  if (!match) return [Number(value), ""];
  return [Number(match[1]), match[2]];
};

const StyledRect = styled("rect", {});

export type SkeletonBlockProps = {
  aspectRatio?:
    | "1:1"
    | "2:1"
    | "3:2"
    | "4:3"
    | "5:4"
    | "16:9"
    | "16:10"
    | "21:9";
  portrait?: boolean;
} & Omit<
  React.ComponentPropsWithRef<typeof StyledRect>,
  "rx" | "ry" | "fill" | "height"
>;

export const SkeletonBlock = React.forwardRef<
  SVGRectElement,
  SkeletonBlockProps
>(({ aspectRatio = "1:1", width = "100%", ...props }, ref) => {
  const ratio = aspectRatio
    ?.split(":")
    .map(Number)
    .reduce((curr, acc) => acc / curr);

  let height;

  if (props.portrait) {
    if (typeof width === "number") {
      height = width / ratio;
    } else {
      const [parsedHeight, unit] = parseValue(width);
      height = `${parsedHeight / ratio}${unit}`;
    }
  } else {
    if (typeof width === "number") {
      height = width * ratio;
    } else {
      const [parsedWidth, unit] = parseValue(width);
      height = `${parsedWidth * ratio}${unit}`;
    }
  }

  return (
    <StyledRect
      width={width}
      height={height}
      ref={ref}
      {...props}
      fill="white"
    />
  );
});

SkeletonBlock.displayName = "SkeletonBlock";
