import { View, Text } from 'react-native'
import { styles } from '@/styles/components/experienceBar.style'

interface ExperienceBarProps {
  currentExp: number
  level: number
}

const EXP_BASE_STEP = 100
const MAX_LEVEL = 75

export function ExperienceBar({ currentExp, level }: ExperienceBarProps) {
  const maxExp = level * EXP_BASE_STEP
  
  const isMaxLevel = level >= MAX_LEVEL
  const progressPercent = isMaxLevel ? 100 : Math.min((currentExp / maxExp) * 100, 100)

  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={styles.labelText}>EXP</Text>
        <Text style={styles.valueText}>
          {isMaxLevel ? 'MAX LEVEL' : `${currentExp} / ${maxExp} (${Math.floor(progressPercent)}%)`}
        </Text>
      </View>

      <View style={styles.outerBarFrame}>
        <View style={styles.innerBarContainer}>
          {progressPercent > 0 && (
            <View 
              style={[
                styles.fillMeter, 
                { width: `${progressPercent}%` }
              ]} 
            />
          )}
        </View>
      </View>
    </View>
  )
}
