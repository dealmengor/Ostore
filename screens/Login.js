import React from 'react';

import { ImageBackground, StyleSheet, StatusBar, Dimensions, Image, icon, AsyncStorage, Alert } from 'react-native';
import { Block, Button, Text, theme, Input } from 'galio-framework'
import { Icon } from '../components/';


const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';

export default class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  }

  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex center>
          <ImageBackground
            source={{ uri: Images.ImgLogin }}
            style={{ height: height, width: width, zIndex: 1 }}
          />

        </Block>
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{ zIndex: 2 }}>
            <Block center >

              <Image source={require('../assets/images/login.png')} style={{ width: 220, height: 210 }} />
              <Input
                right
                placeholder="Usuario"
                onChangeText={val => this.onChangeText('username', val)}
                placeholderTextColor={materialTheme.COLORS.DEFAULT}
                style={{ borderRadius: 3, borderColor: materialTheme.COLORS.INPUT }}
                iconContent={<Icon size={16} color={theme.COLORS.ICON} name="user" family="font-awesome" />}
              />
              <Input
                right
                placeholder="Contraseña"
                onChangeText={val => this.onChangeText('password', val)}
                placeholderTextColor={materialTheme.COLORS.DEFAULT}
                style={{ borderRadius: 3, borderColor: materialTheme.COLORS.INPUT }}
                secureTextEntry={true}
                iconContent={<Icon size={16} color={theme.COLORS.ICON} name="key" family="font-awesome" />}
              />
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.INFO}
                onPress={() => navigation.navigate('Home')}>
                Iniciar Sesión
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>

    );
  }

  signInAsync = async () => {
    console.log("response");
    if (this.isEmpty(this.state.username) || this.isEmpty(this.state.password)) {
      Alert.alert('Datos vacios', 'Las credenciales introducidas, no son las correctas');
      return null;
    } else {
      fetch('http://18.219.213.57:8000/login/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correo: this.state.username,
          password: this.state.password,
        }),
      })
        .then((response) => {

          console.log(response);
          return response.json();
        })
        .then((responseJson) => {
          if (responseJson.access) {
            AsyncStorage.setItem('userToken', JSON.stringify(responseJson.access));
            AsyncStorage.setItem('userTokenRefresh', JSON.stringify(responseJson.refresh));
            this.props.navigation.navigate('Home');
          } else {
            Alert.alert('Error de LogIn', 'Las credenciales introducidas, no son las correctas');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  isEmpty(str) {
    return (!str || 0 === str.length);
  }


}


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
  },

  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',

    bottom: height / 2.5,
  },

  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    position: 'relative',
    bottom: -20
  },

  ostore_logo: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
});
