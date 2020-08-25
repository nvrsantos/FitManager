import { StyleSheet } from 'react-native';
import { input, primary } from '../../utils/colors';
import { Roboto } from '../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: input.background,
  },
  input: {
    width: '100%',
    height: 50,
    paddingLeft: 25,
    borderWidth: 1,
    borderColor: input.border,
    fontSize: 18,
    fontFamily: Roboto.light,
    fontWeight: '300',
  },
  borderTopRight: { borderTopRightRadius: 10 },
  borderTopLeft: { borderTopLeftRadius: 10 },
  borderBottomRight: { borderBottomRightRadius: 10 },
  borderBottomLeft: { borderBottomLeftRadius: 10 },

  // Selector Input
  containerSelector: {
    backgroundColor: input.background,
  },

  //Bottom Input
  containerBottom: {
    backgroundColor: input.background_dark,
  },
  contentBottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputBottom: {
    width: '90%',
    height: 30,
    paddingLeft: 35,
    fontSize: 18,
    fontFamily: Roboto.regular,
    fontWeight: '300',
    alignSelf: 'center',
    color: '#fff',
  },
  circleIcon: {
    backgroundColor: primary.darker,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 25,
    marginTop: -15,
    marginRight: 25,
    borderWidth: 2,
    borderColor: '#4B299C',
  },
});

export default styles;
