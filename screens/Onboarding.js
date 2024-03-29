import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';

export default class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block flex style={styles.container}>
        <StatusBar hidden={true} />
        <Block flex center>
          <ImageBackground
            source={{  uri: Images.Onboarding }}
            style={{ height: height, width: width, zIndex: 1 }}
            //marginTop: '-55%'
          />
        </Block>
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{ zIndex: 2 }}>
            <Block center>
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.INFO}
                onPress={() => navigation.navigate('Login')}>
                Empezar
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
    bottom: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
});
