import moment from 'moment';
import 'moment/locale/pt-br'
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

import Header from '../../components/Header';
import { BoxFluid, Box, GridBox } from '../../components/Box';
import { primary, secondary, third, fourth, fifth } from '../../utils/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../../context/auth';
import { Roboto } from '../../utils/fonts';

const HomeScreen = ({ navigation }) => {
  const [currentTime, setCurrentTime] = useState(moment().format('HH:mm'));
  const [currentDay, setCurrentDay] = useState(moment().format('ddd, DD [de] MMM'));
  const [items, setItems] = useState({});
  const { signOut, user } = useContext(AuthContext);

  setInterval(() => {
    moment().format('HH:mm') !== currentTime && setCurrentTime(moment().format('HH:mm'));
    moment().format('ddd, DD [de] MMM') !== currentDay && setCurrentDay(moment().format('ddd, DD [de] MMM'));
  }, 1000);

  const handleSignout = () => {
    signOut();
  };

  return (
    <View style={styles.container}>
      <Header
        backgroundColor={primary.darker}
        label="Inicio"
        onClick={() => navigation.openDrawer()}
      />
      <View style={styles.items}>
        <BoxFluid
          text={currentTime}
          secondaryText={currentDay}
          icon="calendar-clock"
          iconSize={30}
          fluid
        />
        <View style={styles.multiItems}>
          <Text style={styles.textWelcome}>Olá, {user.name}</Text>
          <GridBox
            inLine={2}
            boxes={[
              {
                colorPrimary: secondary.default,
                colorSecondary: secondary.dark,
                text: '65',
                secondaryText: 'kg',
                icon: 'weight',
                iconSize: 20,
              },
              {
                colorPrimary: third.default,
                colorSecondary: third.dark,
                text: '173',
                secondaryText: 'cm',
                icon: 'human-male-height-variant',
                iconSize: 20,
              },
              {
                colorPrimary: fourth.default,
                colorSecondary: fourth.dark,
                text: '287',
                secondaryText: 'passos',
                icon: 'shoe-print',
                iconSize: 20,
              },
              {
                colorPrimary: fifth.default,
                colorSecondary: fifth.dark,
                text: '21',
                secondaryText: 'IMC',
                icon: 'google-fit',
                iconSize: 20,
              },
            ]}
          />
        </View>
      </View>
      <TouchableOpacity onPress={handleSignout}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  items: { marginTop: 20, alignSelf: 'center', width: '90%' },
  textWelcome: {
    marginBottom: 5,
    fontSize: 18,
    fontFamily: Roboto.regular,
    marginLeft: 10,
  },
  multiItems: { marginTop: 20, flexDirection: 'row', flexWrap: 'wrap' },
});

export default HomeScreen;
