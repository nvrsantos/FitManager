import React from 'react'
import { View, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import { ItemWithButton } from '../../components/Options'
import { primary } from '../../utils/colors'

const TecnologySettingScreen = ({ navigation }) => {
    return (
        <View>
            <Header
                icon="arrow-left"
                label="Tecnologias"
                backgroundColor={primary.darker}
                onClick={() => navigation.goBack()}
            />
            <View style={styles.container}>
                <ItemWithButton label="React Native" link="https://reactnative.dev" />
                <ItemWithButton label="React Native Paper" link="https://callstack.github.io/react-native-paper" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        paddingHorizontal: 20,
        marginTop: 20
    }
})

export default TecnologySettingScreen