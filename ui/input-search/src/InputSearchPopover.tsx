import * as React from "react";
import { ComboboxPopover } from "@reach/combobox";
import { styled, theme } from "@washingtonpost/wpds-theme";
import { InputSearchContext } from "./InputSearchRoot";

const StyledPopover = styled(ComboboxPopover, {
  backgroundColor: theme.colors.secondary,
  maxHeight: "300px",
  overflowY: "auto",
  variants: {
    floating: {
      true: {
        border: `1px solid ${theme.colors.subtle}`,
        boxShadow: theme.shadows["200"],
        marginTop: theme.space["025"],
      },
    },
  },
});

export type InputSearchPopoverProps = React.ComponentPropsWithRef<
  typeof StyledPopover
>;

export const InputSearchPopover = ({
  children,
  portal = true,
  ...rest
}: InputSearchPopoverProps) => {
  const { setUsePortal, rootRect } = React.useContext(InputSearchContext);

  React.useEffect(() => {
    setUsePortal(portal);
  }, []);

  return (
    <StyledPopover
      floating={portal}
      portal={portal}
      position={() => ({
        top: `${rootRect?.bottom}px`,
        left: `${rootRect?.left}px`,
        width: `${rootRect?.width}px`,
      })}
      {...rest}
    >
      {children}
    </StyledPopover>
  );
};

InputSearchPopover.displayName = "InputSearchPopover";
