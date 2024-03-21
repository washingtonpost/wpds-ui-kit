import React from "react";
import { globalStyles } from "@washingtonpost/wpds-ui-kit";

export default function App({ Component, pageProps }) {
  globalStyles();

  return <Component {...pageProps} />;
}
