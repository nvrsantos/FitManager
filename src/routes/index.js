import React, { useContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'

import { initialRoute } from '../utils/stats'

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'
import { AuthContext } from '../context/auth'

const Stack = createStackNavigator()

const RoutesInitial = () => {
    const { signed } = useContext(AuthContext)
    return signed ? <AppRoutes /> : <AuthRoutes/>
}

export default RoutesInitial