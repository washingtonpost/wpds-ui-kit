# WPDS UI Kit: Stitches to vanilla-extract Migration Guide

## Overview

This comprehensive guide provides step-by-step instructions for migrating the WPDS UI Kit from Stitches (deprecated) to vanilla-extract CSS. The migration aims to maintain pixel-perfect visual fidelity, preserve all component APIs, minimize React hooks usage, and ensure Storybook compatibility.

## Migration Goals

1. **Zero Visual Regression**: Every component must maintain exact visual appearance
2. **API Preservation**: All component props and interfaces remain unchanged
3. **Hook Minimization**: Reduce React hooks to the bare minimum while maintaining accessibility
4. **Performance Improvement**: Leverage vanilla-extract's zero-runtime CSS
5. **Storybook**: Ensure all stories work after migration
6. **Accessibility Compliance**: Maintain WCAG 2.1 AA compliance throughout migration
7. **Type Safety**: Leverage vanilla-extract's full TypeScript integration

## Pre-Migration Setup

### 1. Install Dependencies

```bash
pnpm add @vanilla-extract/css @vanilla-extract/recipes @vanilla-extract/sprinkles
pnpm add -D @vanilla-extract/esbuild-plugin @vanilla-extract/webpack-plugin
```

### 2. Create Visual Regression Baselines

Before starting migration, capture the current visual state:

```bash
# Using existing Chromatic setup
pnpm build-storybook
npx chromatic --project-token=<token> --auto-accept-changes --branch-name=stitches-baseline

# Set up Playwright for local testing
pnpm add -D @playwright/test @axe-core/playwright
mkdir visual-tests
```

### 3. Install Additional Dependencies for Type Safety and Accessibility

```bash
pnpm add -D @types/react axe-core jest-axe
```

Create `visual-tests/capture-baseline.spec.ts`:

```typescript
import { test, expect } from '@playwright/test';

const components = [
  'button--primary', 'button--secondary', 'button--cta',
  'tabs--default', 'card--default', 'input-text--default',
  // Add all component story IDs
];

test.describe('Baseline Capture', () => {
  components.forEach(id => {
    test(id, async ({ page }) => {
      await page.goto(`http://localhost:6006/iframe.html?id=${id}`);
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot(`${id}.png`);
    });
  });
});
```

## Theme Architecture

### 1. Create Theme Contract

Create `packages/kit/src/theme/contracts.css.ts`:

```typescript
import { createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  colors: {
    // Primary palette
    primary: '',
    onPrimary: '',
    secondary: '',
    onSecondary: '',
    cta: '',
    onCta: '',
    
    // Surfaces
    background: '',
    onBackground: '',
    surface: '',
    onSurface: '',
    surfaceVariant: '',
    onSurfaceVariant: '',
    
    // Semantic colors
    error: '',
    onError: '',
    success: '',
    onSuccess: '',
    warning: '',
    onWarning: '',
    signal: '',
    onSignal: '',
    
    // Interactive states
    disabled: '',
    onDisabled: '',
    outline: '',
    shadow: '',
    
    // Gray scale (static colors)
    gray0: '',
    gray20: '',
    gray40: '',
    gray60: '',
    gray80: '',
    gray100: '',
    gray120: '',
    gray200: '',
    gray300: '',
    gray400: '',
    gray500: '',
    gray600: '',
    gray700: '',
    
    // Special
    alpha25: '',
    alpha50: '',
  },
  
  fonts: {
    headline: '',
    body: '',
    meta: '',
  },
  
  fontSizes: {
    '075': '',
    '087': '',
    '100': '',
    '112': '',
    '125': '',
    '150': '',
    '175': '',
    '200': '',
    '225': '',
    '250': '',
    '275': '',
    '300': '',
    '350': '',
  },
  
  fontWeights: {
    light: '',
    regular: '',
    bold: '',
  },
  
  lineHeights: {
    headline: '',
    body: '',
    meta: '',
  },
  
  space: {
    '025': '',
    '050': '',
    '075': '',
    '087': '',
    '100': '',
    '125': '',
    '150': '',
    '175': '',
    '200': '',
    '225': '',
    '250': '',
    '275': '',
    '300': '',
    '350': '',
  },
  
  sizes: {
    '025': '',
    '050': '',
    '075': '',
    '087': '',
    '100': '',
    '125': '',
    '150': '',
    '175': '',
    '200': '',
    '225': '',
    '250': '',
    '275': '',
    '300': '',
    '350': '',
    '500': '',
    '600': '',
    '800': '',
    '1000': '',
  },
  
  radii: {
    sm: '',
    md: '',
    round: '',
  },
  
  shadows: {
    100: '',
    200: '',
    300: '',
    400: '',
  },
  
  transitions: {
    fast: '',
    normal: '',
    slow: '',
    inOut: '',
  },
  
  zIndices: {
    shell: '',
    nav: '',
    sticky: '',
    scrim: '',
    modal: '',
    popover: '',
    toast: '',
    tooltip: '',
  },
});
```

### 2. Create Theme Implementations

Create `packages/kit/src/theme/themes.css.ts`:

```typescript
import { createTheme, createGlobalTheme } from '@vanilla-extract/css';
import { vars } from './contracts.css';

// Static colors that don't change between themes
export const staticColors = createGlobalTheme(':root', {
  blue10: '#FAF9FF',
  blue20: '#F0F0FF',
  blue30: '#D8D8FF',
  blue40: '#A8A8FF',
  blue60: '#0000FF',
  blue80: '#1919F0',
  blue100: '#151582',
  // ... add all static colors
});

