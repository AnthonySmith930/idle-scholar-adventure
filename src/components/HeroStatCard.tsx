import { useState, useEffect } from 'react'
import { View, Text, Pressable } from 'react-native'
import { Hero } from '@/types/game'
import { styles } from '@/styles/components/heroStatCard.style'
import { InfoButton } from './InfoButton'

interface HeroStatCardProps {
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

export function HeroStatCard({ hero, onConfirmStats }: HeroStatCardProps) {
  const [pendingStats, setPendingStats] = useState({
    power: hero.power,
    fortitude: hero.fortitude,
    vigor: hero.vigor,
    luck: hero.luck
  })
  const [pendingPoints, setPendingPoints] = useState(hero.unassignedStatPoints)

  useEffect(() => {
    setPendingStats({
      power: hero.power,
      fortitude: hero.fortitude,
      vigor: hero.vigor,
      luck: hero.luck
    })
    setPendingPoints(hero.unassignedStatPoints)
  }, [hero])

  const hasChanges =
    pendingStats.power !== hero.power ||
    pendingStats.fortitude !== hero.fortitude ||
    pendingStats.vigor !== hero.vigor ||
    pendingStats.luck !== hero.luck

  const adjustStat = (
    statKey: 'power' | 'fortitude' | 'vigor' | 'luck',
    amount: number
  ) => {
    const currentValue = pendingStats[statKey]
    const baseValue = hero[statKey]

    if (amount < 0 && currentValue <= baseValue) return
    if (amount > 0 && pendingPoints <= 0) return

    setPendingStats((prev) => ({ ...prev, [statKey]: prev[statKey] + amount }))
    setPendingPoints((prev) => prev - amount)
  }

  const handleCancel = () => {
    setPendingStats({
      power: hero.power,
      fortitude: hero.fortitude,
      vigor: hero.vigor,
      luck: hero.luck
    })
    setPendingPoints(hero.unassignedStatPoints)
  }

  return (
    <View style={styles.statsCardContainer}>
      <View style={styles.pointsPoolRow}>
        <Text style={styles.pointsPoolText}>
          UNALLOCATED:{' '}
          <Text
            style={[
              styles.pointsPoolNum,
              pendingPoints > 0 && styles.flashingPoints
            ]}
          >
            {pendingPoints}
          </Text>
        </Text>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <InfoButton infoModalVariant="base_stats" />
        </View>
      </View>

      {(['power', 'fortitude', 'vigor', 'luck'] as const).map((stat) => {
        const baseValue = hero[stat]
        const currentValue = pendingStats[stat]
        const isModified = currentValue > baseValue

        return (
          <View key={stat} style={styles.statRow}>
            <Text style={styles.statLabelText}>
              {stat.slice(0, 3).toUpperCase()}
            </Text>

            <View style={styles.controlGroup}>
              <Pressable
                onPress={() => adjustStat(stat, -1)}
                disabled={currentValue <= baseValue}
                style={({ pressed }) => [
                  styles.mathButton,
                  currentValue <= baseValue && styles.mathButtonDisabled,
                  pressed && styles.buttonPressed
                ]}
              >
                <Text style={styles.mathButtonText}>[-]</Text>
              </Pressable>

              <Text
                style={[
                  styles.statValueText,
                  isModified && styles.statValueModified
                ]}
              >
                {currentValue}
              </Text>

              <Pressable
                onPress={() => adjustStat(stat, 1)}
                disabled={pendingPoints <= 0}
                style={({ pressed }) => [
                  styles.mathButton,
                  pendingPoints <= 0 && styles.mathButtonDisabled,
                  pressed && styles.buttonPressed
                ]}
              >
                <Text style={styles.mathButtonText}>[+]</Text>
              </Pressable>
            </View>
          </View>
        )
      })}

      <View style={styles.actionRowContainer}>
        <Pressable
          onPress={handleCancel}
          disabled={!hasChanges}
          style={({ pressed }) => [
            styles.actionBtn,
            !hasChanges && styles.actionBtnDisabled,
            pressed && styles.buttonPressed
          ]}
        >
          <Text style={styles.actionBtnCancelText}>[ RESET ]</Text>
        </Pressable>

        <Pressable
          onPress={() =>
            hasChanges && onConfirmStats(pendingStats, pendingPoints)
          }
          disabled={!hasChanges}
          style={({ pressed }) => [
            styles.actionBtn,
            !hasChanges && styles.actionBtnDisabled,
            pressed && styles.buttonPressed
          ]}
        >
          <Text
            style={[
              styles.actionBtnConfirmText,
              hasChanges && styles.hasChangesGlow
            ]}
          >
            [ CONFIRM ]
          </Text>
        </Pressable>
      </View>
    </View>
  )
}
