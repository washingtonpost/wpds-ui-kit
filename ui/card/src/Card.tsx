import * as React from "react";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { theme, styled } from "@washingtonpost/wpds-theme";

const NAME = "Card";

interface CardProps extends React.ComponentPropsWithRef<"div"> {
  css?: WPDS.CSS;
}

const StyledCard = styled("div", {
  padding: theme.space["100"],
  // border: theme.colors.subtle,
  // borderWidth: "1px",
  // borderStyle: "solid",
  boxShadow: theme.shadows["200"], //Shadow example
  backgroundColor: theme.colors.secondary,
  color: theme.colors.onSecondary,
});

// styled components here

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    return (
      <StyledCard ref={ref} css={props.css}>
        {props.children}
      </StyledCard>
    );
  }
);

Card.displayName = NAME;

export type { CardProps };
