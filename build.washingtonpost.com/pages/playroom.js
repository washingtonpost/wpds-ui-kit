import * as React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import * as Kit from "@washingtonpost/wpds-ui-kit";
import * as Assets from "@washingtonpost/wpds-assets/asset";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  useActiveCode,
} from "@codesandbox/sandpack-react";
import { useTheme } from "next-themes";
import Head from "next/head";
import LZString from "lz-string";
import { ErrorBoundary } from "react-error-boundary";
import Link from "~/components/Typography/link";

const lightTheme = {
  palette: {
    activeText: "#166dfc",
    defaultText: "#666666",
    inactiveText: "#e9e9e9",
    activeBackground: "#dde6f2",
    defaultBackground: "#ffffff",
    inputBackground: "#ffffff",
    accent: "#166dfc",
    errorBackground: "#ffffff",
    errorForeground: "#f27b81",
  },
  syntax: {
    plain: "#111111",
    comment: {
      color: "#999",
      fontStyle: "italic",
    },
    keyword: "#166dfc",
    tag: "#498a0c",
    punctuation: "#111111",
    definition: "#092c65",
    property: "#166dfc",
    static: "#b16e00",
    string: "#498a0c",
  },
  typography: {
    bodyFont:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    monoFont:
      '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    fontSize: "14px",
    lineHeight: "1.4",
  },
};

const darkTheme = {
  palette: {
    activeText: "#1761f1",
    defaultText: "#868585",
    inactiveText: "#e9e9e9",
    activeBackground: "#0f1218",
    defaultBackground: "#020202",
    inputBackground: "#020202",
    accent: "#1761f1",
    errorBackground: "#020202",
    errorForeground: "#f27b81",
  },
  syntax: {
    plain: "#f3f3f3",
    comment: {
      color: "#f3f3f3",
      fontStyle: "italic",
    },
    keyword: "#166dfc",
    tag: "#517c2a",
    punctuation: "#f3f3f3",
    definition: "#cdd4df",
    property: "#166dfc",
    static: "#906629",
    string: "#517c2a",
  },
  typography: {
    bodyFont:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    monoFont:
      '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    fontSize: "14px",
    lineHeight: "1.4",
  },
};

const sandboxGlobalcss = Kit.globalCss({
  ".sp-preview-iframe": {
    background: Kit.theme.colors.gray500,
    border: 0,
    width: "100%",
  },
  ".sp-layout": {
    minHeight: 300,
    borderColor: "transparent",
    borderBottomLeftRadius: "0 !important",
    borderBottomRightRadius: "0 !important",
    background: "$secondary !important",
  },

  ".sp-code-editor": {
    py: "var(--sp-space-2)",
    background: "$secondary",
    width: "50vw",
    height: "100vh",
    overflowY: "auto",
    overflowX: "hidden",
  },

  ".sp-wrapper": {
    "--sp-colors-fg-active": "#1f2933",
    "--sp-colors-fg-default": "#757678",
    "--sp-colors-fg-inactive": "#e4e7eb",
    "--sp-colors-bg-active": "#e4e7eb",
    "--sp-colors-bg-default": "#f8f9fb",
    "--sp-colors-bg-default-overlay": "rgba(248,249,251,0.8117647058823529)",
    "--sp-colors-bg-input": "#fff",
    "--sp-colors-accent": "#64d2ff",
    "--sp-colors-bg-error": "#ffcdca",
    "--sp-colors-fg-error": "#811e18",
    "--sp-layout-height": "300px",
    "--sp-font-size": "14px",
    "--sp-font-body":
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    "--sp-font-mono":
      '"Fira Mono","DejaVu Sans Mono",Menlo,Consolas,"Liberation Mono",Monaco,"Lucida Console",monospace',
    "--sp-space-1": "4px",
    "--sp-space-2": "8px",
    "--sp-space-3": "12px",
    "--sp-space-4": "16px",
    "--sp-space-5": "20px",
    "--sp-space-6": "24px",
    "--sp-space-7": "28px",
    "--sp-space-8": "32px",
    "--sp-border-radius": "4px",
    background: "$secondary",
    fontSize: "var(--sp-font-size)",
    fontFamily: "var(--sp-font-body)",
    display: "block",
    boxSizing: "border-box",
    textRendering: "optimizeLegibility",
    WebkitTapHighlightColor: "transparent",
    WebkitFontSmoothing: "subpixel-antialiased",
  },
});

const Canvas = Kit.styled("div", {
  color: "$accessible",
  padding: "$100",
  margin: "0 auto",
  overflow: "hidden",
  position: "relative",
  transition: "all 0.5s ease-in-out",
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

const components = {
  Kit,
  Assets,
  ...Kit,
  ...Assets,
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
  const [sandboxEmbedTheme, setSandboxEmbedTheme] = React.useState(lightTheme);

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
    }, [iframeRef, thatCode]);

    if (hasEditor) {
      return (
        <Kit.Box
          ref={iframeRef}
          as="iframe"
          sandbox="allow-scripts allow-same-origin"
          src={`/playroom?code=${LZString.compressToEncodedURIComponent(
            firstRenderCode
          )}`}
          css={{
            background: Kit.theme.colors.gray500,
            border: 0,
            width: "100%",
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
        <MDXRemote
          compiledSource={receivedSource.compiledSource}
          scope={{
            ...Kit,
            useState: React.useState,
            useEffect: React.useEffect,
          }}
          components={components}
        />
      </ErrorBoundary>
    );
  };

  sandboxGlobalcss();

  React.useEffect(() => {
    if (resolvedTheme === "dark") {
      setSandboxEmbedTheme(darkTheme);
    } else {
      setSandboxEmbedTheme(lightTheme);
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

          console.log(event);

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
      <Head>
        <title>WPDS - Playroom</title>
      </Head>
      <SandpackProvider
        template="react"
        customSetup={{
          files: {
            "/App.js": {
              code,
              active: true,
            },
          },
        }}
      >
        <Canvas hasEditor={hasEditor}>
          <Preview />
        </Canvas>
        <SandpackLayout theme={sandboxEmbedTheme}>
          {hasEditor && (
            <SandpackCodeEditor
              showLineNumbers
              customStyle={{
                border: "1px solid var(--wpds-colors-subtle)",
              }}
            />
          )}
        </SandpackLayout>
      </SandpackProvider>
    </Kit.Box>
  );
}

Playroom.getLayout = (page) => page;

export async function getServerSideProps(req) {
  const {
    query: { code, edit, isGuide = "none" },
  } = req;

  let source;
  let parsedCode;

  try {
    parsedCode = LZString.decompressFromEncodedURIComponent(code);
    source = await serialize(parsedCode, {
      mdxOptions: {
        format: "mdx",
      },
    });
  } catch (error) {
    console.error(error);
  }

  const hasEditor = edit === "true" || edit === true || edit === "1";

  return {
    props: {
      source,
      code: parsedCode,
      hasEditor,
      isGuide,
    },
  };
}
