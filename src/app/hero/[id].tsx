import { useLocalSearchParams } from 'expo-router'
import { Text } from 'react-native'

export default function HeroScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  return <Text>Hero: {id}</Text>
}
