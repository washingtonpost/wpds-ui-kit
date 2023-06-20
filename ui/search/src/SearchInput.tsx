import * as React from "react";

import { ComboboxInput } from "@reach/combobox";

import { InputText } from "@washingtonpost/wpds-input-text";
import { InputLabel } from "@washingtonpost/wpds-input-label";
import type * as WPDS from "@washingtonpost/wpds-theme";

import { SearchContext } from "./SearchRoot";

type SearchLabelVariants = WPDS.VariantProps<typeof InputLabel>;

export type SearchInputProps = SearchLabelVariants & {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
  /**The input's label text, required for accessibility
   * @default Search
   */
  label?: string;
  /** The id for the underlying input element. Required for accessibility */
  id: string;
  /** The name for the underlying input element */
  name: string;
  disabled?: boolean;
  onChange?: (event) => void;
};

//TODO: when you press the search button things should search

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ label = "Search", name, id, ...rest }: SearchInputProps, ref) => {
    const { disabled } = React.useContext(SearchContext);
    return (
      <div
        style={
          {
            "--wpds-colors-signal": "var(--wpds-colors-subtle)",
          } as React.CSSProperties
        }
      >
        <ComboboxInput
          as={InputText}
          label={label}
          type="search"
          name={name}
          id={id}
          disabled={disabled}
          ref={ref}
          // onButtonIconClick={() => ()} //what happens when you click the search button
          {...rest}
        />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
