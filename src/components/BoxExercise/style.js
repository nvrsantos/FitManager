import { StyleSheet } from 'react-native'
import { primary } from '../../utils/colors';
import { Roboto } from '../../utils/fonts';

export default StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: primary.light,
        borderRadius: 15,
        marginVertical: 10
    },
    boxContent: {
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    weightContainer: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    weightText: {
        fontFamily: Roboto.regular,
        fontSize: 36,
        color: '#fff'
    },
    unitText: {
        fontFamily: Roboto.regular,
        fontSize: 24,
        color: '#fff',
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        color: '#fff',
        fontFamily: Roboto.regular,
        fontSize: 15,
        marginLeft: 10
    },
    textTitle: {
        color: '#fff',
        fontFamily: Roboto.regular,
        fontSize: 20,
    },
    circleIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: primary.darker,
        justifyContent: 'center',
        alignItems: 'center'
    },
    skeletonContainer: {
        marginVertical: 10,
        borderRadius: 5,
    },
    skeletonWeightText: {
        width: 80,
    },
    skeletonDateText: {
        width: 140,
    }
});