import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback as TouchW } from 'react-native'
import { Switch } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './style'
import { text, primary } from '../../utils/colors'

export const Item = (props) => {
    const borderTop = props.borderTop ? styles.borderTop : null
    const borderBottom = props.borderBottom ? styles.borderBottom : null

    return (
        <TouchW onPress={props.onClick}>
            <View style={[styles.containerItem, borderTop, borderBottom]}>
                <View>
                    <Text style={styles.textItem}>{props.label}</Text>
                </View>
            </View>
        </TouchW>
    )
}

export const ItemWithIcon = (props) => {
    const borderTop = props.borderTop ? styles.borderTop : null
    const borderBottom = props.borderBottom ? styles.borderBottom : null

    return (
        <TouchW onPress={props.onClick}>
            <View style={[styles.containerItemWithIcon, borderTop, borderBottom]}>
                {props.icon && (
                    <View style={styles.iconContainerItemWithIcon}>
                        <Icon name={props.icon} size={props.iconSize || 30} color={props.iconColor || text.black} />
                    </View>
                )}
                <View>
                    <Text style={styles.textItemWithIcon}>{props.label}</Text>
                </View>
            </View>
        </TouchW>
    )
}

export const ItemWithSub = (props) => {
    const borderTop = props.borderTop ? styles.borderTop : null
    const borderBottom = props.borderBottom ? styles.borderBottom : null

    return(
        <TouchW onPress={props.onClick}>
            <View style={[styles.containerItemWithSub, borderTop, borderBottom]}>
                <Text style={styles.titleItemWithSub}>{props.label}</Text>
                <Text style={styles.subtitleItemWithSub}>{props.subLabel}</Text>
            </View>
        </TouchW>
    )
}

export const ItemWithSwitch = (props) => {
    const [valueSwitch, setValueSwitch] = useState()
    const borderTop = props.borderTop ? styles.borderTop : null
    const borderBottom = props.borderBottom ? styles.borderBottom : null

    const toggleSwitch = () => setValueSwitch(!valueSwitch)

    return(
        <View style={[styles.containerItemWithSwitch, borderTop, borderBottom]}>
            <Text style={styles.textItemWithSwitch}>{props.label}</Text>
            <TouchW onPress={toggleSwitch}>
                <Switch value={valueSwitch} onValueChange={() => props.value(valueSwitch)} color={primary.primary} />
            </TouchW>
        </View>
    )
}

export const ItemWithButton = (props) => {
    const borderTop = props.borderTop ? styles.borderTop : null
    const borderBottom = props.borderBottom ? styles.borderBottom : null

    return(
        <View style={[styles.containerItemWithButton, borderTop, borderBottom]}>
            <Text style={styles.textItemWithButton}>{props.label}</Text>
            <View style={styles.buttonItemWithButton}>
                <TouchW onPress={props.onClick}>
                    <Text style={styles.textButtonItemWithButton}>{props.labelButton || "Abrir"}</Text>
                </TouchW>
            </View>
        </View>
    )
}