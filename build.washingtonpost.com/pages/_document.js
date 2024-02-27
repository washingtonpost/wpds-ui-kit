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
        <style
          dangerouslySetInnerHTML={{
            __html: `@font-face {
								font-family: Postoni;
								font-weight: 700;
								font-display: fallback;
								src: url(https://www.washingtonpost.com/wp-stat/assets/fonts/PostoniWide-Bold.woff2);
								unicode-range: U+a, U+20-29, U+2c-5b, U+5d, U+5f, U+61-7d, U+a0, U+a9, U+c9,
								  U+e0-e3, U+e7, U+e9, U+ea, U+ed, U+f3-f5, U+fa, U+2009, U+2013, U+2014,
								  U+2018, U+2019, U+201c, U+201d, U+2026;
							  }
							  @font-face {
								font-family: Postoni;
								font-weight: 300;
								font-display: fallback;
								src: url(https://www.washingtonpost.com/wp-stat/assets/fonts/PostoniWide-Regular.woff2);
							  }
							  @font-face {
								font-family: Franklin;
								font-weight: 700;
								font-display: fallback;
								unicode-range: U+a, U+20-29, U+2c-5b, U+5d, U+5f, U+61-7d, U+a0, U+a9, U+c9,
								  U+e0-e3, U+e7, U+e9, U+ea, U+ed, U+f3-f5, U+fa, U+2009, U+2013, U+2014,
								  U+2018, U+2019, U+201c, U+201d, U+2026;
								src: url(https://www.washingtonpost.com/wp-stat/assets/fonts/ITC_Franklin-Bold.woff2);
							  }
							  @font-face {
								font-family: Franklin;
								font-weight: 300;
								font-display: fallback;
								src: url(https://www.washingtonpost.com/wp-stat/assets/fonts/ITC_Franklin-Light.woff2);
								unicode-range: U+a, U+20-29, U+2c-5b, U+5d, U+5f, U+61-7d, U+a0, U+a9, U+c9,
								  U+e0-e3, U+e7, U+e9, U+ea, U+ed, U+f1, U+f3-f5, U+fa, U+2009, U+2013,
								  U+2014, U+2018, U+2019, U+201c, U+201d, U+2026;
							  }`,
          }}
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