export const lightTheme = createTheme(vars, {
  colors: {
    primary: '#191a1a',
    onPrimary: '#ffffff',
    secondary: '#f4f4f4',
    onSecondary: '#191a1a',
    cta: '#1955ff',
    onCta: '#ffffff',
    // ... complete light theme
  },
  fonts: {
    headline: 'Postoni,Georgia,serif',
    body: 'georgia,Times New Roman,Times,serif',
    meta: 'Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif',
  },
  // ... complete theme values
});

export const darkTheme = createTheme(vars, {
  colors: {
    primary: '#d1d1d1',
    onPrimary: '#191a1a',
    secondary: '#191a1a',
    onSecondary: '#d1d1d1',
    // ... complete dark theme
  },
  // ... other values same as light theme
});
```

### 3. Create Utility Sprinkles

Create `packages/kit/src/theme/sprinkles.css.ts`:

```typescript
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { vars } from './contracts.css';

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    sm: { '@media': 'screen and (min-width: 768px)' },
    md: { '@media': 'screen and (min-width: 901px)' },
    lg: { '@media': 'screen and (min-width: 1025px)' },
    xl: { '@media': 'screen and (min-width: 1281px)' },
    xxl: { '@media': 'screen and (min-width: 1441px)' },
  },
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'sm', 'md', 'lg', 'xl', 'xxl'],
  properties: {
    display: ['none', 'flex', 'block', 'inline', 'inline-block', 'grid'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    alignItems: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
    gap: vars.space,
    padding: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    margin: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    width: vars.sizes,
    height: vars.sizes,
    minWidth: vars.sizes,
    minHeight: vars.sizes,
    maxWidth: vars.sizes,
    maxHeight: vars.sizes,
  },
  shorthands: {
    p: ['padding'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    m: ['margin'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    size: ['width', 'height'],
  },
});

const colorProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
    focus: { selector: '&:focus' },
    active: { selector: '&:active' },
  },
  defaultCondition: 'default',
  properties: {
    color: vars.colors,
    backgroundColor: vars.colors,
    borderColor: vars.colors,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
```

## Accessibility Architecture

### 1. Create Accessibility Utilities

Create `packages/kit/src/theme/accessibility.css.ts`:

```typescript
import { style } from '@vanilla-extract/css';
import { vars } from './contracts.css';

// Ensure proper focus indicators across all interactive elements
export const focusableStyles = style({
  selectors: {
    '&:focus-visible': {
      outline: `2px solid ${vars.colors.signal}`,
      outlineOffset: '2px',
    },
    // Fallback for browsers that don't support :focus-visible
    '&:focus': {
      outline: `2px solid ${vars.colors.signal}`,
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      outline: 'none',
    }
  }
});

// Screen reader only content
export const visuallyHidden = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: 0,
});

// Ensure interactive elements meet minimum size requirements
export const interactiveElement = style({
  minWidth: '44px',
  minHeight: '44px',
  '@media': {
    '(pointer: fine)': {
      minWidth: '24px',
      minHeight: '24px',
    }
  }
});

// High contrast mode support
export const highContrastMode = style({
  '@media': {
    '(prefers-contrast: high)': {
      borderWidth: '2px',
    }
  }
});

// Reduced motion support
export const reducedMotion = style({
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
    }
  }
});
```

### 2. Accessibility Testing Utilities

Create `packages/kit/src/utils/accessibility.test.ts`:

```typescript
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export async function testAccessibility(component: React.ReactElement) {
  const { container } = render(component);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
}

