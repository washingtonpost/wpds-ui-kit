/**
 * Migration utility for transitioning from Stitches to vanilla-extract
 *
 * This file exports both old and new component implementations,
 * allowing for gradual migration and testing.
 */

// Vanilla-extract implementations (new)
export { Box as BoxVE } from "./box/box-ve";
export { Button as ButtonVE } from "./button/button-ve";
export { IconVE } from "./icon/icon-ve";
export {
  Heading as HeadingVE,
  Text as TextVE,
  MetaText as MetaTextVE,
} from "./typography/typography-ve";
export { InputText as InputTextVE } from "./input-text/input-text-ve";
export { InputPasswordVE } from "./input-password/input-password-ve";
export { InputTextareaVE } from "./input-textarea/input-textarea-ve";
export { InputSearchVE } from "./input-search/input-search-ve";
export {
  RadioGroup as RadioGroupVE,
  RadioButton as RadioButtonVE,
} from "./radio-group/radio-group-ve";
export {
  Switch as SwitchVE,
  SwitchRoot as SwitchRootVE,
  SwitchThumb as SwitchThumbVE,
} from "./switch/switch-ve";
export { Checkbox as CheckboxVE } from "./checkbox/checkbox-ve";
export {
  SelectVE,
  SelectRootVE,
  SelectTriggerVE,
  SelectValueVE,
  SelectLabelVE,
  SelectContentVE,
  SelectItemVE,
} from "./select/select-ve";
export {
  TabsVE,
  TabsRootVE,
  TabsListVE,
  TabsTriggerVE,
  TabsContentVE,
} from "./tabs/tabs-ve";
export {
  AccordionVE,
  AccordionRootVE,
  AccordionItemVE,
  AccordionTriggerVE,
  AccordionContentVE,
} from "./accordion/accordion-ve";
export {
  PopoverVE,
  PopoverRootVE,
  PopoverPortalVE,
  PopoverContentVE,
  PopoverTriggerVE,
  PopoverAnchorVE,
  PopoverCloseVE,
} from "./popover/popover-ve";
export {
  DialogVE,
  DialogRoot,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./dialog/dialog-ve";
export {
  DrawerVE,
  DrawerRoot,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
  DrawerCustomTrigger,
  DrawerScrim,
} from "./drawer/drawer-ve";
export {
  CarouselVE,
  CarouselRootVE,
  CarouselHeaderVE,
  CarouselHeaderContentVE,
  CarouselHeaderActionsVE,
  CarouselTitleVE,
  CarouselPreviousButtonVE,
  CarouselNextButtonVE,
  CarouselContentVE,
  CarouselItemVE,
  CarouselFooterVE,
  CarouselDotsVE,
} from "./carousel/carousel-ve";
export { Container as ContainerVE } from "./container/container-ve";
export {
  TooltipVE,
  TooltipRootVE,
  TooltipPortalVE,
  TooltipProviderVE,
  TooltipContentVE,
  TooltipTriggerVE,
} from "./tooltip/tooltip-ve";
export { ErrorMessageVE } from "./error-message/error-message-ve";
export { HelperTextVE } from "./helper-text/helper-text-ve";
export { VisuallyHiddenVE } from "./visually-hidden/visually-hidden-ve";
export { DividerVE } from "./divider/divider-ve";
export { InputLabelVE } from "./input-label/input-label-ve";
export { PaginationDotsVE } from "./pagination-dots/pagination-dots-ve";
export { FieldsetVE } from "./fieldset/fieldset-ve";
export { AvatarVE } from "./avatar/avatar-ve";
export { ScrimVE } from "./scrim/scrim-ve";
export { CardVE } from "./card/card-ve";
export { AppBarVE } from "./app-bar/app-bar-ve";
export { ActionMenuVE } from "./action-menu/action-menu-ve";
export { AlertBannerVE } from "./alert-banner/alert-banner-ve";
export { NavigationMenuVE } from "./navigation-menu/navigation-menu-ve";

// Legacy Stitches implementations (existing)
export { Box } from "./box/box";
export { Button } from "./button/Button";
export { Icon } from "./icon/icon";
export { InputText } from "./input-text/InputText";
export { InputPassword } from "./input-password/InputPassword";
export { InputTextarea } from "./input-textarea/InputTextarea";
export { InputSearch } from "./input-search";
export { RadioGroup, RadioButton } from "./radio-group";
export { Switch } from "./switch/Switch";
export { Checkbox } from "./checkbox/Checkbox";
export { Select } from "./select";
export { Tabs } from "./tabs/Tabs";
export { Accordion } from "./accordion/Accordion";
export { Popover } from "./popover/Popover";
export { Dialog } from "./dialog/Dialog";
export { Drawer } from "./drawer/Drawer";
export { Carousel } from "./carousel";
export { Container } from "./container/Container";
export { Tooltip } from "./tooltip/Tooltip";
export { ErrorMessage } from "./error-message/ErrorMessage";
export { HelperText } from "./helper-text/HelperText";
export { VisuallyHidden } from "./visually-hidden/visually-hidden";
export { Divider } from "./divider/Divider";
export { InputLabel } from "./input-label/InputLabel";
export { PaginationDots } from "./pagination-dots/PaginationDots";
export { Fieldset } from "./fieldset/Fieldset";
export { Avatar } from "./avatar/Avatar";
export { Scrim } from "./scrim/Scrim";
export { Card } from "./card/Card";
export { AppBar } from "./app-bar/AppBar";
export { ActionMenu } from "./action-menu/ActionMenu";
export { AlertBanner } from "./alert-banner/AlertBanner";
export { NavigationMenu } from "./navigation-menu/NavigationMenu";

// Theme exports
export * as VanillaExtract from "./theme/vanilla-extract";
export * as Stitches from "./theme/stitches.config";

// Migration configuration
export const MIGRATION_CONFIG = {
  useVanillaExtract:
    process.env.NODE_ENV === "development" ||
    process.env.WPDS_USE_VANILLA_EXTRACT === "true" ||
    (typeof window !== "undefined" &&
      window.location?.search?.includes("ve=true")),
};

// Component factory functions for dynamic loading
export async function getBoxComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { Box } = await import("./box/box-ve");
    return Box;
  } else {
    const { Box } = await import("./box/box");
    return Box;
  }
}

