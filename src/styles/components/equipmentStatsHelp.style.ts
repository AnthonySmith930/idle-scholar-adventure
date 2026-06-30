import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 16
  },
  statCard: {
    backgroundColor: '#1E293B',
    borderWidth: 2,
    borderColor: '#334155',
    padding: 12
  },
  cardHeader: {
    paddingBottom: 4
  },
  statTitle: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 10,
    letterSpacing: 1
  },
  dividerLine: {
    height: 2,
    backgroundColor: '#334155',
    marginVertical: 6
  },
  cardBody: {
    paddingTop: 4
  },
  descriptionText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#94A3B8',
    fontSize: 8,
    lineHeight: 14
  }
})
