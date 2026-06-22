import { View } from 'react-native'
import { Image, ImageSource } from 'expo-image'
import { useTheme } from '@/stores/themeStore'
import { styles } from '@/styles/components/heroAvatar.style'

interface HeroAvatarProps {
  spriteSource: ImageSource | string | number
  size?: number
}

export function HeroAvatar({
  spriteSource,
  size = 56
}: HeroAvatarProps) {
  const theme = useTheme()

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
          source={spriteSource}
          style={styles.spriteImage}
          contentFit="contain"
          transition={150}
          cachePolicy="disk"
        />
      </View>
    </View>
  )
}
