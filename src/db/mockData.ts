// Type contract for our mock database entries
export interface HeroEntry {
  id: string
  name: string
  gold: number
  sprite: any
  createdAt: number // Timestamp for sorting
  equipment: {
    weapon?: {
      asset?: any
      rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
    }
    armor?: {
      asset?: any
      rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
    }
    accessory?: {
      asset?: any
      rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
    }
    consumable?: {
      asset?: any
      rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
    }
  }
}

export const mockHeroes: HeroEntry[] = [
  {
    id: 'char-01',
    name: 'Albus the Wise',
    gold: 1450200,
    createdAt: 1718000000,
    sprite: require('~/assets/images/warrior.svg'), // Swap with real pixel sprites later
    equipment: {
      weapon: { rarity: 'epic' }, // Triggering rarity backings with empty stencils for test
      armor: { rarity: 'uncommon' }
    }
  },
  {
    id: 'char-02',
    name: 'Scholar Jean',
    gold: 850,
    createdAt: 1719500000, // Newer creation date -> should float to the top
    sprite: require('~/assets/images/warrior.svg'),
    equipment: {
      weapon: { rarity: 'common' },
      accessory: { rarity: 'legendary' }
    }
  }
]
