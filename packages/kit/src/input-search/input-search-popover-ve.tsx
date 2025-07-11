import React from "react";
import { createPortal } from "react-dom";
import { Popover } from "../popover";
import { inputSearchPopoverContent } from "./InputSearch.css";
import { InputSearchContext } from "./input-search-root-ve";

export type InputSearchPopoverProps = React.ComponentPropsWithRef<"div"> & {
  portal?: boolean;
  portalDomNode?: HTMLElement;
  css?: React.CSSProperties;
};

export const InputSearchPopoverVE = ({
  css,
  children,
  portal = true,
  portalDomNode,
  style,
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
            style={style}
            {...rest}
          >
            {children}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  } else {
    return createPortal(
      <div
        className={inputSearchPopoverContent}
        style={{
          ...(css || {}),
          ...style,
        }}
        {...rest}
        role="dialog"
      >
        {children}
      </div>,
      popoverRef.current as unknown as HTMLElement
    );
  }
};

InputSearchPopoverVE.displayName = "InputSearchPopoverVE";
