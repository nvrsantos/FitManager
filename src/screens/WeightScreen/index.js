import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import Header from '../../components/Header'
import Box from '../../components/BoxWeight'
import { InputBottom as Input } from '../../components/Input'

import { primary } from '../../utils/colors'

const WeightScreen = ({ navigation }) => {
    const [weight, setWeight] = useState()

    const DATA = [
        {
            id: 1,
            weight: '65 kg',
            date: 'qua, 19 de ago'
        },
        {
            id: 2,
            weight: '68 kg',
            date: 'sab, 11 de jul'
        },
        {
            id: 3,
            weight: '70 kg',
            date: 'ter, 9 de jun'
        },
    ]

    const addWeight = () => console.warn(`${weight}kg`)
    const deleteWeight = (id) => console.warn(`delete ${id}`)

    return (
        <View style={styles.container}>
            <Header
                backgroundColor={primary.darker}
                icon="menu"
                iconSize={30}
                label='Pesos'
                onClick={() => navigation.openDrawer()}
            />
            <View style={styles.itemsContainer}>
                <FlatList
                    style={styles.items}
                    data={DATA}
                    renderItem={(item) => (<Box onClick={deleteWeight} {...item} />)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Input onClick={addWeight} label="Inserir Peso" value={setWeight} />
            </View>
        </View>
    )
}

export default WeightScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemsContainer: {
        flex: 2,
        alignSelf: 'center',
        marginTop: 20,
        width: '90%',
    },
    items: {
        flex: 1,
        width: '100%',
        alignSelf: 'center',

    },
    inputContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
})