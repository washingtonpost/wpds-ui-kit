import React, { useRef, useEffect } from "react";

import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { nanoid } from "nanoid";

import { useSwipeable } from "react-swipeable";

import { CarouselContext } from "./CarouselRoot";
import { CarouselItemProps } from "./CarouselItem";

import { getItemsShownPerPage, isItemShown } from "./utils";

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
  } = React.useContext(CarouselContext);

  const idRef = useRef<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsShownPerPage = getItemsShownPerPage(itemsPerPage, totalItems);

  //create the prefix using a random id when the component is first rendered
  useEffect(() => {
    idRef.current = String(nanoid(5));
  }, []);

  //set onFocus and onBlur handlers to work with arrowkeys
  useEffect(() => {
    const el = containerRef?.current;
    let currentIndex = 0;

    const handleOnFocus = () => {
      setActiveId(`${idRef.current}-item${currentIndex}`);

      // handles what happens when we arrow left or right inside
      // the container
      const handleOnKeyDown = (e) => {
        if (e.key === "ArrowLeft") {
          if (currentIndex - 1 < 0) {
            currentIndex = 0;
          }

          if (!isItemShown(currentIndex - 1, page, itemsShownPerPage)) {
            return;
          } else {
            currentIndex = currentIndex - 1;
          }
          setActiveId(`${idRef.current}-item${currentIndex}`);
        }
        if (e.key === "ArrowRight") {
          // no longer than number of children
          if (currentIndex + 1 > totalItems) {
            currentIndex = totalItems;
            return;
          }

          if (!isItemShown(currentIndex + 1, page, itemsShownPerPage)) {
            return;
          } else {
            currentIndex = currentIndex + 1;
          }

          setActiveId(`${idRef.current}-item${currentIndex}`);
        }
      };

      el?.addEventListener("keydown", handleOnKeyDown);

      return () => {
        el?.removeEventListener("keydown", handleOnKeyDown);
      };
    };

    // on blur setActiveId to empty string to remove styling from items
    const handleOnBlur = () => {
      setActiveId("");
      currentIndex = 0;
    };

    el?.addEventListener("focus", handleOnFocus);
    el?.addEventListener("blur", handleOnBlur);

    return () => {
      el?.removeEventListener("focus", handleOnFocus);
      el?.removeEventListener("blur", handleOnBlur);
    };
  }, [
    setActiveId,
    activeId,
    totalItems,
    page,
    itemsShownPerPage,
    totalPages,
    setPage,
  ]);

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

  return (
    <div {...handlers}>
      <Container
        {...props}
        ref={containerRef}
        tabIndex={0}
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
              }
            );
          }
        })}
      </Container>
    </div>
  );
});

CarouselContent.displayName = NAME;
