import React, { useState } from 'react'
import { StyleSheet, View, Text, KeyboardAvoidingView, Alert } from 'react-native'

import api from '../../services/api'

import Input from '../../components/Input'
import Button from '../../components/ButtonComponent'

import { Roboto } from '../../utils/fonts'
import { text } from '../../utils/colors'

const ForgotScreen = ({ navigation }) => {
    const [email, setEmail] = useState()

    const handleForgot = () => {
        api.post('/forgot', {
            email
        })
            .then(response => {
                setEmail('')
                Alert.alert('Concluido', response.data.message, [
                    { text: 'Entrar', onPress: () => navigation.goBack() },
                ],
                    { cancelable: false })
            })
            .catch(error => {
                Alert.alert('Algo está errado...', error.response.data.message)
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.textTop}>
                    <Text style={styles.title}>Recuperar senha</Text>
                    <Text style={styles.complement}>Sua nova senha será enviada para o email abaixo.</Text>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.titleForm}>Dados de recuperação</Text>
                    <KeyboardAvoidingView behavior='height' style={styles.formContent}>
                        <Input label='E-mail' value={setEmail} borderRadiusTop borderRadiusBottom />
                    </KeyboardAvoidingView>
                    <Button label='Recuperar Senha' onClick={handleForgot} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    content: { flex: 1, width: '80%' },
    textTop: { flex: 2, marginBottom: 20 },
    title: {
        marginTop: 20,
        fontFamily: Roboto.bold,
        fontSize: 36,
        color: text.title,
        maxWidth: 242
    },
    complement: {
        marginTop: 10,
        fontFamily: Roboto.light,
        fontSize: 14,
        color: text.title
    },
    formContainer: { flex: 3 },
    titleForm: {
        fontFamily: Roboto.bold,
        fontSize: 24,
        color: text.title,
        marginBottom: 25
    },
    formContent: { marginBottom: 20 }
})

export default ForgotScreen