// Test keyboard navigation
export function testKeyboardNavigation(
  component: React.ReactElement,
  expectedFocusOrder: string[]
) {
  const { container } = render(component);
  const focusableElements = container.querySelectorAll(
    'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  expect(focusableElements.length).toBe(expectedFocusOrder.length);
  
  focusableElements.forEach((element, index) => {
    expect(element).toHaveAccessibleName(expectedFocusOrder[index]);
  });
}
```

### 3. Color Contrast Validation

Create `packages/kit/src/theme/validate-contrast.ts`:

```typescript
import { lightTheme, darkTheme } from './themes.css';

// WCAG 2.1 contrast ratios
const NORMAL_TEXT_RATIO = 4.5;
const LARGE_TEXT_RATIO = 3;

function getLuminance(rgb: string): number {
  // Convert hex to RGB and calculate relative luminance
  const matches = rgb.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!matches) return 0;
  
  const [, r, g, b] = matches.map(x => parseInt(x, 16) / 255);
  const [rs, gs, bs] = [r, g, b].map(c => 
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  );
  
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(color1: string, color2: string): number {
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

export function validateThemeContrast(theme: typeof lightTheme) {
  const issues: string[] = [];
  
  // Check primary button contrast
  const primaryRatio = getContrastRatio(
    theme.colors.primary,
    theme.colors.onPrimary
  );
  if (primaryRatio < NORMAL_TEXT_RATIO) {
    issues.push(`Primary button contrast ${primaryRatio.toFixed(2)} < ${NORMAL_TEXT_RATIO}`);
  }
  
  // Check all color pairs
  const colorPairs = [
    ['primary', 'onPrimary'],
    ['secondary', 'onSecondary'],
    ['cta', 'onCta'],
    ['background', 'onBackground'],
    ['surface', 'onSurface'],
    ['error', 'onError'],
  ];
  
  colorPairs.forEach(([bg, fg]) => {
    const ratio = getContrastRatio(theme.colors[bg], theme.colors[fg]);
    if (ratio < NORMAL_TEXT_RATIO) {
      issues.push(`${bg}/${fg} contrast ${ratio.toFixed(2)} < ${NORMAL_TEXT_RATIO}`);
    }
  });
  
  return issues;
}
```

## TypeScript Integration

### 1. Extract and Export Types from Recipes

Create strong type exports for all components:

```typescript
// Button.css.ts additions
import { RecipeVariants } from '@vanilla-extract/recipes';

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;

// Export individual variant types for better composability
export type ButtonVariant = ButtonVariants['variant'];
export type ButtonDensity = ButtonVariants['density'];
export type ButtonIcon = ButtonVariants['icon'];
```

### 2. Typed Theme Access

Create typed theme utilities:

```typescript
// theme/utils.ts
import { vars } from './contracts.css';

// Type-safe theme value getter
export function getThemeValue<K extends keyof typeof vars>(
  category: K,
  value: keyof typeof vars[K]
): string {
  return vars[category][value];
}

// Usage:
// const primaryColor = getThemeValue('colors', 'primary');
// TypeScript knows this is a valid color token
```

### 3. Component Props with Full Type Safety

```typescript
// Enhanced Box component with type safety
import { RecipeVariants } from '@vanilla-extract/recipes';
import { Sprinkles } from '../theme/sprinkles.css';

// Utility type to extract sprinkle props
type ExtractSprinkleProps<T extends Record<string, any>> = {
  [K in keyof T]?: T[K] extends Record<string, any> 
    ? keyof T[K] | Partial<Record<keyof T[K]['conditions'], keyof T[K]['properties'][K]>>
    : keyof T[K];
};

export interface BoxProps 
  extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof Sprinkles>,
          Sprinkles {
  as?: React.ElementType;
  children?: React.ReactNode;
}

// Ensures all props are properly typed
export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ as: Component = 'div', className, children, ...props }, ref) => {
    const { className: sprinkleClasses, style, otherProps } = sprinkles(props);
    
    return (
      <Component
        ref={ref}
        className={clsx(sprinkleClasses, className)}
        style={style}
        {...otherProps}
      >
        {children}
      </Component>
    );
  }
);
```

## Component Migration Patterns

### 1. Simple Component (Box)

**Before (Stitches):**
```typescript
import { styled } from '../theme';

export const Box = styled('div', {
  // Base styles can be empty
});

export type BoxProps = React.ComponentProps<typeof Box>;
```

**After (vanilla-extract):**
```typescript
import React from 'react';
import { clsx } from 'clsx';
import { sprinkles, type Sprinkles } from '../theme/sprinkles.css';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement>, Sprinkles {
  as?: React.ElementType;
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ as: Component = 'div', className, ...props }, ref) => {
    const { className: sprinkleClasses, style, otherProps } = sprinkles(props);
    
    return (
      <Component
        ref={ref}
        className={clsx(sprinkleClasses, className)}
        style={style}
        {...otherProps}
      />
    );
  }
);

Box.displayName = 'Box';
```

### 2. Component with Variants (Button)

**Create styles file `Button.css.ts`:**
```typescript
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/contracts.css';

export const buttonRecipe = recipe({
  base: {
    all: 'unset',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'fit-content',
    width: 'fit-content',
    borderRadius: vars.radii.round,
    cursor: 'pointer',
    fontFamily: vars.fonts.meta,
    fontWeight: vars.fontWeights.bold,
    fontSize: vars.fontSizes['100'],
    lineHeight: 1,
    gap: vars.space['050'],
    paddingLeft: vars.space['100'],
    paddingRight: vars.space['100'],
    transition: `background ${vars.transitions.fast} ${vars.transitions.inOut}`,
    position: 'relative',
    
    '@media': {
      '(prefers-reduced-motion)': {
        transition: 'none',
      },
    },
    
    selectors: {
      '&:disabled': {
        color: vars.colors.onDisabled,
        backgroundColor: vars.colors.disabled,
        borderColor: vars.colors.onDisabled,
        cursor: 'not-allowed',
      },
      '&:focus-visible': {
        outline: `2px solid ${vars.colors.signal}`,
        outlineOffset: '2px',
      },
    },
  },
  
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.colors.primary,
        color: vars.colors.onPrimary,
        selectors: {
          '&:not(:disabled):hover': {
            backgroundColor: vars.colors.gray60,
          },
        },
      },
      secondary: {
        backgroundColor: vars.colors.secondary,
        color: vars.colors.onSecondary,
        border: `1px solid ${vars.colors.outline}`,
        selectors: {
          '&:not(:disabled):hover': {
            backgroundColor: vars.colors.gray400,
          },
        },
      },
      cta: {
        backgroundColor: vars.colors.cta,
        color: vars.colors.onCta,
        selectors: {
          '&:not(:disabled):hover': {
            backgroundColor: staticColors.blue80,
          },
        },
      },
    },
    
    density: {
      compact: {
        paddingTop: vars.space['050'],
        paddingBottom: vars.space['050'],
      },
      default: {
        paddingTop: vars.space['075'],
        paddingBottom: vars.space['075'],
      },
    },
    
    isOutline: {
      true: {
        backgroundColor: 'transparent',
        border: '1px solid currentColor',
      },
    },
    
    icon: {
      center: {
        padding: vars.space['050'],
        fontSize: '0',
        lineHeight: '0',
        gap: '0',
        selectors: {
          '& > span': {
            display: 'none',
          },
        },
      },
      left: {},
      right: {
        flexDirection: 'row-reverse',
      },
      none: {},
    },
  },
  
  defaultVariants: {
    variant: 'secondary',
    density: 'default',
    isOutline: false,
    icon: 'left',
  },
  
  compoundVariants: [
    {
      variants: {
        icon: 'center',
        density: 'default',
      },
      style: {
        padding: vars.space['075'],
      },
    },
    {
      variants: {
        isOutline: true,
        variant: 'primary',
      },
      style: {
        backgroundColor: 'transparent',
        color: vars.colors.primary,
        selectors: {
          '&:not(:disabled):hover': {
            backgroundColor: vars.colors.alpha25,
          },
        },
      },
    },
    // Add all other compound variants
  ],
});
```

**Update component file:**
```typescript
import React from 'react';
import { clsx } from 'clsx';
import { buttonRecipe } from './Button.css';
import { Icon } from '../Icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'cta';
  density?: 'default' | 'compact';
  isOutline?: boolean;
  icon?: 'center' | 'left' | 'right' | 'none';
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'secondary',
    density = 'default',
    isOutline = false,
    icon = 'left',
    className,
    children,
    ...props 
  }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          buttonRecipe({ variant, density, isOutline, icon }),
          className
        )}
        {...props}
      >
        {icon !== 'none' && (
          <Icon 
            label={icon === 'center' ? children?.toString() || 'Icon button' : ''} 
            size="100" 
            aria-hidden={icon !== 'center'}
          />
        )}
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
```

### 3. Hook Patterns with Accessibility

#### Pattern 1: Floating Labels with Accessibility

**CSS-driven floating label with proper a11y:**
```typescript
// InputText.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from '../../theme/contracts.css';
import { focusableStyles } from '../../theme/accessibility.css';

