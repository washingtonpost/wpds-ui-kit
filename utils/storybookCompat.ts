/**
 * this is a workaround for a "bug" in storybook
 * with their typescript support
 */

import type * as Stitches from "@stitches/react";

interface StitchesMedia {
  [x: string]: any;
  initial?: any;
  as?: any;
  css?: Stitches.CSS;
}

// We exclude these type properties from the `ComponentVariants` type so that storybook can more
// easily understand the type arguments. We exclude `"true"` and `"false"` strings as well since
// stitches also adds these, and they aren't necessary for storybook controls.
type StitchesPropsToExclude = "true" | "false" | StitchesMedia;

export function storybookCompat<ComponentVariants>(component) {
  type ComponentStoryVariants = {
    [Property in keyof ComponentVariants]: Exclude<
      ComponentVariants[Property],
      StitchesPropsToExclude
    >;
  };

  type ComponentStoryProps = ComponentStoryVariants;

  return component as unknown as (props: ComponentStoryProps) => JSX.Element;
}
