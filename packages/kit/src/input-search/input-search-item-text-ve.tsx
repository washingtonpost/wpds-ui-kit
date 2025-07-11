import React from "react";

export type InputSearchItemTextProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: React.CSSProperties;
} & React.ComponentPropsWithRef<"span">;

export const InputSearchItemTextVE = ({
  children,
  css,
  style,
  ...rest
}: InputSearchItemTextProps): JSX.Element => {
  return (
    <span
      style={{
        ...(css || {}),
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
};

InputSearchItemTextVE.displayName = "InputSearchItemTextVE";
