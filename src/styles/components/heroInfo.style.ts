import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    paddingHorizontal: 12,
    justifyContent: 'center',
    gap: 6,
    marginTop: 10
  },
  nameText: {
    letterSpacing: 0.5
  },
  goldRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  goldValue: {
    fontFamily: 'System',
    fontWeight: 'bold',
    marginLeft: 4
  }
})
