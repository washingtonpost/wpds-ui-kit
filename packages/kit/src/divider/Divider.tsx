import { forwardRef } from "react";
import * as Separator from "@radix-ui/react-separator";
import { theme, styled } from "../theme";

import type { SeparatorProps } from "@radix-ui/react-separator";
import type * as WPDS from "../theme";

const NAME = "Divider";

const StyledSeparator = styled(Separator.Root, {
  "&[data-orientation=horizontal]": { height: 1, width: "100%" },
  "&[data-orientation=vertical]": { height: "100%", width: 1 },
  variants: {
    variant: {
      default: {
        backgroundColor: theme.colors.faint,
      },
      strong: {
        backgroundColor: theme.colors.primary,
      },
    },
  },
});

type DividerProps = {
  /** Override CSS */
  css?: WPDS.CSS;
  /** Sets the color of the divider
   * @default default
   */
  variant?: "default" | "strong";
} & SeparatorProps;

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ css, variant = "default", ...props }, ref) => {
    return <StyledSeparator variant={variant} css={css} ref={ref} {...props} />;
  }
);

Divider.displayName = NAME;

export type { DividerProps };
