import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './style'

export const BoxFluid = (props) => {
    const bg = props.backgroundColor || '#A29BFE'
    const secondBG = props.secondary || '#6C5CE7'

    return (
        <View style={[styles.container, { backgroundColor: bg }]}>
            <View style={styles.topBoxFluid}>
                <View style={styles.mainFluid}>
                    <Text style={[styles.textMain, styles.sizeTextMainFluid]}>{props.text}</Text>
                </View>
                {props.icon && (
                    <View style={[styles.circleIcon, styles.circleIconFluid, { backgroundColor: secondBG }]}>
                        <Icon color='#fff' name={props.icon} size={props.iconSize} />
                    </View>
                )}
            </View>
            <View style={styles.bottomInfo}>
                <Text style={styles.bottomText}>{props.secondaryText}</Text>
            </View>
        </View >

    )
}

export const Box = (props) => {
    const bg = props.colorPrimary || '#A29BFE'
    const secondBG = props.colorSecondary || '#6C5CE7'

    return (
        <View style={[styles.container, { backgroundColor: bg, width: props.width || 150, height: props.height || 150 }]}>
            <View style={styles.topBoxSquare}>
                <View style={styles.mainSquare}>
                    <Text style={[styles.textMain, styles.sizeTextMainSquare]}>{props.text}</Text>
                    <View style={styles.secondTextMainContainer}>
                        <Text style={styles.secondTextMain}>{props.secondaryText}</Text>
                    </View>
                </View>
                {props.icon && (
                    <View style={[styles.circleIcon, styles.circleIconSquare, { backgroundColor: secondBG, marginTop: -20 }]}>
                        <Icon color='#fff' name={props.icon} size={props.iconSize} />
                    </View>
                )}
            </View>
        </View>
    )
}

export const GridBox = (props) => {
    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {props.boxes.map((element, key) => (
                <Box key={key} {...element} />
            ))}
        </View>
    )
}