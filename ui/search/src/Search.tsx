import { SearchRoot } from "./SearchRoot";
import { SearchInput } from "./SearchInput";
import { SearchPopover } from "./SearchPopover";
import { SearchList } from "./SearchList";
import { SearchListItem } from "./SearchListItem";
import { SearchEmptyState } from "./SearchEmptyState";
import { SearchLoadingState } from "./SearchLoadingState";

export type SearchProps = {
  Root: typeof SearchRoot;
  Input: typeof SearchInput;
  Popover: typeof SearchPopover;
  List: typeof SearchList;
  ListItem: typeof SearchListItem;
  EmptyState: typeof SearchEmptyState;
  LoadingState: typeof SearchLoadingState;
};

export const Search: SearchProps = {
  Root: SearchRoot,
  Input: SearchInput,
  Popover: SearchPopover,
  List: SearchList,
  ListItem: SearchListItem,
  EmptyState: SearchEmptyState,
  LoadingState: SearchLoadingState,
};
