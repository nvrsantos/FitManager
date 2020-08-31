import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    AsyncStorage,
    Dimensions,
    View,
    Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { useAuth } from '../../context/auth';

import Header from '../../components/Header'
import Input from '../../components/Input'
import Button from '../../components/ButtonComponent'

import { primary } from '../../utils/colors'
import api, { GetToken } from '../../services/api';

const ProfileSettingScreen = ({ navigation }) => {
    const { signOut } = useAuth();
    const [user, setUser] = useState()

    const [newName, setNewName] = useState()
    const [newEmail, setNewEmail] = useState()
    const [newPassword, setNewPassword] = useState()
    const [confirmNewPassword, setConfirmNewPassword] = useState()

    useEffect(() => {
        AsyncStorage.getItem('@FM:user').then(user => {
            if (user) {
                setUser(JSON.parse(user))
            }
        })
    }, [])

    const updateProfile = async () => {
        let jsonObjectWithInfoUserToUpdate = {}

        if (newName && newName.trim() !== '') jsonObjectWithInfoUserToUpdate.name = newName
        if (newEmail && newEmail.trim() !== '') jsonObjectWithInfoUserToUpdate.email = newEmail
        if (newPassword && newPassword.trim() !== '') {
            if (newPassword !== confirmNewPassword) return Alert.alert('Ocorreu um erro.', 'As senha não concidem.')
            jsonObjectWithInfoUserToUpdate.password = newPassword
        }
        api.put('/user', jsonObjectWithInfoUserToUpdate, {
            headers: {
                'Authorization': await GetToken()
            }
        }).then(response => {
            Alert.alert('Sucesso', response.data.message)
            signOut()
        }).catch(error => {
            Alert.alert('Ocorreu um erro.', error.response.data.message)
        })
    }

    const handleMessageUpdateProfile = () => {
        Alert.alert('Deseja Continuar ?', 'Você será deslogado da aplicação para atualizarmos seu perfil...', [
            { text: 'Confirmar', onPress: () => updateProfile() },
            { text: 'Cancelar', style: 'cancel' }
        ])
    }

    return (
        <View>
            <Header
                icon="arrow-left"
                label="Perfil"
                backgroundColor={primary.darker}
                onClick={() => navigation.goBack()}
            />
            <View style={styles.container}>
                <View style={styles.form}>
                    <View style={styles.headerForm}>
                        <View style={styles.avatar}>
                            <Icon name="account" size={Dimensions.get('window').width / 4} color="#fff" />
                        </View>
                    </View>
                    {user?.name && (
                        <View style={styles.contentForm}>
                            <View style={styles.formInputs}>
                                <Input label={user.name || "Nome"} value={setNewName} borderRadiusTop />
                                <Input label={user.email || "E-mail"} value={setNewEmail} />
                                <Input label="Senha" value={setNewPassword} secure />
                                <Input label='Confirmar Senha' value={setConfirmNewPassword} borderRadiusBottom secure />
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Button label="Atualizar" onClick={handleMessageUpdateProfile} />
                            </View>
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    form: {
        width: '100%',
        height: '100%'
    },
    headerForm: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    contentForm: {
        flex: 4
    },
    avatar: {
        backgroundColor: primary.darker,
        width: Dimensions.get('window').width / 3.5,
        height: Dimensions.get('window').width / 3.5,
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleImage: {
        backgroundColor: primary.primary,
        padding: 10,
        borderRadius: 20,
        marginTop: -25,
        marginLeft: 90
    }
})

export default ProfileSettingScreen