export const inputContainer = style({
  position: 'relative',
  width: '100%',
});

export const input = style([
  focusableStyles,
  {
    width: '100%',
    padding: vars.space['100'],
    paddingTop: vars.space['150'],
    border: `1px solid ${vars.colors.outline}`,
    borderRadius: vars.radii.md,
    fontSize: vars.fontSizes['100'],
    fontFamily: vars.fonts.body,
    backgroundColor: vars.colors.surface,
    color: vars.colors.onSurface,
    transition: `border-color ${vars.transitions.fast}`,
    
    selectors: {
      '&::placeholder': {
        color: 'transparent',
      },
      '&:invalid': {
        borderColor: vars.colors.error,
      },
      '&[aria-invalid="true"]': {
        borderColor: vars.colors.error,
      },
    },
  }
]);

export const label = style({
  position: 'absolute',
  left: vars.space['100'],
  top: '50%',
  transform: 'translateY(-50%)',
  fontSize: vars.fontSizes['100'],
  color: vars.colors.onSurfaceVariant,
  pointerEvents: 'none',
  transition: `all ${vars.transitions.fast}`,
  transformOrigin: 'left top',
  
  selectors: {
    [`${input}:focus ~ &, ${input}:not(:placeholder-shown) ~ &`]: {
      top: vars.space['075'],
      transform: 'translateY(0) scale(0.8)',
      color: vars.colors.onSurface,
    },
    [`${input}[aria-invalid="true"] ~ &`]: {
      color: vars.colors.error,
    },
  },
});

// Component with proper accessibility
const InputText = ({ id, name, label, helperText, error, required, ...props }) => {
  // Use React.useId() for SSR-safe ID generation
  const generatedId = React.useId();
  const inputId = id || generatedId;
  const helperId = helperText ? `${inputId}-helper` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  
  return (
    <div className={inputContainer}>
      <input
        id={inputId}
        name={name}
        className={input}
        placeholder={label} // For floating label behavior
        aria-label={label} // Ensures label is always announced
        aria-describedby={[helperId, errorId].filter(Boolean).join(' ')}
        aria-invalid={error ? 'true' : 'false'}
        aria-required={required}
        {...props}
      />
      <label htmlFor={inputId} className={label}>
        {label}
        {required && <span aria-label="required">*</span>}
      </label>
      {helperText && (
        <span id={helperId} className={helperTextStyle}>
          {helperText}
        </span>
      )}
      {error && (
        <span id={errorId} role="alert" className={errorTextStyle}>
          {error}
        </span>
      )}
    </div>
  );
};
```

#### Pattern 2: Toggle States with Keyboard Support

**Accessible accordion using native HTML:**
```typescript
// Accordion.css.ts
import { focusableStyles } from '../../theme/accessibility.css';

export const accordionItem = style({
  borderBottom: `1px solid ${vars.colors.outline}`,
});

export const accordionTrigger = style([
  focusableStyles,
  {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: vars.space['100'],
    cursor: 'pointer',
    fontWeight: vars.fontWeights.bold,
    
    selectors: {
      'details[open] > &': {
        borderBottom: `1px solid ${vars.colors.outline}`,
      },
      '&::-webkit-details-marker': {
        display: 'none',
      },
      '&::marker': {
        display: 'none',
      },
    },
  }
]);

export const accordionIcon = style({
  transition: `transform ${vars.transitions.fast}`,
  selectors: {
    'details[open] & ': {
      transform: 'rotate(180deg)',
    },
  },
});

export const accordionContent = style({
  padding: vars.space['100'],
  animation: 'slideDown 300ms ease-out',
});

