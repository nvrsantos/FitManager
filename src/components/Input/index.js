import React from 'react'
import { View, Text, TextInput, TouchableWithoutFeedback as TouchW } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './style'

const InputComponent = (props) => {
    const bRT = props.borderRadiusTop ? [styles.borderTopRight, styles.borderTopLeft] : null
    const bRB = props.borderRadiusBottom ? [styles.borderBottomRight, styles.borderBottomLeft] : null

    return (
        <View style={[styles.container, props.styleInput]}>
            <TextInput
                style={[styles.input, bRT, bRB]}
                placeholder={props.label}
                placeholderTextColor="#9c98a6"
                secureTextEntry={props.secure}
                onChangeText={(text) => props.value(text)}
            />
        </View>
    )
}

export const InputBottom = (props) => {
    return (
        <View style={[styles.containerBottom]}>
            <View style={styles.contentBottom}>
                <TextInput
                    style={[styles.inputBottom]}
                    placeholder={props.label}
                    placeholderTextColor="#fff"
                    secureTextEntry={props.secure}
                    onChangeText={(text) => props.value(text)}
                />
                <TouchW onPress={props.onClick}>
                    <View style={[styles.circleIcon, { width: props.sizeCircle || 70, height: props.sizeCircle || 70, borderRadius: props.sizeCircle / 2 || 35 }]}>
                        <Icon name={props.icon || "plus"} size={props.iconSize || 40} color={props.iconColor || '#fff'} />
                    </View>
                </TouchW>
            </View>
        </View>
    )
}

export default InputComponent