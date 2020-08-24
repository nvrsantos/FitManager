import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import Header from '../../components/Header'
import { Items } from '../../components/Options'
import { primary } from '../../utils/colors'

const SettingScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Header
                label="Configurações"
                backgroundColor={primary.darker}
                onClick={() => navigation.openDrawer()}
            />
            <View style={styles.container}>
                <Items label="Geral" icon="settings" onClick={() => navigation.push('Geral')} borderBottom />
                <Items label="Perfil" icon="account" onClick={() => navigation.push('')} borderBottom />
                <Items label="Notificação" icon="bell" onClick={() => navigation.push('')} borderBottom />
                <Items label="Backup" icon="cloud-upload" onClick={() => navigation.push('')} borderBottom />
                <Items label="Feedback" icon="comment-processing" onClick={() => navigation.push('')} borderBottom />
                <Items label="Tecnologias" icon="code-braces" onClick={() => navigation.push('')} borderBottom />
                <Items label="Sobre" icon="information" onClick={() => navigation.push('')} borderBottom />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
    }
})

export default SettingScreen
