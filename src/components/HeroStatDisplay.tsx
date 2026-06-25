import { View } from 'react-native'
import { IsaText } from '@/components/IsaText'
import { useTheme } from '@/stores/themeStore'
import { styles } from '@/styles/components/heroStatDisplay.style'

interface StatRowProps {
  leftLabel: string
  leftValue: string | number
  rightLabel: string
  rightValue: string | number
}

interface HeroStatDisplayProps {
  power: number
  vigor: number
  fortitude: number
  luck: number
}

function StatRow({
  leftLabel,
  leftValue,
  rightLabel,
  rightValue
}: StatRowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.statCell}>
        <IsaText size="sm" style={styles.label}>
          {leftLabel}
        </IsaText>
        <IsaText size="sm" variant="heading" style={styles.value}>
          {leftValue}
        </IsaText>
      </View>

      <View style={styles.statCell}>
        <IsaText size="sm" style={styles.label}>
          {rightLabel}
        </IsaText>
        <IsaText size="sm" variant="heading" style={styles.value}>
          {rightValue}
        </IsaText>
      </View>
    </View>
  )
}

export function HeroStatsDisplay({
  power,
  vigor,
  fortitude,
  luck
}: HeroStatDisplayProps) {
  const theme = useTheme()

  return (
    <View style={[styles.container, { borderColor: theme.colors.border }]}>
      <View style={styles.header}>
        <IsaText variant="heading" size="xs" style={styles.headerText}>
          STARTING STATS
        </IsaText>
      </View>

      <View style={styles.body}>
        <StatRow
          leftLabel="Power"
          leftValue={power}
          rightLabel="Vigor"
          rightValue={vigor}
        />
        <StatRow
          leftLabel="Fortitude"
          leftValue={fortitude}
          rightLabel="Luck"
          rightValue={luck}
        />
      </View>
    </View>
  )
}
