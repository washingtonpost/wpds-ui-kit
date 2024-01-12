import * as React from "react";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { theme, styled } from "@washingtonpost/wpds-theme";

const StyledCard = styled("div", {
  padding: theme.space["150"],
  border: theme.colors.faint,
  borderRadius: theme.radii["012"],
  borderWidth: "1px",
  borderStyle: "solid",
  backgroundColor: theme.colors.secondary,
  color: theme.colors.onSecondary,
  width: "100%",
});

type CardProps = {
  /** Override/include custom CSS */
  css?: WPDS.CSS;
  /** The nested elements inside Card */
  children?: React.ReactNode;
} & React.ComponentPropsWithRef<typeof StyledCard>;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, css, ...props }: CardProps, ref) => {
    return (
      <StyledCard ref={ref} css={css} {...props}>
        {children}
      </StyledCard>
    );
  }
);

Card.displayName = "Card";
