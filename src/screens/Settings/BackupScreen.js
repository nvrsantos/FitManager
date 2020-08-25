import React from 'react'
import { View, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import { Item, ItemWithSub } from '../../components/Options'
import { primary } from '../../utils/colors'

const BackupSettingScreen = ({navigation}) => {
    return(
        <View>
            <Header
                icon="arrow-left"
                label="Backup"
                backgroundColor={primary.darker}
                onClick={() => navigation.goBack()}
            />
            <View style={styles.container}>
                <Item label="Fazer backup agora" />
                <ItemWithSub label="Backup recente" subLabel="18 de ago de 2020" />
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

export default BackupSettingScreen