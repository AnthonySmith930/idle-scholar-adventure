import { View, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { IsaText } from './IsaText'
import { useTheme } from '@/stores/themeStore'
import { styles } from '@/styles/components/globalDashboard.style'

interface GlobalDashboardProps {
  totalGold: number
  totalTimeSeconds: number
  activeScholarsCount: number
  maxScholarsCount: number
  onSettingsPress?: () => void
}

export function GlobalDashboard({
  totalGold,
  totalTimeSeconds,
  activeScholarsCount,
  maxScholarsCount,
  onSettingsPress
}: GlobalDashboardProps) {
  const theme = useTheme()

  // Helper to format gold into idle shorthand compression (e.g., 1.2M, 450K)
  const formatCompressedGold = (num: number): string => {
    if (num >= 1.0e9) return `${(num / 1.0e9).toFixed(1)}B`
    if (num >= 1.0e6) return `${(num / 1.0e6).toFixed(1)}M`
    if (num >= 1.0e3) return `${(num / 1.0e3).toFixed(1)}K`
    return num.toString()
  }

  // Helper to turn raw seconds into a clean hours tracker
  const formatQuestTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600)
    return `${hours}h`
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.secondary,
          borderColor: theme.colors.border
        }
      ]}
    >
      {/* Top Bar: Title & Settings Cog */}
      <View style={styles.topBar}>
        <View style={styles.titleContainer}>
          <IsaText
            variant="heading"
            size="sm"
            style={styles.titleText}
          >
            IDLE SCHOLAR ADVENTURES
          </IsaText>
        </View>

        <Pressable
          onPress={onSettingsPress}
          style={({ pressed }) => [
            styles.cogButton,
            pressed && styles.cogPressed
          ]}
        >
          <Ionicons
            name="cog-sharp"
            size={24}
            color={theme.colors.text.primary}
          />
        </Pressable>
      </View>

      {/* Stats Panel Grid */}
      <View style={[styles.statsPanel, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border }]}>
        {/* Left Column: Account Wide Accumulations */}
        <View style={styles.statColumn}>
          <View style={styles.statRow}>
            <IsaText size="xs" style={{ color: theme.colors.text.secondary }}>
              TOTAL GOLD:
            </IsaText>
            <IsaText size="sm" style={styles.statValue}>
              💰 {formatCompressedGold(totalGold)}
            </IsaText>
          </View>
          <View style={styles.statRow}>
            <IsaText size="xs" style={{ color: theme.colors.text.secondary }}>
              QUEST TIME:
            </IsaText>
            <IsaText size="sm" style={styles.statValue}>
              ⏳ {formatQuestTime(totalTimeSeconds)}
            </IsaText>
          </View>
        </View>

        {/* Right Column: Roster Density */}
        <View
          style={[
            styles.statColumn,
            styles.rightColumn,
            { borderColor: theme.colors.border }
          ]}
        >
          <IsaText size="xs" style={{ color: theme.colors.text.secondary }}>
            ACTIVE SCHOLARS
          </IsaText>
          <IsaText variant="heading" size="lg" style={styles.rosterValue}>
            {activeScholarsCount}/{maxScholarsCount}
          </IsaText>
        </View>
      </View>
    </View>
  )
}
