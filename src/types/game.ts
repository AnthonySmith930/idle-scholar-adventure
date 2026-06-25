import { itemTable, heroesTable } from '@/db/schema'

// ======== Hero ========
export type Hero = typeof heroesTable.$inferSelect
export type HeroClass = 'mage' | 'warrior' | 'ranger' | 'rogue'

export interface HeroEquipment {
  weapon: EquippedItemInstance
  armor: EquippedItemInstance
  accessory: EquippedItemInstance | null
  consumable: EquippedItemInstance | null
}
// ======================

// ======== Item ========
export type ItemId = typeof itemTable.$inferSelect
export type Item = typeof itemTable.$inferInsert
export type ItemClass = 'mage' | 'warrior' | 'ranger' | 'rogue' | 'all'
export type ItemType = 'weapon' | 'armor' | 'consumable' | 'accessory'
export type ItemRarity = 'common' | 'uncommon' | 'rare' | 'legendary'

export interface EquippedItemInstance {
  instanceId: string
  masterId: string
  name: string
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

export interface CoreAttributes {
  power?: number
  vigor?: number
  fortitude?: number
  luck?: number
}

export type QuestEffectType = 
  | 'gold_multiplier'       // Increases gold dropped by monsters
  | 'exp_multiplier'        // Increases experience points gained by scholars
  | 'loot_drop_chance'      // Boosts the percentage chance of getting item drops
  | 'focus_peak_extension'  // Extends the duration the player stays at maximum peak encounter rate
  | 'focus_decay_reduction' // Slows down the speed at which encounter rates drop due to fatigue
  | 'focus_ramp_acceleration' // Shortens the time it takes to reach peak encounter rate when starting a session
  | 'heal_missing_hp'       // Instantly heals a % or flat amount of missing HP
  | 'cleanse_fatigue'       // Instantly resets or reduces the focus decay timer during a live session
  | 'quest_stat_buff'       // Increases a stats at the start of a quest

export interface ItemStatsJson extends CoreAttributes {
  base_damage?: number
  base_defense?: number
  effect_type?: QuestEffectType
  effect_value?: number
}
// ======================
