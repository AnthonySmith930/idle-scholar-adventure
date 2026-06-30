import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  backdropOverlay: {
    flex: 1,
    backgroundColor: 'rgba(2, 6, 23, 0.85)', // Dark translucent alpha layer
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalWindowFrame: {
    width: '100%',
    maxHeight: '80%',
    backgroundColor: '#0F172A',
    borderWidth: 3,
    borderColor: '#475569', // Thick crisp pixel framing lines
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderColor: '#475569',
  },
  headerTitleText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#FFFFFF',
    fontSize: 10,
  },
  closeBtn: {
    backgroundColor: '#334155',
    borderWidth: 2,
    borderColor: '#64748B',
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeBtnText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#EF4444', // Classic red delete target indicator
    fontSize: 10,
    lineHeight: 10,
  },
  scrollContentBody: {
    padding: 16,
  },
  modalFooter: {
    padding: 12,
    backgroundColor: '#1E293B',
    borderTopWidth: 2,
    borderColor: '#475569',
    alignItems: 'center',
  },
  footerDismissBtn: {
    backgroundColor: '#16A34A', // Terminal Green Confirmation Trigger
    borderWidth: 2,
    borderColor: '#22C55E',
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  footerDismissText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#FFFFFF',
    fontSize: 9,
  },
  btnPressed: {
    opacity: 0.8,
    transform: [{ translateY: 1 }],
  },
  // Temporary content styles for layout testing
  mockContentBox: {
    width: '100%',
  },
  mockContentTitle: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#38BDF8',
    fontSize: 11,
    marginBottom: 12,
  },
  mockContentText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#94A3B8',
    fontSize: 9,
    lineHeight: 16,
  },
})