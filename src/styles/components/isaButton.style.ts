import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
  buttonBase: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 4, // Thick 8-bit border outline
    borderRadius: 0, // Forces sharp retro corners
    alignItems: 'center',
    justifyContent: 'center'
  },
  // Default state: Extruded block shadow
  buttonUnpressed: {
    transform: [{ translateX: 0 }, { translateY: 0 }],
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1.0, // Absolute solid shadow, no transparency
        shadowRadius: 0 // Hard pixel edge, no blur
      },
      android: {
        // Android handles zero-radius shadows poorly, we use an elevation layer
        elevation: 4
      }
    })
  },
  // Active/Pressed state: Collapses the depth and moves the button into the slot
  buttonPressed: {
    transform: [{ translateX: 2 }, { translateY: 4 }], // Moves down-right to perfectly match the missing shadow depth
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 0 }
      },
      android: {
        elevation: 0
      }
    })
  },
  text: {
    fontSize: 12, // Small because Press Start 2P runs very wide
    letterSpacing: 1
  }
})
