import { ImageSourcePropType } from 'react-native'

/**
 * Static asset mapping registry matching `sprite` string IDs
 * defined in ITEM_SEED_DATA templates.
 */
const ITEM_ASSET_REGISTRY: Record<string, ImageSourcePropType> = {
  // --- WEAPONS ---
  starter_sword: require('~/assets/images/items/weapons/starter_sword.svg'),
  iron_sword: require('~/assets/images/items/weapons/iron_sword.svg'),
  steel_sword: require('~/assets/images/items/weapons/steel_sword.svg'),
  mithril_sword: require('~/assets/images/items/weapons/mithril_sword.svg'),
  adamant_sword: require('~/assets/images/items/weapons/adamant_sword.svg'),
  dragonsteel_sword: require('~/assets/images/items/weapons/dragonsteel_sword.svg'),
  starter_staff: require('~/assets/images/items/weapons/starter_staff.svg'),
  oak_staff: require('~/assets/images/items/weapons/oak_staff.svg'),
  yew_staff: require('~/assets/images/items/weapons/yew_staff.svg'),
  elderwood_staff: require('~/assets/images/items/weapons/elderwood_staff.svg'),
  crystal_staff: require('~/assets/images/items/weapons/crystal_staff.svg'),
  archmage_staff: require('~/assets/images/items/weapons/archmage_staff.svg'),
  starter_bow: require('~/assets/images/items/weapons/starter_bow.svg'),
  ash_bow: require('~/assets/images/items/weapons/ash_bow.svg'),
  elm_bow: require('~/assets/images/items/weapons/elm_bow.svg'),
  yew_bow: require('~/assets/images/items/weapons/yew_bow.svg'),
  moonwood_bow: require('~/assets/images/items/weapons/moonwood_bow.svg'),
  dragonsine_bow: require('~/assets/images/items/weapons/dragonsine_bow.svg'),
  starter_daggers: require('~/assets/images/items/weapons/starter_daggers.svg'),
  iron_daggers: require('~/assets/images/items/weapons/iron_daggers.svg'),
  steel_daggers: require('~/assets/images/items/weapons/steel_daggers.svg'),
  mithril_daggers: require('~/assets/images/items/weapons/mithril_daggers.svg'),
  adamant_daggers: require('~/assets/images/items/weapons/adamant_daggers.svg'),
  shadowfang_daggers: require('~/assets/images/items/weapons/shadowfang_daggers.svg'),

  // --- ARMOR ---
  starter_armor_warrior: require('~/assets/images/items/armor/starter_armor_warrior.svg'),
  iron_armor: require('~/assets/images/items/armor/iron_armor.svg'),
  steel_armor: require('~/assets/images/items/armor/steel_armor.svg'),
  mithril_armor: require('~/assets/images/items/armor/mithril_armor.svg'),
  adamant_armor: require('~/assets/images/items/armor/adamant_armor.svg'),
  dragonsteel_armor: require('~/assets/images/items/armor/dragonsteel_armor.svg'),
  starter_armor_ranger: require('~/assets/images/items/armor/starter_armor_ranger.svg'),
  leather_armor: require('~/assets/images/items/armor/leather_armor.svg'),
  reinforced_leather_armor: require('~/assets/images/items/armor/reinforced_leather_armor.svg'),
  elven_leather_armor: require('~/assets/images/items/armor/elven_leather_armor.svg'),
  moonweave_armor: require('~/assets/images/items/armor/moonweave_armor.svg'),
  dragonscale_armor: require('~/assets/images/items/armor/dragonscale_armor.svg'),
  starter_armor_mage: require('~/assets/images/items/armor/starter_armor_mage.svg'),
  apprentice_robes: require('~/assets/images/items/armor/apprentice_robes.svg'),
  adept_robes: require('~/assets/images/items/armor/adept_robes.svg'),
  sage_robes: require('~/assets/images/items/armor/sage_robes.svg'),
  archmage_robes: require('~/assets/images/items/armor/archmage_robes.svg'),
  celestial_robes: require('~/assets/images/items/armor/celestial_robes.svg'),
  starter_armor_rogue: require('~/assets/images/items/armor/starter_armor_rogue.svg'),
  leather_cloak: require('~/assets/images/items/armor/leather_cloak.svg'),
  shadow_leather_cloak: require('~/assets/images/items/armor/shadow_leather_cloak.svg'),
  mithril_cloak: require('~/assets/images/items/armor/mithril_cloak.svg'),
  nightshade_cloak: require('~/assets/images/items/armor/nightshade_cloak.svg'),
  shadowfang_cloak: require('~/assets/images/items/armor/shadowfang_cloak.svg'),

  // --- CONSUMABLES ---
  hp_potion: require('~/assets/images/items/consumables/hp_potion.svg'),
  cold_brew: require('~/assets/images/items/consumables/cold_brew.svg'),
  focus_potion: require('~/assets/images/items/consumables/focus_potion.svg'),
  grit_potion: require('~/assets/images/items/consumables/grit_potion.svg'),
  scout_potion: require('~/assets/images/items/consumables/scout_potion.svg'),

  // --- ACCESSORIES ---
  hour_glass_pendant: require('~/assets/images/items/accessories/hour_glass_pendant.svg'),
  monocle_lens: require('~/assets/images/items/accessories/monocle_lens.svg'),
  mercenary_coin: require('~/assets/images/items/accessories/mercenary_coin.svg'),
  ancient_scroll: require('~/assets/images/items/accessories/ancient_scroll.svg'),
  lucky_dice_charm: require('~/assets/images/items/accessories/lucky_dice_charm.svg'),
  philosopher_stone: require('~/assets/images/items/accessories/philosopher_stone.svg')
}

/**
 * Dynamically resolves a string sprite key to its static source asset module.
 * If the asset is missing or incorrectly mapped, this safely handles a structural fallback.
 */
export function resolveItemAsset(
  spriteKey: string | undefined
): ImageSourcePropType {
  if (!spriteKey || !ITEM_ASSET_REGISTRY[spriteKey]) {
    // Fallback module pointer if a sprite string goes unmapped during dev iterations
    return require('~/assets/images/placeholders/consumable-silhouette.svg')
  }
  return ITEM_ASSET_REGISTRY[spriteKey]
}
