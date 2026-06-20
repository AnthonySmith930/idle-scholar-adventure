import { Pressable, ViewStyle, View } from 'react-native'
import { useThemeStore } from '@/stores/themeStore'
import { IsaText } from './IsaText'
import { styles } from '@/styles/components/isaButton.style'

interface IsaButtonProps {
  title: string
  onPress: () => void
  variant?: 'primary' | 'secondary' | 'error'
  style?: ViewStyle
}

export function IsaButton({
  title,
  onPress,
  variant = 'primary',
  style
}: IsaButtonProps) {
  const theme = useThemeStore((state) => state.theme)

  const getColors = () => {
    switch (variant) {
      case 'secondary':
        return {
          bg: theme.colors.secondary,
          border: '#5b9612',
          text: '#000000'
        }
      case 'error':
        return { bg: theme.colors.error, border: '#7f1d1d', text: '#FFFFFF' }
      case 'primary':
      default:
        return { bg: theme.colors.primary, border: '#0e1a3e', text: '#FFFFFF' }
    }
  }

  const colors = getColors()

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonBase,
        {
          backgroundColor: colors.bg,
          borderColor: colors.border
        },
        pressed ? styles.buttonPressed : styles.buttonUnpressed,
        style
      ]}
    >
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          backgroundColor: '#FFFFFF',
          opacity: 0.4
        }}
      />
      <IsaText variant="heading">{title}</IsaText>
    </Pressable>
  )
}
