import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as styles from "./Avatar.css";
import { sprinkles } from "../theme/sprinkles.css";
import type { Sprinkles } from "../theme/sprinkles.css";
import * as Tokens from "../theme/tokens";

const NAME = "Avatar";
const DEFAULT_AVATAR_SIZE = "200";

type SizeToken = {
  prefix: "wpds";
  scale: "sizes";
  token: keyof typeof Tokens.sizes;
  value: string;
};

type AvatarSize = keyof typeof styles.avatarSizes;

interface AvatarVEProps 
  extends Omit<React.ComponentPropsWithRef<typeof AvatarPrimitive.Root>, keyof Sprinkles | 'size'>,
    Omit<Sprinkles, 'size'> {
  /** Additional CSS classes */
  className?: string;
  children: React.ReactElement;
  /**
   * Sizes - supports any size token
   * @default 200
   * */
  size?: AvatarSize | SizeToken;
}

export const AvatarVE = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarVEProps
>(({ children, className, size = DEFAULT_AVATAR_SIZE, ...props }, ref) => {
  const child = React.Children.only(children);

  // Extract sprinkle props
  const sprinkleProps: Partial<Sprinkles> = {};
  const otherProps: Omit<React.ComponentPropsWithRef<typeof AvatarPrimitive.Root>, keyof Sprinkles | 'size'> = {};
  
  Object.entries(props).forEach(([key, value]) => {
    if (sprinkles.properties.has(key as keyof Sprinkles)) {
      (sprinkleProps as Record<string, unknown>)[key] = value;
    } else {
      (otherProps as Record<string, unknown>)[key] = value;
    }
  });

  let _size: AvatarSize = size as AvatarSize;
  if (size instanceof Object && size.token) {
    _size = size.token as AvatarSize;
  }

  const avatarClassName = [
    styles.avatar,
    styles.avatarSizes[_size],
    sprinkles(sprinkleProps),
    className
  ].filter(Boolean).join(' ');

  return (
    <AvatarPrimitive.Root ref={ref} className={avatarClassName} {...otherProps}>
      {React.cloneElement(child, {
        className: `${styles.avatarImage} ${child.props.className || ''}`.trim(),
      })}
    </AvatarPrimitive.Root>
  );
});

AvatarVE.displayName = NAME;

export type { AvatarVEProps };
