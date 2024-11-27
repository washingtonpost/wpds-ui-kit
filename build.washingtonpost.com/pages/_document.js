import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "@washingtonpost/wpds-ui-kit";
import { Favicon } from "@washingtonpost/site-favicons";

export default function Document() {
  return (
    <Html lang="en" id="wpds">
      <Head>
        <Favicon />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <script
          src="https://www.washingtonpost.com/subscribe/privacy-fe-api/privacy-api-stub.min.js"
          id="privacyStub"
        ></script>
        <link
          rel="preload"
          href="https://www.washingtonpost.com/wp-stat/assets/fonts/PostoniWide-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://www.washingtonpost.com/wp-stat/assets/fonts/PostoniWide-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          href="https://www.washingtonpost.com/wp-stat/assets/fonts/ITC_Franklin-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          href="https://www.washingtonpost.com/wp-stat/assets/fonts/ITC_Franklin-Light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KHRH42S"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