// Accessible Accordion Component
const AccordionItem = ({ title, children, defaultOpen = false }) => {
  return (
    <details className={accordionItem} open={defaultOpen}>
      <summary className={accordionTrigger}>
        <span>{title}</span>
        <Icon
          className={accordionIcon}
          label="Toggle accordion"
          name="chevron-down"
        />
      </summary>
      <div className={accordionContent} role="region" aria-labelledby={title}>
        {children}
      </div>
    </details>
  );
};
```

#### Pattern 3: SSR-Safe ID Generation

**Use React.useId for SSR compatibility:**
```typescript
// Safe ID generation for SSR
import React from 'react';

const FormField = ({ id, name, label, helperText, error, ...props }) => {
  // React.useId() generates stable IDs across SSR/hydration
  const generatedId = React.useId();
  const inputId = id || generatedId;
  const labelId = `${inputId}-label`;
  const helperId = helperText ? `${inputId}-helper` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  
  return (
    <div role="group" aria-labelledby={labelId}>
      <label id={labelId} htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        name={name}
        aria-describedby={[helperId, errorId].filter(Boolean).join(' ')}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      />
      {helperText && (
        <span id={helperId} className={helperTextStyle}>
          {helperText}
        </span>
      )}
      {error && (
        <span id={errorId} role="alert" className={errorTextStyle}>
          {error}
        </span>
      )}
    </div>
  );
};

