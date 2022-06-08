import { useEffect, useState } from "react";

/**
 * @function
 * @example
  const containerRef = useRef();
  const isOnScreen = useOnScreen({
    turnOff: loading === "",
    ref: containerRef
  });
 * @description Checks if element is in the visible area of the screen
 * @param {Object} options
 * @param {boolean} options.turnOff conditionally use hook
 * @param {RefType} options.ref ref for intersection observer to use
 * @param {string} options.rootMargin Margin around the root.
 * @param {number} options.threshold Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed
 * @returns {boolean}
 */
export const useOnScreen = ({
  turnOff,
  ref,
  rootMargin,
  threshold,
  delay = 400
}) => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let observer, handler;
    const hasSupport = typeof window.IntersectionObserver !== "undefined";
    const current = ref.current;

    if (hasSupport) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            handler = setTimeout(function timeoutCallback() {
              // Update our state when observer callback fires
              setIntersecting(entry.isIntersecting);
            }, delay);
          }
        },
        {
          root: null,
          rootMargin,
          threshold
        }
      );
    }

    if (hasSupport && current) {
      observer.observe(current);
    }
    return () => {
      if (hasSupport) {
        observer.unobserve(current);
      }
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array ensures that effect is only run on mount and unmount

  if (turnOff) {
    return true;
  }

  return isIntersecting;
};
