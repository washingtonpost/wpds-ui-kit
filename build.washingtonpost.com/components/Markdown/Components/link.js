import React from "react";
import Link from "next/link";
import { styled } from "@washingtonpost/wpds-ui-kit";

export default function CustomLink({
  children,
  useSignal,
  noUnderline,
  as,
  href,
  id,
  ...otherProps
}) {
  const A = styled("a", {
    cursor: "pointer",
    textDecoration: "underline",
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
      underline: {
        none: {
          textDecoration: "none",
        },
      },
    },
  });

  return (
    <Link as={as} href={href} forceHref passHref legacyBehavior>
      <A
        id={id}
        signal={useSignal ? "showColor" : ""}
        underline={noUnderline ? "none" : ""}
        {...otherProps}
      >
        {children}
      </A>
    </Link>
  );
}
