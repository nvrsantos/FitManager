import { StyleSheet } from 'react-native'
import { Archivo } from '../../utils/fonts'
import { text } from '../../utils/colors';

const styles = StyleSheet.create({
    button: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    label: {
        fontFamily: Archivo.bold,
        fontSize: 16,
        color: text.title_in_primary
    }
});

export default styles