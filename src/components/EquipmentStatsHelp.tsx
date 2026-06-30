import { View, Text } from 'react-native'
import { styles } from '@/styles/components/equipmentStatsHelp.style'

interface EquipmentStatData {
  name: string
  color: string
  description: string
}

const EQUIPMENT_STAT_DIRECTORY: EquipmentStatData[] = [
  {
    name: 'DAMAGE',
    color: '#F43F5E', // Vivid Rose / Attack Pink
    description:
      'Directly scales the baseline energy yield of successful particle impacts. Higher damage scores break down heavy element atomic matrices significantly faster.'
  },
  {
    name: 'DEFENSE',
    color: '#38BDF8', // Light Sky Blue / Shield Blue
    description:
      'Absorbs the kinetic recoil shock generated during unstable collisions. Minimizes system overloads and protects your equipment stability profile from structural decay.'
  }
]

export function EquipmentStatsHelp() {
  return (
    <View style={styles.container}>
      {EQUIPMENT_STAT_DIRECTORY.map((stat) => (
        <View key={stat.name} style={styles.statCard}>
          {/* Card Header */}
          <View style={styles.cardHeader}>
            <Text style={[styles.statTitle, { color: stat.color }]}>
              {stat.name}
            </Text>
          </View>

          {/* Card Body Divider Line */}
          <View style={styles.dividerLine} />

          {/* Card Body Text */}
          <View style={styles.cardBody}>
            <Text style={styles.descriptionText}>{stat.description}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}
