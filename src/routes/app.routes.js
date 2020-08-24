import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from '../screens/HomeScreen'
import WeightScreen from '../screens/WeightScreen'

const Drawer = createDrawerNavigator()

const RoutesApp = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{title: 'Inicio'}} />
            <Drawer.Screen name="WeightScreen" component={WeightScreen} options={{title: 'Pesos'}} />
        </Drawer.Navigator>
    )
}

export default RoutesApp