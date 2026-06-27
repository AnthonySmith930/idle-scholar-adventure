import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  statsCardContainer: { alignSelf: 'stretch' },
  pointsPoolRow: { marginBottom: 12, alignItems: 'flex-start' },
  pointsPoolText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#FFFFFF',
    fontSize: 10
  },
  pointsPoolNum: { color: '#94A3B8' },
  flashingPoints: { color: '#FBBF24' },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 36,
    borderBottomWidth: 1,
    borderColor: '#1E293B',
    paddingVertical: 4
  },
  statLabelText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#94A3B8',
    fontSize: 10
  },
  controlGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 140,
    justifyContent: 'space-between'
  },
  mathButton: { paddingHorizontal: 8, paddingVertical: 4 },
  mathButtonDisabled: { opacity: 0.3 },
  mathButtonText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#FFFFFF',
    fontSize: 10
  },
  statValueText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#FFFFFF',
    fontSize: 10,
    textAlign: 'center',
    minWidth: 32
  },
  statValueModified: { color: '#34D399' },
  actionRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18
  },
  actionBtn: {
    flex: 0.48,
    backgroundColor: '#1E293B',
    paddingVertical: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155'
  },
  actionBtnDisabled: { opacity: 0.4 },
  actionBtnCancelText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#EF4444',
    fontSize: 10
  },
  actionBtnConfirmText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#94A3B8',
    fontSize: 10
  },
  hasChangesGlow: { color: '#34D399' },
  buttonPressed: { opacity: 0.7 }
})