// For components that need multiple IDs
const ComplexForm = () => {
  const ids = {
    name: React.useId(),
    email: React.useId(),
    password: React.useId(),
  };
  
  return (
    <form>
      <FormField id={ids.name} name="name" label="Name" />
      <FormField id={ids.email} name="email" label="Email" type="email" />
      <FormField id={ids.password} name="password" label="Password" type="password" />
    </form>
  );
};
```

### 4. Complex Components (Tabs with Animations)

**Create animation styles:**
```typescript
// Tabs.css.ts
import { style, keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const slideIn = keyframes({
  from: { transform: 'translateX(100%)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const slideOut = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-100%)', opacity: 0 },
});

export const tabContent = recipe({
  base: {
    position: 'relative',
  },
  
  variants: {
    state: {
      entering: {
        animation: `${slideIn} 300ms ease-out`,
      },
      exiting: {
        animation: `${slideOut} 300ms ease-out`,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
      },
      entered: {
        opacity: 1,
      },
      exited: {
        display: 'none',
      },
    },
  },
});
```

**Component implementation:**
```typescript
import { AnimatePresence, motion } from 'framer-motion';
import { tabContent } from './Tabs.css';

const TabContent = ({ value, selectedValue, children }) => {
  return (
    <AnimatePresence mode="wait">
      {value === selectedValue && (
        <motion.div
          key={value}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className={tabContent({ state: 'entered' })}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
```

## Build Configuration

### 1. Optimized Build Configuration

Create `packages/kit/build.config.js`:

```javascript
const { build } = require('esbuild');
const { vanillaExtractPlugin } = require('@vanilla-extract/esbuild-plugin');
const { promises: fs } = require('fs');
const path = require('path');
const crypto = require('crypto');

const isProduction = process.env.NODE_ENV === 'production';

async function buildStyles() {
  // Build CSS files with optimizations
  await build({
    entryPoints: ['src/**/*.css.ts'],
    outdir: 'dist',
    plugins: [
      vanillaExtractPlugin({
        // Use short identifiers in production for smaller CSS
        identifiers: isProduction ? 'short' : 'debug',
        // Enable CSS minification
        processCss: (css) => {
          if (!isProduction) return css;
          
          // Production optimizations
          return css
            .replace(/\/\*[^*]*\*+(?:[^/*][^*]*\*+)*\//g, '') // Remove comments
            .replace(/\s+/g, ' ') // Collapse whitespace
            .replace(/:\s+/g, ':') // Remove space after colons
            .replace(/;\s*}/g, '}') // Remove last semicolon
            .trim();
        },
      }),
    ],
    bundle: false,
    splitting: false,
    format: 'esm',
    platform: 'browser',
    target: 'es2020',
    minify: isProduction,
    sourcemap: !isProduction,
    // Tree-shake unused CSS
    treeShaking: true,
    // Optimize for smaller output
    legalComments: 'none',
    charset: 'utf8',
  });
}

async function generateCSSManifest() {
  // Generate a manifest for CSS splitting
  const manifest = {};
  const cssFiles = await fs.readdir('dist', { recursive: true });
  
  for (const file of cssFiles) {
    if (file.endsWith('.css') && !file.includes('.css.ts')) {
      const content = await fs.readFile(path.join('dist', file), 'utf8');
      const hash = crypto.createHash('md5').update(content).digest('hex').slice(0, 8);
      const hashedName = file.replace('.css', `.${hash}.css`);
      
      // Rename file with hash for cache busting
      await fs.rename(
        path.join('dist', file),
        path.join('dist', hashedName)
      );
      
      manifest[file] = hashedName;
    }
  }
  
  // Write manifest for consumers
  await fs.writeFile(
    'dist/css-manifest.json',
    JSON.stringify(manifest, null, 2)
  );
}

async function extractCriticalCSS() {
  // Extract critical CSS for above-the-fold content
  const critical = {
    // Reset and base styles
    reset: [],
    // Theme variables
    theme: [],
    // Core component styles
    core: ['Box', 'Button', 'Text'],
  };
  
  const criticalCSS = [];
  
  // Read and categorize CSS
  const cssFiles = await fs.readdir('dist', { recursive: true });
  for (const file of cssFiles) {
    if (file.endsWith('.css') && critical.core.some(comp => file.includes(comp))) {
      const content = await fs.readFile(path.join('dist', file), 'utf8');
      criticalCSS.push(content);
    }
  }
  
  // Write critical CSS bundle
  await fs.writeFile(
    'dist/critical.css',
    criticalCSS.join('\n')
  );
}

// Run build steps
async function build() {
  console.log(`Building styles in ${isProduction ? 'production' : 'development'} mode...`);
  
  await buildStyles();
  
  if (isProduction) {
    await generateCSSManifest();
    await extractCriticalCSS();
  }
  
  console.log('Build complete!');
}

build().catch(console.error);
```

Update `tsup.config.ts`:

```typescript
import { defineConfig } from 'tsup';
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';

export default defineConfig((options) => {
  const isProduction = !options.watch;
  
  return {
    entry: ['src/index.ts', 'src/theme/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    minify: isProduction,
    sourcemap: !isProduction,
    external: [
      'react',
      'react-dom',
      '@vanilla-extract/css',
      '@vanilla-extract/recipes',
      '@vanilla-extract/sprinkles',
    ],
    // Handle vanilla-extract files
    esbuildPlugins: [
      vanillaExtractPlugin({
        identifiers: isProduction ? 'short' : 'debug',
      }),
    ],
    // Split chunks for better tree-shaking
    splitting: true,
    // Generate metafile for bundle analysis
    metafile: isProduction,
    onSuccess: async () => {
      // Run additional build steps
      await import('./build.config.js');
      
      if (isProduction && options.metafile) {
        // Analyze bundle size
        const { analyzeMetafile } = await import('esbuild');
        const text = await analyzeMetafile(options.metafile);
        console.log('Bundle analysis:', text);
      }
    },
  };
});
```

### 2. Production-Ready Package Configuration

Update `package.json`:

```json
{
  "name": "@washingtonpost/wpds-ui-kit",
  "sideEffects": [
    "*.css",
    "*.css.ts"
  ],
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    },
    "./theme": {
      "types": "./dist/theme/index.d.ts",
      "import": "./dist/theme/index.js",
      "require": "./dist/theme/index.cjs"
    },
    "./styles/*.css": "./dist/*.css",
    "./package.json": "./package.json"
  },
  "scripts": {
    "build": "NODE_ENV=production tsup",
    "build:dev": "tsup",
    "build:analyze": "NODE_ENV=production ANALYZE=true tsup",
    "prebuild": "rm -rf dist",
    "postbuild": "node ./scripts/validate-build.js"
  }
}
```

Create `scripts/validate-build.js`:

```javascript
const fs = require('fs');
const path = require('path');

// Validate build output
function validateBuild() {
  const requiredFiles = [
    'dist/index.js',
    'dist/index.d.ts',
    'dist/theme/index.js',
    'dist/theme/index.d.ts',
    'dist/css-manifest.json',
    'dist/critical.css',
  ];
  
  const missing = requiredFiles.filter(
    file => !fs.existsSync(path.join(process.cwd(), file))
  );
  
  if (missing.length > 0) {
    console.error('❌ Build validation failed. Missing files:', missing);
    process.exit(1);
  }
  
  // Check file sizes
  const maxSizes = {
    'dist/index.js': 50 * 1024, // 50KB
    'dist/critical.css': 10 * 1024, // 10KB
  };
  
  Object.entries(maxSizes).forEach(([file, maxSize]) => {
    const stats = fs.statSync(path.join(process.cwd(), file));
    if (stats.size > maxSize) {
      console.warn(`⚠️  ${file} exceeds size limit: ${stats.size} > ${maxSize}`);
    }
  });
  
  console.log('✅ Build validation passed!');
}

validateBuild();
```

### 3. Update Storybook Configuration

`.storybook/main.js`:

```javascript
const { vanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // ... existing config
  webpackFinal: async (config) => {
    // Add vanilla-extract plugin with production optimizations
    config.plugins.push(
      vanillaExtractPlugin({
        identifiers: process.env.NODE_ENV === 'production' ? 'short' : 'debug',
        // Enable runtime theming in Storybook
        runtime: true,
      })
    );
    
    // Optimize CSS extraction
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
          chunkFilename: '[id].[contenthash].css',
        })
      );
    }
    
    // Handle CSS modules collision
    config.module.rules.push({
      test: /\.css$/,
      use: [
        process.env.NODE_ENV === 'production'
          ? MiniCssExtractPlugin.loader
          : 'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
        },
      ],
    });
    
    return config;
  },
  // Optimize Storybook build
  features: {
    // Enable build optimizations
    buildStoriesJson: true,
    // Precompile stories for faster loading
    previewMdx2: true,
  },
};
```

`.storybook/preview.js` - Add theme provider:

```javascript
import { lightTheme, darkTheme } from '../src/theme/themes.css';

export const parameters = {
  // ... existing parameters
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme === 'dark' ? darkTheme : lightTheme;
    
    return (
      <div className={theme}>
        <Story />
      </div>
    );
  },
];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
      showName: true,
    },
  },
};
```

## Comprehensive Testing Strategy

### 1. Visual Regression with Accessibility Tests

Create `visual-tests/regression.spec.ts`:

```typescript
import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from '@axe-core/playwright';
import fs from 'fs';
import path from 'path';

// Read all story IDs from Storybook
const storiesJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../storybook-static/stories.json'), 'utf8')
);

const storyIds = Object.keys(storiesJson.stories);

test.describe('Visual Regression and Accessibility', () => {
  // Test each story at multiple viewports
  const viewports = [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1280, height: 720 },
  ];
  
  storyIds.forEach(storyId => {
    test.describe(`Story: ${storyId}`, () => {
      // Visual regression tests
      viewports.forEach(viewport => {
        test(`Visual @ ${viewport.name}`, async ({ page }) => {
          await page.setViewportSize(viewport);
          
          // Test light mode
          await page.goto(`http://localhost:6006/iframe.html?id=${storyId}&theme=light`);
          await page.waitForLoadState('networkidle');
          await page.waitForTimeout(100); // Wait for animations
          
          await expect(page).toHaveScreenshot(
            `${storyId}-${viewport.name}-light.png`,
            {
              maxDiffPixels: 50,
              threshold: 0.1,
            }
          );
          
          // Test dark mode
          await page.goto(`http://localhost:6006/iframe.html?id=${storyId}&theme=dark`);
          await page.waitForLoadState('networkidle');
          await page.waitForTimeout(100);
          
          await expect(page).toHaveScreenshot(
            `${storyId}-${viewport.name}-dark.png`,
            {
              maxDiffPixels: 50,
              threshold: 0.1,
            }
          );
        });
      });
      
      // Accessibility tests
      test('Accessibility compliance', async ({ page }) => {
        await page.goto(`http://localhost:6006/iframe.html?id=${storyId}`);
        await injectAxe(page);
        
        // Test light mode accessibility
        await page.evaluate(() => {
          document.documentElement.classList.remove('dark');
          document.documentElement.classList.add('light');
        });
        await checkA11y(page, '#storybook-root', {
          detailedReport: true,
          detailedReportOptions: {
            html: true,
          },
        });
        
        // Test dark mode accessibility (contrast ratios may differ)
        await page.evaluate(() => {
          document.documentElement.classList.remove('light');
          document.documentElement.classList.add('dark');
        });
        await checkA11y(page, '#storybook-root', {
          detailedReport: true,
          detailedReportOptions: {
            html: true,
          },
        });
      });
      
      // Keyboard navigation tests for interactive components
      if (storiesJson.stories[storyId].tags?.includes('interactive')) {
        test('Keyboard navigation', async ({ page }) => {
          await page.goto(`http://localhost:6006/iframe.html?id=${storyId}`);
          
          // Get all focusable elements
          const focusableElements = await page.$$('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
          
          if (focusableElements.length > 0) {
            // Test Tab navigation
            for (let i = 0; i < focusableElements.length; i++) {
              await page.keyboard.press('Tab');
              const focusedElement = await page.evaluateHandle(() => document.activeElement);
              expect(await focusedElement.evaluate(el => el.tagName)).toBeTruthy();
            }
            
            // Test Shift+Tab navigation
            for (let i = focusableElements.length - 1; i >= 0; i--) {
              await page.keyboard.press('Shift+Tab');
              const focusedElement = await page.evaluateHandle(() => document.activeElement);
              expect(await focusedElement.evaluate(el => el.tagName)).toBeTruthy();
            }
            
            // Test Enter/Space activation for buttons
            const buttons = await page.$$('button');
            for (const button of buttons) {
              await button.focus();
              await page.keyboard.press('Enter');
              // Verify button can be activated
              
              await button.focus();
              await page.keyboard.press('Space');
              // Verify button can be activated
            }
          }
        });
      }
    });
  });
});
```

### 2. Component-Specific Accessibility Tests

Create `src/components/__tests__/accessibility.test.tsx`:

```typescript
import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { Button, InputText, Select, Tabs } from '../index';

describe('Component Accessibility', () => {
  describe('Button', () => {
    it('meets WCAG standards', async () => {
      const { container } = render(
        <Button variant="primary">Click me</Button>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
    
    it('supports keyboard navigation', async () => {
      const handleClick = jest.fn();
      const { getByRole } = render(
        <Button onClick={handleClick}>Click me</Button>
      );
      
      const button = getByRole('button');
      button.focus();
      
      // Test Enter key
      await userEvent.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalledTimes(1);
      
      // Test Space key
      await userEvent.keyboard(' ');
      expect(handleClick).toHaveBeenCalledTimes(2);
    });
    
    it('properly disables interaction', async () => {
      const { getByRole } = render(
        <Button disabled>Disabled</Button>
      );
      
      const button = getByRole('button');
      expect(button).toHaveAttribute('disabled');
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });
  });
  
  describe('Form Fields', () => {
    it('associates labels with inputs', async () => {
      const { container, getByLabelText } = render(
        <InputText label="Email" type="email" required />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
      
      const input = getByLabelText('Email');
      expect(input).toHaveAttribute('aria-required', 'true');
    });
    
    it('announces errors properly', async () => {
      const { container, getByRole } = render(
        <InputText 
          label="Email" 
          error="Invalid email address"
          aria-invalid="true"
        />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
      
      const error = getByRole('alert');
      expect(error).toHaveTextContent('Invalid email address');
    });
  });
  
  describe('Tabs', () => {
    it('supports arrow key navigation', async () => {
      const { getAllByRole } = render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
            <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Content 1</Tabs.Content>
          <Tabs.Content value="tab2">Content 2</Tabs.Content>
          <Tabs.Content value="tab3">Content 3</Tabs.Content>
        </Tabs>
      );
      
      const tabs = getAllByRole('tab');
      tabs[0].focus();
      
      // Test arrow right
      await userEvent.keyboard('{ArrowRight}');
      expect(document.activeElement).toBe(tabs[1]);
      
      // Test arrow left
      await userEvent.keyboard('{ArrowLeft}');
      expect(document.activeElement).toBe(tabs[0]);
      
      // Test Home/End keys
      await userEvent.keyboard('{End}');
      expect(document.activeElement).toBe(tabs[2]);
      
      await userEvent.keyboard('{Home}');
      expect(document.activeElement).toBe(tabs[0]);
    });
  });
});
```

### 2. CI Integration

Create `.github/workflows/visual-regression.yml`:

```yaml
name: Visual Regression

on:
  pull_request:
    paths:
      - 'packages/kit/**'
      - '.storybook/**'

jobs:
  test:
    runs-on: ubuntu-latest
    container:
      image: mcr.microsoft.com/playwright:v1.40.1-jammy
      
    steps:
      - uses: actions/checkout@v4
        with:
          lfs: true
          
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version-file: '.nvmrc'
          cache: 'pnpm'
          
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
        
      - name: Build packages
        run: pnpm build
        
      - name: Build Storybook
        run: pnpm build-storybook
        
      - name: Run visual tests
        run: |
          pnpm dlx start-server-and-test \
            'pnpm dlx http-server storybook-static -p 6006' \
            http://localhost:6006 \
            'pnpm playwright test visual-tests/regression.spec.ts'
            
      - name: Upload diff artifacts
        if: failure()
        uses: actions/upload-artifact@v3
        with:
          name: visual-diffs
          path: test-results/
          
      # Also run Chromatic
      - name: Chromatic
        uses: chromaui/action@v1
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          buildScriptName: build-storybook
```

## Migration Checklist

### Phase 1: Setup (Week 1)
- [ ] Install vanilla-extract dependencies
- [ ] Set up build configuration
- [ ] Create theme contract and implementations
- [ ] Set up visual regression baselines
- [ ] Configure Storybook

### Phase 2: Core Components (Week 2-3)
- [ ] Migrate Box component
- [ ] Migrate Button component
- [ ] Migrate Typography components
- [ ] Migrate Icon component
- [ ] Run visual regression tests after each

### Phase 3: Form Components (Week 3-4)
- [ ] Migrate InputText (with floating label)
- [ ] Migrate InputPassword
- [ ] Migrate Select
- [ ] Migrate Checkbox/Radio
- [ ] Eliminate unnecessary hooks

### Phase 4: Complex Components (Week 4-5)
- [ ] Migrate Tabs
- [ ] Migrate Accordion
- [ ] Migrate Carousel
- [ ] Migrate Drawer/Modal
- [ ] Handle animations properly

### Phase 5: Testing & Documentation (Week 6)
- [ ] Full visual regression suite
- [ ] Performance benchmarking
- [ ] Update documentation
- [ ] Migration guide for consumers
- [ ] Release v3.0.0

## Common Patterns Reference

### CSS Prop Replacement

Vanilla-extract doesn't have a direct CSS prop equivalent. Use these patterns:

**Option 1: Style variants**
```typescript
const styles = recipe({
  variants: {
    margin: {
      small: { margin: vars.space['050'] },
      medium: { margin: vars.space['100'] },
      large: { margin: vars.space['200'] },
    },
  },
});
```

**Option 2: Sprinkles for common properties**
```typescript
<Box px="100" py="050" display={{ mobile: 'block', md: 'flex' }} />
```

**Option 3: Inline styles for truly dynamic values**
```typescript
<div style={{ ['--dynamic-width' as any]: `${width}px` }} />
```

### Theme Switching

```typescript
// App.tsx
import React, { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '@washingtonpost/wpds-ui-kit';

function App() {
  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    
    // Fall back to system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });
  
  // Persist theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        theme === 'dark' ? '#191a1a' : '#ffffff'
      );
    }
  }, [theme]);
  
  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't explicitly set a preference
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return (
    <div className={theme === 'dark' ? darkTheme : lightTheme}>
      {/* Your app */}
    </div>
  );
}
```

### Compound Component Context

For compound components, use CSS variables to share state:

```typescript
// Tabs.css.ts
export const tabsRoot = style({
  vars: {
    ['--active-tab' as any]: '0',
  },
});

export const tabTrigger = recipe({
  base: {
    // Base styles
  },
  variants: {
    isActive: {
      true: {
        borderBottom: `2px solid ${vars.colors.signal}`,
      },
    },
  },
});
```

## Performance Monitoring

Track these metrics before and after migration:

1. **Bundle Size**
   - JS bundle size reduction
   - CSS file size
   - Tree-shaking effectiveness

2. **Runtime Performance**
   - First Contentful Paint
   - Time to Interactive
   - Component render time

3. **Developer Experience**
   - Build time
   - Hot reload speed
   - TypeScript performance

## Troubleshooting

### Common Issues

1. **Styles not applying**: Ensure vanilla-extract plugin is configured
2. **TypeScript errors**: Update tsconfig to include `.css.ts` files
3. **Build failures**: Check that CSS files are being generated
4. **Hydration mismatches**: Ensure theme class is applied on server
5. **Animation jank**: Use CSS transforms and will-change

### Debug Commands

```bash
# Check generated CSS
find dist -name "*.css" -type f

# Validate build output
pnpm build && ls -la dist/

# Test specific component
pnpm playwright test --grep "button"

# Update specific baseline
pnpm playwright test --update-snapshots --grep "button"
```

## Success Criteria

- ✅ All visual regression tests pass
- ✅ Bundle size reduced by >30%
- ✅ No runtime CSS-in-JS overhead
- ✅ All component APIs unchanged
- ✅ Storybook works without modifications
- ✅ React hooks reduced where possible
- ✅ Theme switching works seamlessly
- ✅ Build times remain reasonable

This migration guide provides a complete roadmap for successfully migrating from Stitches to vanilla-extract while maintaining the quality and functionality of the WPDS UI Kit.