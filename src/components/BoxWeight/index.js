import React from 'react'
import { View, Text, TouchableWithoutFeedback as TouchW } from 'react-native'
import styles from './/style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const BoxWeightComponent = (props) => {
    const [weight, unit] = props.item.weight.toString().split(' ')
    return (
        <View style={styles.container}>
            <View style={styles.boxContent}>
                <View style={styles.leftContent}>
                    <View style={styles.weightContainer}>
                        <Text style={styles.weightText}>{weight} <Text style={styles.unitText}>{unit}</Text></Text>
                    </View>
                    <View style={styles.dateContainer}>
                        <Icon name="calendar-clock" size={20} color="#fff" />
                        <Text style={styles.dateText}>{props.item.date}</Text>
                    </View>
                </View>
                <TouchW onPress={() => props.onClick(props.item.id)}>
                    <View style={styles.circleIcon}>
                        <Icon name="delete" size={30} color="#fff" />
                    </View>
                </TouchW>
            </View>
        </View>
    )
}

export default BoxWeightComponent