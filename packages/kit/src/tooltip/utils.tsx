import { WPDSThemeSpaceObject } from "./TooltipContent";

// Radix offset only accepts a number of pixels it should be offsetting
export const getPixelsFromRem = (
  valToConvert: number | string | WPDSThemeSpaceObject
): number => {
  const convertRemToPixels = (val) => (val as unknown as number) * 16;
  // if we pass the number 0, return the number 0;
  if (typeof valToConvert === "number" && valToConvert === 0) {
    return 0;
  }

  // if we pass a string that includes the words rem
  //mainly used for docs site examples and storybook example
  if (typeof valToConvert === "string" && valToConvert.includes("rem")) {
    const val = valToConvert.split("rem")[0];

    return convertRemToPixels(val);
  }

  if (typeof valToConvert === "object") {
    // if we pass in an object and it has a value
    const val = valToConvert.value.split("rem")[0];

    return convertRemToPixels(val);
  }

  throw Error(
    "Please only provide 1) the number zero 2) a WPDS theme space object or 3) a string that follows the patter `xxrem` where `xx` is a number"
  );
};
