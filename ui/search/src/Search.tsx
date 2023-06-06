import * as React from "react";

import type * as WPDS from "@washingtonpost/wpds-theme";

import { styled } from "@washingtonpost/wpds-theme";

import { Combobox } from "@reach/combobox";

import { SearchInput } from "./SearchInput";
import { SearchPopover } from "./SearchPopover";
import { SearchList } from "./SearchList";
import { SearchListItem } from "./SearchListItem";
import { SearchEmptyState } from "./SearchEmptyState";
import { SearchLoadingState } from "./SearchLoadingState";

type SearchContextProps = {
  term: string;
  setTerm: (string: string) => void;
  disabled: boolean;
};

export const SearchContext = React.createContext({} as SearchContextProps);

export type SearchProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  "aria-label": string;
  /** Override CSS */
  css?: WPDS.CSS;
  /** Whether the input field should be disabled or not */
  disabled?: boolean;
  openOnFocus?: boolean;
};

const StyledComboBox = styled(Combobox, {
  width: "100%",
});

export const SearchRoot = ({
  children,
  css,
  disabled = false,
  ...props
}: SearchProps) => {
  const [term, setTerm] = React.useState("");

  return (
    <SearchContext.Provider value={{ term, setTerm, disabled }}>
      <StyledComboBox css={css} {...props}>
        {children}
      </StyledComboBox>
    </SearchContext.Provider>
  );
};

SearchRoot.displayName = "SearchRoot";

const Root = SearchRoot;
const Input = SearchInput;
const Popover = SearchPopover;
const List = SearchList;
const ListItem = SearchListItem;
const EmptyState = SearchEmptyState;
const LoadingState = SearchLoadingState;

export const Search = {
  Root,
  Input,
  Popover,
  List,
  ListItem,
  EmptyState,
  LoadingState,
};
