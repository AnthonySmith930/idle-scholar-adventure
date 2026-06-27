import { useState } from 'react'
import { View, Pressable, ViewStyle } from 'react-native'
import { useThemeStore } from '@/stores/themeStore'
import { useItemStore } from '@/stores/itemStore'
import { resolveItemAsset } from '@/utils/itemAssets'
import { ItemDetailsModal } from './ItemDetailsModal'
import { Image } from 'expo-image'
import { styles } from '@/styles/components/IsaItemSlot.style'

export type SlotType = 'weapon' | 'armor' | 'consumable' | 'accessory'

interface IsaItemSlotProps {
  masterId?: string | null
  slotType: SlotType
  isActive?: boolean
  style?: ViewStyle
}

export function IsaItemSlot({
  masterId,
  slotType,
  isActive = false,
  style
}: IsaItemSlotProps) {
  const theme = useThemeStore((state) => state.theme)
  const templates = useItemStore((state) => state.templates)
  const [modalVisible, setModalVisible] = useState(false)

  const itemTemplate = masterId
    ? templates.find((t) => t.id === masterId)
    : null
  const isEmpty = !itemTemplate

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
      default:
        return require('../../assets/images/placeholders/consumable-silhouette.svg')
    }
  }

  const itemAsset = !isEmpty ? resolveItemAsset(itemTemplate.id) : null
  const rarity = itemTemplate?.rarity || 'common'

  // Dynamic design colors pulled directly out of your theme definitions
  const rarityColor = !isEmpty
    ? theme.colors.rarity?.[rarity] || '#94A3B8'
    : 'transparent'
  const currentBorderColor = isActive ? '#FFFFFF' : theme.colors.border

  return (
    <>
      <Pressable
        onPress={() => !isEmpty && setModalVisible(true)}
        disabled={isEmpty}
        style={({ pressed }) => [
          styles.slotFrame,
          styles.baseFrameStyle,
          { borderColor: currentBorderColor }, // Inline variable mapping
          pressed && styles.slotPressed,
          style
        ]}
      >
        {!isEmpty && (
          <View
            style={[styles.rarityBacking, { backgroundColor: rarityColor }]}
          />
        )}

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

      <ItemDetailsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        name={itemTemplate?.name || ''}
        rarity={rarity}
        slotType={slotType}
        description={itemTemplate?.description || ''}
        itemAsset={itemAsset}
        stats={itemTemplate?.stats}
      />
    </>
  )
}
