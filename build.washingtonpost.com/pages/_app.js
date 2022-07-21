import { ThemeProvider } from "next-themes";
import React from "react";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import "react-toastify/dist/ReactToastify.css";
import {
  globalStyles,
  darkTheme,
  Box,
  globalCss,
} from "@washingtonpost/wpds-ui-kit";
import { darkModeStyles } from "~/components/DarkModeStyles";
import { PageLayout } from "~/components/Layout";
import { SSRProvider } from "@react-aria/ssr";
import { useRouter } from "next/router";
import { GoogleTagManager } from "@washingtonpost/site-third-party-scripts";
import SEO from "../next-seo.config";
import "../public/global.css";

const pageview = (url) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};

const globalTextStyles = globalCss({
  body: {
    color: "$accessible",
  },
});

function App({ Component, pageProps }) {
  globalStyles();
  globalTextStyles();
  darkModeStyles();

  const getLayout = Component.getLayout;

  const router = useRouter();
  React.useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);

  return (
    <SSRProvider>
      <DefaultSeo {...SEO} />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{
          dark: darkTheme.className,
          light: "light",
        }}
        disableTransitionOnChange={false}
        enableColorScheme={false}
      >
        {/** only render on prod */}
        {process.env.NODE_ENV === "production" && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];${GoogleTagManager()}`}
          </Script>
        )}
        {getLayout ? (
          getLayout(
            <>
              <Component {...pageProps} />
            </>
          )
        ) : (
          <PageLayout {...pageProps}>
            <Component {...pageProps} />
          </PageLayout>
        )}
      </ThemeProvider>
    </SSRProvider>
  );
}

export default App;
