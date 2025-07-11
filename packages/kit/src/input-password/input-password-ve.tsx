import React, { forwardRef, useState } from "react";
import { InputText } from "../input-text/input-text-ve";
import { IconVE as Icon } from "../icon/icon-ve";
import { Hide, Show } from "@washingtonpost/wpds-assets";

import type { InputTextProps } from "../input-text/input-text-ve";

const NAME = "InputPasswordVE";

interface InputPasswordVEProps
  extends Omit<
    InputTextProps,
    | "buttonIconText"
    | "children"
    | "icon"
    | "label"
    | "onButtonIconClick"
    | "type"
  > {
  /**
   * Accessible text for the hide icon button
   * @default Hide password text
   */
  hideButtonIconText?: string;
  /**
   * The input's label text, required for accessibility
   * @default Password
   */
  label?: string;
  /**
   * Accessible text for the show icon button
   * @default Show password text
   */
  showButtonIconText?: string;
}

/**
 * A pre-configured InputText that provides show/hide password interaction
 *
 * @extends InputText
 */
export const InputPasswordVE = forwardRef<
  HTMLInputElement,
  InputPasswordVEProps
>(
  (
    {
      label = "Password",
      hideButtonIconText = "Hide password text",
      showButtonIconText = "Show password text",
      ...rest
    },
    ref
  ) => {
    const [isHidden, setIsHidden] = useState(true);

    function handleButtonIconClick() {
      setIsHidden((prevHidden) => !prevHidden);
    }

    return (
      <InputText
        label={label}
        ref={ref}
        type={isHidden ? "password" : "text"}
        icon="right"
        buttonIconText={isHidden ? showButtonIconText : hideButtonIconText}
        onButtonIconClick={handleButtonIconClick}
        {...rest}
      >
        <Icon label="">{isHidden ? <Show /> : <Hide />}</Icon>
      </InputText>
    );
  }
);

InputPasswordVE.displayName = NAME;

export type { InputPasswordVEProps };
