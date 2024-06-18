import React from "react";
import { createPortal } from "react-dom";
import { Popover } from "../popover";
import { styled, theme } from "../theme";
import { InputSearchContext } from "./InputSearchRoot";

const StyledContent = styled("div", {
  backgroundColor: theme.colors.background,
  borderTop: `1px solid ${theme.colors.gray300}`,
  color: theme.colors.primary,
  marginTop: "-1px",
  overflow: "hidden",
});

export type InputSearchPopoverProps = React.ComponentPropsWithRef<
  typeof Popover.Content
> & { portal?: boolean; portalDomNode?: HTMLElement };

export const InputSearchPopover = ({
  css,
  children,
  portal = true,
  portalDomNode,
  ...rest
}: InputSearchPopoverProps) => {
  const { popoverRef, state, containerRef, setUsePortal, setPortalDomNode } =
    React.useContext(InputSearchContext);

  const [key, setKey] = React.useState(0);
  React.useEffect(() => {
    setPortalDomNode(portalDomNode || document.body);
    // There is a race condition where the portalDomNode is not yet mounted
    // Force a re-render to ensure content is rendered
    setTimeout(() => {
      setKey((prev) => prev + 1);
    }, 30);
  }, [portalDomNode, setPortalDomNode, setKey]);

  React.useEffect(() => {
    setUsePortal(portal);
  }, [portal, setUsePortal]);

  if (!state.isOpen) return null;

  if (portal) {
    return (
      <Popover.Root open={state.isOpen} key={key}>
        <Popover.Anchor virtualRef={containerRef} />
        <Popover.Portal forceMount container={popoverRef.current}>
          <Popover.Content
            forceMount
            onOpenAutoFocus={(event: Event) => {
              event.preventDefault();
            }}
            css={{
              width: "var(--radix-popper-anchor-width)",
              padding: 0,
              ...css,
            }}
            {...rest}
          >
            {children}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  } else {
    return createPortal(
      <StyledContent css={css} {...rest} role="dialog">
        {children}
      </StyledContent>,
      popoverRef.current as unknown as HTMLElement
    );
  }
};

InputSearchPopover.displayName = "InputSearchPopover";
