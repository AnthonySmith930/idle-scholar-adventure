import { View, ScrollView, Text, Pressable, ActivityIndicator } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useHeroes, useUpdateHeroStats } from '@/stores/heroStore'
import { useTheme } from '@/stores/themeStore'
import { HeroTray } from '@/components/HeroTray'
import { ExperienceBar } from '@/components/ExperienceBar'
import { EquipmentTable } from '@/components/EquipmentTable'
import { styles } from '@/styles/screens/heroScreen.style'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HeroDetailScreen() {
  const router = useRouter()
  const { id } = useLocalSearchParams<{ id: string }>()
  
  // 🎯 Fetch our reactive state data and direct state mutation actions
  const theme = useTheme()
  const heroes = useHeroes()
  const updateHeroStats = useUpdateHeroStats()

  // Find the unique profile matching our active router path token
  const hero = heroes.find((h) => h.id === id)

  // Fallback indicator if the record hasn't finished hydrating from SQLite yet
  if (!hero) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: '#020617' }]}>
        <ActivityIndicator size="large" color="#FBBF24" />
        <Text style={styles.loadingText}>LOADING CHRONICLE...</Text>
      </View>
    )
  }

  const handleConfirmStats = async (
    allocatedStats: { power: number; fortitude: number; vigor: number; luck: number },
    remainingPoints: number
  ) => {
    try {
      await updateHeroStats(hero.id, allocatedStats, remainingPoints)
    } catch (error) {
      console.error('Failed to commit attribute allocations to terminal state:', error)
    }
  }

  const handleQuestAction = () => {
    if (hero.activeQuestId) {
      // ⚔️ Hero is active: link them directly to their running execution stream
      router.push(`/quest/live/${hero.activeQuestId}`)
    } else {
      // 🏡 Hero is home base idle: link to selection board passovers
      router.push({
        pathname: '/quest/select',
        params: { heroId: hero.id }
      })
    }
  }

  return (
    <SafeAreaView style={[styles.screenWrapper, { backgroundColor: '#020617' }]}>
      {/* 🧭 Back Navigation Header */}
      <View style={[styles.headerNav, { borderColor: theme.colors.border }]}>
        <Pressable 
          onPress={() => router.back()} 
          style={({ pressed }) => [styles.backBtn, pressed && styles.btnPressed]}
        >
          <Text style={styles.backBtnText}>{"< RETURN"}</Text>
        </Pressable>
        <Text style={styles.headerTitle}>{hero.name}</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
        {/* Module A: Modular Top Attribute Switchboard Tray */}
        <HeroTray hero={hero} onConfirmStats={handleConfirmStats} />

        {/* Module B: Custom Formula-Driven Experience Monitor */}
        <ExperienceBar currentExp={hero.current_exp} level={hero.level} />

        {/* Section Divide: Equipment Core Inventory Section */}
        <Text style={styles.sectionLabelText}>EQUIPPED ITEMS</Text>
        
        {/* Module C: 4-Slot Grid Item Matrix Row */}
        <EquipmentTable equipment={hero.equipment} />
      </ScrollView>

      {/* 🧭 Contextual Footer Action Control Dock */}
      <View style={[styles.footerActionDock, { borderTopWidth: 2, borderColor: theme.colors.border }]}>
        {/* Secondary History Tracker Action Button */}
        {hero.previousQuestId && (
          <Pressable
            onPress={() => router.push(`/quest/history/${hero.previousQuestId}`)}
            style={({ pressed }) => [styles.historyBtn, pressed && styles.btnPressed]}
          >
            <Text style={styles.historyBtnText}>LOGS</Text>
          </Pressable>
        )}

        {/* Primary Deploy/Monitor Master Action Toggle Button */}
        <Pressable
          onPress={handleQuestAction}
          style={({ pressed }) => [
            styles.primaryQuestBtn,
            hero.activeQuestId ? styles.btnActiveQuest : styles.btnIdleDeploy,
            pressed && styles.btnPressed
          ]}
        >
          <Text style={styles.primaryQuestBtnText}>
            {hero.activeQuestId ? '⚠️ LIVE CHRONICLE' : 'Select Adventure'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
