import React from 'react'
import { View, Text } from 'react-native'

import Header from '../../components/Header'
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
        </View>
    )
}

export default GeralSettingScreen