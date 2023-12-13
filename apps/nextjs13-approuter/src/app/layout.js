import React from "react";
import StitchesRegistry from "./registry";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StitchesRegistry>{children}</StitchesRegistry>
      </body>
    </html>
  );
}
