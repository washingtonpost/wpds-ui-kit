import React, { useEffect, useState } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  useSandpack,
  useActiveCode,
} from "@codesandbox/sandpack-react";
import { useTheme } from "next-themes";
import { Box, Icon, theme, Button } from "@washingtonpost/wpds-ui-kit";
import External from "@washingtonpost/wpds-assets/asset/external";
import LZString from "lz-string";
import InlineSVG from "./inlineSVG";

const CodeIcon = (props) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.11 4.44 2 8l3.11 3.56.63-.72L3.25 8l2.49-2.84-.63-.72zm5.78 0-.63.72L12.75 8l-2.49 2.84.63.72L14 8l-3.11-3.56zm-4.56 8.28.88.28 2.5-9.72L8.82 3l-2.49 9.72z"
      fill={theme.colors.accessible}
    />
  </svg>
);

export const CopyCodeButton = () => {
  const [copied, setCopied] = useState(false);
  const { sandpack } = useSandpack();
  const { files, activeFile } = sandpack;
  const code = files[activeFile].code;

  // set the copied state to false after a second
  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2000);
    }
  }, [copied]);

  return (
    <Button
      icon="left"
      isOutline
      variant="primary"
      css={{
        border: 0,
        fontWeight: "$light",
      }}
      density="compact"
      onClick={() => {
        // copy code to clipboard
        navigator.clipboard.writeText(code);
        setCopied(true);
      }}
      aria-label="Copy code to clipboard"
    >
      <Icon size="100" label="Copy code to clipboard">
        <InlineSVG cushion="none" path="/img/doc-icons/clipboard.svg" />
      </Icon>
      {copied ? "Copied!" : "Copy"}
    </Button>
  );
};

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Preview = ({ isGuide, demoHeight }) => {
  const { code } = useActiveCode();
  const [firstRenderCode, setFirstRenderCode] = useState(null);
  const iframeRef = React.useRef(null);
  const debouncedCode = useDebounce(code, 500);

  useEffect(() => {
    setFirstRenderCode(code);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(
        {
          code: debouncedCode,
          isGuide,
          target: "wpds-playroom",
        },
        "*"
      );
    }
  }, [iframeRef, isGuide, debouncedCode]);

  return (
    <Box
      ref={iframeRef}
      as="iframe"
      src={`/playroom?code=${LZString.compressToEncodedURIComponent(
        firstRenderCode
      )}&isGuide=${isGuide}`}
      css={{
        background: theme.colors.gray500,
        border: 0,
        width: "100%",
        height: demoHeight ? `${demoHeight}px` : "auto",
        minHeight: 325,
        overflow: "hidden",
      }}
    />
  );
};

const OpenInPlayroom = ({ isGuide }) => {
  const { code } = useActiveCode();

  return (
    <Button
      icon="left"
      isOutline
      variant="primary"
      css={{
        border: 0,
        textDecoration: "none",
        fontWeight: "$light",
      }}
      density="compact"
      as="a"
      href={`/playroom?edit=1&code=${LZString.compressToEncodedURIComponent(
        code
      )}&isGuide=${isGuide}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open in Playroom"
    >
      <Icon size="100" label="">
        <External />
      </Icon>
      Open in Playroom
    </Button>
  );
};

const CustomSandpack = ({
  isGuide,
  withPreview = false,
  hideNavBar = false,
  demoHeight,
  children,
}) => {
  const [showCode, setShowCode] = useState(!withPreview);
  const { resolvedTheme } = useTheme();
  const [sandboxEmbedTheme, setSandboxEmbedTheme] = useState("light");

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setSandboxEmbedTheme("dark");
    } else {
      setSandboxEmbedTheme("light");
    }
  }, [resolvedTheme]);

  return (
    <SandpackProvider
      autorun
      initMode="user-visible"
      initModeObserverOptions={{ rootMargin: "1400px 0px" }}
      template="react"
      files={{
        "/Example.js": {
          code: children,
          active: true,
        },
      }}
      theme={sandboxEmbedTheme}
    >
      <SandpackLayout
        style={{
          border: "1px solid var(--wpds-colors-subtle)",
          borderRadius: 0,
        }}
      >
        {withPreview && <Preview isGuide={isGuide} demoHeight={demoHeight} />}
        {showCode && (
          <SandpackCodeEditor
            style={{
              border: "1px solid var(--wpds-colors-subtle)",
            }}
            showTabs={false}
            showNavigator={false}
            showRunButton={false}
            initMode="user-visible"
          />
        )}
      </SandpackLayout>
      <Box
        as="nav"
        css={{
          border: "1px solid $subtle",
          borderTop: 0,
          flexGrow: 0,
          width: "100%",
          flexDirection: "row",
          gap: "$075",
          padding: "$050 $075 $050 $100",
          background: "$gray500",
          display: hideNavBar ? "none" : "flex",
          "@sm": {
            display: withPreview ? "flex" : "none",
          },
        }}
      >
        <Box>
          {withPreview && (
            <Button
              icon="left"
              isOutline
              variant="primary"
              onClick={() => {
                setShowCode(!showCode);
              }}
              css={{
                border: 0,
                fontWeight: "$light",
              }}
              density="compact"
            >
              <Icon>
                <CodeIcon />
              </Icon>
              {showCode ? "Hide" : "Show"} code
            </Button>
          )}
        </Box>
        <Box
          css={{
            alignSelf: "flex-end",
            flex: "1 1 auto",
            display: "flex",
            justifyContent: "flex-end",
            gap: "$100",
            "@sm": {
              display: "none",
            },
          }}
        >
          {withPreview && <OpenInPlayroom isGuide={isGuide} />}
          <CopyCodeButton />
        </Box>
      </Box>
    </SandpackProvider>
  );
};

export default React.memo(CustomSandpack);
