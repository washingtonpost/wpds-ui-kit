import * as React from "react";
import { styled } from '@stitches/react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { css, theme } from "@washingtonpost/wpds-theme";


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

const StyledAvatar = styled(AvatarPrimitive.Root, {
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	verticalAlign: 'middle',
	overflow: 'hidden',
	userSelect: 'none',
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

export const Avatar : any = ({imgUrl, alt, size = '200'}) => (
	<StyledAvatar css={{ width: theme.sizes[size], height: theme.sizes[size]}}>
			<StyledImage
				src={imgUrl}
				alt={alt}
				/>
	</StyledAvatar>
);

Avatar.displayName = NAME;

export type { AvatarProps };
