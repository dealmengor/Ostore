import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Image } from 'react-native';
import { Block, Button, Text, theme,Input } from 'galio-framework';

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';

export default class Login extends React.Component {


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
            <Image source={require('../assets/images/login.png')} style={{width: 220, height: 210}}/>
              <Input placeholder="Correo" />
              <Input placeholder="Contraseña" />
              
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
