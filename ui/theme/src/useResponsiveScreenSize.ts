import { useState, useEffect } from "react";

export const useResponsiveScreenSize = () => {
  // Function to get the current screen size from CSS variable
  const getScreenSize = () => {
    if (typeof window === "undefined") {
      return "small";
    } else {
      return getComputedStyle(document.documentElement)
        .getPropertyValue("--wpds-screen-size")
        .trim()
        .replace(/['"]+/g, ""); // Remove quotes for a clean string
    }
  };

  // State to store the current screen size
  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    // dont run on server
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call the handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return screenSize;
};
