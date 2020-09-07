import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper'

import Header from '../../components/Header';
import Box from '../../components/BoxWeight';
import { InputBottom as Input } from '../../components/Input';

import { primary } from '../../utils/colors';
import api, { GetToken } from '../../services/api';
import ModalComponent from '../../components/Modal';

const HeightScreen = ({ navigation }) => {
    const [height, setHeight] = useState();
    const [date, setDate] = useState();
    const [loading, setLoading] = useState(false)

    const GetData = async () => {
        api.get('/height', {
            headers: {
                'Authorization': await GetToken()
            }
        }).then(response => {
            setLoading(false)
            setDate(response.data.height.reverse())
        }).catch(error => {
            setLoading(false)
            Alert.alert('Ocorreu um erro.', error.response.data.message || error.response.data)
        })
    }

    useEffect(() => {
        GetData()
    }, [])

    const addHeight = async () => {
        if(!height || height.trim() == '') return Alert.alert('Atenção', 'Você deve escrever uma altura !')
        if(!loading) setLoading(true)
        api.post('/height', {
            title: `${height}cm`,
            date: new Date()
        }, {
            headers: {
                'Authorization': await GetToken()
            }
        }).then(response => {
            setHeight('')
            Alert.alert('Sucesso', response.data.message)
            GetData()
        }).catch(error => {
            setLoading(false)
            Alert.alert('Ocorreu um erro.', error.response.data.message)
        })
    };
    const deleteHeight = async (id) => {
        if(!loading) setLoading(true)
        api.delete(`/height/${id}`, {
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
                label="Altura"
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
                    renderItem={item => <Box onClick={deleteHeight} loaded {...item} />}
                    keyExtractor={item => item._id}
                />
            </View>
            <View style={styles.inputContainer}>
                <Input onClick={addHeight} label="Inserir Altura" value={setHeight} keyboardType='number-pad' />
            </View>
        </View>

    );
};

export default HeightScreen;

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
