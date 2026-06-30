import { View } from 'react-native'
import { IsaText } from './IsaText'
import { useTheme } from '@/stores/themeStore'
import { styles } from '@/styles/components/heroInfo.style'

interface HeroInfoProps {
  name: string
}

export function HeroInfo({ name }: HeroInfoProps) {

  return (
    <View style={styles.infoContainer}>
      <IsaText
        variant="heading"
        size="sm"
        numberOfLines={1}
        style={styles.nameText}
      >
        {name.toUpperCase()}
      </IsaText>
    </View>
  )
}
