import React from 'react'
import { View, Modal } from 'react-native'

import styles from './style'
import { background } from '../../utils/colors'

const ModalComponent = (props) => {
    const bg = props?.backgroundColor ? { backgroundColor: props.backgroundColor } : { backgroundColor: background }

    return (
        <Modal visible={props.visible} transparent={props.transparent || true} onRequestClose={() => props.closeModal()}>
            <View style={[styles.container, props.style]}>
                <View style={[styles.containerItems, bg]}>
                    {props.children}
                </View>
            </View>
        </Modal>
    )
}

export default ModalComponent