export const getItemsShownPerPage = (
  itemsPerPage: number,
  totalItems: number | undefined
): number => {
  // make sure we always show at least one item
  if (itemsPerPage < 1 || totalItems === undefined) {
    return 1;
  }

  // don't show more than the amount of pages we have
  if (itemsPerPage > totalItems) {
    return totalItems;
  }

  return itemsPerPage;
};

// check to see if the index is within the page that's active
export const isItemShown = (index, page, itemsShownPerPage) => {
  const itemPage = Math.floor(index / itemsShownPerPage);
  return itemPage === page;
};
