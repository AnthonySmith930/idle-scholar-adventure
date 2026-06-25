import { Item } from '@/types/game'

export const CONSUMABLE_MASTER_DATA: Item[] = [
  {
    id: 'potion_minor_hp_001',
    name: 'Brewed Tonic',
    description: 'A bitter herbal infusion that quickly patches up minor scrapes and physical exhaustion.',
    type: 'consumable',
    rarity: 'common',
    sprite: 'con_brewed_tonic',
    baseValue: 15,
    itemClass: 'all',
    stats: {
      effect_type: 'heal_missing_hp',
      effect_value: 1.0
    },
    isDroppable: true
  },
  {
    id: 'snack_coffee_001',
    name: 'Cold-Brew Concentrate',
    description: 'Incredibly strong roasted bean press. The pure caffeine spike instantly forces away creeping brain fog.',
    type: 'consumable',
    rarity: 'common',
    sprite: 'con_cold_brew',
    baseValue: 20,
    itemClass: 'all',
    stats: {
      effect_type: 'cleanse_fatigue',
      effect_value: 0.50
    },
    isDroppable: true
  },
  {
    id: 'consumable_buff_focus_001',
    name: 'Matcha Concentration Shot',
    description: 'A concentrated green tea shot that heightens spatial awareness and mental stamina. Consumed at quest start to boost power and vigor.',
    type: 'consumable',
    rarity: 'uncommon',
    sprite: 'con_matcha_shot',
    baseValue: 40,
    itemClass: 'all',
    stats: {
      power: 1,
      vigor: 1,
      effect_type: 'quest_stat_buff',
      effect_value: 1 // Flag indicating the buff is active
    },
    isDroppable: true
  },
  {
    id: 'consumable_buff_grit_001',
    name: 'Ironheart Root Extract',
    description: 'A thick, earthy syrup that hardens muscles and settles breathing. Consumed at quest start to elevate offensive power and physical fortitude.',
    type: 'consumable',
    rarity: 'uncommon',
    sprite: 'con_ironheart_extract',
    baseValue: 40,
    itemClass: 'all',
    stats: {
      power: 1,
      fortitude: 1,
      effect_type: 'quest_stat_buff',
      effect_value: 1
    },
    isDroppable: true
  },
  {
    id: 'consumable_buff_scout_001',
    name: 'Elixir of Clarity',
    description: 'A sparkling blue tincture that sharpens the senses and quickens reflexes. Consumed at quest start to enhance physical vigor and item-hunting luck.',
    type: 'consumable',
    rarity: 'uncommon',
    sprite: 'con_clarity_elixir',
    baseValue: 45,
    itemClass: 'all',
    stats: {
      vigor: 1,
      luck: 1,
      effect_type: 'quest_stat_buff',
      effect_value: 1
    },
    isDroppable: true
  }
]
