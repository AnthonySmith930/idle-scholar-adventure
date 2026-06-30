import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
  slotFrame: {
    width: 86,
    height: 86,
    borderWidth: 4,
    borderRadius: 0,
    position: 'relative',
    overflow: 'hidden',
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
    transform: [{ scale: 0.95 }]
  },
  rarityBacking: {
    position: 'absolute',
    top: 4,
    left: 4,
    right: 4,
    bottom: 4,
    opacity: 0.25
  },
  itemSprite: {
    zIndex: 2
  },
  emptyCenter: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderStyle: 'dashed',
    opacity: 0.3
  },
  emptySprite: {
    opacity: 0.2,
    zIndex: 1
  },
  baseFrameStyle: {
    backgroundColor: '#1E293B',
  }
})