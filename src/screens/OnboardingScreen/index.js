import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import { View, Image, TouchableOpacity as TouchO, Text, StatusBar } from 'react-native'

import { Roboto } from '../../utils/fonts'
import { background, primary, text } from '../../utils/colors'

const pages = [
    {
        backgroundColor: background,
        image: <Image source={require('../../assets/images/fitness.png')} resizeMode="contain" style={{ height: 180, }} />,
        title: 'Gerencie seus exercícios.',
        subtitle: '',
    },
    {
        backgroundColor: background,
        image: <Image source={require('../../assets/images/fitness2.png')} resizeMode="contain" style={{ height: 180, }} />,
        title: 'Crie sua rotina de exercícios.',
        subtitle: '',
    },
    {
        backgroundColor: background,
        image: <Image source={require('../../assets/images/fitness3.png')} resizeMode="contain" style={{ height: 180, }} />,
        title: 'Monitore sua saúde.',
        subtitle: '',
    }
]

const Dots = ({ selected }) => {
    let backgroundColor;
    backgroundColor = selected ? primary.primary : primary.light;

    return (
        <View
            style={{
                width: 25,
                height: 10,
                borderRadius: 10,
                marginHorizontal: 3,
                backgroundColor,
            }}
        />
    );
};

const Next = ({ ...props }) => (
    <TouchO style={{ marginRight: 30 }} activeOpacity={0.5} {...props}>
        <Text style={{ color: primary.primary, fontFamily: Roboto.regular, fontSize: 16 }}>{props.nextLabel}</Text>
    </TouchO>
)

const Skip = ({ ...props }) => (
    <TouchO style={{ marginLeft: 30 }} activeOpacity={0.5} {...props}>
        <Text style={{ color: text.complement, fontFamily: Roboto.regular, fontSize: 16 }}>{props.skipLabel}</Text>
    </TouchO>
)

const Done = ({ ...props }) => (
    <TouchO style={{ marginRight: 30 }} activeOpacity={0.5} {...props}>
        <Text style={{ color: primary.primary, fontFamily: Roboto.regular, fontSize: 16 }}>Começar</Text>
    </TouchO>
)

const SkipOrDone = (navigation) => navigation.push('Signin')

const OnboardingScreen = ({ navigation }) => {
    return (
        <>
            <Onboarding
                pages={pages}
                DotComponent={Dots}
                NextButtonComponent={Next}
                nextLabel='Próximo'
                SkipButtonComponent={Skip}
                skipLabel='Pular'
                onSkip={() => SkipOrDone(navigation)}
                DoneButtonComponent={Done}
                onDone={() => SkipOrDone(navigation)}
                containerStyles={{ alignItems: 'flex-start' }}
                titleStyles={{ color: text.black, maxWidth: 220, fontSize: 38, textAlign: 'left', marginLeft: 30 }}
                bottomBarColor={background}
            />
        </>
    )
}

export default OnboardingScreen