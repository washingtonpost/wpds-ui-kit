import { useState, useEffect } from "react";

/**
 * ScreenSize
 * @description ScreenSize type
 */
type ScreenSizeCSSProperty =
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "unknown";

export const screenSizesEnums = {
  small: "small",
  medium: "medium",
  large: "large",
  xlarge: "xlarge",
  xxlarge: "xxlarge",
  unknown: "unknown",
};

// Function to get the current screen size from CSS variable
export const getScreenSize = (): ScreenSizeCSSProperty => {
  if (typeof window === "undefined") {
    return "unknown";
  } else {
    // Get the value of the --wpds--screenSize CSS variable
    const screenSize = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--wpds--screenSize");

    // Return the value
    return screenSize as ScreenSizeCSSProperty;
  }
};

/**
 *
 * @returns ScreenSize
 */
export const useResponsiveScreenSize = (): ScreenSizeCSSProperty => {
  // State to store the current screen size
  const [screenSize, setScreenSize] = useState(getScreenSize()) as [
    ScreenSizeCSSProperty,
    React.Dispatch<React.SetStateAction<ScreenSizeCSSProperty>>
  ];

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
