import { Modal, View, Text, Pressable, ScrollView } from 'react-native'
import { styles } from '@/styles/components/infoModal.style'
import { BaseStatsHelp } from './BaseStatsHelp'
import { EquipmentStatsHelp } from './EquipmentStatsHelp'
import { InfoModalVariant } from '@/types/game'

interface InfoModalProps {
  isOpen: boolean
  onClose: () => void
  variant: InfoModalVariant
}

export function InfoModal({ isOpen, onClose, variant }: InfoModalProps) {
  // 2. Dynamic Content Router Registry Matrix
  const renderModalContent = () => {
    switch (variant) {
      case 'base_stats':
        return <BaseStatsHelp />
      case 'equipment_stats':
        return <EquipmentStatsHelp />
      default:
        return null
    }
  }

  // 3. Dynamic header titles paired directly to the active variant
  const getHeaderTitle = (): string => {
    switch (variant) {
      case 'base_stats':
        return 'Base Stats'
      case 'equipment_stats':
        return 'Eqipment Stats'
      default:
        return 'INFORMATION LOG'
    }
  }

  return (
    <Modal
      visible={isOpen}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      {/* 🌌 Darkened Retro Overlay Sheet */}
      <View style={styles.backdropOverlay}>
        {/* 👾 Pixelated Modal Terminal Container Wrapper */}
        <View style={styles.modalWindowFrame}>
          {/* Header Bar Area */}
          <View style={styles.modalHeader}>
            <Text style={styles.headerTitleText}>{getHeaderTitle()}</Text>

            {/* Hard Pixel Close [X] Trigger Button */}
            <Pressable
              onPress={onClose}
              style={({ pressed }) => [
                styles.closeBtn,
                pressed && styles.btnPressed
              ]}
            >
              <Text style={styles.closeBtnText}>X</Text>
            </Pressable>
          </View>

          {/* Core Content Body Window (Scrollable for dynamic safety) */}
          <ScrollView contentContainerStyle={styles.scrollContentBody}>
            {renderModalContent()}
          </ScrollView>

          {/* Structural Bottom Retro Footer Bar */}
          <View style={styles.modalFooter}>
            <Pressable
              onPress={onClose}
              style={({ pressed }) => [
                styles.footerDismissBtn,
                pressed && styles.btnPressed
              ]}
            >
              <Text style={styles.footerDismissText}>ACKNOWLEDGE</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}
