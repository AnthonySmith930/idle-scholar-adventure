import { View, Text } from 'react-native'
import { styles } from '@/styles/components/baseStatsHelp.style'

interface BaseStatCardData {
  name: string
  color: string
  description: string
}

const STAT_DIRECTORY: BaseStatCardData[] = [
  {
    name: 'POWER',
    color: '#EF4444',
    description:
      'Increases the kinetic impact energy of your particle collisions. Higher power amplifies base smash yields and forces denser materials to fracture.'
  },
  {
    name: 'FORTITUDE',
    color: '#3B82F6',
    description:
      'Reinforces core alignment stability. Prevents high-speed magnetic vector decay, making your alignment sweet-spots wider and more forgiving.'
  },
  {
    name: 'VIGOR',
    color: '#10B981',
    description:
      'Sustains system operations over long collision chains. Reduces total energy drain per execution and accelerates sub-atomic repair cycles.'
  },
  {
    name: 'LUCK',
    color: '#F59E0B',
    description:
      'Influences critical anomaly generation rates during atom smashing. Heightens your chances of triggering rare isotope drops and cascading chain reactions.'
  }
]

export function BaseStatsHelp() {
  return (
    <View style={styles.container}>
      {STAT_DIRECTORY.map((stat) => (
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
