import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { css, theme, styled } from "@washingtonpost/wpds-theme";

const NAME = "Avatar";
const DEFAULT_AVATAR_SIZE = "200";

interface AvatarProps {
  /**
   * Sizes - supports any size token
   * @default 200
   *
   * */
  size?: "200" | number;
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
  backgroundColor: theme.colors.subtle,
  marginRight: theme.sizes["050"],
  marginBottom: theme.sizes["025"],
  length: 0,
});

export const Avatar: React.FC<AvatarProps> = React.forwardRef<
  HTMLElement,
  AvatarProps
>(({ children, size = DEFAULT_AVATAR_SIZE }, ref) => {
  const child = React.Children.only(children);

  const ImageStyles = css({
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
      }}
    >
      {React.cloneElement(child, {
        className: `${ImageStyles}`,
      })}
    </StyledAvatar>
  );
});

Avatar.displayName = NAME;
