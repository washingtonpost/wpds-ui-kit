import React from "react";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import "react-toastify/dist/ReactToastify.css";
import {
  globalStyles,
  darkTheme,
  globalCss,
} from "@washingtonpost/wpds-ui-kit";
import { useRouter } from "next/router";
import { darkModeStyles } from "~/components/DarkModeStyles";
import { PageLayout } from "~/components/Layout";
import { SSRProvider } from "@react-aria/ssr";
import SEO from "../next-seo.config";
import "../public/global.css";

const globalTextStyles = globalCss({
  body: {
    color: "$accessible",
  },
});

const pageview = (pathname) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "classicPageView",
    arcId: "(not set)",
    pageName: pathname,
    section: "build.washingtonpost.com",
    subsection: "build.washingtonpost.com",
    contentType: "build.washingtonpost.com",
    itid: "",
    userAgentHit: window.navigator.userAgent,
    platformType: "wpds",
    meterType: "free",
    pageViewType: "load",
  });
};

function App({ Component, pageProps }) {
  globalStyles();
  globalTextStyles();
  darkModeStyles();
  const router = useRouter();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      pageview(window.location.pathname);
      const elements = document.querySelectorAll("a, button");
      elements.forEach((element) => {
        element.addEventListener("click", (event) => {
          const { target } = event;
          const { textContent } = target;

          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "site-onpage-click-event",
            action: "onpage-click",
            category: "onpage",
            // format the textContent into a - separated string
            label: textContent
              .replace(/[^a-zA-Z0-9 ]/g, "-")
              .replace(/\s+/g, "-")
              .toLowerCase(),
          });
        });
      });
    }
  }, []);

  React.useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);

  const getLayout = Component.getLayout;

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
        <Script id="gtm-script" strategy="afterInteractive">
          {`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KHRH42S');
            `}
        </Script>
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
