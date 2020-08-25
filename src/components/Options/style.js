import { StyleSheet } from 'react-native'
import { input, text, primary } from '../../utils/colors';
import { Roboto } from '../../utils/fonts';

const styles = StyleSheet.create({
    // Geral
    borderTop: {
        borderTopWidth: 1,
        borderTopColor: input.border,
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: input.border,
    },

    // Simple Item
    containerItem: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
    },
    textItem: {
        fontFamily: Roboto.regular,
        fontSize: 20,
        color: text.black
    },

    // Item With Icon
    containerItemWithIcon: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
    },
    iconContainerItemWithIcon: {
        marginHorizontal: 5,
        marginRight: 10
    },
    textItemWithIcon: {
        fontFamily: Roboto.regular,
        fontSize: 22,
        color: text.black
    },

    // Item With Sub
    containerItemWithSub: {
        paddingVertical: 10,
        justifyContent: 'center'
    },
    titleItemWithSub: {
        fontFamily: Roboto.regular,
        fontSize: 20,
        color: text.black
    },
    subtitleItemWithSub: {
        fontFamily: Roboto.regular,
        fontSize: 18,
        color: text.sub
    },

    // Item With Switch
    containerItemWithSwitch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    textItemWithSwitch: {
        fontFamily: Roboto.regular,
        fontSize: 20,
        color: text.black
    },

    // Item With Button
    containerItemWithButton: {
        marginVertical: 5
    },
    textItemWithButton: {
        fontFamily: Roboto.regular,
        fontSize: 20,
        color: text.black
    },
    buttonItemWithButton: {
        backgroundColor: primary.darker,
        borderRadius: 15,
        alignSelf: 'flex-end',
        padding: 10,
        paddingHorizontal: 20
    },
    textButtonItemWithButton: {
        fontFamily: Roboto.regular,
        fontSize: 18,
        color: text.in_primary
    }
});

export default styles