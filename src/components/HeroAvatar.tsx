import { View } from 'react-native'
import { Image, ImageSource } from 'expo-image'
import { useTheme } from '@/stores/themeStore'
import { styles } from '@/styles/components/heroAvatar.style'

const HERO_SPRITE_REGISTRY: Record<string, any> = {
  warrior_male: require('~/assets/images/heroes/warrior.svg'),
  warrior_female: require('~/assets/images/heroes/warrior.svg'),
  mage_male: require('~/assets/images/heroes/warrior.svg'),
  mage_female: require('~/assets/images/heroes/warrior.svg'),
  rogue_male: require('~/assets/images/heroes/warrior.svg'),
  rogue_female: require('~/assets/images/heroes/warrior.svg'),
  ranger_male: require('~/assets/images/heroes/warrior.svg'),
  ranger_female: require('~/assets/images/heroes/warrior.svg')
}

const DEFAULT_SPRITE = require('~/assets/images/heroes/warrior.svg')

interface HeroAvatarProps {
  spriteKey: string
  size?: number
}

export function HeroAvatar({ spriteKey, size = 56 }: HeroAvatarProps) {
  const theme = useTheme()

  const resolvedSource = HERO_SPRITE_REGISTRY[spriteKey] || DEFAULT_SPRITE

  return (
    <View
      style={[
        styles.avatarFrame,
        {
          borderColor: theme.colors.border,
          width: size,
          height: size
        }
      ]}
    >
      <View style={styles.spriteCanvas}>
        <Image
          source={resolvedSource}
          style={styles.spriteImage}
          contentFit="contain"
          transition={150}
          cachePolicy="disk"
        />
      </View>
    </View>
  )
}
