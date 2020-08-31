import moment from 'moment';
import 'moment/locale/pt-br'
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, AsyncStorage, Alert, TouchableOpacity as TouchO } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import api, { GetToken } from '../../services/api'

import Header from '../../components/Header';
import { BoxFluid, Box, GridBox } from '../../components/Box';
import { primary, secondary, third, fourth, fifth } from '../../utils/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../../context/auth';
import { Roboto } from '../../utils/fonts';

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState()
  const [currentTime, setCurrentTime] = useState(moment().format('HH:mm'));
  const [currentDay, setCurrentDay] = useState(moment().format('ddd, DD [de] MMM'));
  const [items, setItems] = useState([]);
  const [info, setInfo] = useState()

  const GetInfoUser = async () => {
    console.log('a');
    api.get('/user/info', {
      headers: {
        'Authorization': await GetToken()
      }
    })
      .then(response => {
        setItems([
          {
            colorPrimary: secondary.default, colorSecondary: secondary.dark,
            text: response.data.weight, secondaryText: 'kg',
            icon: 'weight', iconSize: 20,
          },
          {
            colorPrimary: third.default, colorSecondary: third.dark,
            text: response.data.height, secondaryText: 'cm',
            icon: 'human-male-height-variant', iconSize: 20,
          },
          {
            colorPrimary: fifth.default, colorSecondary: fifth.dark,
            text: response.data.IMC, secondaryText: 'IMC', sizeText: 45,
            icon: 'google-fit', iconSize: 20,
          }
        ])


      })
      .catch(error => {
        setItems(0)
        setInfo(error.response.data.message)
      })
  }

  useEffect(() => {
    AsyncStorage.getItem('@FM:user').then(user => {
      setUser(JSON.parse(user))
    })
    GetInfoUser()
  }, [])

  setInterval(() => {
    moment().format('HH:mm') !== currentTime && setCurrentTime(moment().format('HH:mm'));
    moment().format('ddd, DD [de] MMM') !== currentDay && setCurrentDay(moment().format('ddd, DD [de] MMM'));
  }, 1000);

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
          <View style={styles.headerWelcome}>
            <Text style={styles.textWelcome}>{user?.name ? `Olá, ${user.name}` : 'Seja Bem-Vindo(a)'}</Text>
            <TouchO onPress={GetInfoUser} activeOpacity={0.6}>
              <Icon style={{ marginLeft: 10 }} name="sync" size={20} />
            </TouchO>
          </View>
          {items === 0
            ? (
              <Text style={{ marginLeft: 10, textAlign: 'center' }}>{info || 'Você precisa cadastrar um peso e uma altura...'}</Text>
            )
            : (
              <GridBox
                inLine={2}
                boxes={items}
              />
            )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  items: { marginTop: 20, alignSelf: 'center', width: '90%' },
  headerWelcome: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textWelcome: {
    marginBottom: 5,
    fontSize: 18,
    fontFamily: Roboto.regular,
    marginLeft: 10,
  },
  multiItems: { marginTop: 20, flexDirection: 'row', flexWrap: 'wrap' },
});

export default HomeScreen;