export async function getButtonComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { Button } = await import("./button/button-ve");
    return Button;
  } else {
    const { Button } = await import("./button/Button");
    return Button;
  }
}

export async function getIconComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { IconVE: Icon } = await import("./icon/icon-ve");
    return Icon;
  } else {
    const { Icon } = await import("./icon/icon");
    return Icon;
  }
}

export async function getHeadingComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { Heading } = await import("./typography/typography-ve");
    return Heading;
  } else {
    // Use legacy styled heading pattern
    const { styled } = await import("./theme");
    return styled("h1", {
      fontFamily: "$headline",
      fontSize: "$300",
      fontWeight: "$bold",
      color: "$primary",
      lineHeight: "$110",
      margin: 0,
    });
  }
}

export async function getTextComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { Text } = await import("./typography/typography-ve");
    return Text;
  } else {
    // Use legacy styled component pattern
    const { styled } = await import("./theme");
    return styled("p", {
      fontFamily: "$body",
      fontSize: "$100",
      lineHeight: "$150",
      fontWeight: "$regular",
      color: "$primary",
      margin: 0,
    });
  }
}

export async function getMetaTextComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { MetaText } = await import("./typography/typography-ve");
    return MetaText;
  } else {
    // Use legacy styled component pattern
    const { styled } = await import("./theme");
    return styled("span", {
      fontFamily: "$meta",
      fontSize: "$075",
      lineHeight: "$125",
      fontWeight: "$light",
      color: "$primary",
      margin: 0,
    });
  }
}

export async function getInputTextComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { InputText } = await import("./input-text/input-text-ve");
    return InputText;
  } else {
    const { InputText } = await import("./input-text/InputText");
    return InputText;
  }
}

export async function getInputPasswordComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { InputPasswordVE } = await import(
      "./input-password/input-password-ve"
    );
    return InputPasswordVE;
  } else {
    const { InputPassword } = await import("./input-password/InputPassword");
    return InputPassword;
  }
}

export async function getRadioGroupComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { RadioGroup } = await import("./radio-group/radio-group-ve");
    return RadioGroup;
  } else {
    const { RadioGroup } = await import("./radio-group");
    return RadioGroup;
  }
}

export async function getRadioButtonComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { RadioButton } = await import("./radio-group/radio-group-ve");
    return RadioButton;
  } else {
    const { RadioButton } = await import("./radio-group");
    return RadioButton;
  }
}

export async function getSwitchComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { Switch } = await import("./switch/switch-ve");
    return Switch;
  } else {
    const { Switch } = await import("./switch/Switch");
    return Switch;
  }
}

export async function getCheckboxComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { Checkbox } = await import("./checkbox/checkbox-ve");
    return Checkbox;
  } else {
    const { Checkbox } = await import("./checkbox/Checkbox");
    return Checkbox;
  }
}

