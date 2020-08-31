import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback as TouchW,
    Image,
    Alert
} from 'react-native'

import { useAuth } from '../../context/auth'
import api from '../../services/api'
import axios from 'axios'

import InputComponent from '../../components/Input'
import ButtonComponent from '../../components/ButtonComponent'
import { background, text } from '../../utils/colors'
import { Roboto } from '../../utils/fonts'

const SigninScreen = ({ navigation }) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: background,
        },
        imageLogo: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        form: {
            flex: 1,
            width: '80%',
            alignItems: 'center',
        },
        headerForm: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: 20
        },
        titleHeaderForm: {
            fontSize: 24,
            fontFamily: Roboto.bold,
            color: text.title
        },
        textHeaderForm: {
            fontSize: 14,
            fontFamily: Roboto.light,
            color: text.title
        },
        contentForm: {
            width: '100%'
        },
        formInputs: { marginBottom: 15 },
        formOptions: {
            marginBottom: 20,
            marginRight: 15,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        textForgout: {
            color: text.complement,
            fontFamily: Roboto.regular
        }
    })

    const { signIn } = useAuth()
    const [email, setEmail] = useState('playcar46@gmail.com')
    const [password, setPassword] = useState('123')

    const navigateToSignup = (navigation) => navigation.push('Signup')
    const navigateToForgout = () => console.warn('Forgout')
    const handleSignin = () => {
        api.post('signin', {
            email,
            password
        })
            .then(response => {
                const { user, token } = response.data
                signIn(user, token)
            })
            .catch(error => {
                console.log(error);
                Alert.alert('Algo está errado...', error.response.data.message)
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageLogo}>
                <Image source={require('../../assets/images/logo.png')} />
            </View>
            <View style={styles.form}>
                <View style={styles.headerForm}>
                    <Text style={styles.titleHeaderForm}>Fazer login</Text>
                    <TouchW onPress={() => navigateToSignup(navigation)}>
                        <Text style={styles.textHeaderForm}>Criar uma conta</Text>
                    </TouchW>
                </View>
                <View style={styles.contentForm}>
                    <View style={styles.formInputs}>
                        <InputComponent label='E-mail' borderRadiusTop value={setEmail} />
                        <InputComponent label='Senha' borderRadiusBottom value={setPassword} secure />
                    </View>
                    <View style={styles.formOptions}>
                        <TouchW onPress={() => navigateToForgout(navigation)}>
                            <Text style={styles.textForgout}>Esqueci minha senha</Text>
                        </TouchW>
                    </View>
                    <ButtonComponent label="Entrar" onClick={() => handleSignin(navigation)} />
                </View>
            </View>
        </View>
    )
}

export default SigninScreen
