import { View, Modal, Text, Pressable, StyleSheet } from 'react-native'
import { Image } from 'expo-image'
import { ImageSourcePropType } from 'react-native'
import { useTheme } from '@/stores/themeStore'

interface ItemDetailsModalProps {
  visible: boolean
  onClose: () => void
  name: string
  rarity: string
  slotType: string
  description: string
  itemAsset: ImageSourcePropType | null
  stats?: {
    base_damage?: number
    base_defense?: number
    power?: number
    vigor?: number
    fortitude?: number
    luck?: number
    effect_type?: string
    effect_value?: number
  }
}

export function ItemDetailsModal({
  visible,
  onClose,
  name,
  rarity,
  slotType,
  description,
  itemAsset,
  stats
}: ItemDetailsModalProps) {
  const theme = useTheme()

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlayContainer}>
        <View style={styles.modalCard}>
          {/* Item Sprite and Meta Header */}
          {itemAsset && (
            <Image
              source={itemAsset}
              style={styles.itemImage}
              contentFit="contain"
            />
          )}

          <Text style={styles.itemNameText}>{name}</Text>
          <Text style={styles.rarityTagText}>
            {rarity} {slotType}
          </Text>

          {/* Description Block */}
          <Text style={styles.descriptionText}>
            {description || 'A mysterious object gathered on a past chronicle.'}
          </Text>

          {/* Core Stats Breakdown Matrix */}
          <View style={styles.statsContainer}>
            {stats?.base_damage !== undefined && (
              <Text style={styles.damageText}>
                ⚔️ Damage: +{stats.base_damage}
              </Text>
            )}
            {stats?.base_defense !== undefined && (
              <Text style={styles.defenseText}>
                🛡️ Defense: +{stats.base_defense}
              </Text>
            )}

            {/* Core Attributes */}
            {['power', 'vigor', 'fortitude', 'luck'].map((stat) => {
              const value = stats?.[stat as keyof typeof stats]
              if (!value) return null
              return (
                <Text key={stat} style={styles.attributeText}>
                  ✨ {stat}: +{value}
                </Text>
              )
            })}

            {/* Special Quest System Passive Modifiers */}
            {stats?.effect_type && (
              <Text style={styles.passiveEffectText}>
                ⚙️ Passive: {stats.effect_type.replace(/_/g, ' ')} (+
                {stats.effect_value})
              </Text>
            )}
          </View>

          {/* Overlay Close Button */}
          <Pressable
            onPress={onClose}
            style={({ pressed }) => [
              styles.closeButton,
              pressed && styles.closeButtonPressed
            ]}
          >
            <Text style={styles.closeButtonText}>[ CLOSE ]</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

// 🎯 STYLE OBJECT GENERATOR FACTORY
const styles = StyleSheet.create({
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  } as const,
  modalCard: {
    backgroundColor: '#0F172A',
    borderWidth: 2,
    borderColor: '#0F172A',
    padding: 20,
    width: '85%',
    maxWidth: 340,
    alignItems: 'center'
  } as const,
  itemImage: {
    width: 64,
    height: 64,
    marginBottom: 12
  } as const,
  itemNameText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 4
  } as const,
  rarityTagText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#0F172A',
    fontSize: 10,
    textTransform: 'uppercase',
    marginBottom: 16
  } as const,
  descriptionText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#94A3B8',
    fontSize: 10,
    lineHeight: 16,
    textAlign: 'center',
    marginBottom: 20
  } as const,
  statsContainer: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#334155',
    paddingTop: 12,
    marginBottom: 20
  } as const,
  damageText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#F87171',
    fontSize: 10,
    marginBottom: 6
  } as const,
  defenseText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#60A5FA',
    fontSize: 10,
    marginBottom: 6
  } as const,
  attributeText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#34D399',
    fontSize: 10,
    marginBottom: 6,
    textTransform: 'capitalize'
  } as const,
  passiveEffectText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#FBBF24',
    fontSize: 9,
    marginTop: 4,
    lineHeight: 14
  } as const,
  closeButton: {
    backgroundColor: '#334155',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#475569'
  } as const,
  closeButtonPressed: {
    opacity: 0.8
  } as const,
  closeButtonText: {
    fontFamily: 'PressStart2P_400Regular',
    color: '#FFFFFF',
    fontSize: 10
  } as const
})
