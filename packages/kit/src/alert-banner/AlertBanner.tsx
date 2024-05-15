import { AlertBannerRoot } from "./AlertBannerRoot";
import { AlertBannerTrigger } from "./AlertBannerTrigger";
import { AlertBannerContent } from "./AlertBannerContent";

import type { AlertBannerProps } from "./AlertBannerRoot";
import type {
  AlertBannerTriggerProps,
  AlertBannerTriggerInterface,
} from "./AlertBannerTrigger";
import type { AlertBannerContentProps } from "./AlertBannerContent";

const Root = AlertBannerRoot;
const Trigger = AlertBannerTrigger;
const Content = AlertBannerContent;

export const AlertBanner = {
  Root,
  Trigger,
  Content,
};

export type {
  AlertBannerProps,
  AlertBannerTriggerProps,
  AlertBannerContentProps,
  AlertBannerTriggerInterface,
};
