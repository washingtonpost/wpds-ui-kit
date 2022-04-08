import * as React from "react";
//import * as Theme from "@washingtonpost/wpds-theme";
import { InputText } from "@washingtonpost/wpds-input-text";
import { Icon } from "@washingtonpost/wpds-icon";
import Hide from "@washingtonpost/wpds-assets/asset/hide";
import Show from "@washingtonpost/wpds-assets/asset/show";

import type { InputTextProps } from "@washingtonpost/wpds-input-text";

const NAME = "InputPassword";

interface InputPasswordProps
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
  label: string;
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
export const InputPassword = React.forwardRef<
  HTMLInputElement,
  InputPasswordProps
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
    const [isHidden, setIsHidden] = React.useState(true);

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

InputPassword.displayName = NAME;

export type { InputPasswordProps };
