import { ExtendedTheme } from '@/types/theme'

// Default theme
export const idleSchalorLightTheme: ExtendedTheme = {
  dark: false,
  colors: {
    primary: '#4271ffff',
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
    }
  },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 },
  typography: {
    fontFamily: {
      regular: 'TASAOrbiter_400Regular',
      medium: 'TASAOrbiter_500Medium',
      semibold: 'TASAOrbiter_600SemiBold',
      bold: 'TASAOrbiter_700Bold',
      extrabold: 'TASAOrbiter_800ExtraBold'
    },
    sizes: { xs: 12, sm: 14, md: 16, lg: 18, xl: 24, xxl: 32, xxxl: 48 },
    weights: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800'
    }
  },
  borderRadius: { sm: 4, md: 8, lg: 12, xl: 16, full: 9999 },
  shadows: {
    sm: {
      elevation: 3,
      shadowColor: '##A9A9A9',
      shadowOffset: {
        height: 1,
        width: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 2
    },
    md: {
      elevation: 5,
      shadowColor: '##A9A9A9',
      shadowOffset: {
        height: 2,
        width: 4
      },
      shadowOpacity: 0.25,
      shadowRadius: 4
    },
    lg: {
      elevation: 6,
      shadowColor: '##A9A9A9',
      shadowOffset: {
        height: 4,
        width: 6
      },
      shadowOpacity: 0.25,
      shadowRadius: 6
    }
  }
}

export const idleSchalorDarkTheme: ExtendedTheme = {
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
    }
  },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 },
  typography: {
    fontFamily: {
      regular: 'TASAOrbiter_400Regular',
      medium: 'TASAOrbiter_500Medium',
      semibold: 'TASAOrbiter_600SemiBold',
      bold: 'TASAOrbiter_700Bold',
      extrabold: 'TASAOrbiter_800ExtraBold'
    },
    sizes: { xs: 12, sm: 14, md: 16, lg: 18, xl: 24, xxl: 32, xxxl: 48 },
    weights: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800'
    }
  },
  borderRadius: { sm: 4, md: 8, lg: 12, xl: 16, full: 9999 },
  shadows: {
    sm: {
      elevation: 3,
      shadowColor: '##A9A9A9',
      shadowOffset: {
        height: 1,
        width: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 2
    },
    md: {
      elevation: 5,
      shadowColor: '##A9A9A9',
      shadowOffset: {
        height: 2,
        width: 4
      },
      shadowOpacity: 0.25,
      shadowRadius: 4
    },
    lg: {
      elevation: 6,
      shadowColor: '##A9A9A9',
      shadowOffset: {
        height: 4,
        width: 6
      },
      shadowOpacity: 0.25,
      shadowRadius: 6
    }
  }
}

export const themes = {
  light: idleSchalorLightTheme,
  dark: idleSchalorDarkTheme
}
