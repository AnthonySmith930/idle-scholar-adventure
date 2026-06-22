import { View } from 'react-native'
import { IsaText } from './IsaText'
import { useTheme } from '@/stores/themeStore'
import { styles } from '@/styles/components/heroInfo.style'

interface HeroInfoProps {
  name: string
  gold: number
}

export function HeroInfo({ name, gold }: HeroInfoProps) {
  const theme = useTheme()

  const formatCompressedGold = (num: number): string => {
    if (num >= 1.0e9) return `${(num / 1.0e9).toFixed(1)}B`
    if (num >= 1.0e6) return `${(num / 1.0e6).toFixed(1)}M`
    if (num >= 1.0e3) return `${(num / 1.0e3).toFixed(1)}K`
    return num.toString()
  }

  return (
    <View style={styles.infoContainer}>
      <IsaText
        variant="heading"
        size="sm"
        numberOfLines={1}
        style={styles.nameText}
      >
        {name.toUpperCase()}
      </IsaText>

      <View style={styles.goldRow}>
        <IsaText size="xs" style={{ color: theme.colors.text.secondary }}>
          GOLD:
        </IsaText>
        <IsaText size="xs" style={styles.goldValue}>
          💰 {formatCompressedGold(gold)}
        </IsaText>
      </View>
    </View>
  )
}
