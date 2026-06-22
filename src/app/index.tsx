import { useState } from 'react'
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native'
import { useTheme } from '@/stores/themeStore'
import { GlobalDashboard } from '@/components/GlobalDashboard'
import { HeroCard } from '@/components/HeroCard'
import { HeroAvatar } from '@/components/HeroAvatar'
import { HeroInfo } from '@/components/HeroInfo'
import { MiniGearRow } from '@/components/MiniItemsRow'
import { IsaButton } from '@/components/IsaButton'
import { HeroEntry, mockHeroes } from '@/db/mockData'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen({ navigation }: any) {
  const theme = useTheme()

  // 1. Mock Data: Arranged with mixed timestamps to confirm our sorting logic works flawlessly
  const [heroes, setHeroes] = useState<HeroEntry[]>(mockHeroes)

  // 2. Compute Global Account Aggregations
  const totalGold = heroes.reduce((sum, h) => sum + h.gold, 0)
  const totalTimeSeconds = 43200 // Mock: 12 hours total account questing time
  const maxScholarsCount = 10

  // 3. Navigation Interceptors
  const handleHeroSelect = (id: string) => {
    // Passes solely the unique ID to keep memory overhead light
    navigation.navigate('HeroDetails', { heroId: id })
  }

  const handleCreateHero = () => {
    if (heroes.length >= maxScholarsCount) return

    // Quick test addition helper to verify the 10-hero maximum cutoff behavior
    const newHero: HeroEntry = {
      id: `char-${Date.now()}`,
      name: `Scholar ${heroes.length + 1}`,
      gold: 0,
      createdAt: Date.now(),
      sprite: require('~/assets/images/warrior.svg'),
      equipment: {}
    }
    setHeroes([newHero, ...heroes])
  }

  const handleSettingsPress = () => {
    navigation.navigate('Settings')
  }

  // 4. Sort: Newest created heroes always position at the top of the board
  const sortedHeroes = [...heroes].sort((a, b) => b.createdAt - a.createdAt)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Macro Account Status Header Board */}
        <GlobalDashboard
          totalGold={totalGold}
          totalTimeSeconds={totalTimeSeconds}
          activeScholarsCount={heroes.length}
          maxScholarsCount={maxScholarsCount}
          onSettingsPress={handleSettingsPress}
        />

        {/* Dynamic Hero List Array */}
        {sortedHeroes.map((hero) => (
          <HeroCard
            key={hero.id}
            heroId={hero.id}
            onPress={handleHeroSelect}
          >
            <HeroAvatar spriteSource={hero.sprite} />
            <View style={{ flex: 1 }}>
              <HeroInfo name={hero.name} gold={hero.gold} />
              <MiniGearRow equipment={hero.equipment} />
            </View>
          </HeroCard>
        ))}

        {/* Action Button: Renders inline right below the last card, vanishes when full */}
        {heroes.length < maxScholarsCount && (
          <IsaButton
            title="+ RECRUIT NEW SCHOLAR"
            onPress={handleCreateHero}
            style={styles.addHeroButton as ViewStyle}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor: '#090D16' // Fallback deep void color while image downloads
  },
  scrollView: {
    flex: 1
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 40 // Ensures extra layout padding at the baseline of the scroll track
  },
  addHeroButton: {
    marginTop: 8,
    width: '100%'
  }
})
