import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
  cardFrame: {
    width: '100%',
    height: 80,
    borderWidth: 4,
    borderRadius: 0,
    marginBottom: 12,
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 0
      },
      android: {
        elevation: 4
      }
    })
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9
  },
  glossyTopEdge: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: '#FFFFFF',
    opacity: 0.15,
    zIndex: 5
  },
  contentLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    width: '100%',
    height: '100%'
  }
})
