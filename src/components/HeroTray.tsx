import { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { Hero } from '@/types/game'
import { useThemeStore } from '@/stores/themeStore'
import { HeroAvatar } from './HeroAvatar'
import { HeroStatCard } from './HeroStatCard'
import { styles } from '@/styles/components/heroTray.style'
import { InfoButton } from './InfoButton'

interface HeroTrayProps {
  hero: Hero
  onConfirmStats: (
    allocatedStats: {
      power: number
      fortitude: number
      vigor: number
      luck: number
    },
    remainingPoints: number
  ) => void
}

export function HeroTray({ hero, onConfirmStats }: HeroTrayProps) {
  const theme = useThemeStore((state) => state.theme)
  const [viewMode, setViewMode] = useState<'avatar' | 'stats'>('avatar')

  return (
    <View style={[styles.container, { borderColor: theme.colors.border }]}>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>HERO PROFILE</Text>
        <Pressable
          onPress={() =>
            setViewMode((prev) => (prev === 'avatar' ? 'stats' : 'avatar'))
          }
          style={({ pressed }) => [
            styles.toggleButton,
            pressed && styles.buttonPressed
          ]}
        >
          <Text style={styles.toggleButtonText}>
            {viewMode === 'avatar' ? '[ SHOW STATS ]' : '[ SHOW AVATAR ]'}
          </Text>
        </Pressable>
      </View>

      {viewMode === 'avatar' ? (
        <View style={{ alignItems: 'center' }}>
          <HeroAvatar spriteKey={hero.sprite} size={224} />
        </View>
      ) : (
        <HeroStatCard hero={hero} onConfirmStats={onConfirmStats} />
      )}
    </View>
  )
}
