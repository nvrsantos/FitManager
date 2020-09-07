import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper'

import Header from '../../components/Header';
import Box from '../../components/BoxWeight';
import { InputBottom as Input } from '../../components/Input';

import { primary } from '../../utils/colors';
import api, { GetToken } from '../../services/api';
import ModalComponent from '../../components/Modal';

const WeightScreen = ({ navigation }) => {
    const [weight, setWeight] = useState();
    const [date, setDate] = useState();
    const [loading, setLoading] = useState(false)

    const GetData = async () => {
        api.get('/weight', {
            headers: {
                'Authorization': await GetToken()
            }
        }).then(response => {
            setLoading(false)
            setDate(response.data.weight.reverse())
        }).catch(error => {
            setLoading(false)
            Alert.alert('Ocorreu um erro.', error.response.data.message || error.response.data)
        })
    }

    useEffect(() => {
        GetData()
    }, [])

    const addWeight = async () => {
        if(!weight || weight.trim() == '') return Alert.alert('Atenção', 'Você deve escrever um peso !')
        if(!loading) setLoading(true)
        api.post('/weight', {
            title: `${weight}kg`,
            date: new Date()
        }, {
            headers: {
                'Authorization': await GetToken()
            }
        }).then(response => {
            Alert.alert('Sucesso', response.data.message)
            GetData()
        }).catch(error => {
            setLoading(false)
            Alert.alert('Ocorreu um erro.', error.response.data.message)
        })
    };
    const deleteWeight = async (id) => {
        if(!loading) setLoading(true)
        api.delete(`/weight/${id}`, {
            headers: {
                'Authorization': await GetToken()
            }
        }).then(response => {
            Alert.alert('Sucesso.', response.data.message)
            GetData()
        }).catch(error => {
            setLoading(false)
            Alert.alert('Ocorreu um erro.', error.response.data.message)
        })
    };

    return (
        <View style={styles.container}>
            <Header
                backgroundColor={primary.darker}
                icon="menu"
                iconSize={30}
                label="Pesos"
                onClick={() => navigation.openDrawer()}
            />
            <ModalComponent visible={loading}>
                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                    <ActivityIndicator animating={true} size="large" color={primary.darker} />
                </View>
            </ModalComponent>
            <View style={styles.itemsContainer}>
                {!date && <Box item={{ id: '', title: '', date: '' }} />}
                <FlatList
                    style={styles.items}
                    data={date}
                    renderItem={item => <Box onClick={deleteWeight} loaded {...item} />}
                    keyExtractor={item => item._id}
                />
            </View>
            <View style={styles.inputContainer}>
                <Input onClick={addWeight} label="Inserir Peso" value={setWeight} keyboardType='number-pad' />
            </View>
        </View>

    );
};

export default WeightScreen;

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
        width: '100%',
    },
});
