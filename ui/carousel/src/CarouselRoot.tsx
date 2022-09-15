import * as React from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
/* TODO: Refactor to lift this up into a shared lib */
import { useControllableState } from "./hooks";

type CarouselContextProps = {
  page: number;
  setPage: (page: number) => void;
  totalPages?: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number | undefined>>;
  slidesPerPage: number;
};

export const CarouselContext = React.createContext({} as CarouselContextProps);

const NAME = "CarouselRoot";

const Container = styled("div", {
  maxWidth: "100%",
  marginBlockEnd: theme.space["100"],
});

type Controlled = {
  /** Controlled value for the current page */
  page: number;
  defaultPage?: never;
};
type Uncontrolled = {
  page?: never;
  /** Uncontrolled value for the initial page shown */
  defaultPage?: number;
};
type ControlledOrUncontrolled = Controlled | Uncontrolled;

export type CarouselRootProps = {
  css?: WPDS.CSS;
  /** number of items to move when the page changes */
  itemsPerPage?: number;
  /** callback for page change */
  onPageChange?: () => void;
  slidesPerPage?: number;
  /* TODO :: do we need these?
  onScroll={event => {}}        // default `undefined`
  onDragScroll={event => {}}    // default `undefined`
  */
} & ControlledOrUncontrolled &
  React.ComponentPropsWithRef<typeof Container>;

export const CarouselRoot = React.forwardRef<HTMLDivElement, CarouselRootProps>(
  (
    {
      page: pageProp = 0,
      defaultPage,
      onPageChange,
      slidesPerPage = 1,
      children,
      ...props
    },
    ref
  ) => {
    const [page, setPage] = useControllableState({
      prop: pageProp,
      defaultProp: defaultPage,
      onChange: onPageChange,
    });
    const [totalPages, setTotalPages] = React.useState<number>();
    return (
      <CarouselContext.Provider
        value={{ page, setPage, totalPages, setTotalPages, slidesPerPage }}
      >
        <Container {...props} ref={ref}>
          {children}
        </Container>
      </CarouselContext.Provider>
    );
  }
);

CarouselRoot.displayName = NAME;
