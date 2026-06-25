import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111827', // Dark slate background frame
    borderWidth: 2,
    borderRadius: 4,
    marginLeft: 10,
    flexGrow: 1,
    flexShrink: 0
  },
  header: {
    backgroundColor: '#1F2937', // Slightly lighter tint for header plate
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderColor: '#374151',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: '#FFF'
  },
  body: {
    padding: 16,
    gap: 12 // Spaces out rows cleanly
  },
  row: {
    flexDirection: 'row',
    width: '100%'
  },
  statCell: {
    flex: 1, // 🎯 Gives both left and right sides exactly 50% of row width
    flexDirection: 'row',
    justifyContent: 'space-between', // Pushes label to left, value to right
    alignItems: 'center',
    paddingHorizontal: 6
  },
  label: {
    color: '#9CA3AF' // Dimmed text for labels
  },
  value: {
    color: '#A855F7' // Bright purple highlight accent for numerical stats
  }
})