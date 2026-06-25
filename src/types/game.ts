import { itemTable, heroesTable } from '@/db/schema'

export type ItemId = typeof itemTable.$inferSelect
export type Hero = typeof heroesTable.$inferSelect

export type HeroClass = 'mage' | 'warrior' | 'ranger' | 'rogue'

export interface EquippedItemInstance {
  instanceId: string
  masterId: string
  name: string
}

export interface HeroEquipment {
  weapon: EquippedItemInstance
  armor: EquippedItemInstance
  accessory: EquippedItemInstance | null
  consumable: EquippedItemInstance | null
}

interface StartingKit {
  weaponId: string
  weaponName: string
  armorId: string
  armorName: string
}

export const CLASS_STARTING_KITS: Record<HeroClass, StartingKit> = {
  mage: {
    weaponId: 'weapon_basic_staff',
    weaponName: 'Basic Staff',
    armorId: 'armor_basic_robes',
    armorName: 'Basic Robes'
  },
  warrior: {
    weaponId: 'weapon_basic_sword',
    weaponName: 'Basic Sword',
    armorId: 'armor_basic_mail',
    armorName: 'Basic Chainmail'
  },
  ranger: {
    weaponId: 'weapon_basic_bow',
    weaponName: 'Basic Bow',
    armorId: 'armor_basic_leather',
    armorName: 'Basic Leather Armor'
  },
  rogue: {
    weaponId: 'weapon_basic_daggers',
    weaponName: 'Basic Daggers',
    armorId: 'armor_basic_tunic',
    armorName: 'Basic Cloth Tunic'
  }
}

interface StartingStats {
  power: number
  fortitude: number
  vigor: number
  luck: number
}

export const CLASS_STARTING_STATS: Record<HeroClass, StartingStats> = {
  mage: {
    power: 2,
    fortitude: 1,
    vigor: 1,
    luck: 2
  },
  warrior: {
    power: 2,
    fortitude: 2,
    vigor: 1,
    luck: 1
  },
  ranger: {
    power: 1,
    fortitude: 2,
    vigor: 2,
    luck: 1
  },
  rogue: {
    power: 1,
    fortitude: 1,
    vigor: 2,
    luck: 2
  }
}
