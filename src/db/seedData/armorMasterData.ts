import { Item } from '@/types/game'

export const ARMOR_MASTER_DATA: Item[] = [
  {
    id: 'starter_armor_warrior_001',
    name: 'Recruit Mail',
    description:
      'Weaved iron mail designed to absorb blunt impacts on the frontline.',
    type: 'armor',
    rarity: 'common',
    sprite: 'arm_recruit_mail',
    baseValue: 0,
    itemClass: 'warrior',
    stats: {
      base_defense: 5
    },
    isDroppable: false
  },
  {
    id: 'starter_armor_ranger_001',
    name: 'Scout Leather',
    description:
      'Supple, cured leather vest providing basic protection while maximizing arm flexibility.',
    type: 'armor',
    rarity: 'common',
    sprite: 'arm_scout_leather',
    baseValue: 0,
    itemClass: 'ranger',
    stats: {
      base_defense: 4
    },
    isDroppable: false
  },
  {
    id: 'starter_armor_mage_001',
    name: 'Initiate Robes',
    description:
      'Lightweight woven linen cloth tailored to comfortably breathe during intensive study blocks.',
    type: 'armor',
    rarity: 'common',
    sprite: 'arm_initiate_robes',
    baseValue: 0,
    itemClass: 'mage',
    stats: {
      base_defense: 3
    },
    isDroppable: false
  },
  {
    id: 'starter_armor_rogue_001',
    name: 'Tattered Gambeson',
    description:
      'A padded cloth vest darkened with charcoal to keep silhouettes masked in shadows.',
    type: 'armor',
    rarity: 'common',
    sprite: 'arm_tattered_gambeson',
    baseValue: 0,
    itemClass: 'rogue',
    stats: {
      base_defense: 3
    },
    isDroppable: false
  },
  {
    id: 'bronze_cuirass_001',
    name: 'Bronze Cuirass',
    description: 'A solid breastplate molded from hammered bronze.',
    type: 'armor',
    rarity: 'common',
    sprite: 'arm_bronze_cuirass',
    baseValue: 45,
    itemClass: 'warrior',
    stats: {
      base_defense: 6
    },
    isDroppable: true
  },
  {
    id: 'reinforced_hide_001',
    name: 'Reinforced Hide Jerkin',
    description: 'Thick animal pelt reinforced with heavy iron studs across the shoulders and chest.',
    type: 'armor',
    rarity: 'common',
    sprite: 'arm_reinforced_hide',
    baseValue: 45,
    itemClass: 'ranger',
    stats: {
      base_defense: 5
    },
    isDroppable: true
  },
  {
    id: 'scholar_tunic_001',
    name: 'Scholar Tunic',
    description: 'An upgraded heavy wool vest featuring reinforced lining to keep out drafts during late-night reading.',
    type: 'armor',
    rarity: 'common',
    sprite: 'arm_scholar_tunic',
    baseValue: 45,
    itemClass: 'mage',
    stats: {
      base_defense: 4
    },
    isDroppable: true
  },
  {
    id: 'padded_leather_001',
    name: 'Padded Leather Vest',
    description: 'Lightweight layered leather stitched carefully to ensure quiet movement while mitigating superficial grazing.',
    type: 'armor',
    rarity: 'common',
    sprite: 'arm_padded_leather',
    baseValue: 45,
    itemClass: 'rogue',
    stats: {
      base_defense: 4
    },
    isDroppable: true
  },
  {
    id: 'vanguard_plate_001',
    name: 'Vanguard Chestplate',
    description: 'Heavy tempered steel plating. It feels burdensome, but the sheer protective mass significantly increases structural fortitude.',
    type: 'armor',
    rarity: 'uncommon',
    sprite: 'arm_vanguard_plate',
    baseValue: 120,
    itemClass: 'warrior',
    stats: {
      base_defense: 8,
      fortitude: 1
    },
    isDroppable: true
  },
  {
    id: 'strider_garb_001',
    name: 'Strider Longcoat',
    description: 'Crafted from oiled, reinforced wildlife hides. Light enough to let the lungs expand completely, bolstering the hunter\'s physical vigor.',
    type: 'armor',
    rarity: 'uncommon',
    sprite: 'arm_strider_longcoat',
    baseValue: 120,
    itemClass: 'ranger',
    stats: {
      base_defense: 7,
      vigor: 1
    },
    isDroppable: true
  },
  {
    id: 'weaver_robes_001',
    name: 'Sage-Weave Vestments',
    description: 'Robes lined with microscopic conductive metallic threads. They channel ambient cognitive currents, boosting raw analytical power.',
    type: 'armor',
    rarity: 'uncommon',
    sprite: 'arm_weaver_robes',
    baseValue: 125,
    itemClass: 'mage',
    stats: {
      base_defense: 5,
      power: 1
    },
    isDroppable: true
  },
  {
    id: 'nightshade_shroud_001',
    name: 'Nightshade Shroud',
    description: 'A dark, close-fitting leather jerkin treated with deep vegetable dyes.',
    type: 'armor',
    rarity: 'uncommon',
    sprite: 'arm_nightshade_shroud',
    baseValue: 115,
    itemClass: 'rogue',
    stats: {
      base_defense: 5,
      luck: 1
    },
    isDroppable: true
  }
]
