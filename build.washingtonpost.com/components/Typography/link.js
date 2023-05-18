import React from "react";
import Link from "next/link";
import { styled } from "@washingtonpost/wpds-ui-kit";

export const A = styled("a", {
  cursor: "pointer",
  textDecoration: "none",
  color: "$primary",
  "&:hover": {
    opacity: ".75",
  },
  "&:focus-visible": {
    outline: "1px auto Highlight",
    "@media screen and (-webkit-min-device-pixel-ratio: 0)": {
      outline: "1px auto -webkit-focus-ring-color",
    },
  },
  variants: {
    signal: {
      showColor: {
        color: "$accessible",
      },
    },
  },
});

export default function CustomLink({ useSignal, as, href, ...otherProps }) {
  return (
    <Link as={as} href={href} passHref>
      <A signal={useSignal ? "showColor" : ""} {...otherProps} />
    </Link>
  );
}
