import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  inlineWrapper: {
    width: 32,
    height: 32
  },
  infoButton: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1E293B',
    borderWidth: 2,
    borderColor: '#475569',
    alignItems: 'center',
    justifyContent: 'center'
  },
  questionMarkText: {
    color: '#38BDF8'
  },
  buttonPressed: {
    opacity: 0.8,
    // Simulates a physical tactile depress click down into the screen canvas
    borderBottomWidth: 2,
    borderRightWidth: 2,
    marginTop: 2,
    marginLeft: 2
  }
})
