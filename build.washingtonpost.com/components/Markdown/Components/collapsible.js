import React, { useState } from "react";
import { Icon, Button, styled } from "@washingtonpost/wpds-ui-kit";
import { ChevronDown } from "@washingtonpost/wpds-assets";
export default function CollapsibleContainer({ children, maxHeight }) {
  const [Show, setShow] = useState(false);
  const CollapsibleRoot = styled("div", {
    position: "relative",
    marginBottom: 50,
  });
  const Fade = styled("div", {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
  });
  const Content = styled("div", {
    position: "relative",
    transition: "max-height .25s",
    overflow: "hidden",
    variants: {
      expand: {
        true: {
          maxHeight: "100%",
        },
        false: {
          maxHeight: maxHeight ? maxHeight : 450,
        },
      },
    },
  });

  const Chevron = styled(ChevronDown, {
    transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
    "&[data-state='open']": {
      transform: "rotate(180deg)",
    },
  });
  const ShowMoreButton = styled(Button, {
    position: "relative",
    left: "50%",
    transform: "translate(-50%,-25%)",
    boxShadow: "$200",
    zIndex: "$page",
  });
  return (
    <CollapsibleRoot>
      <Content expand={Show ? "true" : "false"}>
        {children}
        {/* {!Show && <Fade />} */}
      </Content>
      <ShowMoreButton
        onClick={() => setShow(!Show)}
        density={"compact"}
        icon="right"
      >
        <Icon size="100">
          <Chevron data-state={Show ? "open" : "closed"} />
        </Icon>
        {Show ? "Show less" : "Show more"}
      </ShowMoreButton>
    </CollapsibleRoot>
  );
}
