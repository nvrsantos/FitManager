import moment from 'moment'
import 'moment/locale/pt-br'
import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableWithoutFeedback as TouchW,
    Dimensions,
    Alert,
} from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Header from '../../components/Header'
import Box from '../../components/BoxExercise'
import Modal from '../../components/Modal'
import Input, { InputSelector } from '../../components/Input'

import { primary, text, fourth } from '../../utils/colors'
import { Roboto, Archivo } from '../../utils/fonts'
import api, { GetToken } from '../../services/api'

const ExerciseScreen = ({ navigation }) => {
    const [active, setActive] = useState("All")
    const [allItems, setAllItems] = useState()
    const [items, setItems] = useState()
    const [showItems, setShowItems] = useState()
    const [loading, setLoading] = useState(false)

    const [visibleModal, setVisibleModal] = useState(false)
    const [exerciseName, setExerciseName] = useState()
    const [dayOfWeek, setDayOfWeek] = useState()
    const [loop, setLoop] = useState()
    const [delayTime, setDelayTime] = useState()

    const activeAll = active == "All" && styles.isActive
    const activeToday = active == "Today" && styles.isActive

    const showModal = () => setVisibleModal(true)
    const hideModal = () => setVisibleModal(false)

    const toggleActive = (to) => {
        if (to === "Today") {
            setShowItems(items)
        } else {
            setShowItems(allItems)
        }
        setActive(to)
    }

    const clearInputs = () => {
        setExerciseName()
        setDayOfWeek()
        setLoop()
        setDelayTime()
        setVisibleModal(false)
    }

    const addNewExercise = async () => {
        if (!exerciseName || exerciseName.trim() == '') return Alert.alert('Ops...', 'Você não escolheu um nome.')
        if (!dayOfWeek || dayOfWeek.trim() == '') return Alert.alert('Ops...', 'Você não escolheu um dia da semana.')
        if (!loop || loop.trim() == '') return Alert.alert('Ops...', 'Você não colocou uma repetição.')
        if (!delayTime || delayTime.trim() == '') return Alert.alert('Ops...', 'Você não colocou um tempo.')

        setLoading(true)
        api.post('/exercise', {
            title: exerciseName,
            day_of_week: dayOfWeek,
            loop,
            delay_time: delayTime
        }, {
            headers: {
                'Authorization': await GetToken()
            }
        }).then(respose => {
            setLoading(false)
            Alert.alert('Sucesso', respose.data.message)
            setVisibleModal(false)
            clearInputs()
            GetExercises()
        }).catch(error => {
            Alert.alert('Ocorreu um erro.', error.response.data.message)
            setLoading(false)
        })

    }

    const deleteExercise = async (id) => {
        setLoading(true)
        api.delete(`/exercise/${id}`, {
            headers: {
                'Authorization': await GetToken()
            }
        }).then(response => {
            Alert.alert('Sucesso', response.data.message)
            GetExercises()
            toggleActive("All")
            setLoading(false)
        }).catch(error => {
            Alert.alert('Ocorreu um erro.', error.response.data.message)
            setLoading(false)
        })
    }

    const GetExercises = async () => {
        api.get('/exercise', {
            headers: {
                'Authorization': await GetToken()
            }
        }).then(response => {
            const data = response.data.exercise

            setItems(
                data.filter(item => {
                    return item.day_of_week.toLowerCase() == moment().format('dddd').toLowerCase()
                })
                    .map(itemMap => {
                        return itemMap
                    })
            )
            // Coloca os items em ordem alfabetica
            setAllItems(data.sort((a, b) => {
                return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)
            }))
            setShowItems(data)
            setLoading(false)
        }).catch(error => {
            Alert.alert('Ocorreu um erro.', error.response.data.message)
            setLoading(false)
        })
    }

    useEffect(() => {
        GetExercises()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Header
                label="Exercícios"
                backgroundColor={primary.darker}
                onClick={() => navigation.openDrawer()}
            />
            <View style={styles.container}>
                <Modal visible={loading}>
                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                        <ActivityIndicator animating={true} size="large" color={primary.darker} />
                    </View>
                </Modal>
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
                <Modal visible={visibleModal} closeModal={hideModal}>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: Roboto.bold, marginVertical: 10, marginTop: 20, color: text.title }}>Adicionar Exercicio</Text>
                        <View style={{ marginVertical: 10, paddingHorizontal: 10 }}>
                            <Input label="Exercicio (Abdominal)" value={setExerciseName} borderRadiusTop />
                            <InputSelector label={dayOfWeek || "Escolha um dia"} onChangeValue={(day) => setDayOfWeek(day)} items={[
                                { label: "Domingo", value: "Domingo" },
                                { label: "Segunda-Feira", value: "Segunda-Feira" },
                                { label: "Terça-Feira", value: "Terça-Feira" },
                                { label: "Quarta-Feira", value: "Quarta-Feira" },
                                { label: "Quinta-Feira", value: "Quinta-Feira" },
                                { label: "Sexta-Feira", value: "Sexta-Feira" },
                                { label: "Sábado", value: "Sábado" },
                            ]}>
                            </InputSelector>
                            <Input label="Repetição (3x10)" value={setLoop} />
                            <Input label="Descanso (20s)" value={setDelayTime} borderRadiusBottom />
                            <Text style={{ marginLeft: 10, color: text.sub, fontSize: 12 }}>*Tente seguir os exemplos entre parenteses.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal: 20, marginBottom: 20 }}>
                            <View style={{ marginHorizontal: 10, padding: 5, paddingVertical: 10, backgroundColor: fourth.dark }}>
                                <TouchW onPress={clearInputs}>
                                    <Text style={{ color: text.title_in_primary, fontFamily: Archivo.medium }}>Cancelar</Text>
                                </TouchW>
                            </View>
                            <View style={{ marginHorizontal: 10, padding: 5, paddingVertical: 10, backgroundColor: primary.darker }}>
                                <TouchW onPress={addNewExercise}>
                                    <Text style={{ color: text.title_in_primary, fontFamily: Archivo.medium }}>Adicionar</Text>
                                </TouchW>
                            </View>
                        </View>
                    </View>
                </Modal>
                <View style={styles.itemsList}>
                    {!items && <Box />}
                    <FlatList
                        style={{ height: '100%' }}
                        data={showItems}
                        renderItem={item => <Box loaded {...item} onClick={(id) => deleteExercise(id)} />}
                        keyExtractor={item => item.id}
                    />
                    <TouchW onPress={showModal}>
                        <View style={[styles.circleIcon, { width: 70, height: 70, borderRadius: 35 }]}>
                            <Icon name={"plus"} size={40} color={'#fff'} />
                        </View>
                    </TouchW>
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
    },
    circleIcon: {
        backgroundColor: primary.darker,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: Dimensions.get('window').height * 0.05,
        right: Dimensions.get('window').width * -0.03,
        borderWidth: 2,
        borderColor: '#4B299C',
    },
})

export default ExerciseScreen