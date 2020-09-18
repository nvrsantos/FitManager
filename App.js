import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthProvider } from './src/context/auth'

import Routes from './src/routes'
import { primary } from './src/utils/colors'

export default function App() {
	const [isReady, setIsReady] = useState(false)
	const [loaded] = useFonts({
		Archivo: require('./assets/fonts/Archivo-Regular.ttf'),
		Archivo_medium: require('./assets/fonts/Archivo-Medium.ttf'),
		Archivo_bold: require('./assets/fonts/Archivo-Bold.ttf'),
		Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
		Roboto_light: require('./assets/fonts/Roboto-Light.ttf'),
		Roboto_bold: require('./assets/fonts/Roboto-Bold.ttf'),
	})

	if (!loaded) return null

	return (
		<NavigationContainer>
			<StatusBar backgroundColor={primary.darker} barStyle="light-content" />
			<AuthProvider>
				<PaperProvider>
					<Routes />
				</PaperProvider>
			</AuthProvider>
		</NavigationContainer>
	);
}
