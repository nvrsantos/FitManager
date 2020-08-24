import React, { useState } from 'react'
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native'

import Header from '../../components/Header'
import Input from '../../components/Input'
import Button from '../../components/ButtonComponent'
import { Roboto } from '../../utils/fonts'
import { text } from '../../utils/colors'

const SignupScreen = ({ navigation }) => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSignUp = () => {console.warn('sign up')}

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.textTop}>
                    <Text style={styles.title}>Crie sua conta, é grátis!</Text>
                    <Text style={styles.complement}>Por favor, preencha todos os campos...</Text>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.titleForm}>Seus Dados</Text>
                    <KeyboardAvoidingView behavior='height' style={styles.formContent}>
                        <Input label='Nome Completo' value={setName} borderRadiusTop />
                        <Input label='E-mail' value={setEmail} />
                        <Input label='Senha' value={setPassword} borderRadiusBottom secure />
                    </KeyboardAvoidingView>
                    <Button label='Concluir Cadastro' onClick={handleSignUp} />
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

export default SignupScreen