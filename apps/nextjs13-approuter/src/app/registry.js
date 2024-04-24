"use client";

import React from "react";
import { useServerInsertedHTML } from "next/navigation";
import { getCssText, globalCss } from "@washingtonpost/wpds-ui-kit";

export default function StitchesRegistry({ children }) {
  useServerInsertedHTML(() => {
    globalCss();
    return (
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    );
  });

  return children;
}
