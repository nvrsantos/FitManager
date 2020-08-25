import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Header from '../../components/Header'
import { Item, ItemWithSwitch } from '../../components/Options'
import { primary } from '../../utils/colors'

const NotificationSettingScreen = ({navigation}) => {
    const [valueNotification, setValueNotification] = useState(false)
    
    return(
        <View>
            <Header
                icon="arrow-left"
                label="Notificações"
                backgroundColor={primary.darker}
                onClick={() => navigation.goBack()}
            />
            <View style={styles.container}>
                <ItemWithSwitch label="Notificações" value={setValueNotification} />
                <Item label="Som e vibrações" />
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

export default NotificationSettingScreen