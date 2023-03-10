import * as React from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { styled } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";

type CarouselContextProps = {
  page: number;
  setPage: (page: number) => void;
  totalPages?: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number | undefined>>;
  itemsPerPage: number | "auto";
  titleId?: string;
  setTitleId: (id: string) => void;
  activeId?: string;
  setActiveId: (id: string) => void;
  isTransitioning: boolean;
  setIsTransitioning: (transition: boolean) => void;
};

export const CarouselContext = React.createContext({} as CarouselContextProps);

const NAME = "CarouselRoot";

const Container = styled("div", {
  maxWidth: "100%",
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
  /** number of items to move when the page changes @defaut auto*/
  itemsPerPage?: number | "auto";
  /** callback for page change */
  onPageChange?: () => void;
  /** callback for internal focus */
  onDescendentFocus?: (index: number) => void;
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
      itemsPerPage = "auto",
      onDescendentFocus = () => undefined,
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
    const [totalPages, setTotalPages] = React.useState<number>();
    const [titleId, setTitleId] = React.useState<string | undefined>();
    const [activeId, setActiveId] = React.useState<string | undefined>();
    const [isTransitioning, setIsTransitioning] = React.useState(false);
    const prevIndex = React.useRef();

    React.useEffect(() => {
      let currentIndex;
      if (activeId) {
        currentIndex = parseInt(activeId.split("item")[1], 10);
      }
      if (prevIndex.current !== currentIndex) {
        onDescendentFocus(currentIndex);
        prevIndex.current = currentIndex;
      }
    }, [activeId, onDescendentFocus]);

    return (
      <CarouselContext.Provider
        value={{
          page,
          setPage,
          totalPages,
          setTotalPages,
          itemsPerPage,
          titleId,
          setTitleId,
          activeId,
          setActiveId,
          isTransitioning,
          setIsTransitioning,
        }}
      >
        <Container
          {...props}
          ref={ref}
          role="group"
          aria-roledescription="carousel"
          aria-labelledby={titleId ? titleId : undefined}
        >
          {children}
        </Container>
      </CarouselContext.Provider>
    );
  }
);

CarouselRoot.displayName = NAME;
