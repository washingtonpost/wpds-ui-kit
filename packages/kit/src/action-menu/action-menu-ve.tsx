import React from "react";
import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DropdownMenuSeparatorProps, DropdownMenuLabelProps, DropdownMenuGroupProps, DropdownMenuCheckboxItemProps, DropdownMenuRadioGroupProps, DropdownMenuRadioItemProps, DropdownMenuItemIndicatorProps, DropdownMenuSubProps, DropdownMenuSubContentProps, DropdownMenuSubTriggerProps } from "@radix-ui/react-dropdown-menu";
import { ActionMenuRootVE } from "./action-menu-root-ve";
import { ActionMenuContentVE } from "./action-menu-content-ve";
import { ActionMenuItemVE } from "./action-menu-item-ve";
import { ActionMenuTriggerVE } from "./action-menu-trigger-ve";
import { ActionMenuPortalVE } from "./action-menu-portal-ve";
import { actionMenuSeparatorClass, actionMenuLabelClass, actionMenuGroupClass, actionMenuCheckboxItemClass, actionMenuRadioItemClass, actionMenuItemIndicatorClass, actionMenuSubContentClass, actionMenuSubTriggerClass, actionMenuIconClass } from "./ActionMenu.css";
import { ActionMenuContext } from "./context";

const NAME = "ActionMenuVE";

// Separator
export interface ActionMenuSeparatorVEProps extends DropdownMenuSeparatorProps {
  className?: string;
}

export const ActionMenuSeparatorVE = React.forwardRef<HTMLDivElement, ActionMenuSeparatorVEProps>(
  ({ className, ...props }, ref) => (
    <ActionMenuPrimitive.Separator
      ref={ref}
      className={`${actionMenuSeparatorClass} ${className || ""}`}
      {...props}
    />
  )
);
ActionMenuSeparatorVE.displayName = "ActionMenuSeparatorVE";

// Label
export interface ActionMenuLabelVEProps extends DropdownMenuLabelProps {
  className?: string;
  children?: React.ReactNode;
}

export const ActionMenuLabelVE = React.forwardRef<HTMLDivElement, ActionMenuLabelVEProps>(
  ({ className, ...props }, ref) => (
    <ActionMenuPrimitive.Label
      ref={ref}
      className={`${actionMenuLabelClass} ${className || ""}`}
      {...props}
    />
  )
);
ActionMenuLabelVE.displayName = "ActionMenuLabelVE";

// Group
export interface ActionMenuGroupVEProps extends DropdownMenuGroupProps {
  className?: string;
  children?: React.ReactNode;
}

export const ActionMenuGroupVE = React.forwardRef<HTMLDivElement, ActionMenuGroupVEProps>(
  ({ className, ...props }, ref) => (
    <ActionMenuPrimitive.Group
      ref={ref}
      className={`${actionMenuGroupClass} ${className || ""}`}
      {...props}
    />
  )
);
ActionMenuGroupVE.displayName = "ActionMenuGroupVE";

// CheckboxItem
export interface ActionMenuCheckboxItemVEProps extends DropdownMenuCheckboxItemProps {
  className?: string;
  children?: React.ReactNode;
  density?: "loose" | "default" | "compact";
}

export const ActionMenuCheckboxItemVE = React.forwardRef<HTMLDivElement, ActionMenuCheckboxItemVEProps>(
  ({ className, density, children, ...props }, ref) => {
    const context = React.useContext(ActionMenuContext);
    return (
      <ActionMenuPrimitive.CheckboxItem
        ref={ref}
        className={`${actionMenuCheckboxItemClass({ density: density || context.density })} ${className || ""}`}
        {...props}
      >
        {children}
      </ActionMenuPrimitive.CheckboxItem>
    );
  }
);
ActionMenuCheckboxItemVE.displayName = "ActionMenuCheckboxItemVE";

// RadioGroup
export interface ActionMenuRadioGroupVEProps extends DropdownMenuRadioGroupProps {
  className?: string;
  children?: React.ReactNode;
}

export const ActionMenuRadioGroupVE = React.forwardRef<HTMLDivElement, ActionMenuRadioGroupVEProps>(
  ({ className, ...props }, ref) => (
    <ActionMenuPrimitive.RadioGroup
      ref={ref}
      className={className}
      {...props}
    />
  )
);
ActionMenuRadioGroupVE.displayName = "ActionMenuRadioGroupVE";

// RadioItem
export interface ActionMenuRadioItemVEProps extends DropdownMenuRadioItemProps {
  className?: string;
  children?: React.ReactNode;
  density?: "loose" | "default" | "compact";
}

