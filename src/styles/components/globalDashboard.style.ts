import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    borderWidth: 4,
    borderRadius: 0,
    marginBottom: 16
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  titleContainer: {
    flex: 1
  },
  titleText: {
  },
  cogButton: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cogPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.9 }]
  },
  statsPanel: {
    flexDirection: 'row',
    borderWidth: 2
  },
  statColumn: {
    flex: 1,
    padding: 10,
    gap: 8
  },
  rightColumn: {
    borderLeftWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  statValue: {
    fontFamily: 'System', // Standard digits hold layout boundaries perfectly
    fontWeight: 'bold'
  },
  rosterValue: {
    marginTop: 2
  }
})