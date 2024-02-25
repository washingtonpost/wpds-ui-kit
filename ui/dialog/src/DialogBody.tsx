import * as React from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";

import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "DialogBody";

const StyledBody = styled("div", {
  color: theme.colors.primary,
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["100"],
  fontWeight: theme.fontWeights.light,
  lineHeight: theme.lineHeights["125"],
  gridArea: "body",
  maxHeight: "100%",
  overflowY: "auto",
  variants: {
    isOverflow: {
      true: {
        marginInlineEnd: `calc(-1 * ${theme.space["150"]})`,
        paddingInlineEnd: theme.space["125"],
      },
    },
  },
});

export type DialogBodyProps = {
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof StyledBody>;

export const DialogBody = React.forwardRef<HTMLDivElement, DialogBodyProps>(
  ({ children, ...props }: DialogBodyProps, ref) => {
    const internalRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (!ref) return;
      typeof ref === "function"
        ? ref(internalRef.current)
        : (ref.current = internalRef.current);
    }, [ref, internalRef]);

    const [isOverflow, setIsOverflow] = React.useState(false);

    React.useEffect(() => {
      if (!internalRef.current) return;
      const element = internalRef.current;
      setIsOverflow(element.scrollHeight > element.clientHeight);
    }, [children, setIsOverflow]);

    return (
      <StyledBody {...props} ref={internalRef} isOverflow={isOverflow}>
        {children}
      </StyledBody>
    );
  }
);

DialogBody.displayName = NAME;
