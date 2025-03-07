import { SkeletonRoot } from "./SkeletonRoot";
import { SkeletonBlock } from "./SkeletonBlock";
import { SkeletonCircle } from "./SkeletonCircle";
import { SkeletonLine } from "./SkeletonLine";

export type SkeletonProps = {
  Root: typeof SkeletonRoot;
  Block: typeof SkeletonBlock;
  Circle: typeof SkeletonCircle;
  Line: typeof SkeletonLine;
};

export const Skeleton: SkeletonProps = {
  Root: SkeletonRoot,
  Block: SkeletonBlock,
  Circle: SkeletonCircle,
  Line: SkeletonLine,
};
