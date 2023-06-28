import * as React from "react";

import { ComboboxInput } from "@reach/combobox";

import { InputText } from "@washingtonpost/wpds-input-text";
import { InputLabel } from "@washingtonpost/wpds-input-label";
import type * as WPDS from "@washingtonpost/wpds-theme";

import { InputSearchContext } from "./InputSearchRoot";

type InputSearchLabelVariants = WPDS.VariantProps<typeof InputLabel>;

export type InputSearchInputProps = InputSearchLabelVariants & {
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

export const InputSearchInput = React.forwardRef<
  HTMLInputElement,
  InputSearchInputProps
>(({ label = "Search", name, id, ...rest }: InputSearchInputProps, ref) => {
  const { disabled, usePortal } = React.useContext(InputSearchContext);
  return (
    <div
      style={
        usePortal
          ? undefined
          : ({
              "--wpds-colors-signal": "var(--wpds-colors-subtle)",
            } as React.CSSProperties)
      }
    >
      <ComboboxInput
        as={InputText}
        autoComplete="off"
        label={label}
        type="search"
        name={name}
        id={id}
        disabled={disabled}
        ref={ref}
        {...rest}
      />
    </div>
  );
});

InputSearchInput.displayName = "InputSearchInput";