export const ActionMenuRadioItemVE = React.forwardRef<HTMLDivElement, ActionMenuRadioItemVEProps>(
  ({ className, density, children, ...props }, ref) => {
    const context = React.useContext(ActionMenuContext);
    return (
      <ActionMenuPrimitive.RadioItem
        ref={ref}
        className={`${actionMenuRadioItemClass({ density: density || context.density })} ${className || ""}`}
        {...props}
      >
        {children}
      </ActionMenuPrimitive.RadioItem>
    );
  }
);
ActionMenuRadioItemVE.displayName = "ActionMenuRadioItemVE";

// ItemIndicator
export interface ActionMenuItemIndicatorVEProps extends DropdownMenuItemIndicatorProps {
  className?: string;
  children?: React.ReactNode;
}

export const ActionMenuItemIndicatorVE = React.forwardRef<HTMLSpanElement, ActionMenuItemIndicatorVEProps>(
  ({ className, ...props }, ref) => (
    <ActionMenuPrimitive.ItemIndicator
      ref={ref}
      className={`${actionMenuItemIndicatorClass} ${className || ""}`}
      {...props}
    />
  )
);
ActionMenuItemIndicatorVE.displayName = "ActionMenuItemIndicatorVE";

// Sub
export interface ActionMenuSubVEProps extends DropdownMenuSubProps {
  children?: React.ReactNode;
}

export const ActionMenuSubVE: React.FC<ActionMenuSubVEProps> = (props) => {
  const parentContext = React.useContext(ActionMenuContext);
  
  return (
    <ActionMenuContext.Provider
      value={{
        ...parentContext,
        level: parentContext.level + 1,
      }}
    >
      <ActionMenuPrimitive.Sub {...props} />
    </ActionMenuContext.Provider>
  );
};
ActionMenuSubVE.displayName = "ActionMenuSubVE";

// SubContent
export interface ActionMenuSubContentVEProps extends DropdownMenuSubContentProps {
  className?: string;
  children?: React.ReactNode;
}

export const ActionMenuSubContentVE = React.forwardRef<HTMLDivElement, ActionMenuSubContentVEProps>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(ActionMenuContext);
    const shadowSize = context.level === 2 ? "small" : "large";
    
    return (
      <ActionMenuPortalVE>
        <ActionMenuPrimitive.SubContent
          ref={ref}
          className={`${actionMenuSubContentClass[shadowSize]} ${className || ""}`}
          sideOffset={4}
          {...props}
        >
          {children}
        </ActionMenuPrimitive.SubContent>
      </ActionMenuPortalVE>
    );
  }
);
ActionMenuSubContentVE.displayName = "ActionMenuSubContentVE";

// SubTrigger
export interface ActionMenuSubTriggerVEProps extends DropdownMenuSubTriggerProps {
  className?: string;
  children?: React.ReactNode;
  density?: "loose" | "default" | "compact";
}

export const ActionMenuSubTriggerVE = React.forwardRef<HTMLDivElement, ActionMenuSubTriggerVEProps>(
  ({ className, density, children, ...props }, ref) => {
    const context = React.useContext(ActionMenuContext);
    return (
      <ActionMenuPrimitive.SubTrigger
        ref={ref}
        className={`${actionMenuSubTriggerClass({ density: density || context.density })} ${className || ""}`}
        {...props}
      >
        {children}
      </ActionMenuPrimitive.SubTrigger>
    );
  }
);
ActionMenuSubTriggerVE.displayName = "ActionMenuSubTriggerVE";

// Icon
export interface ActionMenuIconVEProps {
  className?: string;
  children?: React.ReactNode;
  side?: "left" | "right";
}

export const ActionMenuIconVE = React.forwardRef<HTMLSpanElement, ActionMenuIconVEProps>(
  ({ className, side = "left", children, ...props }, ref) => (
    <span
      ref={ref}
      className={`${actionMenuIconClass({ side })} ${className || ""}`}
      {...props}
    >
      {children}
    </span>
  )
);
ActionMenuIconVE.displayName = "ActionMenuIconVE";

// Main ActionMenu object
export const ActionMenuVE = {
  Root: ActionMenuRootVE,
  Content: ActionMenuContentVE,
  Item: ActionMenuItemVE,
  Trigger: ActionMenuTriggerVE,
  Portal: ActionMenuPortalVE,
  Separator: ActionMenuSeparatorVE,
  Label: ActionMenuLabelVE,
  Group: ActionMenuGroupVE,
  CheckboxItem: ActionMenuCheckboxItemVE,
  RadioGroup: ActionMenuRadioGroupVE,
  RadioItem: ActionMenuRadioItemVE,
  ItemIndicator: ActionMenuItemIndicatorVE,
  Sub: ActionMenuSubVE,
  SubContent: ActionMenuSubContentVE,
  SubTrigger: ActionMenuSubTriggerVE,
  Icon: ActionMenuIconVE,
};

ActionMenuVE.Root.displayName = NAME;
