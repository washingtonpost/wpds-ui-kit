import React from "react";
import {
  inputSearchStateContainer,
  inputSearchContentContainer,
  inputSearchIconContainer,
} from "./InputSearch.css";

export type InputSearchOtherStateProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: React.CSSProperties;
  /**The input's label text, required for accessibility
   * @default Search
   */
  icon: React.ReactNode;
} & React.ComponentPropsWithRef<"div">;

export const InputSearchOtherStateVE = ({
  children,
  css,
  icon,
  style,
  ...rest
}: InputSearchOtherStateProps): JSX.Element => {
  return (
    <div
      className={inputSearchStateContainer}
      style={{
        ...(css || {}),
        ...style,
      }}
      {...rest}
    >
      <div className={inputSearchContentContainer}>
        <div className={inputSearchIconContainer}>{icon}</div>
        {children}
      </div>
    </div>
  );
};

InputSearchOtherStateVE.displayName = "InputSearchOtherStateVE";
