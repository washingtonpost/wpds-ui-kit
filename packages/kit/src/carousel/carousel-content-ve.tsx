import React from "react";
import { carouselContainer, carouselSlider } from "./Carousel.css";
import { useSwipeable } from "react-swipeable";
import { nanoid } from "nanoid";
import { CarouselContext } from "./carousel-root-ve";
import { CarouselItemProps } from "./CarouselItem";
import { measurePages, useDebounce, findFirstVisibleItem } from "./utils";

const NAME = "CarouselContent";

export interface CarouselContentVEProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export type CarouselContentProps = CarouselContentVEProps &
  React.ComponentProps<"div">;

export const CarouselContentVE = React.forwardRef<
  HTMLDivElement,
  CarouselContentProps
>(
  (
    { children, onFocus, onBlur, onKeyDown, className, style, ...props },
    ref
  ) => {
    const {
      setTotalPages,
      itemsPerPage,
      totalPages,
      page,
      setPage,
      activeId,
      setActiveId,
      setIsTransitioning,
      isTransitioning,
    } = React.useContext(CarouselContext);

    const [totalItems, setTotalItems] = React.useState(0);
    const idRef = React.useRef<string | null>(null);
    const childRefs = React.useRef<HTMLDivElement[]>([]);
    const internalRef = React.useRef<HTMLDivElement>(null);
    const [xPos, setXpos] = React.useState(0);
    const pagePositions = React.useRef([]);
    const xPosRef = React.useRef(0);
    const previousActive = React.useRef<string | undefined>();

    React.useEffect(() => {
      if (!idRef.current) {
        idRef.current = nanoid();
      }
    }, []);

    React.useEffect(() => {
      if (!ref) return;
      typeof ref === "function"
        ? ref(internalRef.current)
        : (ref.current = internalRef.current);
    }, [ref, internalRef]);

    React.useEffect(() => {
      setTotalItems(React.Children.count(children));
    }, [children, setTotalItems]);

    React.useEffect(() => {
      if (internalRef.current && totalItems > 0) {
        const measured = measurePages(
          internalRef.current,
          childRefs.current,
          itemsPerPage
        );
        setTotalPages(measured.totalPages);
        pagePositions.current = measured.pagePositions;
      }
    }, [
      totalItems,
      itemsPerPage,
      setTotalPages,
      pagePositions,
      childRefs,
      internalRef,
    ]);

    const debouncedResize = useDebounce(() => {
      if (internalRef.current && totalItems > 0) {
        const measured = measurePages(
          internalRef.current,
          childRefs.current,
          itemsPerPage
        );
        setTotalPages(measured.totalPages);
        pagePositions.current = measured.pagePositions;
      }
    }, 200);

    React.useEffect(() => {
      window.addEventListener("resize", debouncedResize);
      return () => window.removeEventListener("resize", debouncedResize);
    }, [debouncedResize]);

    React.useEffect(() => {
      if (pagePositions.current[page] !== undefined) {
        setXpos(pagePositions.current[page]);
        xPosRef.current = pagePositions.current[page];
      }
    }, [page, pagePositions, setXpos]);

    const handlers = useSwipeable({
      onSwipedLeft: () => {
        if (totalPages && page < totalPages - 1) {
          setPage(page + 1);
        }
      },
      onSwipedRight: () => {
        if (page > 0) {
          setPage(page - 1);
        }
      },
      preventScrollOnSwipe: true,
      trackMouse: true,
    });

    const handleFocus = (event: React.FocusEvent<HTMLDivElement>) => {
      const target = event.target as HTMLElement;
      if (target.getAttribute("role") === "group" && target.id) {
        setActiveId(target.id);
      }
      onFocus && onFocus(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node)) {
        setActiveId("");
      }
      onBlur && onBlur(event);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft" && page > 0) {
        setPage(page - 1);
      } else if (
        event.key === "ArrowRight" &&
        totalPages &&
        page < totalPages - 1
      ) {
        setPage(page + 1);
      } else if (event.key === "Home") {
        setPage(0);
      } else if (event.key === "End" && totalPages) {
        setPage(totalPages - 1);
      }
      onKeyDown && onKeyDown(event);
    };

    const childrenWithProps = React.Children.map(children, (child, index) => {
      if (React.isValidElement<CarouselItemProps>(child)) {
        return React.cloneElement(child, {
          ref: (el: HTMLDivElement) => {
            if (el) {
              childRefs.current[index] = el;
            }
          },
          id: child.props.id || `${idRef.current}-item-${index}`,
          index,
        });
      }
      return child;
    });

    React.useEffect(() => {
      if (!isTransitioning) {
        const firstVisible = findFirstVisibleItem(
          childRefs.current,
          internalRef.current
        );
        if (firstVisible) {
          setActiveId(firstVisible);
        }
      }
    }, [xPos, isTransitioning, setActiveId]);

    React.useEffect(() => {
      if (activeId !== previousActive.current) {
        setIsTransitioning(true);
        const timeout = setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
        previousActive.current = activeId;
        return () => clearTimeout(timeout);
      }
    }, [activeId, setIsTransitioning]);

    return (
      <div
        {...props}
        {...handlers}
        ref={internalRef}
        className={`${carouselContainer} ${className || ""}`}
        style={style}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Carousel content"
      >
        <div
          className={carouselSlider}
          style={{
            transform: `translateX(-${xPos}px)`,
          }}
        >
          {childrenWithProps}
        </div>
      </div>
    );
  }
);

CarouselContentVE.displayName = NAME;
