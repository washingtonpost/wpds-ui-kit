import * as React from "react";
import { styled } from '@stitches/react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import {theme } from "@washingtonpost/wpds-theme";

const NAME = "Avatar";
const DEFAULT_ALT_TEXT = 'An avatar is an atomic component that represents an individual’s identity through a circular photo.';
const DEFAULT_AVATAR_SIZE = '200';

interface AvatarProps {
	/** Image URL (non-IMRS) */
	imgUrl: string,
	/** @default DEFAULT_ALT_TEXT*/
  alt?: string,
	/**
   * Sizes - supports any sizes
   * @default 200
   *
* */
	size?: string,
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

export const Avatar : React.FC<AvatarProps> = React.forwardRef<
  HTMLElement,
	AvatarProps
>(
  (
    { imgUrl = '', alt = DEFAULT_ALT_TEXT, size = DEFAULT_AVATAR_SIZE, ...props },
    ref
  ) => (
		<StyledAvatar
			ref={ref}
			css={{
				width: theme.sizes[size],
				height: theme.sizes[size]
			}}
			{...props}
		>
			<StyledImage
				src={imgUrl}
				alt={alt}
			/>
		</StyledAvatar>
	)
);

Avatar.displayName = NAME;
