import { View } from 'react-native'
import { IsaItemSlot, SlotType } from './IsaItemSlot'
import { styles } from '@/styles/components/miniGearRow.style'
import { HeroEquipment, EquippedItemInstance } from '@/types/game'
import { IsaText } from './IsaText'
import { formatCompressedGold } from '@/utils/gold'
import { Image } from 'expo-image'

interface MiniGearRowProps {
  equipment: HeroEquipment
  gold: number
}

export function MiniGearRow({ equipment, gold }: MiniGearRowProps) {
  const slots: { type: SlotType; item?: EquippedItemInstance | null }[] = [
    { type: 'weapon', item: equipment.weapon },
    { type: 'armor', item: equipment.armor },
    { type: 'accessory', item: equipment.accessory },
    { type: 'consumable', item: equipment.consumable }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.goldRow}>
        <IsaText size="xs" style={styles.goldValue}>
          GOLD:
        </IsaText>
        <Image
          style={{ marginLeft: 4, width: 16, height: 16 }}
          source={require('~/assets/images/icons/coin_icon.svg')}
          contentFit="contain"
          transition={150}
          cachePolicy="disk"
        />
        <IsaText size="xs" style={styles.goldValue}>
          {formatCompressedGold(gold)}
        </IsaText>
      </View>

      <View style={styles.rowContainer} pointerEvents="none">
        {slots.map((slot) => (
          <IsaItemSlot
            key={slot.type}
            slotType={slot.type}
            variant="compact"
            masterId={slot.item?.masterId}
            style={styles.miniSlotOverride}
          />
        ))}
      </View>
    </View>
  )
}
