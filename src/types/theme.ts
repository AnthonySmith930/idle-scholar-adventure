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

  /** Typography system */
  typography: {
    /** Font Family */
    fontFamily: {
      regular: 'TASAOrbiter_400Regular'
      medium: 'TASAOrbiter_500Medium'
      semibold: 'TASAOrbiter_600SemiBold'
      bold: 'TASAOrbiter_700Bold'
      extrabold: 'TASAOrbiter_800ExtraBold'
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
    /** Font weights */
    weights: {
      regular: '400'
      medium: '500'
      semibold: '600'
      bold: '700'
      extrabold: '800'
    }
  }

  /** Border radius scale */
  borderRadius: {
    /** 4px - subtle rounding */
    sm: number
    /** 8px - default rounding */
    md: number
    /** 12px - medium rounding */
    lg: number
    /** 16px - large rounding */
    xl: number
    /** 9999px - fully round */
    full: number
  }
}

export type ThemeMode = 'light' | 'dark' | 'auto' | 'neon' | 'earth' | 'midnight' | string

export interface ExtendedTheme extends Theme {
  shadows?: {
    sm: object
    md: object
    lg: object
  }

  /** Animation durations (optional) */
  animation?: {
    fast: number
    normal: number
    slow: number
  }

  /** Z-index scale (optional) */
  zIndex?: {
    dropdown: number
    modal: number
    popover: number
    toast: number
  }
}

export type ThemeColor = keyof Theme['colors']
export type ThemeSpacing = keyof Theme['spacing']
export type ThemeFontSize = keyof Theme['typography']['sizes']
export type ThemeFontWeight = keyof Theme['typography']['weights']
export type ThemeBorderRadius = keyof Theme['borderRadius']
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type TextVariant = keyof Theme['colors']['text']
export type SurfaceVariant = 'background' | 'surface' | 'elevated'
export type ThemeShadow = keyof ExtendedTheme['shadows']
