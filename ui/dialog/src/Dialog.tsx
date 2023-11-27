import { DialogRoot } from "./DialogRoot";
import { DialogContent } from "./DialogContent";

export type DialogProps = {
  Root: typeof DialogRoot;
  Content: typeof DialogContent;
};

export const Dialog: DialogProps = {
  Root: DialogRoot,
  Content: DialogContent,
};
