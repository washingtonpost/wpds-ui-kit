import { recipe } from "@vanilla-extract/recipes";

export const containerRecipe = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    width: "100%",
  },
  variants: {
    maxWidth: {
      fluid: {
        width: "100%",
      },
      sm: {
        "@media": {
          "(min-width: 768px)": {
            maxWidth: "768px",
          },
          "(min-width: 900px)": {
            maxWidth: "900px",
          },
          "(min-width: 1024px)": {
            maxWidth: "1024px",
          },
          "(min-width: 1280px)": {
            maxWidth: "1280px",
          },
        },
      },
      md: {
        "@media": {
          "(min-width: 900px)": {
            maxWidth: "900px",
          },
          "(min-width: 1024px)": {
            maxWidth: "1024px",
          },
          "(min-width: 1280px)": {
            maxWidth: "1280px",
          },
        },
      },
      lg: {
        "@media": {
          "(min-width: 1024px)": {
            maxWidth: "1024px",
          },
          "(min-width: 1280px)": {
            maxWidth: "1280px",
          },
        },
      },
      xl: {
        "@media": {
          "(min-width: 1280px)": {
            maxWidth: "1280px",
          },
        },
      },
    },
  },
  defaultVariants: {
    maxWidth: "md",
  },
});
