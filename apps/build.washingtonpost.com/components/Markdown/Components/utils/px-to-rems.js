export const pxToRems = (px) => {
  const int = parseInt(px.substring(0, px.length - 2), 10);
  return int / 16 + "rem";
};
