import { StyleSheet } from 'react-native'
import { Archivo } from '../../utils/fonts'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
    },
    content: {width: '80%', flexDirection: 'row'},
    label: {
        fontFamily: Archivo.medium,
        fontSize: 20,
        marginLeft: 25
    }
});

export default styles