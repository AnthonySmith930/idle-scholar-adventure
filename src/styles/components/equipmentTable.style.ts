import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: '#0F172A', // Dark panel background to anchor the table row
    borderWidth: 1,
    borderColor: '#334155'
  },
  slotSpacing: {
    marginRight: 12 // Clean gaps between your 4 grid units
  }
})
