import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { styled } from "@washingtonpost/wpds-theme";

import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "DialogTrigger";

const StyledTrigger = styled(DialogPrimitive.Trigger, {});

export type DialogTriggerProps = {
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof DialogPrimitive.Trigger>;

export const DialogTrigger = React.forwardRef<
  HTMLButtonElement,
  DialogTriggerProps
>(({ ...props }, ref) => <StyledTrigger {...props} ref={ref} />);

DialogTrigger.displayName = NAME;