export async function getInputTextareaComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { InputTextareaVE } = await import(
      "./input-textarea/input-textarea-ve"
    );
    return InputTextareaVE;
  } else {
    const { InputTextarea } = await import("./input-textarea/InputTextarea");
    return InputTextarea;
  }
}

export async function getSelectComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { SelectVE } = await import("./select/select-ve");
    return SelectVE;
  } else {
    const { Select } = await import("./select");
    return Select;
  }
}

export async function getTabsComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { TabsVE } = await import("./tabs/tabs-ve");
    return TabsVE;
  } else {
    const { Tabs } = await import("./tabs/Tabs");
    return Tabs;
  }
}

export async function getAccordionComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { AccordionVE } = await import("./accordion/accordion-ve");
    return AccordionVE;
  } else {
    const { Accordion } = await import("./accordion/Accordion");
    return Accordion;
  }
}

export async function getInputSearchComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { InputSearchVE } = await import("./input-search/input-search-ve");
    return InputSearchVE;
  } else {
    const { InputSearch } = await import("./input-search");
    return InputSearch;
  }
}

export async function getCarouselComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { CarouselVE } = await import("./carousel/carousel-ve");
    return CarouselVE;
  } else {
    const { Carousel } = await import("./carousel");
    return Carousel;
  }
}

export async function getContainerComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { Container } = await import("./container/container-ve");
    return Container;
  } else {
    const { Container } = await import("./container/Container");
    return Container;
  }
}

export async function getTooltipComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { TooltipVE } = await import("./tooltip/tooltip-ve");
    return TooltipVE;
  } else {
    const { Tooltip } = await import("./tooltip/Tooltip");
    return Tooltip;
  }
}

export async function getFieldsetComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { FieldsetVE: Fieldset } = await import("./fieldset/fieldset-ve");
    return Fieldset;
  } else {
    const { Fieldset } = await import("./fieldset/Fieldset");
    return Fieldset;
  }
}

export async function getAvatarComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { AvatarVE: Avatar } = await import("./avatar/avatar-ve");
    return Avatar;
  } else {
    const { Avatar } = await import("./avatar/Avatar");
    return Avatar;
  }
}

export async function getScrimComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { ScrimVE: Scrim } = await import("./scrim/scrim-ve");
    return Scrim;
  } else {
    const { Scrim } = await import("./scrim/Scrim");
    return Scrim;
  }
}

export async function getCardComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { CardVE: Card } = await import("./card/card-ve");
    return Card;
  } else {
    const { Card } = await import("./card/Card");
    return Card;
  }
}

export async function getAppBarComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { AppBarVE: AppBar } = await import("./app-bar/app-bar-ve");
    return AppBar;
  } else {
    const { AppBar } = await import("./app-bar/AppBar");
    return AppBar;
  }
}

export async function getActionMenuComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { ActionMenuVE } = await import("./action-menu/action-menu-ve");
    return ActionMenuVE;
  } else {
    const { ActionMenu } = await import("./action-menu/ActionMenu");
    return ActionMenu;
  }
}

export async function getAlertBannerComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { AlertBannerVE } = await import("./alert-banner/alert-banner-ve");
    return AlertBannerVE;
  } else {
    const { AlertBanner } = await import("./alert-banner/AlertBanner");
    return AlertBanner;
  }
}

export async function getNavigationMenuComponent() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { NavigationMenuVE } = await import(
      "./navigation-menu/navigation-menu-ve"
    );
    return NavigationMenuVE;
  } else {
    const { NavigationMenu } = await import("./navigation-menu/NavigationMenu");
    return NavigationMenu;
  }
}

// Theme utilities
export async function getTheme() {
  if (MIGRATION_CONFIG.useVanillaExtract) {
    const { vars, lightThemeVE, darkThemeVE } = await import(
      "./theme/vanilla-extract"
    );
    return { vars, lightTheme: lightThemeVE, darkTheme: darkThemeVE };
  } else {
    const { theme, lightTheme, darkTheme } = await import("./theme");
    return { theme, lightTheme, darkTheme };
  }
}

// Utility to check which system is being used
export function isUsingVanillaExtract(): boolean {
  return MIGRATION_CONFIG.useVanillaExtract;
}

// Development helper to toggle systems
export function toggleMigrationSystem() {
  if (typeof window !== "undefined") {
    const url = new URL(window.location.href);
    const currentVE = url.searchParams.get("ve");
    if (currentVE === "true") {
      url.searchParams.delete("ve");
    } else {
      url.searchParams.set("ve", "true");
    }
    window.location.href = url.toString();
  }
}
