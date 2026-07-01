import { View, Text } from 'react-native'
import { styles } from '@/styles/components/equipmentStatsHelp.style'

interface EquipmentStatData {
  name: string
  color: string
  description: string
}

const EQUIPMENT_STAT_DIRECTORY: EquipmentStatData[] = [
  {
    name: 'EQUIPMENT',
    color: '#3B82F6', // Blue 500 / Blue 700
    description:
      'A hero can equip 4 items. An armor item, weapon item, accessory, and a consumable. The only items a hero has at any given time, is that which is equipped.'
  },
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
