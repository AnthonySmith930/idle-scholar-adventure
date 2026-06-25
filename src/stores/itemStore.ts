import { create } from 'zustand'
import { db } from '@/db/client'
import { itemTable } from '@/db/schema'
import { ItemStatsJson, ItemType, ItemClass, ItemRarity } from '@/types/game'

export interface ItemTemplate {
  id: string
  name: string
  description: string
  type: ItemType
  itemClass: ItemClass
  rarity: ItemRarity
  sprite: string
  baseValue: number
  stats: ItemStatsJson
  isDroppable: boolean
}

interface ItemStoreState {
  templates: ItemTemplate[]
  isHydrated: boolean
  
  // --- Actions ---
  hydrateItems: () => Promise<void>
  getTemplateById: (id: string) => ItemTemplate | undefined
  
  // Dynamic Filtering for Loot Rolling Engines
  getTemplatesByFilter: (filters: {
    type?: ItemTemplate['type']
    rarity?: ItemTemplate['rarity']
    itemClass?: ItemTemplate['itemClass']
  }) => ItemTemplate[]
}

export const useItemStore = create<ItemStoreState>((set, get) => ({
  templates: [],
  isHydrated: false,

  /**
   * Reads all master items from SQLite into memory on app boot.
   */
  hydrateItems: async () => {
    try {
      const allTemplates = await db.select().from(itemTable)
      set({ 
        templates: allTemplates as ItemTemplate[], 
        isHydrated: true 
      })
    } catch (error) {
      console.error('❌ Failed to hydrate item store array from SQLite:', error)
      throw error
    }
  },

  /**
   * Fast synchronous retrieval for single item setups
   */
  getTemplateById: (id: string) => {
    return get().templates.find((t) => t.id === id)
  },

  /**
   * Standardized query action for your quest loot tables.
   * Passing multiple filters will strictly match all of them.
   */
  getTemplatesByFilter: ({ type, rarity, itemClass }) => {
    return get().templates.filter((template) => {
      if (type && template.type !== type) return false
      if (rarity && template.rarity !== rarity) return false
      
      // 'warrior' gear matches 'warrior', but 'all' matches any class request
      if (itemClass && template.itemClass !== itemClass && template.itemClass !== 'all') {
        return false
      }
      
      return true
    })
  }
}))