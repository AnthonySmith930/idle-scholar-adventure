export interface Theme {
  /** Indicates if this is a dark theme */
  dark: boolean

  /** Color palette */
  colors: {
    /** Primary brand color */
    primary: string
    /** Secondary/accent color */
    secondary: string
    /** Main background color */
    background: string
    /** Gradient background colors */
    gradientBackground: [string, string, ...string[]]
    /** Elevated surface color (cards, inputs) */
    surface: string
    /** Text input background color */
    input: string
    /** Border and divider color */
    border: string
    /** Error state color */
    error: string
    /** Success state color */
    success: string
    /** Warning state color */
    warning: string
    /** Info state color */
    info: string
    /** Text colors */
    text: {
      /** Primary text color */
      primary: string
      /** Secondary text color (hints, placeholders) */
      secondary: string
      /** Color for button text */
      button: string
      /** Color for clickable text */
      link: string
      /** Error state color */
      error: string
    }
    /** Rarity colors */
    rarity: {
      common: string
      uncommon: string
      rare: string
      epic: string
      legendary: string
    }
  }

  /** Spacing scale */
  spacing: {
    /** 4px */
    xs: number
    /** 8px */
    sm: number
    /** 16px */
    md: number
    /** 24px */
    lg: number
    /** 32px */
    xl: number
    /** 48px */
    xxl: number
  }

  borders: {
    retroWidth: number
  }

  /** Typography system */
  typography: {
    /** Font Family */
    fontFamily: {
      heading: 'PressStart2P_400Regular'
      regular: 'PressStart2P_400Regular' | 'System'
    }
    /** Font sizes */
    sizes: {
      /** 12px - tiny text */
      xs: number
      /** 14px - small text */
      sm: number
      /** 16px - body text */
      md: number
      /** 18px - subheadings */
      lg: number
      /** 24px - headings */
      xl: number
      /** 32px - large headings */
      xxl: number
      /** 48px - large headings */
      xxxl: number
    }
  }
}

export type ThemeMode = 'light' | 'dark' | 'auto' | 'neon' | 'earth' | 'midnight' | string

export type ThemeColor = keyof Theme['colors']
export type ThemeSpacing = keyof Theme['spacing']
export type ThemeFontSize = keyof Theme['typography']['sizes']
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type TextVariant = keyof Theme['colors']['text']
export type SurfaceVariant = 'background' | 'surface' | 'elevated'
