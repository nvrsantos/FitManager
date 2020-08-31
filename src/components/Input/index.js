import React, { useState } from 'react'
import { View, Text, TextInput, TouchableWithoutFeedback as TouchW } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Modal from '../Modal'

import styles from './style'
import { Roboto, Archivo } from '../../utils/fonts'
import { text, fourth, primary, } from '../../utils/colors'

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

export const InputSelector = (props) => {
    const [visibleModal, setVisibleModal] = React.useState(false)
    const [isSelected, setIsSelected] = useState(false)
    const bRT = props.borderRadiusTop ? [styles.borderTopRight, styles.borderTopLeft] : null
    const bRB = props.borderRadiusBottom ? [styles.borderBottomRight, styles.borderBottomLeft] : null
    const colorTextSelect = isSelected ? '#000' : '#9c98a6'

    const showModal = () => setVisibleModal(true)
    const hideModal = () => setVisibleModal(false)
    const selectDay = (dayValue) => {
        props.onChangeValue(dayValue)
        setIsSelected(dayValue)
        hideModal()
    }

    return (
        <View style={styles.containerSelector}>
            <TouchW onPress={showModal}>
                <View>
                    <TextInput
                        style={[styles.input, bRT, bRB]}
                        placeholder={props.label}
                        placeholderTextColor={colorTextSelect}
                        editable={false}
                    />
                </View>
            </TouchW>
            <Modal visible={visibleModal} closeModal={hideModal} style={{ elevation: 10 }}>
                <View>
                    <Text style={{ textAlign: 'center', marginVertical: 20, fontFamily: Roboto.regular, fontSize: 20, color: text.title }}>{props.label}</Text>
                    <View style={{ alignItems: 'center' }}>
                        {props.items.map(element => {
                            return (
                                <View key={element.value} style={{ backgroundColor: primary.very_lighter, paddingVertical: 10, width: '100%', alignItems: 'center', marginVertical: 1 }}>
                                    <TouchW onPress={() => selectDay(element.value)}>
                                        <Text style={{ fontFamily: Roboto.regular, fontSize: 18, color: '#fff' }}>{element.label}</Text>
                                    </TouchW>
                                </View>
                            )
                        })}
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginVertical: 20, }}>
                            <View style={{ marginHorizontal: 10, backgroundColor: primary.dark, padding: 10 }}>
                                <TouchW onPress={() => selectDay(null)}>
                                    <Text style={{ fontSize: 15, fontFamily: Archivo.medium, color: '#fff' }}>Limpar</Text>
                                </TouchW>
                            </View>
                            <View style={{ marginHorizontal: 10, backgroundColor: fourth.dark, padding: 10 }}>
                                <TouchW onPress={hideModal}>
                                    <Text style={{ fontSize: 15, fontFamily: Archivo.medium, color: '#fff' }}>Cancelar</Text>
                                </TouchW>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
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
                    {...props}
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