import { StyleSheet } from 'react-native'
import { input, text } from '../../utils/colors';
import { Roboto } from '../../utils/fonts';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
    },
    iconContainer: {
        marginHorizontal: 5,
        marginRight: 10
    },
    text: {
        fontFamily: Roboto.regular,
        fontSize: 22,
        color: text.black
    },

    borderTop: {
        borderTopWidth: 1,
        borderTopColor: input.border,
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: input.border,
    },
});

export default styles