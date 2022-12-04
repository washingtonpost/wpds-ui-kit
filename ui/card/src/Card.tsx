import * as React from "react";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { theme, styled } from "@washingtonpost/wpds-theme";

const StyledCard = styled("div", {
  padding: theme.space["100"],
  border: theme.colors.subtle,
  borderWidth: "1px",
  borderStyle: "solid",
  backgroundColor: theme.colors.secondary,
  color: theme.colors.onSecondary,
});

type CardProps = {
  CSS?: WPDS.CSS;
  children?: React.ReactNode;
} & React.ComponentPropsWithRef<typeof StyledCard>;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, css, ...props }: CardProps, ref) => {
    return <StyledCard css={css} {...props}>{children}</StyledCard>;
  }
);

Card.displayName = "Card";
