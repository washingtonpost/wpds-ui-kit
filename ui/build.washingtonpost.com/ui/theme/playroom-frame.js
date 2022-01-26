import { globalStyles } from "@washingtonpost/wpds-ui-kit";

export default function FrameComponent({ theme, children }) {
  globalStyles();

  return children;
}
