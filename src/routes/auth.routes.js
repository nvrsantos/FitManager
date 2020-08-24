import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View, TouchableWithoutFeedback as TouchW } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { initialRoute } from '../utils/stats'

import SigninScreen from '../screens/SigninScreen'
import SignupScreen from '../screens/SignupScreen'
import OnboardingScreen from '../screens/OnboardingScreen'

const Stack = createStackNavigator()

const HeaderLeft = (props) => {
    return (
        <TouchW onPress={props.goBack}>
            <View style={{ marginLeft: 30 }}>
                <Icon color='#9E99AA' size={30} name={props.icon} />
            </View>
        </TouchW>
    )
}

const RoutesAuth = () => (
    <Stack.Navigator initialRouteName={initialRoute()}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signin" component={SigninScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen}
            options={({ navigation }) => ({
                title: '',
                headerLeft: () => <HeaderLeft icon="arrow-left" {...navigation} />,
                headerStyle: {
                    backgroundColor: 'transparent',
                    elevation: 0
                }
            })} />
    </Stack.Navigator>
)

export default RoutesAuth