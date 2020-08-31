import axios from 'axios'
import { AsyncStorage } from 'react-native'

const api = axios.create({
    baseURL: 'http://fitmanager-server.herokuapp.com',
})

export default api

export const GetToken = async () => {
    const token = await AsyncStorage.getItem('@FM:token')
    return `Bearer ${token}`
}