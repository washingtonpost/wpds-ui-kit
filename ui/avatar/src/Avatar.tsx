import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import type * as WPDS from "@washingtonpost/wpds-theme";
import * as Theme from "@washingtonpost/wpds-theme";
import { theme, styled } from "@washingtonpost/wpds-theme";

const NAME = "Avatar";
const DEFAULT_AVATAR_SIZE = "200";

interface AvatarProps {
  /**
   * Sizes - supports any size token
   * @default 200
   *
   * */
  size?: "200" | number;
  /** Override CSS */
  css?: WPDS.CSS;
  children: React.ReactElement;
}

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  borderRadius: "100%",
  length: 0,
});

export const Avatar: React.FC<AvatarProps> = React.forwardRef<
  HTMLElement,
  AvatarProps
>(({ css, children, size = DEFAULT_AVATAR_SIZE }, ref) => {
  const child = React.Children.only(children);

  const ImageStyles = Theme.css({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "inherit",
    length: 0,
  });

  return (
    <StyledAvatar
      ref={ref}
      css={{
        width: theme.sizes[size],
        height: theme.sizes[size],
        ...css,
      }}
    >
      {React.cloneElement(child, {
        className: `${ImageStyles}`,
        tabIndex: 0,
      })}
    </StyledAvatar>
  );
});

Avatar.displayName = NAME;
