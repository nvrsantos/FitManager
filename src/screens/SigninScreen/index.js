import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback as TouchW,
    Image
} from 'react-native'
import { Checkbox } from 'react-native-paper'

import { useAuth } from '../../context/auth'

import InputComponent from '../../components/Input'
import ButtonComponent from '../../components/ButtonComponent'
import { background, text, primary } from '../../utils/colors'
import { Roboto } from '../../utils/fonts'

const SigninScreen = ({ navigation }) => {
    const { signIn } = useAuth()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [remeber, setRemember] = useState(false)

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
        formInputs: { marginBottom: 20 },
        formOptions: {
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        checkboxContainer: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        textCheckbox: {
            color: remeber ? primary.primary : text.complement,
            fontFamily: Roboto.regular
        },
        textForgout: {
            color: text.complement,
            fontFamily: Roboto.regular
        }
    })

    const navigateToSignup = (navigation) => navigation.push('Signup')
    const navigateToForgout = () => console.warn('Forgout')
    const handleSignin = () => {
        signIn()
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
                        <View style={styles.checkboxContainer}>
                            <Checkbox
                                status={remeber ? 'checked' : 'unchecked'}
                                onPress={() => setRemember(!remeber)}
                                color={primary.primary}
                                uncheckedColor={text.complement}
                            />
                            <Text style={styles.textCheckbox}>Lembrar-me</Text>
                        </View>
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
