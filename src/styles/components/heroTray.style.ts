import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F172A',
    borderWidth: 2,
    padding: 16,
    width: '100%',
    alignSelf: 'stretch'
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#334155',
    paddingBottom: 10,
    marginBottom: 16
  },
  headerTitle: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#94A3B8',
    fontSize: 10
  },
  toggleButton: {
    backgroundColor: '#1E293B',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#475569'
  },
  toggleButtonText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#FFFFFF',
    fontSize: 8
  },
  buttonPressed: {
    opacity: 0.7
  }
})
