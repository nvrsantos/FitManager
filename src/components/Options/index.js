import React from 'react'
import { View, Text, TouchableWithoutFeedback as TouchW } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './style'
import { text } from '../../utils/colors'

export const Items = (props) => {
    const borderTop = props.borderTop ? styles.borderTop : null
    const borderBottom = props.borderBottom ? styles.borderBottom : null

    return (
        <TouchW onPress={props.onClick}>
            <View style={[styles.container, borderTop, borderBottom]}>
                <View style={styles.iconContainer}>
                    <Icon name={props.icon || "settings"} size={props.iconSize || 30} color={props.iconColor || text.black} />
                </View>
                <View>
                    <Text style={styles.text}>{props.label}</Text>
                </View>
            </View>
        </TouchW>
    )
}