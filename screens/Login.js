import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Image, AsyncStorage,Alert } from 'react-native';
import { Block, Button, Text, theme,Input } from 'galio-framework';

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';

export default class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };

  onChangeText = (key, val) => {
    this.setState({ [key]: val});
  }

  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex center>
          <ImageBackground
            source={{  uri: Images.ImgLogin }}
            style={{ height: height, width: width, zIndex: 1 }}
          />
        </Block>
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{ zIndex: 2 }}>
            <Block center >
            <Image source={require('../assets/images/icon.png')} style={{width: 250, height: 250}}/>
              <Input placeholder="Email" 
              onChangeText={val => this.onChangeText('username', val)}
              />
              <Input placeholder="password" 
              onChangeText={val => this.onChangeText('password', val)}
              secureTextEntry={true}
              />
              
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.INFO}
                onPress={() => this._signInAsync()}>
                Iniciar Sesión
              </Button>
            </Block>
          </Block>
        </Block>
        </Block>
      
    );
  }

  _signInAsync = async () => {

      if (this.isEmpty(this.state.username) || this.isEmpty(this.state.password)){
        Alert.alert('Datos vacios', 'Las credenciales introducidas, no son las correctas');
        return null;
      }else{
        fetch('http://18.224.109.128:8000/login/', {
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
          if (responseJson.access){
            AsyncStorage.setItem('userToken', JSON.stringify(responseJson.access));
            AsyncStorage.setItem('userTokenRefresh', JSON.stringify(responseJson.refresh));
            this.props.navigation.navigate('Home');
          }else{
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

  //http://18.224.109.128:8000/login/
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: 100,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
});
