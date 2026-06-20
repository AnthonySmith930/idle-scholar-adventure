import { View, Pressable, ViewStyle } from 'react-native'
import { useThemeStore } from '@/stores/themeStore'
import { Image } from 'expo-image'
import { styles } from '@/styles/components/IsaItemSlot.style'

export type ItemRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
export type SlotType =
  | 'generic'
  | 'weapon'
  | 'armor'
  | 'consumable'
  | 'accessory'

interface IsaItemSlotProps {
  itemAsset?: any
  rarity?: ItemRarity
  slotType?: SlotType
  onPress?: () => void
  isActive?: boolean
  style?: ViewStyle
}

export function IsaItemSlot({
  itemAsset,
  rarity = 'common',
  slotType = 'generic',
  onPress,
  isActive = false,
  style
}: IsaItemSlotProps) {
  const theme = useThemeStore((state) => state.theme)

  const isEmpty = !itemAsset

  const getPlaceholderAsset = () => {
    switch (slotType) {
      case 'weapon':
        return require('../../assets/images/placeholders/weapon-silhouette.svg')
      case 'armor':
        return require('../../assets/images/placeholders/armor-silhouette.svg')
      case 'accessory':
        return require('../../assets/images/placeholders/accessory-silhouette.svg')
      case 'consumable':
        return require('../../assets/images/placeholders/consumable-silhouette.svg')
      case 'generic':
      default:
        return require('../../assets/images/placeholders/consumable-silhouette.svg')
    }
  }

  const rarityColor = !isEmpty
    ? theme.colors.rarity?.[rarity] || '#94A3B8'
    : 'transparent'

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.slotFrame,
        {
          borderColor: isActive ? '#FFFFFF' : theme.colors.border,
          backgroundColor: '#1E293B'
        },
        pressed && styles.slotPressed,
        style
      ]}
    >
      {!isEmpty && (
        <View
          style={[styles.rarityBacking, { backgroundColor: rarityColor }]}
        />
      )}

      <View style={styles.glossyLip} />

      {isEmpty ? (
        <Image
          source={getPlaceholderAsset()}
          style={styles.placeholderSprite}
          contentFit="contain"
        />
      ) : (
        <Image
          source={itemAsset}
          style={styles.itemSprite}
          contentFit="contain"
        />
      )}
    </Pressable>
  )
}
