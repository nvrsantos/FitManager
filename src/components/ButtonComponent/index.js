import React from 'react'
import { TouchableWithoutFeedback as TouchW, Text, View } from 'react-native'

import { primary } from '../../utils/colors'
import styles from './style'

const ButtonComponent = (props) => {
    const bg = props.backgroundColor ? props.backgroundColor : primary.primary

    return (
        <TouchW onPress={props.onClick}>
            <View style={[styles.button, { backgroundColor: bg }]} >
                <Text style={styles.label}>{props.label}</Text>
            </View>
        </TouchW >
    )
}

export default ButtonComponent