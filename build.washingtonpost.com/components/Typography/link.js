import React from "react";
import Link from "next/link";
import { styled } from "@washingtonpost/wpds-ui-kit";

export default function CustomLink({ useSignal, as, href, ...otherProps }) {
  const A = styled("a", {
    cursor: "pointer",
    textDecoration: "none",
    color: "$primary",
    "&:hover": {
      opacity: ".75",
    },
    "&:focus": {
      outlineColor: "$signal",
      outlineStyle: "solid",
      outlineOffset: "2px",
      outlineWidth: "2px",
    },
    variants: {
      signal: {
        showColor: {
          color: "$accessible",
        },
      },
    },
  });

  return (
    <Link as={as} href={href} passHref>
      <A signal={useSignal ? "showColor" : ""} {...otherProps} />
    </Link>
  );
}
