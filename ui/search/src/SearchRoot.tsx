import * as React from "react";
import { Combobox } from "@reach/combobox";
import { styled, theme } from "@washingtonpost/wpds-theme";

import type * as WPDS from "@washingtonpost/wpds-theme";

type SearchContextProps = {
  term: string;
  setTerm: (string: string) => void;
  disabled: boolean;
};

export const SearchContext = React.createContext({} as SearchContextProps);

export type SearchRootProps = {
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
  position: "relative",
  "&:focus-within::after": {
    content: "",
    borderRadius: theme.radii["012"],
    border: `1px solid ${theme.colors.signal}`,
    inset: 0,
    position: "absolute",
    pointerEvents: "none",
    zIndex: 1,
  },
});

export const SearchRoot = ({
  children,
  css,
  disabled = false,
  ...props
}: SearchRootProps) => {
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
