/* eslint no-empty: ["error", { "allowEmptyCatch": true }] */
/* eslint-disable  @typescript-eslint/no-this-alias */
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
    itid:
      // if we have a page view event set the itid to wpds else set it to ""
      // so that we track on site traffic as wpds
      window.dataLayer.find((event) => event.event === "classicPageView")
        ? "wpds"
        : "",
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
    <>
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script
          id="pwapiConfig"
          src="https://www.washingtonpost.com/subscribe/static/tetro-client/fusion/tetro.min.js"
          async=""
        />
        <script id="displayConfig">
          {() => {
            window.dQ = window.dQ || {};
            window.dQ.hold = window.dQ.hold || [];
            var otCookie = document.cookie.match("wp_ak_ot=(1)[^;]*(;|$)")
              ? RegExp.$1
              : "";
            window.dQ.participants = ["iab_banner", "softwall"];
            // Removed iab_banner to support gradual rollout. Will remove upon completion.
            if (
              otCookie !== "1" &&
              window &&
              window.location.href.indexOf("gtml=true") <= 0
            ) {
              window.dQ.participants = window.dQ.participants.filter(
                (element) => element !== "iab_banner"
              );
            }
            // Define placeholder function early. Will be replaced by Tetro client.
            if (typeof window.registerDisplay !== "function") {
              window.registerDisplay = (...args) => {
                window.dQ.hold.push(args[0]);
              };
            }
          }}
        </script>
        <script id="tcfString">
          {() => {
            var OneTrustTCFStub;
            var otCookie = document.cookie.match("wp_ak_ot=(1)[^;]*(;|$)")
              ? RegExp.$1
              : "";
            var geoCookie = document.cookie.match("(^|;) ?wp_geo=([^;]*)(;|$)")
              ? RegExp.$2
              : "";
            if (
              (otCookie === "1" ||
                (window && window.location.href.indexOf("gtml=true") >= 0)) &&
              (geoCookie.indexOf("|EEA") >= 0 ||
                (window && window.location.href.indexOf("otr=eea") >= 0))
            ) {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              OneTrustTCFStub = (function (e) {
                "use strict";
                var t = function () {
                    var o = this;
                    (this.LOCATOR_NAME = "__tcfapiLocator"),
                      (this.win = window),
                      (this.init = function () {
                        for (; o.win; ) {
                          try {
                            if (o.win.frames[o.LOCATOR_NAME]) {
                              o.cmpFrame = o.win;
                              break;
                            }
                          } catch (e) {}
                          if (o.win === window.top) break;
                          o.win = o.win.parent;
                        }
                        o.cmpFrame ||
                          (o.addFrame(),
                          (o.win.__tcfapi = o.executeTcfApi),
                          (o.win.receiveOTMessage = o.receiveIabMessage),
                          (o.win.attachEvent || o.win.addEventListener)(
                            "message",
                            o.win.receiveOTMessage,
                            !1
                          ));
                      }),
                      (this.addFrame = function () {
                        var e = o.win.document,
                          t = !!o.win.frames[o.LOCATOR_NAME];
                        if (!t)
                          if (e.body) {
                            var i = e.createElement("iframe");
                            (i.style.cssText = "display:none"),
                              (i.name = o.LOCATOR_NAME),
                              i.setAttribute("title", "TCF Locator"),
                              e.body.appendChild(i);
                          } else setTimeout(o.addFrame, 5);
                        return !t;
                      }),
                      (this.receiveIabMessage = function (a) {
                        var n = "string" == typeof a.data,
                          e = {};
                        try {
                          e = n ? JSON.parse(a.data) : a.data;
                        } catch (e) {}
                        if (e && e.__tcfapiCall) {
                          var t = e.__tcfapiCall,
                            r = t.callId,
                            i = t.command,
                            s = t.parameter,
                            c = t.version;
                          o.executeTcfApi(
                            i,
                            s,
                            function (e, t) {
                              var i = {
                                __tcfapiReturn: {
                                  returnValue: e,
                                  success: t,
                                  callId: r,
                                },
                              };
                              a &&
                                a.source &&
                                a.source.postMessage &&
                                a.source.postMessage(
                                  n ? JSON.stringify(i) : i,
                                  "*"
                                );
                            },
                            c
                          );
                        }
                      }),
                      (this.executeTcfApi = function () {
                        for (var e = [], t = 0; t < arguments.length; t++)
                          e[t] = arguments[t];
                        if (!e.length) return o.win.__tcfapi.a || [];
                        if ("setGdprApplies" === e[0])
                          3 < e.length &&
                            2 === parseInt(e[1], 10) &&
                            "boolean" == typeof e[3] &&
                            ((o.gdprApplies = e[3]),
                            "function" == typeof e[2] && e[2]("set", !0));
                        else {
                          var i = e[0],
                            a = e[1],
                            n = e[2],
                            r = e[3];
                          "function" == typeof n &&
                            i &&
                            ("ping" === i
                              ? o.getPingReq(n, o.gdprApplies)
                              : o.addToQ(i, a, n, r));
                        }
                      }),
                      (this.addToQ = function (e, t, i, a) {
                        var n = o.win.__tcfapi;
                        (n.a = n.a || []), n.a.push([e, t, i, a]);
                      }),
                      (this.getPingReq = function (e, t) {
                        void 0 === t && (t = void 0),
                          e({
                            gdprApplies: t,
                            cmpLoaded: !1,
                            cmpStatus: "stub",
                            apiVersion: "2.0",
                          });
                      }),
                      this.init();
                  },
                  i = new t();
                return (e.TCF = t), (e.tcfStub = i), e;
              })({});
            } else {
              // do nothing
            }
          }}
        </script>
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-WHNNX8B"
        />
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
    </>
  );
}

export default App;
