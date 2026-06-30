import { ScrollView, View, ViewStyle } from 'react-native'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GlobalDashboard } from '@/components/GlobalDashboard'
import { HeroCard } from '@/components/HeroCard'
import { HeroAvatar } from '@/components/HeroAvatar'
import { HeroInfo } from '@/components/HeroInfo'
import { MiniGearRow } from '@/components/MiniGearRow'
import { IsaButton } from '@/components/IsaButton'
import { useHeroes, useTotalQuestTime } from '@/stores/heroStore'
import { useAccountStore } from '@/stores/accountStore'
import { styles } from '@/styles/screens/homeScreen.style'

export default function HomeScreen() {
  const router = useRouter()

  const heroes = useHeroes()
  const sortedHeroes = [...heroes].sort((a, b) => b.createdAt - a.createdAt)
  const totalTimeSeconds = useTotalQuestTime()
  const globalGold = useAccountStore((state) => state.totalGoldEarned)

  const maxScholarsCount = 10

  const handleHeroSelect = (id: string) => {
    router.push(`hero/${id}`)
  }

  const handleCreateHeroPress = () => {
    if (heroes.length >= maxScholarsCount) return
    router.push('/create-hero')
  }

  const handleSettingsPress = () => {
    router.push('Settings')
  }

  return (
    <SafeAreaView style={styles.backgroundImage}>
      <GlobalDashboard
        totalGold={globalGold}
        totalTimeSeconds={totalTimeSeconds}
        activeScholarsCount={heroes.length}
        maxScholarsCount={maxScholarsCount}
        onSettingsPress={handleSettingsPress}
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {heroes.map((hero) => (
          <HeroCard key={hero.id} heroId={hero.id} onPress={handleHeroSelect}>
            <HeroAvatar spriteKey={hero.sprite} />
            <View style={{ flex: 1 }}>
              <HeroInfo name={hero.name} />
              <MiniGearRow equipment={hero.equipment} gold={hero.gold} />
            </View>
          </HeroCard>
        ))}

        {/* Action Button: Renders inline right below the last card, vanishes when full */}
        {sortedHeroes.length < maxScholarsCount && (
          <IsaButton
            title="+ RECRUIT NEW SCHOLAR"
            onPress={handleCreateHeroPress}
            style={styles.addHeroButton as ViewStyle}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  )
}
