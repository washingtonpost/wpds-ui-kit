import React, { useState, useEffect } from "react";
import { styled, Icon, theme } from "@washingtonpost/wpds-ui-kit";
const Button = styled("button", {
  position: "relative",
  backgroundColor: "transparent",
  borderStyle: "none",
  color: theme.colors.primary,
  cursor: "pointer",
  "&hover": {
    opacity: 0.75,
  },
});

const CopyFeeback = styled("div", {
  position: "absolute",
  top: "50%",
  right: 0,
  paddingRight: "$050",
  backgroundColor: theme.colors.gray500,
  transform: "translateY(0%)",
  opacity: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  variants: {
    hover: {
      true: {
        transform: "translateY(-50%)",
        opacity: 1,
      },
      false: {
        transform: "translateY(0%)",
        opacity: 0,
      },
    },
  },
});
const Span = styled("span", {
  margin: "0 $025",
});
const ClipboardIcon = (props) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5 2.5H2.5V13.5H13.5V2.5H11" stroke={theme.colors.accessible} />
    <rect x="6" y="2" width="4" height="2" fill={theme.colors.accessible} />
    <rect x="5" y="6" width="3" height="1" fill={theme.colors.accessible} />
    <rect x="5" y="8" width="6" height="1" fill={theme.colors.accessible} />
    <rect x="5" y="10" width="5" height="1" fill={theme.colors.accessible} />
    <circle
      r="1"
      transform="matrix(1 0 0 -1 8 2)"
      fill={theme.colors.accessible}
    />
  </svg>
);
const CopyCodeButton = ({ as, css, children, textToCopy, hideIcon }) => {
  const [copied, setCopied] = useState(false);
  const [ReadyToCopy, setReadyToCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${textToCopy ? textToCopy : children}`);
    setCopied(true);
  };

  // set the copied state to false after a second
  useEffect(() => {
    if (copied) {
      if (hideIcon) {
        navigator.clipboard.writeText(textToCopy);
        window.alert(`Copied: ${textToCopy}`);
      }
      setTimeout(() => setCopied(false), 2000);
    }
  }, [copied, hideIcon, textToCopy]);

  return (
    <Button
      as={as}
      onMouseEnter={() => setReadyToCopy(true)}
      onMouseLeave={() => setReadyToCopy(false)}
      css={{
        padding: "$050",
        maxWidth: "100%",
        overflow: "hidden",
        alignSelf: "flex-start",
        display: "flex",
        color: theme.colors.accessible,
        fontFamily: "monospace",
        ...css,
      }}
      onClick={handleCopy}
      aria-label="Copy code to clipboard"
    >
      {children}

      {hideIcon ? (
        <></>
      ) : (
        <CopyFeeback hover={ReadyToCopy}>
          <Span>|</Span>
          <Icon css={{ marginLeft: theme.space[25] }}>
            <ClipboardIcon />
          </Icon>
          {copied ? "Copied!" : "Copy"}
        </CopyFeeback>
      )}
    </Button>
  );
};

export default CopyCodeButton;
