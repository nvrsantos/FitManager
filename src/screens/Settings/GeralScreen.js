import React from 'react'
import { View, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import { ItemWithSub as Item } from '../../components/Options'
import { primary } from '../../utils/colors'

const GeralSettingScreen = ({navigation}) => {
    return(
        <View>
            <Header
                icon="arrow-left"
                label="Geral"
                backgroundColor={primary.darker}
                onClick={() => navigation.goBack()}
            />
            <View style={styles.container}>
                <Item label="Mostrar ao abrir" subLabel="Inicio" />
                <Item label="Sistema de peso" subLabel="quilograma (kg)" />
                <Item label="Sistema de medida" subLabel="centimetro (cm)" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        paddingHorizontal: 20,
    }
})

export default GeralSettingScreen