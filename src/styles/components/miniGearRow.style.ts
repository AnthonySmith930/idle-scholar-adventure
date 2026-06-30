import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 4,
    paddingLeft: 4,
    marginBottom: 4
  },
  miniSlotOverride: {
    width: 28,
    height: 28,
    borderWidth: 2
  },
  goldRow: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  goldValue: {
    fontFamily: 'System',
    fontWeight: 'bold',
    marginLeft: 4
  }
})
