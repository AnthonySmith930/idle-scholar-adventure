import { Item } from '@/types/game'

export const ACCESSORY_MASTER_DATA: Item[] = [
  {
    id: 'hour_glass_pendant_001',
    name: 'Savant Hourglass',
    description:
      'A miniature sand-timer worn around the neck. It shortens your mental ramp-up phase.',
    type: 'accessory',
    rarity: 'uncommon',
    sprite: 'acc_savant_hourglass',
    baseValue: 150,
    itemClass: 'all',
    stats: {
      vigor: 1,
      effect_type: 'focus_ramp_acceleration',
      effect_value: 1.2
    },
    isDroppable: true
  },
  {
    id: 'monocle_lens_001',
    name: 'Focusing Lens',
    description:
      'A single glass lens that keeps surrounding distractions completely boxed out of view.',
    type: 'accessory',
    rarity: 'uncommon',
    sprite: 'acc_focusing_lens',
    baseValue: 160,
    itemClass: 'all',
    stats: {
      power: 1,
      effect_type: 'focus_peak_extension',
      effect_value: 1.25
    },
    isDroppable: true
  },
  {
    id: 'philosopher_stone_001',
    name: 'Chalk Stone Pouch',
    description:
      'A small pouch filled with high-friction climbing chalk. Keeps your grip steady when mental fatigue sets in.',
    type: 'accessory',
    rarity: 'uncommon',
    sprite: 'acc_chalk_pouch',
    baseValue: 140,
    itemClass: 'all',
    stats: {
      fortitude: 1,
      effect_type: 'focus_decay_reduction',
      effect_value: 0.85
    },
    isDroppable: true
  },
  {
    id: 'mercenary_coin_001',
    name: 'Minted Ledger Emblem',
    description:
      'A heavy brass sigil favored by traveling scribes. It tracks and optimizes your resource gains, boosting gold collection.',
    type: 'accessory',
    rarity: 'uncommon',
    sprite: 'acc_ledger_emblem',
    baseValue: 155,
    itemClass: 'all',
    stats: {
      luck: 1,
      effect_type: 'gold_multiplier',
      effect_value: 1.15
    },
    isDroppable: true
  },
  {
    id: 'ancient_scroll_weights_001',
    name: 'Tome-Weight Band',
    description:
      'Engraved stone weights meant to keep study books open. Wearing them keeps your core academic progression highly disciplined.',
    type: 'accessory',
    rarity: 'uncommon',
    sprite: 'acc_tome_weights',
    baseValue: 165,
    itemClass: 'all',
    stats: {
      vigor: 1,
      effect_type: 'exp_multiplier',
      effect_value: 1.1
    },
    isDroppable: true
  },
  {
    id: 'lucky_dice_charm_001',
    name: "Gambler's Bone Die",
    description:
      'A small bone shaped like a diie.It subtly leans your luck toward dramatic critical opportunities.',
    type: 'accessory',
    rarity: 'uncommon',
    sprite: 'acc_bone_die',
    baseValue: 135,
    itemClass: 'all',
    stats: {
      luck: 1,
      effect_type: 'loot_drop_chance',
      effect_value: 1.05
    },
    isDroppable: true
  }
]
