import * as React from "react";
import { ComboboxPopover } from "@reach/combobox";
import { positionMatchWidth } from "@reach/popover";
import { styled, theme } from "@washingtonpost/wpds-theme";
import { InputSearchContext } from "./InputSearchRoot";

const Background = styled("div", {
  backgroundColor: theme.colors.secondary,
  variants: {
    floating: {
      true: {
        border: `1px solid ${theme.colors.subtle}`,
        boxShadow: theme.shadows["200"],
        marginBlock: theme.space["025"],
      },
    },
  },
});

export type InputSearchPopoverProps = Omit<
  React.ComponentPropsWithRef<typeof ComboboxPopover>,
  "unstable_observableRefs" | "unstable_skipInitialPortalRender"
> &
  React.ComponentProps<typeof Background>;

export const InputSearchPopover = ({
  css,
  children,
  portal = true,
  ...rest
}: InputSearchPopoverProps) => {
  const { setUsePortal, rootRect } = React.useContext(InputSearchContext);

  React.useEffect(() => {
    setUsePortal(portal);
  }, []);

  return (
    <ComboboxPopover
      portal={portal}
      position={(targetRect, popoverRect) => {
        return positionMatchWidth(rootRect, popoverRect);
      }}
      {...rest}
    >
      <Background css={css} floating={portal}>
        {children}
      </Background>
    </ComboboxPopover>
  );
};

InputSearchPopover.displayName = "InputSearchPopover";
