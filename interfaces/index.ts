export const Sizes = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
} as const;

export type Size = keyof typeof Sizes;

export const ThemeModes = {
  dark: 'dark',
  light: 'light',
} as const;

export type ThemeMode = keyof typeof ThemeModes;

export const Variants = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  quaternary: 'quaternary',
  danger: 'danger',
  info: 'info',
  success: 'success',
  warning: 'warning',
} as const;

export type Variant = keyof typeof Variants;

export const ButtonTypes = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
  link: 'link',
} as const;

export type ButtonType = keyof typeof ButtonTypes;

export const ButtonVariantStyles = {
  text: 'text',
  outline: 'outline',
  solid: 'solid',
  plain: 'plain',
} as const;

export type ButtonVariantStyle = keyof typeof ButtonVariantStyles;

export type SEO = {
  seo?: { name: string; content: string }[];
  mainseo?: {
    title?: string;
    description?: string;
  };
};
