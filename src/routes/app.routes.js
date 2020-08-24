import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'
import WeightScreen from '../screens/WeightScreen'
import ExerciseScreen from '../screens/ExerciseScreen'

import SettingScreen from '../screens/Settings'
import GeralSettingScreen from '../screens/Settings/GeralScreen'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

const RoutesSettings = () => {
    return (
        <Stack.Navigator initialRouteName="Settings" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Settings" component={SettingScreen} />
            <Stack.Screen name="Geral" component={GeralSettingScreen} />
        </Stack.Navigator>
    )
}

const RoutesApp = () => {
    return (
        <Drawer.Navigator initialRouteName="SettingScreen">
            <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Inicio' }} />
            <Drawer.Screen name="WeightScreen" component={WeightScreen} options={{ title: 'Pesos' }} />
            <Drawer.Screen name="ExerciseScreen" component={ExerciseScreen} options={{ title: 'Exercicios' }} />
            <Drawer.Screen name="SettingScreen" component={RoutesSettings} options={{ title: 'Configurações' }} />
        </Drawer.Navigator>
    )
}

export default RoutesApp