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
      {/* ⚔️ Weapon Slot */}
      <IsaItemSlot
        masterId={equipment.weapon?.masterId}
        slotType="weapon"
        style={styles.slotSpacing}
      />

      {/* 🛡️ Armor Slot */}
      <IsaItemSlot
        masterId={equipment.armor?.masterId}
        slotType="armor"
        style={styles.slotSpacing}
      />

      {/* 📿 Accessory Slot (Nullable) */}
      <IsaItemSlot
        masterId={equipment.accessory?.masterId}
        slotType="accessory"
        style={styles.slotSpacing}
      />

      {/* 🧪 Consumable Slot (Nullable) */}
      <IsaItemSlot
        masterId={equipment.consumable?.masterId}
        slotType="consumable"
      />
    </View>
  )
}
