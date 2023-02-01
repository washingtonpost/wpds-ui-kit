import * as React from "react";
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
import Head from "next/head";
import LZString from "lz-string";
import { ErrorBoundary } from "react-error-boundary";
import Link from "~/components/Typography/link";

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
      <Head>
        <title>WPDS - Playroom</title>
      </Head>
      <SandpackProvider
        template="react"
        files={{
          "/App.js": {
            code,
            active: true,
          },
        }}
        theme={sandboxEmbedTheme}
        style={{ display: "flex", height: "100vh", width: "100%" }}
      >
        <Canvas hasEditor={hasEditor}>
          <Preview />
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
