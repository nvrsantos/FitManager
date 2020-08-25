import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    AsyncStorage,
    Dimensions,
    View,
    Alert,
    TouchableWithoutFeedback as TouchW
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper'

import { useAuth } from '../../context/auth';

import Header from '../../components/Header'
import Input from '../../components/Input'
import Button from '../../components/ButtonComponent'

import { primary } from '../../utils/colors'

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

    const updateProfile = () => {
        return (
            Alert.alert('Deseja atualizar o perfil ?', 'Você será deslogado da aplicação para atualizarmos seu perfil...', [
                { text: 'Confirmar', onPress: () => signOut },
                { text: 'Cancelar', style: 'cancel' }
            ])
        )
    }

    console.log('setting 3')

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
                            {user?.avatar
                                ? (
                                    <Avatar.Image size={Dimensions.get('window').width / 3} source={{ uri: user.avatar }} />
                                )
                                : (
                                    <Icon name="account" size={100} color="#fff" />
                                )
                            }
                        </View>
                        <View style={styles.circleImage}>
                            <TouchW onPress={() => console.warn('a')}>
                                <Icon name="pencil" color="#fff" size={20} />
                            </TouchW>
                        </View>
                    </View>
                    {user?.name && (
                        <View style={styles.contentForm}>
                            <View style={styles.formInputs}>
                                <Input label={user.name || "Nome"} value={setNewEmail} borderRadiusTop />
                                <Input label={user.email || "E-mail"} value={setNewEmail} />
                                <Input label="Senha" value={setNewPassword} secure />
                                <Input label='Confirmar Senha' value={setConfirmNewPassword} borderRadiusBottom secure />
                            </View>
                            <Button label="Atualizar" onClick={updateProfile} />
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
        flex: 3
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