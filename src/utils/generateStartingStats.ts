import { HeroClass, CLASS_STARTING_STATS } from '@/types/game'

export const generateStartingStats = (heroClass: HeroClass) => {
  return CLASS_STARTING_STATS[heroClass]
}
