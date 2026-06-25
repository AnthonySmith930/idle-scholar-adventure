import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090D16'
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 48
  },
  title: {
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 24
  },
  previewContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    width: '100%'
  },
  section: {
    marginBottom: 24
  },
  label: {
    color: '#A855F7',
    marginBottom: 8
  },
  nameInputRow: {
    flexDirection: 'row'
  },
  textInput: {
    flex: 1,
    height: 48,
    backgroundColor: '#121214',
    borderWidth: 2,
    borderColor: '#1E293B',
    borderRadius: 4,
    paddingHorizontal: 12,
    color: '#FFF',
    fontFamily: 'PressStart2P_400Regular', // Matches game core style
    fontSize: 12
  },
  rollButton: {
    marginLeft: 8,
    height: 48,
    justifyContent: 'center'
  },
  toggleRow: {
    flexDirection: 'row'
  },
  flexButton: {
    flex: 1
  },
  classGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  classCardButton: {
    width: '48%',
    marginBottom: 12
  },
  descriptionBox: {
    backgroundColor: '#121214',
    borderWidth: 2,
    borderColor: '#1E293B',
    borderRadius: 4,
    padding: 12,
    marginTop: 4
  },
  descriptionText: {
    color: '#9CA3AF',
    lineHeight: 18
  },
  footer: {
    marginTop: 16
  },
  confirmButton: {
    width: '100%',
    marginBottom: 12
  },
  cancelButton: {
    width: '100%'
  }
})
