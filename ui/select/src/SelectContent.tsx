import * as React from "react";

import { styled } from "@washingtonpost/wpds-theme";

import * as SelectPrimitive from "@radix-ui/react-select";
// import { SelectTriggerProps as SelectPrimitiveProps } from "@radix-ui/react-select";

const StyledContent = styled(SelectPrimitive.Content, {
  overflow: "hidden",
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 5,
});

const SelectContent = React.forwardRef<HTMLDivElement, typeof StyledContent>(
  ({ children, ...props }, ref) => (
    <SelectPrimitive.Portal>
      <StyledContent {...props} ref={ref}>
        <StyledViewport>{children}</StyledViewport>
      </StyledContent>
    </SelectPrimitive.Portal>
  )
);

SelectContent.displayName = "SelectContent";
