import { View } from 'react-native'
import { IsaItemSlot, SlotType, ItemRarity } from './IsaItemSlot'
import { styles } from '@/styles/components/miniItemsRow.style'

// Defines the shape of equipped items passed down from the Hero schema
interface EquippedItem {
  asset?: any
  rarity?: ItemRarity
}

interface MiniGearRowProps {
  equipment: {
    weapon?: EquippedItem
    armor?: EquippedItem
    accessory?: EquippedItem
    consumable?: EquippedItem
  }
}

export function MiniGearRow({ equipment }: MiniGearRowProps) {
  const slots: { type: SlotType; item?: EquippedItem }[] = [
    { type: 'weapon', item: equipment.weapon },
    { type: 'armor', item: equipment.armor },
    { type: 'accessory', item: equipment.accessory },
    { type: 'consumable', item: equipment.consumable }
  ]

  return (
    <View style={styles.rowContainer} pointerEvents="none">
      {slots.map((slot) => (
        <IsaItemSlot
          key={slot.type}
          slotType={slot.type}
          itemAsset={slot.item?.asset}
          rarity={slot.item?.rarity || 'common'}
          style={styles.miniSlotOverride}
        />
      ))}
    </View>
  )
}
