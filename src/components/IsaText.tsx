import { Text, TextProps } from 'react-native'
import { useTheme } from '@/stores/themeStore'
import { styles } from '@/styles/components/IsaText.style'

interface IsaTextProps extends TextProps {
  variant?: 'heading' | 'body'
  size?: keyof ReturnType<typeof useTheme>['typography']['sizes']
  strokeColor?: string
}

export function IsaText({
  variant = 'body',
  size = 'md',
  strokeColor = '#000000',
  style,
  children,
  ...props
}: IsaTextProps) {
  const theme = useTheme()

  const fontFamily =
    variant === 'heading'
      ? theme.typography.fontFamily.heading
      : theme.typography.fontFamily.regular

  return (
    <Text
      style={[
        styles.base,
        {
          fontFamily,
          fontSize: theme.typography.sizes[size],
          color: theme.colors.text.primary
        },
        style
      ]}
      {...props}
    >
      {children}
    </Text>
  )
}
