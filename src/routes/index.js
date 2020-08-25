import React, { useContext } from 'react'

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'
import { AuthContext } from '../context/auth'

const RoutesInitial = () => {
    const { signed } = useContext(AuthContext)
    return signed ? <AppRoutes /> : <AuthRoutes/>
}

export default RoutesInitial