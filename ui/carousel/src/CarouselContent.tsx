import * as React from "react";

import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { nanoid } from "nanoid";

import { useSwipeable } from "react-swipeable";

import { CarouselContext } from "./CarouselRoot";
import { CarouselItemProps } from "./CarouselItem";
import { measurePages, useDebounce, findFirstVisibleItem } from "./utils";

const NAME = "CarouselContent";

const Container = styled("div", {
  overflow: "hidden",
  "&:focus": {
    outline: "none",
  },
});

const Slider = styled("div", {
  display: "flex",
  transition: `transform 0.5s ${theme.transitions.inOut}`,
});

export type CarouselContentProps = {
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof Container>;

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  CarouselContentProps
>(({ children, onKeyDown, ...props }, ref) => {
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

  // make use of both external and internal ref
  React.useEffect(() => {
    if (!ref) return;
    typeof ref === "function"
      ? ref(internalRef.current)
      : (ref.current = internalRef.current);
  }, [ref, internalRef]);

  //create the prefix using a random id when the component is first rendered
  React.useEffect(() => {
    idRef.current = String(nanoid(5));
  }, []);

  // get the total amount of items we're passing
  // to be able to index the items
  React.useEffect(() => {
    setTotalItems(React.Children.count(children));
  }, [children, setTotalItems]);

  // gets the total number of pages based on how many items per page
  // we want to show
  const updatePages = React.useCallback(() => {
    const newPagePositions = measurePages(internalRef, childRefs, itemsPerPage);
    pagePositions.current = newPagePositions;
    setTotalPages(pagePositions.current.length);
  }, [itemsPerPage, setTotalPages]);

  React.useEffect(() => {
    updatePages();
  }, [updatePages]);

  const setClosestPage = React.useCallback(() => {
    const closestPagePosition = pagePositions.current.reduce(function (
      prev,
      curr
    ) {
      return Math.abs(curr - xPosRef.current) < Math.abs(prev - xPosRef.current)
        ? curr
        : prev;
    });
    const closestPage = pagePositions.current.findIndex(
      (p) => p === closestPagePosition
    );
    setPage(closestPage);
  }, [setPage]);

  const debouncedHandleResize = useDebounce(() => {
    updatePages();
    setClosestPage();
    if (activeId) {
      setActiveId(``);
    }
  }, 300);

  React.useEffect(() => {
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [debouncedHandleResize]);

  // when page changes, set xPos to move slider
  React.useEffect(() => {
    if (
      pagePositions.current[page] === undefined ||
      pagePositions.current[page] === xPos
    )
      return;

    setXpos(pagePositions.current[page]);
    xPosRef.current = pagePositions.current[page];
    setIsTransitioning(true);
  }, [page, xPos, setXpos, setIsTransitioning]);

  // listener for transition end
  React.useEffect(() => {
    if (!internalRef.current) return;
    const containerEl = internalRef.current;
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
    };
    containerEl.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      containerEl.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [setIsTransitioning, internalRef]);

  // handlers to handle swiping when on mobile
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (totalPages && page < totalPages - 1) {
        setPage(page + 1);
        if (activeId) {
          setActiveId(``);
        }
      }
    },
    onSwipedRight: () => {
      if (totalPages && page > 0) {
        setPage(page - 1);
        if (activeId) {
          setActiveId(``);
        }
      }
    },
    preventScrollOnSwipe: true,
  });

  const handleOnFocus = () => {
    if (!activeId) {
      const firstVisible = findFirstVisibleItem(internalRef, childRefs);
      setActiveId(firstVisible.id);
    }
  };

  const handleOnBlur = () => {
    setActiveId(``);
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!activeId || isTransitioning) return;

    const currentIndex = parseInt(activeId.split("item")[1], 10);

    if (event.key === "ArrowLeft") {
      const prevIndex = currentIndex - 1;
      if (prevIndex < 0) return;
      setActiveId(`${idRef.current}-item${prevIndex}`);
    }

    if (event.key === "ArrowRight") {
      const nextIndex = currentIndex + 1;
      if (nextIndex > totalItems - 1) return;
      setActiveId(`${idRef.current}-item${nextIndex}`);
    }

    onKeyDown && onKeyDown(event);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    const el = event.target as HTMLElement;
    const item = el.closest("[id*='item']");
    if (!item) return;
    setActiveId(item.id);
  };

  React.useEffect(() => {
    const activeEl = childRefs.current.find((child) => child.id === activeId);
    const parentEl = internalRef.current;

    if (!activeEl || !parentEl) return;

    const isHidden = activeEl.getAttribute("aria-hidden") === "true";
    if (isHidden && !isTransitioning) {
      activeEl.setAttribute("aria-hidden", "false");

      if (
        parentEl.getBoundingClientRect().right <
        activeEl.getBoundingClientRect().right
      ) {
        setPage(page + 1);
      } else {
        setPage(page - 1);
      }
    }
  }, [activeId, isTransitioning, page, setPage]);

  return (
    <div {...handlers}>
      <Container
        {...props}
        ref={internalRef}
        tabIndex={0}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onMouseDown={handleMouseDown}
        onKeyDown={handleOnKeyDown}
        role="group"
        aria-activedescendant={props["aria-activedescendant"] || activeId}
      >
        <Slider css={{ transform: `translateX(${xPos}px)` }}>
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(
                child as React.ReactElement<CarouselItemProps>,
                {
                  "aria-label": `${index + 1} of ${totalItems}`,
                  id: `${idRef.current}-item${index}`,
                  ref: (ref: HTMLDivElement) =>
                    (childRefs.current[index] = ref),
                }
              );
            }
          })}
        </Slider>
      </Container>
    </div>
  );
});

CarouselContent.displayName = NAME;
