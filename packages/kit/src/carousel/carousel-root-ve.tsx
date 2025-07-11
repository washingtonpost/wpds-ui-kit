import React from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { carouselRoot } from "./Carousel.css";
import type { ComponentProps } from "react";

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

export interface CarouselRootVEProps {
  className?: string;
  style?: React.CSSProperties;
  page?: number;
  defaultPage?: number;
  /** number of items to move when the page changes @defaut auto*/
  itemsPerPage?: number | "auto";
  /** callback for page change */
  onPageChange?: () => void;
  /** callback for internal focus */
  onDescendantFocus?: (id: string) => void;
  children?: React.ReactNode;
  /* TODO :: do we need these?
  onScroll={event => {}}        // default `undefined`
  onDragScroll={event => {}}    // default `undefined`
  */
}

export type CarouselRootProps = CarouselRootVEProps & ComponentProps<'div'>;

export const CarouselRootVE = React.forwardRef<HTMLDivElement, CarouselRootProps>(
  (
    {
      page: pageProp,
      defaultPage,
      onPageChange,
      itemsPerPage = "auto",
      onDescendantFocus = () => undefined,
      children,
      className,
      style,
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
    const prevId = React.useRef<string>();

    React.useEffect(() => {
      if (activeId && prevId.current !== activeId) {
        onDescendantFocus(activeId);
        prevId.current = activeId;
      }
    }, [activeId, onDescendantFocus]);

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
        <div
          {...props}
          ref={ref}
          className={`${carouselRoot} ${className || ''}`}
          style={style}
          role="group"
          aria-roledescription="carousel"
          aria-labelledby={titleId ? titleId : undefined}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);

CarouselRootVE.displayName = NAME;
