import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";

import type { DropdownMenuPortalProps as RadixDropdownMenuPortalProps } from "@radix-ui/react-dropdown-menu";
import type * as WPDS from "../theme";

export type ActionMenuPortalProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuPortalProps;

export const ActionMenuPortal = ({
  children,
  ...props
}: ActionMenuPortalProps) => {
  return (
    <ActionMenuPrimitive.Portal {...props}>
      {children}
    </ActionMenuPrimitive.Portal>
  );
};
