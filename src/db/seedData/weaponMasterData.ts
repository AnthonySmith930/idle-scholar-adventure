import { Item } from '@/types/game'

export const WEAPON_MASTER_DATA: Item[] = [
  {
    id: 'starter_sword_001',
    name: 'Dull Sword',
    description:
      'A blunt iron blade given to novice squires. Reliable, but lacks an edge.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'wpn_dull_sword',
    baseValue: 0,
    itemClass: 'warrior',
    stats: {
      base_damage: 5
    },
    isDroppable: false
  },
  {
    id: 'starter_bow_001',
    name: 'Old Bow',
    description:
      'A flexible wooden bow strung with simple twine. Good for keeping distance.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'wpn_old_bow',
    baseValue: 0,
    itemClass: 'ranger',
    stats: {
      base_damage: 5
    },
    isDroppable: false
  },
  {
    id: 'starter_staff_001',
    name: 'Novice Staff',
    description:
      'A polished wooden rod that helps channel focal energy during long studies.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'wpn_novice_staff',
    baseValue: 0,
    itemClass: 'mage',
    stats: {
      base_damage: 5
    },
    isDroppable: false
  },
  {
    id: 'starter_daggers_001',
    name: 'Rusty Daggers',
    description:
      'A pair of lightweight iron daggers designed for rapid, fluid strikes.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'wpn_rusty_daggers',
    baseValue: 0,
    itemClass: 'rogue',
    stats: {
      base_damage: 5
    },
    isDroppable: false
  },
  {
    id: 'bronze_sword_001',
    name: 'Bronze Sword',
    description:
      'Forged from a simple copper-tin alloy. Notably sharper than a training blade.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'wpn_bronze_sword',
    baseValue: 45,
    itemClass: 'warrior',
    stats: {
      base_damage: 6
    },
    isDroppable: true
  },
  {
    id: 'hunting_bow_001',
    name: 'Hunting Bow',
    description:
      'A reinforced recurve bow built for taking down small game. Offers steady tension.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'wpn_hunting_bow',
    baseValue: 45,
    itemClass: 'ranger',
    stats: {
      base_damage: 6
    },
    isDroppable: true
  },
  {
    id: 'apprentice_staff_001',
    name: 'Apprentice Staff',
    description:
      'Carved from seasoned willow and capped with a polished brass ring to steady your focus.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'wpn_apprentice_staff',
    baseValue: 45,
    itemClass: 'mage',
    stats: {
      base_damage: 6
    },
    isDroppable: true
  },
  {
    id: 'steel_daggers_001',
    name: 'Steel Daggers',
    description:
      'Mass-produced steel blades. Light, highly balanced, and incredibly swift.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'wpn_steel_daggers',
    baseValue: 45,
    itemClass: 'rogue',
    stats: {
      base_damage: 6
    },
    isDroppable: true
  },
  {
    id: 'vanguard_blade_001',
    name: 'Vanguard Greatsword',
    description:
      'A heavy, well-tempered steel blade that demands incredible resolve to wield. Its weight bolsters your physical presence.',
    type: 'weapon',
    rarity: 'uncommon',
    sprite: 'wpn_vanguard_blade',
    baseValue: 120,
    itemClass: 'warrior',
    stats: {
      base_damage: 8,
      power: 1
    },
    isDroppable: true
  },
  {
    id: 'scout_longbow_001',
    name: 'Ranger Longbow',
    description:
      "Crafted from flexible yew wood and wrapped in oiled leather. Its exceptional balance brings out a marksman's natural fortune.",
    type: 'weapon',
    rarity: 'uncommon',
    sprite: 'wpn_ranger_longbow',
    baseValue: 120,
    itemClass: 'ranger',
    stats: {
      base_damage: 8,
      vigor: 1
    },
    isDroppable: true
  },
  {
    id: 'scholar_conduit_001',
    name: 'Savant Scepter',
    description:
      'An ornate rod topped with a glowing amber focusing stone. It naturally accelerates mental pacing and mental stamina.',
    type: 'weapon',
    rarity: 'uncommon',
    sprite: 'wpn_savant_scepter',
    baseValue: 125,
    itemClass: 'mage',
    stats: {
      base_damage: 8,
      power: 1
    },
    isDroppable: true
  },
  {
    id: 'assassin_stilletos_001',
    name: 'Kris Stilletos',
    description:
      'Wavy-bladed daggers designed to slip cleanly past heavy defense armor plates. Wielding them requires swift, lucky timing.',
    type: 'weapon',
    rarity: 'uncommon',
    sprite: 'wpn_kris_stilettos',
    baseValue: 115,
    itemClass: 'rogue',
    stats: {
      base_damage: 8,
      luck: 1
    },
    isDroppable: true
  }
]
