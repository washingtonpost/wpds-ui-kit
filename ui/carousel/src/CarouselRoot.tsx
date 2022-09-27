import React, { useState } from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
import { useControllableState } from "@radix-ui/react-use-controllable-state";

import type * as WPDS from "@washingtonpost/wpds-theme";

type CarouselContextProps = {
  page: number;
  setPage: (page: number) => void;
  totalPages?: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number | undefined>>;
  itemsPerPage: number;
  totalItems: number;
  setTotalItems: (items: number) => void;
  activeId: string;
  setActiveId: (id: string) => void;
  translateVal: number;
  setTranslateVal: (value: number) => void;
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
  /* TODO :: do we need these?
  onScroll={event => {}}        // default `undefined`
  onDragScroll={event => {}}    // default `undefined`
  */
} & ControlledOrUncontrolled &
  React.ComponentPropsWithRef<typeof Container>;

export const CarouselRoot = React.forwardRef<HTMLDivElement, CarouselRootProps>(
  (
    {
      page: pageProp,
      defaultPage,
      onPageChange,
      itemsPerPage = 1,
      children,
      ...props
    },
    ref
  ) => {
    const [page = 0, setPage] = useControllableState({
      prop: pageProp,
      defaultProp: defaultPage,
      onChange: onPageChange,
    });

    const [totalPages, setTotalPages] = useState<number>();
    const [totalItems, setTotalItems] = useState<number>(0);
    const [translateVal, setTranslateVal] = useState<number>(0);
    const [activeId, setActiveId] = useState<string>("");

    return (
      <CarouselContext.Provider
        value={{
          page,
          setPage,
          totalPages,
          setTotalPages,
          itemsPerPage,
          totalItems,
          setTotalItems,
          activeId,
          setActiveId,
          translateVal,
          setTranslateVal,
        }}
      >
        <Container {...props} ref={ref} role="composite">
          {children}
        </Container>
      </CarouselContext.Provider>
    );
  }
);

CarouselRoot.displayName = NAME;
