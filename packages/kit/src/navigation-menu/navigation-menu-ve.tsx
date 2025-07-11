import React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import {
  navigationMenuRootClass,
  navigationMenuListClass,
  navigationMenuItemClass,
  navigationMenuLinkClass,
  navigationMenuTriggerClass,
  navigationMenuContentClass,
  navigationMenuSubClass,
} from "./NavigationMenu.css";

const NAME = "NavigationMenuVE";

// Root
export interface NavigationMenuRootVEProps extends React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Root> {
  children?: React.ReactNode;
  className?: string;
}

export const NavigationMenuRootVE = React.forwardRef<
  HTMLDivElement,
  NavigationMenuRootVEProps
>(({ children, className, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Root
      {...props}
      ref={ref}
      className={`${navigationMenuRootClass} ${className || ""}`}
    >
      {children}
    </NavigationMenuPrimitive.Root>
  );
});
NavigationMenuRootVE.displayName = "NavigationMenuRootVE";

// List
export interface NavigationMenuListVEProps extends React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.List> {
  children?: React.ReactNode;
  className?: string;
}

export const NavigationMenuListVE = React.forwardRef<
  HTMLUListElement,
  NavigationMenuListVEProps
>(({ children, className, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.List
      {...props}
      ref={ref}
      className={`${navigationMenuListClass} ${className || ""}`}
    >
      {children}
    </NavigationMenuPrimitive.List>
  );
});
NavigationMenuListVE.displayName = "NavigationMenuListVE";

// Item
export interface NavigationMenuItemVEProps extends React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Item> {
  children?: React.ReactNode;
  className?: string;
}

export const NavigationMenuItemVE = React.forwardRef<
  HTMLLIElement,
  NavigationMenuItemVEProps
>(({ children, className, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Item
      {...props}
      ref={ref}
      className={`${navigationMenuItemClass} ${className || ""}`}
    >
      {children}
    </NavigationMenuPrimitive.Item>
  );
});
NavigationMenuItemVE.displayName = "NavigationMenuItemVE";

// Link
export interface NavigationMenuLinkVEProps extends React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Link> {
  children?: React.ReactNode;
  className?: string;
  active?: boolean;
  disabled?: boolean;
}

export const NavigationMenuLinkVE = React.forwardRef<
  HTMLAnchorElement,
  NavigationMenuLinkVEProps
>(({ children, className, active, disabled, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Link
      {...props}
      ref={ref}
      className={`${navigationMenuLinkClass({ active, disabled })} ${className || ""}`}
    >
      {children}
    </NavigationMenuPrimitive.Link>
  );
});
NavigationMenuLinkVE.displayName = "NavigationMenuLinkVE";

// Trigger
export interface NavigationMenuTriggerVEProps extends React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Trigger> {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const NavigationMenuTriggerVE = React.forwardRef<
  HTMLButtonElement,
  NavigationMenuTriggerVEProps
>(({ children, className, disabled, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Trigger
      {...props}
      ref={ref}
      className={`${navigationMenuTriggerClass({ disabled })} ${className || ""}`}
    >
      {children}
    </NavigationMenuPrimitive.Trigger>
  );
});
NavigationMenuTriggerVE.displayName = "NavigationMenuTriggerVE";

// Content
export interface NavigationMenuContentVEProps extends React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Content> {
  children?: React.ReactNode;
  className?: string;
}

export const NavigationMenuContentVE = React.forwardRef<
  HTMLDivElement,
  NavigationMenuContentVEProps
>(({ children, className, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Content
      {...props}
      ref={ref}
      className={`${navigationMenuContentClass} ${className || ""}`}
    >
      {children}
    </NavigationMenuPrimitive.Content>
  );
});
NavigationMenuContentVE.displayName = "NavigationMenuContentVE";

// Sub
export interface NavigationMenuSubVEProps extends React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Sub> {
  children?: React.ReactNode;
  className?: string;
}

export const NavigationMenuSubVE = React.forwardRef<
  HTMLDivElement,
  NavigationMenuSubVEProps
>(({ children, className, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Sub
      {...props}
      ref={ref}
      className={`${navigationMenuSubClass} ${className || ""}`}
    >
      {children}
    </NavigationMenuPrimitive.Sub>
  );
});
NavigationMenuSubVE.displayName = "NavigationMenuSubVE";

// Main NavigationMenu object
export const NavigationMenuVE = {
  Root: NavigationMenuRootVE,
  List: NavigationMenuListVE,
  Item: NavigationMenuItemVE,
  Link: NavigationMenuLinkVE,
  Trigger: NavigationMenuTriggerVE,
  Content: NavigationMenuContentVE,
  Sub: NavigationMenuSubVE,
};

NavigationMenuVE.Root.displayName = NAME;
