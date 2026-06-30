import { Pressable, View } from 'react-native'
import { useTheme } from '@/stores/themeStore'
import { styles } from '@/styles/components/heroCard.style'

interface HeroCardProps {
  heroId: string
  onPress: (id: string) => void
  children: React.ReactNode
}

export function HeroCard({
  heroId,
  onPress,
  children
}: HeroCardProps) {
  const theme = useTheme()

  return (
    <Pressable
      onPress={() => onPress(heroId)}
      style={({ pressed }) => [
        styles.cardFrame,
        {
          borderColor: theme.colors.border,
          backgroundColor: '#892c30'
        },
        pressed && styles.cardPressed
      ]}
    >
      <View style={styles.glossyTopEdge} />

      <View style={styles.contentLayout}>{children}</View>
    </Pressable>
  )
}
