import React from "react";
import { InputText } from "../input-text";
import type * as WPDS from "../theme";
import { InputSearchContext } from "./InputSearchRoot";

export type InputSearchInputProps = {
  /** Override CSS */
  css?: WPDS.CSS;
  /**The input's label text, required for accessibility
   * @default Search
   */
  label?: string;
  /** Determines if the value in the input changes or not as the user navigates with the keyboard. If true, the value changes, if false the value doesn't change. Set this to false when you don't really need the value from the input but want to populate some other state (like the recipient selector in Gmail). But if your input is more like a normal `<input type="text"/>`, then leave the `true` default.
   * @default true
   */
  autocomplete?: boolean;
} & Omit<React.ComponentPropsWithRef<typeof InputText>, "label">;

export const InputSearchInput = React.forwardRef<
  HTMLInputElement,
  InputSearchInputProps
>(
  (
    {
      label = "Search",
      autocomplete = true,
      autoComplete = "off",
      id,
      value,
      ...rest
    }: InputSearchInputProps,
    ref
  ) => {
    const { inputProps, inputRef, state, isDisabled } =
      React.useContext(InputSearchContext);
    // make use of both external and internal ref
    React.useEffect(() => {
      if (!ref) return;
      typeof ref === "function"
        ? ref(inputRef.current)
        : (ref.current = inputRef.current);
    }, [ref, inputRef]);

    // handle internal and external onChange
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (rest.onChange) rest.onChange(event);
      if (inputProps.onChange) inputProps.onChange(event);
    };

    React.useEffect(() => {
      // allow for external changes for controlled inputs
      if (value !== undefined && value !== null && value !== inputProps.value) {
        state.setInputValue(value);
      }
    }, [value, inputProps.value, state]);

    const [tempText, setTempText] = React.useState<string>();
    const withKeyboard = React.useRef(false);
    React.useEffect(() => {
      if (state.selectionManager.isFocused) {
        const focusedItem = state.collection.getItem(
          state.selectionManager.focusedKey
        );

        if (focusedItem && withKeyboard.current) {
          setTempText(focusedItem.textValue);
        }
      } else {
        setTempText(undefined);
      }
    }, [state.selectionManager.focusedKey, setTempText]);

    if (autocomplete && withKeyboard.current) {
      inputProps.value = tempText;
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        withKeyboard.current = true;
      }
      if (rest.onKeyDown) rest.onKeyDown(event);
      if (inputProps.onKeyDown) inputProps.onKeyDown(event);
    };
    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        withKeyboard.current = false;
      }
      if (rest.onKeyUp) rest.onKeyUp(event);
      if (inputProps.onKeyUp) inputProps.onKeyUp(event);
    };

    return (
      <InputText
        ref={inputRef}
        label={label}
        id={id} // overridden by inputProps, must be managed by react-stately / react-aria
        {...inputProps}
        value={inputProps.value as string}
        defaultValue={inputProps.defaultValue as string}
        type="search"
        disabled={isDisabled}
        {...rest}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        autoComplete={autoComplete}
      />
    );
  }
);

InputSearchInput.displayName = "InputSearchInput";
