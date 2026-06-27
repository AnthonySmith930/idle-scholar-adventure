import { View } from 'react-native'
import { IsaItemSlot, SlotType } from './IsaItemSlot'
import { styles } from '@/styles/components/miniItemsRow.style'
import { HeroEquipment } from '@/types/game'

interface MiniGearRowProps {
  equipment: HeroEquipment
}

export function MiniGearRow({ equipment }: MiniGearRowProps) {
  const slots: { type: SlotType; item?: any }[] = [
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
          masterId={slot.item?.id}
          style={styles.miniSlotOverride}
        />
      ))}
    </View>
  )
}
