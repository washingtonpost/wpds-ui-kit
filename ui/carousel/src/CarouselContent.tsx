import React, { useRef, useEffect } from "react";

import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { nanoid } from "nanoid";

import { useSwipeable } from "react-swipeable";

import { CarouselContext } from "./CarouselRoot";
import { CarouselItemProps } from "./CarouselItem";

import { getItemsShownPerPage } from "./utils";

const NAME = "CarouselContent";

const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  marginBlockEnd: theme.space["100"],
  overflow: "hidden",

  "&:focus": {
    outline: "none",
    border: "1px dotted grey",
  },
});

export type CarouselContentProps = {
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof Container>;

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  CarouselContentProps
>(({ children, ...props }, ref) => {
  const {
    setTotalPages,
    itemsPerPage,
    setTotalItems,
    totalItems,
    totalPages,
    page,
    setPage,
    activeId,
    setActiveId,
    setTranslateVal,
  } = React.useContext(CarouselContext);

  const idRef = useRef<string | null>(null);
  const itemsShownPerPage = getItemsShownPerPage(itemsPerPage, totalItems);
  const focusDescendantIndex = useRef(-1);
  const prevItemIndex = useRef(-1);

  //create the prefix using a random id when the component is first rendered
  useEffect(() => {
    idRef.current = String(nanoid(5));
  }, []);

  // get the total amount of items we're passing
  // to be able to index the items
  useEffect(() => {
    setTotalItems(React.Children.count(children));
  }, [children, setTotalItems]);

  // gets the total number of pages based on how many items per page
  // we want to show
  useEffect(() => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    setTotalPages(totalPages);
  }, [totalItems, setTotalPages, itemsPerPage]);

  useEffect(() => {
    setTranslateVal(page * itemsPerPage * 100);
  }, [page, itemsPerPage, setTranslateVal]);

  // handlers to handle swiping when on mobile
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (totalPages && page < totalPages - 1) {
        setPage(page + 1);
      }
    },
    onSwipedRight: () => {
      if (totalPages && page > 0) {
        setPage(page - 1);
      }
    },
    preventScrollOnSwipe: true,
  });

  const handleOnFocus = () => {
    if (focusDescendantIndex.current === -1) {
      focusDescendantIndex.current = 0;
      prevItemIndex.current = -1;
    }
    setActiveId(`${idRef.current}-item${focusDescendantIndex.current}`);
  };

  const handleOnBlur = () => {
    if (focusDescendantIndex.current !== -1) {
      focusDescendantIndex.current = -1;
      prevItemIndex.current = -1;
    }
  };

  const handleOnKeyDown = (event: React.KeyboardEvent) => {
    if (focusDescendantIndex.current === -1) return;

    const currentIndex = parseInt(activeId.split("item")[1], 10);

    if (event.key === "ArrowLeft") {
      const prevIndex = currentIndex - 1;
      if (prevIndex < 0) return;
      setActiveId(`${idRef.current}-item${prevIndex}`);
      if (prevIndex % itemsPerPage === itemsPerPage - 1 && page !== 0) {
        setPage(page - 1);
      }
    }

    if (event.key === "ArrowRight") {
      const nextIndex = currentIndex + 1;
      if (nextIndex > totalItems - 1) return;
      setActiveId(`${idRef.current}-item${nextIndex}`);
      if (nextIndex % itemsPerPage === 0) {
        setPage(page + 1);
      }
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    const el = event.target as HTMLElement;
    const item = el.closest("[id*='item']");
    if (!item) return;
    focusDescendantIndex.current = parseInt(item.id.split("item")[1], 10);
    prevItemIndex.current = focusDescendantIndex.current;
  };

  return (
    <div {...handlers}>
      <Container
        {...props}
        ref={ref}
        tabIndex={0}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onMouseDown={handleMouseDown}
        aria-activedescendant={activeId}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(
              child as React.ReactElement<CarouselItemProps>,
              {
                index,
                id: `${idRef.current}-item${index}`,
                itemsShownPerPage,
                onKeyDown: handleOnKeyDown,
              }
            );
          }
        })}
      </Container>
    </div>
  );
});

CarouselContent.displayName = NAME;
