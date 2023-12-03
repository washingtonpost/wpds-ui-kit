import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { styled, theme } from "@washingtonpost/wpds-theme";
import { Button } from "@washingtonpost/wpds-button";
import { Icon } from "@washingtonpost/wpds-icon";
import { Close } from "@washingtonpost/wpds-assets";

import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "DialogClose";

const StyledClose = styled(DialogPrimitive.Close, {
  variants: {
    main: {
      true: {
        position: "absolute",
        insetBlockStart: theme.space["100"],
        insetInlineEnd: theme.space["100"],
      },
    },
  },
});

export type DialogCloseProps = {
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof DialogPrimitive.Close>;

export const DialogClose = React.forwardRef<
  HTMLButtonElement,
  DialogCloseProps
>(({ ...props }, ref) => {
  if (props.asChild) {
    return <StyledClose {...props} ref={ref} />;
  } else {
    return (
      <StyledClose {...props} ref={ref} asChild main>
        <Button density="compact" icon="center" css={{ border: "none" }}>
          <Icon label="Close">
            <Close />
          </Icon>
        </Button>
      </StyledClose>
    );
  }
});

DialogClose.displayName = NAME;
