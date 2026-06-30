import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#94A3B8',
    fontSize: 10,
    marginTop: 16
  },
  headerNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 2,
    backgroundColor: '#0F172A'
  },
  backButton: {
    flex: 1,
    zIndex: 1
  },
  heroTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 100 // Clears floating overlay collision buffers
  },
  sectionLabelText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#64748B',
    fontSize: 9,
    marginTop: 24,
    marginBottom: 8,
    paddingLeft: 4
  },
  footerActionDock: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#0F172A',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 28, // Secure spacing cushion layout
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  historyBtn: {
    flex: 0.22,
    backgroundColor: '#1E293B',
    borderWidth: 2,
    borderColor: '#475569',
    paddingVertical: 14,
    alignItems: 'center',
    marginRight: 12
  },
  historyBtnText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#94A3B8',
    fontSize: 9
  },
  primaryQuestBtn: {
    flex: 1,
    borderWidth: 2,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4
  },
  btnIdleDeploy: {
    backgroundColor: '#16A34A', // Solid classic emerald green run trigger
    borderColor: '#22C55E'
  },
  btnActiveQuest: {
    backgroundColor: '#DC2626', // High visibility battle crimson monitor
    borderColor: '#EF4444'
  },
  primaryQuestBtnText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#FFFFFF',
    fontSize: 10
  },
  btnPressed: {
    opacity: 0.8,
    transform: [{ translateY: 1 }]
  },
  equipmentHeader: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
