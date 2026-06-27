import { View } from 'react-native'
import { IsaItemSlot } from './IsaItemSlot'
import { HeroEquipment } from '@/types/game'
import { styles } from '@/styles/components/equipmentTable.style'

interface EquipmentTableProps {
  equipment: HeroEquipment
}

export function EquipmentTable({ equipment }: EquipmentTableProps) {
  return (
    <View style={styles.container}>
      <IsaItemSlot
        masterId={equipment.weapon?.masterId}
        slotType="weapon"
        style={styles.slotSpacing}
      />

      <IsaItemSlot
        masterId={equipment.armor?.masterId}
        slotType="armor"
        style={styles.slotSpacing}
      />

      <IsaItemSlot
        masterId={equipment.accessory?.masterId}
        slotType="accessory"
        style={styles.slotSpacing}
      />

      <IsaItemSlot
        masterId={equipment.consumable?.masterId}
        slotType="consumable"
      />
    </View>
  )
}
