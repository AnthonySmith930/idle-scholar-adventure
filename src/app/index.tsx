import { IsaButton } from '@/components/IsaButton'
import { IsaItemSlot } from '@/components/isaItemSlot'
import { useTheme } from '@/stores/themeStore'
import { View, Text } from 'react-native'

export default function HomeScreen() {
  const theme = useTheme()

  return (
    <View>
      <Text style={{ fontSize: 10, color: theme.colors.text.primary, fontFamily: theme.typography.fontFamily.heading}}>Home Screen</Text>
      <IsaButton variant='primary' title="Press Me" onPress={() => console.log('Pressed!')} />
      <IsaItemSlot style = {{ marginTop: 20 }} slotType="consumable" />
    </View>
  )
}
