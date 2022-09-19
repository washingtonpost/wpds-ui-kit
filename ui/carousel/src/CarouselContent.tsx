import React, { useEffect } from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { CarouselContext } from "./CarouselRoot";

const NAME = "CarouselContent";

const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  marginBlockEnd: theme.space["100"],
  overflow: "hidden",
});

export type CarouselContentProps = {
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof Container>;

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  CarouselContentProps
>(({ children, ...props }, ref) => {
  const { setTotalPages, itemsPerPage, setTotalItems, totalItems } =
    React.useContext(CarouselContext);

  useEffect(
    () => setTotalItems(React.Children.count(children)),
    [children, setTotalItems]
  );

  useEffect(() => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    setTotalPages(totalPages);
  }, [totalItems, setTotalPages, itemsPerPage]);

  return (
    <Container {...props} ref={ref}>
      {children}
    </Container>
  );
});

CarouselContent.displayName = NAME;
