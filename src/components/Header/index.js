import React from 'react'
import { View, Text, TouchableWithoutFeedback as TouchW } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './style'
import { text } from '../../utils/colors'

const HeaderComponent = (props) => {
    const bg = props.backgroundColor ? props.backgroundColor : 'transparent'
    const colorLabel = bg === 'transparent' ? text.complement : text.in_primary

    return (
        <View style={[styles.container, { backgroundColor: bg }]}>
            <View style={styles.content}>
                <TouchW onPress={props.onClick} style={styles.leftHeader}>
                    <Icon color={text.complement} size={props.iconSize} name={props.icon} />
                </TouchW>
                <View style={styles.headerContent}>
                    <Text style={[styles.label, { color: colorLabel }]}>{props.label}</Text>
                </View>
            </View>
        </View>
    )
}

export default HeaderComponent