import * as React from "react";
import { styled } from '@stitches/react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { theme } from "@washingtonpost/wpds-theme";

const NAME = "Avatar";


interface AvatarProps {
	/** Image URL (non-IMRS) */
	imgUrl: string,
	/** @default "Image without a caption"*/
  alt?: string,
	/**
   * Sizes - supports any sizes
   * @default 200
   *
* */
	size?: "200" | number,
}

/**
 * @washingtonpost/wpds-ui-kit
 * # add description
 * 
 * # Avatar

```jsx
import { Avatar } from "@washingtonpost/wpds-ui-kit";

function Component() {
	return (
		<Avatar>
		</Avatar>
	);
}
```

## Component API

## Do's and Don'ts

 * 
 */

// export const Avatar: React.FC<AvatarProps> = ({imgUrl, size = "200", alt="Image without a caption", ...otherProps}, ref) => (
// 	<AvatarImage
// 		ref={ref}
// 		src={imgUrl}
// 		alt={alt}
// 		width={size}
// 		height={size}
// 		{...otherProps}
// 	/>
// );


const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: theme.sizes['200'],
  height: theme.sizes['200'],
  borderRadius: '100%',
  backgroundColor: theme.colors.primary,
  marginRight: theme.sizes['050'],
  marginBottom: theme.sizes['025']
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const Avatar : any = ({imgUrl, alt}) => (
  <>
    <StyledAvatar>
        <StyledImage
          src={imgUrl}
          alt={alt}
          />
    </StyledAvatar>

    <StyledAvatar>
        <StyledImage
          src={imgUrl}
          alt="Colm Tuite"
          />
    </StyledAvatar>
  </>
);

Avatar.displayName = NAME;

export type { AvatarProps };
