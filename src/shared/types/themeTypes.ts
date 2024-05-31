export enum ThemeKeys {
  dark = 'dark',
  light = 'light',
}

export type ThemeValues = {
  primary: string;
  secondary: string;
  tertiary: string;

  quaternary: string;

  textPrimary: string;
};

export type ColorScheme = Record<ThemeKeys, ThemeValues>;

export type ThemeContextProps = {
  theme: ThemeKeys;
  setTheme: (theme: ThemeKeys) => void;

  colorScheme: ThemeValues;
};
