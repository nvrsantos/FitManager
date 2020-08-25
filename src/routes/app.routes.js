import React, { useContext } from 'react'
import { View, Image, Text, TouchableWithoutFeedback as TouchW, StyleSheet } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { AuthContext } from '../context/auth';

import HomeScreen from '../screens/HomeScreen'
import WeightScreen from '../screens/WeightScreen'
import ExerciseScreen from '../screens/ExerciseScreen'

import SettingScreen from '../screens/Settings'
import GeralSettingScreen from '../screens/Settings/GeralScreen'
import ProfileSettingScreen from '../screens/Settings/ProfileScreen'
import NotificationSettingScreen from '../screens/Settings/NotificationScreen'
import BackupSettingScreen from '../screens/Settings/BackupScreen'
import TecnologySettingScreen from '../screens/Settings/TecnologyScreen'
import { Roboto } from '../utils/fonts'
import { background, primary, text } from '../utils/colors'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

const DrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginLeft: 20, marginVertical: 20 }}>
                    <Image resizeMode="contain" style={{ width: 30, height: 30, borderRadius: 50, marginRight: 15 }} source={{ uri: props?.user?.avatar }} />
                    <Text style={{ fontFamily: Roboto.regular, fontSize: 17}}>{props?.user?.name}</Text>
                </View>
                <View>
                    <DrawerItem
                        label="Inicio"
                        labelStyle={{ fontFamily: Roboto.bold }}
                        activeTintColor={props.activeTintColor}
                        activeBackgroundColor={props.activeBackgroundColor}
                        inactiveTintColor={props.inactiveTintColor}
                        inactiveBackgroundColor={props.inactiveBackgroundColor}
                        icon={({ color }) => <Icon name="home" size={30} color={color} />}
                        onPress={() => props.navigation.navigate("HomeScreen")}
                    />
                    <DrawerItem
                        label="Pesos"
                        labelStyle={{ fontFamily: Roboto.bold }}
                        activeTintColor={props.activeTintColor}
                        activeBackgroundColor={props.activeBackgroundColor}
                        inactiveTintColor={props.inactiveTintColor}
                        icon={({ color }) => <Icon name="weight" color={color} size={30} />}
                        onPress={() => props.navigation.navigate("WeightScreen")}
                    />
                    <DrawerItem
                        label="Exercicios"
                        labelStyle={{ fontFamily: Roboto.bold }}
                        activeTintColor={props.activeTintColor}
                        inactiveTintColor={props.inactiveTintColor}
                        icon={({ color }) => <Icon name="dumbbell" color={color} size={30} />}
                        onPress={() => props.navigation.navigate("ExerciseScreen")}
                    />
                </View>
                <View style={{ position: 'absolute', bottom: 0 }}>
                    <DrawerItem
                        label="Configurações"
                        labelStyle={{ fontFamily: Roboto.bold }}
                        activeBackgroundColor={props.activeBackgroundColor}
                        inactiveTintColor={props.inactiveTintColor}
                        icon={({ color }) => <Icon name="settings" color={color} size={30} />}
                        onPress={() => props.navigation.navigate("SettingScreen")}
                    />
                    <DrawerItem
                        label="Sair"
                        labelStyle={{ fontFamily: Roboto.bold }}
                        activeBackgroundColor={props.activeBackgroundColor}
                        inactiveTintColor={props.inactiveTintColor}
                        icon={({ color }) => <Icon name="logout-variant" color={color} size={30} />}
                        onPress={() => props.onClickSignout()}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const RoutesSettings = () => {
    return (
        <Stack.Navigator initialRouteName="Settings" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Settings" component={SettingScreen} />
            <Stack.Screen name="Geral" component={GeralSettingScreen} />
            <Stack.Screen name="Profile" component={ProfileSettingScreen} />
            <Stack.Screen name="Notification" component={NotificationSettingScreen} />
            <Stack.Screen name="Backup" component={BackupSettingScreen} />
            <Stack.Screen name="Tecnology" component={TecnologySettingScreen} />
        </Stack.Navigator>
    )
}

const RoutesApp = () => {
    const { signOut, user } = useContext(AuthContext);
    const handleSignout = () => {
        signOut();
    };
    return (
        <Drawer.Navigator
            drawerType='slide'
            initialRouteName='HomeScreen'
            drawerStyle={{ flex: 1, backgroundColor: background }}
            drawerContent={props => {
                return (
                    <DrawerContent {...props} user={user} onClickSignout={handleSignout} />
                )
            }}
            drawerContentOptions={{
                activeBackgroundColor: primary.lighter,
                activeTintColor: primary.darker,
                inactiveTintColor: '#000',
            }}

        >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="WeightScreen" component={WeightScreen} />
            <Drawer.Screen name="ExerciseScreen" component={ExerciseScreen} />
            <Drawer.Screen name="SettingScreen" component={RoutesSettings} />
        </Drawer.Navigator>
    )
}

export default RoutesApp