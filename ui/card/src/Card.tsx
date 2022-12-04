import * as React from "react";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { theme, styled } from "@washingtonpost/wpds-theme";

const NAME = "Card";
type CardType = { CSS?: WPDS.CSS } & HTMLDivElement;

const StyledCard = styled("div", {
  padding: theme.space["100"],
  border: theme.colors.subtle,
  borderWidth: "1px",
  borderStyle: "solid",
  backgroundColor: theme.colors.secondary,
  color: theme.colors.onSecondary,
});

export const Card = React.forwardRef<CardType>(
  (props, ref) => {
    return (
      <StyledCard ref={ref} {...props}>
        {props.children}
      </StyledCard>
    );
  }
);

Card.displayName = NAME;