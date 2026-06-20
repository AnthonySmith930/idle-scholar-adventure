import { useTheme } from '@/stores/themeStore'
import { View, Text } from 'react-native'

export default function HomeScreen() {
  const theme = useTheme()

  return (
    <View>
      <Text style={{ fontWeight: 'bold', color: theme.colors.text.primary}}>Home Screen</Text>
    </View>
  )
}
