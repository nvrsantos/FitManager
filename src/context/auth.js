import React, { createContext, useState, useEffect, useContext } from 'react'
import { AsyncStorage, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { primary } from '../utils/colors'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(false)
    const [processing, setProcessing] = useState(false)

    useEffect(() => {
        const loadStorageData = async () => {
            const storageUser = await AsyncStorage.getItem('@FM:user')
            const storageToken = await AsyncStorage.getItem('@FM:token')

            if (storageUser && storageToken) setUser(JSON.parse(storageUser))
            if(!processing) setLoading(false)
        }

        loadStorageData()
    }, [loading])

    const signIn = async (user, token) => {
        setLoading(true)
        setProcessing(true)

        setUser(user)
        
        await AsyncStorage.setItem('@FM:user', JSON.stringify(user))
        await AsyncStorage.setItem('@FM:token', token)
        setProcessing(false)
        setLoading(false)
    }

    const signOut = async () => {
        await AsyncStorage.removeItem('@FM:user')
        await AsyncStorage.removeItem('@FM:token')
        setUser(null)
    }

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator animating={true} size="large" color={primary.darker} />
            </View>
        )
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    if(!context) throw new Error('useAuth deve ser usado com um AuthProvider')

    return context
}
