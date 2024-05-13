import React from "react";

import { styled } from "../theme";

const StyledAlertBannerContent = styled("p", {
  marginBlock: "0.625rem",
  flex: "1",
});
export const AlertBannerContent = StyledAlertBannerContent;
export type AlertBannerContentProps = React.ComponentProps<
  typeof AlertBannerContent
>;
