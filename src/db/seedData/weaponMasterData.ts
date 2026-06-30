import { Item } from '@/types/game'

export const WEAPON_MASTER_DATA: Item[] = [
  {
    id: 'starter_sword',
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
    id: 'iron_sword',
    name: 'Iron Sword',
    description:
      'Forged from a simple copper-tin alloy. Notably sharper than a training blade.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'iron_sword',
    baseValue: 45,
    itemClass: 'warrior',
    stats: {
      base_damage: 6
    },
    isDroppable: true
  },
  {
    id: 'steel_sword',
    name: 'Steel Sword',
    description:
      'A heavy, well-tempered steel blade that demands incredible resolve to wield. Its weight bolsters your physical presence.',
    type: 'weapon',
    rarity: 'uncommon',
    sprite: 'steel_sword',
    baseValue: 120,
    itemClass: 'warrior',
    stats: {
      base_damage: 8
    },
    isDroppable: true
  },
  {
    id: 'mithril_sword',
    name: 'Mithril Sword',
    description:
      'A heavy, well-tempered steel blade that demands incredible resolve to wield. Its weight bolsters your physical presence.',
    type: 'weapon',
    rarity: 'uncommon',
    sprite: 'mithril_sword',
    baseValue: 120,
    itemClass: 'warrior',
    stats: {
      base_damage: 10,
      power: 1
    },
    isDroppable: true
  },
  {
    id: 'adamant_sword',
    name: 'Adamant Sword',
    description:
      'A heavy, well-tempered steel blade that demands incredible resolve to wield. Its weight bolsters your physical presence.',
    type: 'weapon',
    rarity: 'uncommon',
    sprite: 'adamant_sword',
    baseValue: 120,
    itemClass: 'warrior',
    stats: {
      base_damage: 12,
      power: 2
    },
    isDroppable: true
  },
  {
    id: 'dragonsteel_sword',
    name: 'Dragonsteel Sword',
    description:
      'A heavy, well-tempered steel blade that demands incredible resolve to wield. Its weight bolsters your physical presence.',
    type: 'weapon',
    rarity: 'uncommon',
    sprite: 'dragonsteel_sword',
    baseValue: 120,
    itemClass: 'warrior',
    stats: {
      base_damage: 14,
      power: 2,
      vigor: 1
    },
    isDroppable: true
  },
  {
    id: 'starter_staff',
    name: 'Rough Staff',
    description:
      'A polished wooden rod that helps channel focal energy during long studies.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'starter_staff',
    baseValue: 0,
    itemClass: 'mage',
    stats: {
      base_damage: 5
    },
    isDroppable: false
  },
  {
    id: 'oak_staff',
    name: 'Oak Staff',
    description:
      'A polished wooden rod that helps channel focal energy during long studies.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'oak_staff',
    baseValue: 0,
    itemClass: 'mage',
    stats: {
      base_damage: 7
    },
    isDroppable: false
  },
  {
    id: 'yew_staff',
    name: 'Yew Staff',
    description:
      'A polished wooden rod that helps channel focal energy during long studies.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'yew_staff',
    baseValue: 0,
    itemClass: 'mage',
    stats: {
      base_damage: 9
    },
    isDroppable: false
  },
  {
    id: 'elderwood_staff',
    name: 'Elderwood Staff',
    description:
      'A polished wooden rod that helps channel focal energy during long studies.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'elderwood_staff',
    baseValue: 0,
    itemClass: 'mage',
    stats: {
      base_damage: 12,
      vigor: 1
    },
    isDroppable: false
  },
  {
    id: 'crystal_staff',
    name: 'Crystal Staff',
    description:
      'A polished wooden rod that helps channel focal energy during long studies.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'crystal_staff',
    baseValue: 0,
    itemClass: 'mage',
    stats: {
      base_damage: 15,
      vigor: 1,
      luck: 1
    },
    isDroppable: false
  },
  {
    id: 'archmage_staff',
    name: 'Archamge\'s Staff',
    description:
      'A polished wooden rod that helps channel focal energy during long studies.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'archmage_staff',
    baseValue: 0,
    itemClass: 'mage',
    stats: {
      base_damage: 18,
      vigor: 2,
      luck: 2
    },
    isDroppable: false
  },
  {
    id: 'starter_bow',
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
    id: 'ash_bow',
    name: 'Ash Bow',
    description:
      'A flexible wooden bow strung with simple twine. Good for keeping distance.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'ash_bow',
    baseValue: 0,
    itemClass: 'ranger',
    stats: {
      base_damage: 6
    },
    isDroppable: false
  },
  {
    id: 'elm_bow',
    name: 'Elm Bow',
    description:
      'A flexible wooden bow strung with simple twine. Good for keeping distance.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'elm_bow',
    baseValue: 0,
    itemClass: 'ranger',
    stats: {
      base_damage: 8
    },
    isDroppable: false
  },
  {
    id: 'yew_bow',
    name: 'Yew Bow',
    description:
      'A flexible wooden bow strung with simple twine. Good for keeping distance.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'yew_bow',
    baseValue: 0,
    itemClass: 'ranger',
    stats: {
      base_damage: 10,
      vigor: 1
    },
    isDroppable: false
  },
  {
    id: 'moonwood_bow',
    name: 'Moonwood Bow',
    description:
      'A flexible wooden bow strung with simple twine. Good for keeping distance.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'moonwood_bow',
    baseValue: 0,
    itemClass: 'ranger',
    stats: {
      base_damage: 12,
      vigor: 2
    },
    isDroppable: false
  },
  {
    id: 'dragonsine_bow',
    name: 'Dragonsine Bow',
    description:
      'A flexible wooden bow strung with simple twine. Good for keeping distance.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'dragonsine_bow',
    baseValue: 0,
    itemClass: 'ranger',
    stats: {
      base_damage: 15,
      vigor: 3,
      power: 1
    },
    isDroppable: false
  },
  {
    id: 'starter_daggers',
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
    id: 'iron_daggers',
    name: 'Iron Daggers',
    description:
      'A pair of lightweight iron daggers designed for rapid, fluid strikes.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'iron_daggers',
    baseValue: 0,
    itemClass: 'rogue',
    stats: {
      base_damage: 7
    },
    isDroppable: false
  },
  {
    id: 'steel_daggers',
    name: 'Steel Daggers',
    description:
      'A pair of lightweight iron daggers designed for rapid, fluid strikes.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'steel_daggers',
    baseValue: 0,
    itemClass: 'rogue',
    stats: {
      base_damage: 9
    },
    isDroppable: false
  },
  {
    id: 'mithril_daggers',
    name: 'Mithril Daggers',
    description:
      'A pair of lightweight iron daggers designed for rapid, fluid strikes.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'mithril_daggers',
    baseValue: 0,
    itemClass: 'rogue',
    stats: {
      base_damage: 11,
      luck: 1
    },
    isDroppable: false
  },
  {
    id: 'adamant_daggers',
    name: 'Adamant Daggers',
    description:
      'A pair of lightweight iron daggers designed for rapid, fluid strikes.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'adamant_daggers',
    baseValue: 0,
    itemClass: 'rogue',
    stats: {
      base_damage: 15,
      luck: 2,
      vigor: 1
    },
    isDroppable: false
  },
  {
    id: 'shadowfang_daggers',
    name: 'Shadowfang Daggers',
    description:
      'A pair of lightweight iron daggers designed for rapid, fluid strikes.',
    type: 'weapon',
    rarity: 'common',
    sprite: 'shadowfang_daggers',
    baseValue: 0,
    itemClass: 'rogue',
    stats: {
      base_damage: 17,
      luck: 3,
      vigor: 2
    },
    isDroppable: false
  }
]
