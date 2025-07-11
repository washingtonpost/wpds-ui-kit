import React from 'react';
import { clsx } from 'clsx';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check } from '@washingtonpost/wpds-assets';
import { IconVE as Icon } from '../icon/icon-ve';
import { selectItem, selectItemText, selectItemIndicator } from './Select.css';

export interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
  /** Additional CSS class */
  className?: string;
  /** Children content */
  children?: React.ReactNode;
}

export const SelectItemVE = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ className, children, ...props }, ref) => {
  return (
    <SelectPrimitive.Item
      ref={ref}
      className={clsx(selectItem(), className)}
      {...props}
    >
      <SelectPrimitive.ItemText className={selectItemText}>
        {children}
      </SelectPrimitive.ItemText>
      
      <SelectPrimitive.ItemIndicator className={selectItemIndicator}>
        <Icon label="">
          <Check />
        </Icon>
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
});

SelectItemVE.displayName = 'SelectItemVE';
