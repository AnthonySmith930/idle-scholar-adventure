import { Pressable, View, ViewStyle } from 'react-native'
import { IsaText } from './IsaText'
import { styles } from '../styles/components/infoButton.style'
import { useState } from 'react'
import { InfoModal } from './InfoModal'

interface InfoButtonProps {
  infoModalVariant:
    | 'base_stats'
    | 'equipment_stats'
  style?: ViewStyle
}

/**
 * A button used to pop open a contextual informational modal.
 */
export function InfoButton({ infoModalVariant, style }: InfoButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <View style={[styles.inlineWrapper, style]}>
      <Pressable
        onPress={() => {
          if (!isOpen) setIsOpen(true)
        }}
        style={({ pressed }) => [
          styles.infoButton,
          pressed && styles.buttonPressed
        ]}
      >
        <IsaText size="sm" style={styles.questionMarkText}>
          ?
        </IsaText>
      </Pressable>

      <InfoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        variant={infoModalVariant}
      />
    </View>
  )
}
