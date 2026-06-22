import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
  slotFrame: {
    width: 64,
    height: 64,
    borderWidth: 4, // Thick 8-bit framing
    borderRadius: 0, // Explicit sharp box corners
    position: 'relative',
    overflow: 'hidden', // Keeps the glossy highlight layer clipped neatly
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 0
      },
      android: {
        elevation: 3
      }
    })
  },
  slotPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.95 }] // Quick tactile shrink feedback on tap
  },
  rarityBacking: {
    position: 'absolute',
    top: 4,
    left: 4,
    right: 4,
    bottom: 4,
    opacity: 0.25 // Soft glow fill so the sprite stands out neatly
  },
  glossyLip: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3, // Bright retro sheen at the top layer edge
    backgroundColor: '#FFFFFF',
    opacity: 0.35
  },
  itemSprite: {
    width: 32,
    height: 32,
    zIndex: 2
  },
  emptyCenter: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderStyle: 'dashed', // Clean "equip here" placeholder box
    opacity: 0.3
  },
  placeholderSprite: {
    width: 24,
    height: 24,
    opacity: 0.2, // Gives it that nice, faint "not equipped yet" transparency look
    zIndex: 1
  }
})