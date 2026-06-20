import { Theme } from '@/types/theme'

// Default theme
export const idleSchalorLightTheme: Theme = {
  dark: false,
  colors: {
    primary: 'rgb(50, 118, 83)',
    secondary: '#a2f53dff',
    background: '#FFFFFF',
    gradientBackground: ['#ffffff', '#e7e8f8ff', '#c7c8f5ff'],
    surface: '#FFFFFF',
    input: '#ffffff',
    border: '#97a4c6ff',
    error: '#DC2626',
    success: '#10B981',
    warning: '#eacf00ff',
    info: '#3B82F6',
    text: {
      primary: 'rgb(249, 5, 17)',
      secondary: '#525297ff',
      button: '#ffffffff',
      link: '#1d3fe8ff',
      error: '#DC2626'
    },
    rarity: {
      common: '#94A3B8',
      uncommon: '#10B981',
      rare: '#3B82F6',
      epic: '#A855F7',
      legendary: '#EAB308'
    }
  },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 },
  typography: {
    fontFamily: {
      heading: 'PressStart2P_400Regular',
      regular: 'System'
    },
    sizes: { xs: 12, sm: 14, md: 16, lg: 18, xl: 24, xxl: 32, xxxl: 48 }
  },
  borders: {
    retroWidth: 4
  }
}

export const idleSchalorDarkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#4271ffff',
    secondary: '#a2f53dff',
    background: '#121213ff',
    gradientBackground: ['#ffffff', '#e7e8f8ff', '#c7c8f5ff'],
    surface: '#FFFFFF',
    input: '#ffffff',
    border: '#97a4c6ff',
    error: '#DC2626',
    success: '#10B981',
    warning: '#eacf00ff',
    info: '#3B82F6',
    text: {
      primary: 'rgb(242, 13, 20)',
      secondary: '#525297ff',
      button: '#ffffffff',
      link: '#1d3fe8ff',
      error: '#DC2626'
    },
    rarity: {
      common: '#94A3B8',
      uncommon: '#10B981',
      rare: '#3B82F6',
      epic: '#A855F7',
      legendary: '#EAB308'
    }
  },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 },
  typography: {
    fontFamily: {
      heading: 'PressStart2P_400Regular',
      regular: 'System'
    },
    sizes: { xs: 12, sm: 14, md: 16, lg: 18, xl: 24, xxl: 32, xxxl: 48 }
  },
  borders: {
    retroWidth: 4
  }
}

export const themes = {
  light: idleSchalorLightTheme,
  dark: idleSchalorDarkTheme
}
