import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback as TouchW,
    Linking
} from 'react-native'

import Header from '../../components/Header'
import Modal from '../../components/Modal'
import { ItemWithIcon } from '../../components/Options'
import { primary, text } from '../../utils/colors'
import { Roboto } from '../../utils/fonts'

const SettingScreen = ({ navigation }) => {
    const [visibleAbout, setVisibleAbout] = useState(false)
    const showModalAbout = () => setVisibleAbout(true)
    const hideModalAbout = () => setVisibleAbout(false)

    return (
        <View style={{ flex: 1 }}>
            <Header
                label="Configurações"
                backgroundColor={primary.darker}
                onClick={() => navigation.openDrawer()}
            />
            <View style={styles.container} closeModal={hideModalAbout}>
                <Modal visible={visibleAbout}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Sobre</Text>
                        <Text style={styles.modalTextDesc}><Text style={styles.modalTextBold}>FitManager 1.0.0</Text>. É um aplicativo para gerenciar exercicios e monitorar seu peso e IMC.</Text>
                        <Text style={styles.modalTextCredit}>Desenvolvido por <Text style={styles.modalTextBold}>nevr001</Text>.</Text>
                        <View style={styles.modalBottom}>
                            <TouchW onPress={() => Linking.openURL('https://github.com/nvrsantos')}>
                                <Text style={styles.modalButtonText}>Github</Text>
                            </TouchW>
                            <TouchW onPress={hideModalAbout}>
                                <Text style={styles.modalButtonText}>Fechar</Text>
                            </TouchW>
                        </View>
                    </View>
                </Modal>
                <ItemWithIcon label="Geral" icon="settings" onClick={() => navigation.push('Geral')} borderBottom />
                <ItemWithIcon label="Perfil" icon="account" onClick={() => navigation.push('Profile')} borderBottom />
                <ItemWithIcon label="Notificação" icon="bell" onClick={() => navigation.push('Notification')} borderBottom />
                <ItemWithIcon label="Backup" icon="cloud-upload" onClick={() => navigation.push('Backup')} borderBottom />
                <ItemWithIcon label="Tecnologias" icon="code-braces" onClick={() => navigation.push('Tecnology')} borderBottom />
                <ItemWithIcon label="Sobre" icon="information" onClick={showModalAbout} borderBottom />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
    },
    modalContainer: {
        padding: 20
    },
    modalTitle: {
        marginBottom: 10,
        fontSize: 18,
        color: text.black,
        fontFamily: Roboto.bold
    },
    modalTextDesc: {
        color: text.black
    },
    modalTextBold: {
        fontFamily: Roboto.bold
    },
    modalTextCredit: {
        marginVertical: 10,
        color: text.black
    },
    modalBottom: {
        alignSelf: 'flex-end',
        flexDirection: 'row'
    },
    modalButtonText: {
        color: primary.dark,
        fontFamily: Roboto.regular,
        fontSize: 16,
        marginHorizontal: 5
    }
})

export default SettingScreen
