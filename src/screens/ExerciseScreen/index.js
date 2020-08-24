import moment from 'moment'
import 'moment/locale/pt-br'
import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableWithoutFeedback as TouchW,
} from 'react-native'

import Header from '../../components/Header'
import Box from '../../components/BoxExercise'

import { primary } from '../../utils/colors'
import { Roboto } from '../../utils/fonts'

const ExerciseScreen = ({ navigation }) => {
    const [active, setActive] = useState("All")
    const [allItems, setAllItems] = useState()
    const [items, setItems] = useState()
    const [showItems, setShowItems] = useState()

    const activeAll = active == "All" && styles.isActive
    const activeToday = active == "Today" && styles.isActive

    const toggleActive = (to) => {
        if (to === "Today") {
            setShowItems(items)
        } else {
            setShowItems(allItems)
        }
        setActive(to)
    }


    useEffect(() => {
        setTimeout(() => {
            const data = [
                {
                    id: '1',
                    title: 'Abodminal bicileta',
                    day: 'Segunda-Feira',
                    loop: '2x30',
                    delay: '30s'
                },
                {
                    id: '2',
                    title: 'Flexão Punho',
                    day: 'Terça-Feira',
                    loop: '4x12',
                    delay: '15s'
                },
                {
                    id: '3',
                    title: 'Voador',
                    day: 'Terça-Feira',
                    loop: '3x12',
                    delay: '20s'
                },
                {
                    id: '4',
                    title: 'Voador',
                    day: 'Terça-Feira',
                    loop: '3x12',
                    delay: '20s'
                },
            ]
            setItems(
                data.filter(item => {
                    return item.day.toLowerCase() == moment().format('dddd').toLowerCase()
                })
                    .map(itemMap => {
                        return itemMap
                    })
            )
            // setItems(data)
            setAllItems(data)
            setShowItems(data)
        }, 2000)
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Header
                label="Exercícios"
                backgroundColor={primary.darker}
                onClick={() => navigation.openDrawer()}
            />
            <View style={styles.container}>
                <View style={styles.selectorContainer}>
                    <TouchW onPress={() => toggleActive("All")} disabled={!!!items}>
                        <View style={[styles.itemSelectorAll, activeAll]}>
                            <Text style={[styles.textSelector, activeAll]}>Todos</Text>
                        </View>
                    </TouchW>
                    <TouchW onPress={() => toggleActive("Today")} disabled={!!!items}>
                        <View style={[styles.itemSelectorToday, activeToday]}>
                            <Text style={[styles.textSelector, activeToday]}>Hoje</Text>
                        </View>
                    </TouchW>
                </View>
                <View style={styles.itemsList}>
                    {!items && <Box />}
                    <FlatList
                        style={{ height: '90%' }}
                        data={showItems}
                        renderItem={item => <Box loaded {...item} onClick={(id) => console.warn(`delete ${id}`)} />}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        marginTop: 20
    },
    selectorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: primary.very_lighter,
        borderRadius: 50,
        marginBottom: 20
    },
    itemsList: {
        flex: 1
    },
    textSelector: {
        fontFamily: Roboto.regular,
        fontSize: 20,
        color: primary.skeleton
    },
    itemSelectorToday: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 5 },
    itemSelectorAll: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 5 },
    isActive: {
        backgroundColor: primary.darker,
        borderRadius: 50,
        color: '#fff',
    }
})

export default ExerciseScreen