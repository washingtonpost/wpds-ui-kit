import * as React from "react";
import { NextSeo } from "next-seo";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import * as Kit from "@washingtonpost/wpds-ui-kit";
import * as Assets from "@washingtonpost/wpds-assets";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  useActiveCode,
} from "@codesandbox/sandpack-react";
import { useTheme } from "next-themes";
import LZString from "lz-string";
import { ErrorBoundary } from "react-error-boundary";
import Link from "~/components/Typography/link";
import { Header } from "~/components/Markdown/Components/headers";
import MDXStyling from "~/components/Markdown/Styling";
import { CopyCodeButton } from "~/components/Markdown/Components/Sandbox";
import { Box } from "@washingtonpost/wpds-ui-kit";

const Canvas = Kit.styled("div", {
  color: "$accessible",
  padding: "$100",
  margin: "0 auto",
  overflow: "hidden",
  position: "relative",
  transition: "all 0.5s ease-in-out",
  "@reducedMotion": {
    transition: "none",
  },
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",

  variants: {
    hasEditor: {
      true: {
        width: "100%",
      },
      false: {
        width: "100vw",
        height: "100vh",
      },
    },
  },
});

const FlexRow = Kit.styled("div", {
  display: "flex",
  gap: "$050",
  flexDirection: "row",
  variants: {
    spaceBetween: {
      true: {
        justifyContent: "space-between",
      },
    },
  },
});

const FlexColumn = Kit.styled("div", {
  display: "flex",
  gap: "$100",
  flexDirection: "column",

  variants: {
    gap: {
      "050": {
        gap: "$050",
      },
      100: {
        gap: "$100",
      },
    },
  },
});

// exclude Switch from Assets module
const { Switch, ...AssetsWithoutSwitch } = Assets;

