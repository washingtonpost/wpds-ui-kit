// check to see if the index is within the page that's active
export const isItemShown = (itemRef) => {
  if (itemRef.current) {
    const parentRect =
      itemRef.current.parentElement.parentElement.getBoundingClientRect();
    const childRect = itemRef.current.getBoundingClientRect();
    const isShown =
      childRect.left >= parentRect.left && childRect.right <= parentRect.right;
    return isShown;
  }
  return false;
};

export const measurePages = (parentRef, childRefs, itemsPerPage) => {
  const parentRect = parentRef.current.getBoundingClientRect();
  const sliderRect =
    parentRef.current.firstElementChild.getBoundingClientRect();
  let leftOffset = 0;
  if (sliderRect.left != parentRect.left) {
    leftOffset = parentRect.left - sliderRect.left;
  }
  const children = childRefs.current;
  if (children.length === 0) return [];
  let pages;

  if (itemsPerPage === "auto") {
    pages = children.reduce(
      (prev, curr) => {
        const childRect = curr.getBoundingClientRect();
        const childLeft = childRect.left + leftOffset - parentRect.left;
        const childRight = childRect.right + leftOffset - parentRect.left;
        const rightEdge = prev[prev.length - 1] + parentRect.width;

        if (childRight > rightEdge) {
          return [...prev, childLeft];
        }
        return prev;
      },
      [0]
    );
  } else {
    pages = [];
    for (let i = 0; i < children.length; i += itemsPerPage) {
      const child = children[i];
      const childRect = child.getBoundingClientRect();
      pages.push(childRect.left + leftOffset - parentRect.left);
    }

    const lastItemRect = children[children.length - 1].getBoundingClientRect();
    const lastItemRight = lastItemRect.right + leftOffset - parentRect.left;
    let onscreen = false;
    pages = pages.filter((page) => {
      const rightBorder = page + parentRect.width;
      if (rightBorder < lastItemRight) {
        return true;
      } else if (!onscreen) {
        onscreen = true;
        return true;
      } else {
        return false;
      }
    });
  }
  return pages.map((pos) => (pos === 0 ? pos : pos * -1));
};

export const findFirstVisibleItem = (parentRef, childRefs) => {
  const parentRect = parentRef.current.getBoundingClientRect();
  return childRefs.current.find((child) => {
    const childRect = child.getBoundingClientRect();
    return (
      childRect.left >= parentRect.left && childRect.right <= parentRect.right
    );
  });
};

export const useDebounce = (callback, delay) => {
  let timeoutId;
  return () => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback();
    }, delay);
  };
};
