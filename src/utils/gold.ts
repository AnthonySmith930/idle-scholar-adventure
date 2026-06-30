export const formatCompressedGold = (num: number): string => {
  if (num >= 1.0e9) return `${(num / 1.0e9).toFixed(1)}B`
  if (num >= 1.0e6) return `${(num / 1.0e6).toFixed(1)}M`
  if (num >= 1.0e3) return `${(num / 1.0e3).toFixed(1)}K`
  return num.toString()
}
