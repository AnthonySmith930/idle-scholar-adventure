import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#0F172A',
    borderBottomWidth: 1,
    borderColor: '#1E293B',
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  labelText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#94A3B8',
    fontSize: 9,
  },
  valueText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#FBBF24', // Classic arcade gold text highlight
    fontSize: 8,
  },
  outerBarFrame: {
    height: 18,
    backgroundColor: '#020617',
    borderWidth: 2,
    borderColor: '#334155', // Thick, hard pixel border outline
    padding: 2, // Generates a clean internal pixel gap separating frame from meter
  },
  innerBarContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  fillMeter: {
    height: '100%',
    backgroundColor: '#EAB308', // Solid retro gold-yellow filling color
    // Double stack subtle box styling simulates a stepped, blocky, old-school lighting ridge
    borderBottomWidth: 3,
    borderBottomColor: '#CA8A04', 
  },
})
