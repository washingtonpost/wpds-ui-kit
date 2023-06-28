import { InputSearchRoot } from "./InputSearchRoot";
import { InputSearchInput } from "./InputSearchInput";
import { InputSearchPopover } from "./InputSearchPopover";
import { InputSearchList } from "./InputSearchList";
import { InputSearchListItem } from "./InputSearchListItem";
import { InputSearchListHeading } from "./InputSearchListHeading";
import { InputSearchEmptyState } from "./InputSearchEmptyState";
import { InputSearchLoadingState } from "./InputSearchLoadingState";

export type InputSearchProps = {
  Root: typeof InputSearchRoot;
  Input: typeof InputSearchInput;
  Popover: typeof InputSearchPopover;
  List: typeof InputSearchList;
  ListItem: typeof InputSearchListItem;
  ListHeading: typeof InputSearchListHeading;
  EmptyState: typeof InputSearchEmptyState;
  LoadingState: typeof InputSearchLoadingState;
};

export const InputSearch: InputSearchProps = {
  Root: InputSearchRoot,
  Input: InputSearchInput,
  Popover: InputSearchPopover,
  List: InputSearchList,
  ListItem: InputSearchListItem,
  ListHeading: InputSearchListHeading,
  EmptyState: InputSearchEmptyState,
  LoadingState: InputSearchLoadingState,
};
