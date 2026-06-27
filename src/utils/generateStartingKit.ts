import * as Crypto from 'expo-crypto'
import { HeroClass, CLASS_STARTING_KITS, HeroEquipment } from '@/types/game'

export const generateStartingKit = (heroClass: HeroClass): HeroEquipment => {
  const kit = CLASS_STARTING_KITS[heroClass]
  return {
    weapon: {
      instanceId: Crypto.randomUUID(),
      masterId: kit.weaponMasterId,
      name: kit.weaponName
    },
    armor: {
      instanceId: Crypto.randomUUID(),
      masterId: kit.armorMasterId,
      name: kit.armorName
    },
    accessory: null,
    consumable: null
  }
}
