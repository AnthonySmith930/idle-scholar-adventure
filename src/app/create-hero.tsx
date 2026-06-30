import { useState, useEffect } from 'react'
import { View, TextInput, ScrollView, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import { Image } from 'expo-image'
import { useRecruitHero, useHeroes } from '@/stores/heroStore'
import { IsaButton } from '@/components/IsaButton'
import { IsaText } from '@/components/IsaText'
import { HeroAvatar } from '@/components/HeroAvatar'
import { HeroClass } from '@/types/game'
import { HeroStatsDisplay } from '@/components/HeroStatDisplay'
import { generateStartingStats } from '@/utils/generateStartingStats'
import { styles } from '@/styles/screens/createHeroScreen.style'

type Gender = 'male' | 'female'

const MALE_NAMES = [
  'Aethelgard',
  'Valen',
  'Garrick',
  'Caelum',
  'Bram',
  'Ignis',
  'Roderick',
  'Kaelen'
]
const FEMALE_NAMES = [
  'Elysia',
  'Lyra',
  'Seraphina',
  'Vespera',
  'Rowena',
  'Freya',
  'Isolde',
  'Morwenna'
]

const CLASSES: { id: HeroClass; label: string; description: string }[] = [
  {
    id: 'warrior',
    label: 'WARRIOR',
    description: 'Stalwart protector. Excellent defenses.'
  },
  {
    id: 'mage',
    label: 'MAGE',
    description: 'Master of elements. High burst potential.'
  },
  {
    id: 'rogue',
    label: 'ROGUE',
    description: 'Swift executioner. Critical strike specialist.'
  },
  {
    id: 'ranger',
    label: 'RANGER',
    description: 'Tactical genius. Maximizes research & EXP gains.'
  }
]

// 2. Sprite Mapping Matrix matching your local assets directory paths
const SPRITE_KEY_MAP: Record<HeroClass, Record<Gender, string>> = {
  warrior: { male: 'warrior_male', female: 'warrior_female' },
  mage: { male: 'mage_male', female: 'mage_female' },
  rogue: { male: 'rogue_male', female: 'rogue_female' },
  ranger: { male: 'ranger_male', female: 'ranger_female' }
}

export default function CreateHeroScreen() {
  const router = useRouter()
  const heroes = useHeroes()
  const recruitHero = useRecruitHero()

  // Character Configuration States
  const [name, setName] = useState('')
  const [gender, setGender] = useState<Gender>('male')
  const [selectedClass, setSelectedClass] = useState<HeroClass>('warrior')

  const classStats = generateStartingStats(selectedClass)

  // Dice roll helper to grab a random name matching selected gender pool
  const rollRandomName = (currentGender: Gender) => {
    const pool = currentGender === 'male' ? MALE_NAMES : FEMALE_NAMES
    const randomIndex = Math.floor(Math.random() * pool.length)
    setName(pool[randomIndex])
  }

  // Seed initial values on first layout mount
  useEffect(() => {
    rollRandomName(gender)
  }, [])

  // Auto-reroll a name contextually if player toggles gender and hasn't custom typed yet
  const handleGenderChange = (newGender: Gender) => {
    setGender(newGender)
    const poolToCheck = gender === 'male' ? MALE_NAMES : FEMALE_NAMES
    if (poolToCheck.includes(name) || name === '') {
      rollRandomName(newGender)
    }
  }

  const handleRecruitPress = async () => {
    const cleanName = name.trim()
    if (!cleanName) return // Guard: Prevent nameless entities entering database

    if (heroes.length >= 10) {
      router.back()
      return
    }

    const resolvedSprite = SPRITE_KEY_MAP[selectedClass][gender]

    // Dispatch payload directly down into Drizzle migration storage layer via Zustand
    await recruitHero(cleanName, selectedClass, resolvedSprite)

    router.back()
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <IsaText variant="heading" size="xl" style={styles.title}>
        RECRUIT HERO
      </IsaText>

      {/* Avatar Preview Display Frame */}
      <View style={styles.previewContainer}>
        <HeroAvatar
          size={128}
          spriteKey={SPRITE_KEY_MAP[selectedClass][gender]}
        />
        <HeroStatsDisplay
          power={classStats.power}
          vigor={classStats.vigor}
          fortitude={classStats.fortitude}
          luck={classStats.luck}
        />
      </View>

      {/* Naming Section Grid */}
      <View style={styles.section}>
        <IsaText variant="heading" size="xs" style={styles.label}>
          CHARACTER NAME
        </IsaText>
        <View style={styles.nameInputRow}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Name your hero..."
            placeholderTextColor="#4B5563"
            maxLength={16}
          />
          <Pressable
            onPress={() => rollRandomName(gender)}
            style={({ pressed }) => [
              styles.rollButton,
            pressed && styles.rollPressed
            ]}
          >
            <Image
              style={{ width: 64, height: 64 }}
              source={require('~/assets/images/icons/roll_icon.svg')}
              contentFit="contain"
              transition={150}
              cachePolicy="disk"
            />
          </Pressable>
        </View>
      </View>

      {/* Binary Gender Selection Row */}
      <View style={styles.section}>
        <IsaText variant="heading" size="xs" style={styles.label}>
          SELECT GENDER
        </IsaText>
        <View style={styles.toggleRow}>
          <IsaButton
            title="MALE"
            variant={gender === 'male' ? 'primary' : 'secondary'}
            onPress={() => handleGenderChange('male')}
            style={styles.flexButton}
          />
          <View style={{ width: 12 }} />
          <IsaButton
            title="FEMALE"
            variant={gender === 'female' ? 'primary' : 'secondary'}
            onPress={() => handleGenderChange('female')}
            style={styles.flexButton}
          />
        </View>
      </View>

      {/* Class Picker Row Matrix */}
      <View style={styles.section}>
        <IsaText variant="heading" size="xs" style={styles.label}>
          CHOOSE CLASS
        </IsaText>
        <View style={styles.classGrid}>
          {CLASSES.map((c) => (
            <IsaButton
              key={c.id}
              title={c.label}
              variant={selectedClass === c.id ? 'primary' : 'secondary'}
              onPress={() => setSelectedClass(c.id)}
              style={styles.classCardButton}
            />
          ))}
        </View>
        <View style={styles.descriptionBox}>
          <IsaText size="sm" style={styles.descriptionText}>
            {CLASSES.find((c) => c.id === selectedClass)?.description}
          </IsaText>
        </View>
      </View>

      {/* Commit Footer Controls */}
      <View style={styles.footer}>
        <IsaButton
          title="CONFIRM RECRUITMENT"
          onPress={handleRecruitPress}
          style={styles.confirmButton}
        />
        <IsaButton
          title="CANCEL"
          variant="error"
          onPress={() => router.back()}
          style={styles.cancelButton}
        />
      </View>
    </ScrollView>
  )
}
