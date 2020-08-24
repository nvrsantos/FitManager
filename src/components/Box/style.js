import { StyleSheet } from 'react-native'
import { Archivo } from '../../utils/fonts';

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        padding: 10,
        margin: 5
    },
    circleIcon: {
        position: 'absolute',
        right: 0,
        top: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textMain: {
        fontFamily: Archivo.medium,
        color: '#fff',
    },

    // Box Fluid
    topBoxFluid: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainFluid: {
        flex: 1,
        justifyContent: 'center',
    },
    bottomInfo: {
        alignItems: 'flex-end',
        marginRight: 5,
    },
    bottomText: {
        fontFamily: Archivo.medium,
        fontSize: 18,
        color: '#fff',
    },
    sizeTextMainFluid: { fontSize: 72 },
    circleIconFluid: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    // Box Square
    topBoxSquare: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainSquare: {},
    sizeTextMainSquare: { fontSize: 60 },
    secondTextMainContainer: {
        alignItems: 'flex-end',
        marginTop: -15
    },
    secondTextMain: {
        fontFamily: Archivo.medium,
        fontSize: 18,
        color: '#fff',
    },
    circleIconSquare: {
        top: 15,
        width: 45,
        height: 45,
        borderRadius: 25,
    }
});

export default styles