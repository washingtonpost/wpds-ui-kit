import { InputSearchRootVE } from "./input-search-root-ve";
import { InputSearchInputVE } from "./input-search-input-ve";
import { InputSearchPopoverVE } from "./input-search-popover-ve";
import { InputSearchListVE } from "./input-search-list-ve";
import { InputSearchListItemVE } from "./input-search-list-item-ve";
import { InputSearchItemTextVE } from "./input-search-item-text-ve";
import { InputSearchListHeadingVE } from "./input-search-list-heading-ve";
import { InputSearchEmptyStateVE } from "./input-search-empty-state-ve";
import { InputSearchLoadingStateVE } from "./input-search-loading-state-ve";

export type InputSearchProps = {
  Root: typeof InputSearchRootVE;
  Input: typeof InputSearchInputVE;
  Popover: typeof InputSearchPopoverVE;
  List: typeof InputSearchListVE;
  ListItem: typeof InputSearchListItemVE;
  ItemText: typeof InputSearchItemTextVE;
  ListHeading: typeof InputSearchListHeadingVE;
  EmptyState: typeof InputSearchEmptyStateVE;
  LoadingState: typeof InputSearchLoadingStateVE;
};

export const InputSearchVE: InputSearchProps = {
  Root: InputSearchRootVE,
  Input: InputSearchInputVE,
  Popover: InputSearchPopoverVE,
  List: InputSearchListVE,
  ListItem: InputSearchListItemVE,
  ItemText: InputSearchItemTextVE,
  ListHeading: InputSearchListHeadingVE,
  EmptyState: InputSearchEmptyStateVE,
  LoadingState: InputSearchLoadingStateVE,
};