const components = {
  Kit,
  Assets,
  FlexRow,
  FlexColumn,
  Header,
  ...MDXStyling,
  ...Kit,
  SwitchIcon: Switch,
  ...AssetsWithoutSwitch, // this is causing the issue.. we have an icon named Switch and it's conflicting with the Switch component from WPDS UI Kit
  Link,
};
export default function Playroom({
  source,
  code: thisCode,
  hasEditor,
  isGuide,
}) {
  const [receivedSource, setSource] = React.useState(source);
  const [code, setCode] = React.useState(thisCode);
  const { resolvedTheme } = useTheme();
  const [sandboxEmbedTheme, setSandboxEmbedTheme] = React.useState("light");

  const Preview = () => {
    const { code: thatCode } = useActiveCode();
    const [firstRenderCode, setFirstRenderCode] = React.useState(null);
    const iframeRef = React.useRef(null);

    React.useEffect(() => {
      hasEditor && setFirstRenderCode(thatCode);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
      if (hasEditor && iframeRef.current) {
        iframeRef.current.contentWindow.postMessage(
          {
            code: thatCode,
            isGuide,
            target: "wpds-playroom",
          },
          "*"
        );
      }

      // sync the url param with the code
      if (hasEditor) {
        const newUrl = new URL(window.location);
        newUrl.searchParams.set(
          "code",
          LZString.compressToEncodedURIComponent(thatCode)
        );
        window.history.replaceState({}, "", newUrl);
      }
    }, [iframeRef, thatCode]);

    if (hasEditor) {
      return (
        <Kit.Box
          ref={iframeRef}
          as="iframe"
          src={`/playroom?code=${LZString.compressToEncodedURIComponent(
            firstRenderCode
          )}`}
          css={{
            background: Kit.theme.colors.gray500,
            border: 0,
            width: "100%",
            height: "100%",
            minHeight: 300,
            overflow: "hidden",
          }}
        />
      );
    }

    function ErrorFallback({ error, resetErrorBoundary }) {
      return (
        <div role="alert">
          <p>Something went wrong:</p>
          <pre>{error.message}</pre>
          <button onClick={resetErrorBoundary}>Try again</button>
        </div>
      );
    }

    const Guide = Kit.styled("div", {
      position: "absolute",
      padding: "$100",
      display: "flex",
      alignItems: "center",
      gap: "$025",
      width: "100%",
      top: "0",
      left: "0",
      variants: {
        variant: {
          success: {
            color: Kit.theme.colors.success,
          },
          error: {
            color: Kit.theme.colors.error,
          },
          warning: {
            color: Kit.theme.colors.warning,
          },
          information: {
            color: Kit.theme.colors.signal,
          },
        },
      },
    });
    const Rule = Kit.styled("div", {
      height: "2px",
      width: "100%",
      variants: {
        variant: {
          success: {
            backgroundColor: Kit.theme.colors.success,
          },
          error: {
            backgroundColor: Kit.theme.colors.error,
          },
          warning: {
            backgroundColor: Kit.theme.colors.warning,
          },
          information: {
            backgroundColor: Kit.theme.colors.signal,
          },
        },
      },
    });

    const GetIcon = ({ variant }) => {
      switch (variant) {
        case "success":
          return (
            <Kit.Icon size="200">
              <Assets.Success />
            </Kit.Icon>
          );
        case "warning":
          return (
            <Kit.Icon size="200">
              <Assets.Warning />
            </Kit.Icon>
          );
        case "information":
          return (
            <Kit.Icon size="200">
              <Assets.Info />
            </Kit.Icon>
          );
        case "error":
          return (
            <Kit.Icon size="200">
              <Assets.Error />
            </Kit.Icon>
          );
        default:
          return null;
      }
    };

    return (
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <Guide variant={isGuide}>
          <GetIcon variant={isGuide} />
          <Rule variant={isGuide}></Rule>
        </Guide>
        <FlexRow>
          {receivedSource?.compiledSource && (
            <MDXRemote
              compiledSource={receivedSource.compiledSource}
              scope={{
                ...Kit,
                useState: React.useState,
                useEffect: React.useEffect,
              }}
              components={components}
            />
          )}
        </FlexRow>
      </ErrorBoundary>
    );
  };

  React.useEffect(() => {
    if (resolvedTheme === "dark") {
      setSandboxEmbedTheme("dark");
    } else {
      setSandboxEmbedTheme("light");
    }
  }, [resolvedTheme]);

  // listen for message from parent window
  React.useEffect(() => {
    const handleMessage = async (event) => {
      if (event.data.target === "wpds-playroom") {
        try {
          const mdxSource = await serialize(event.data.code, {
            mdxOptions: {
              format: "mdx",
            },
          });

          setSource(mdxSource);
          setCode(event.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <Kit.Box
      css={{
        display: "flex",
        height: "100vh",
        background: "$gray500",
      }}
    >
      <NextSeo title="WPDS Playroom" description="WPDS's rad playroom" />
      <SandpackProvider
        template="react"
        customSetup={{
          dependencies: {
            "@washingtonpost/wpds-ui-kit": "latest",
            "@washingtonpost/wpds-assets": "latest",
          },
        }}
        files={{
          "/App.js": {
            code: code,
            active: true,
          },
        }}
        theme={sandboxEmbedTheme}
        style={{ display: "flex", height: "100vh", width: "100%" }}
      >
        <Canvas hasEditor={hasEditor}>
          <Preview style={{ outline: "10px solid red" }} />
        </Canvas>
        {hasEditor && (
          <SandpackLayout
            style={{
              border: "1px solid var(--wpds-colors-subtle)",
              borderRadius: 0,
              height: "100%",
              flex: "100%",
            }}
          >
            <Box
              css={{
                // absolutely position the copy button to the top right of the canvas
                position: "absolute",
                bottom: "$100",
                right: "$100",
                zIndex: 1,
                display: "flex",
              }}
            >
              <CopyCodeButton />
            </Box>
            <SandpackCodeEditor
              showLineNumbers
              style={{
                border: "1px solid var(--wpds-colors-subtle)",
                height: "100%",
              }}
            />
          </SandpackLayout>
        )}
      </SandpackProvider>
    </Kit.Box>
  );
}

Playroom.getLayout = (page) => page;
