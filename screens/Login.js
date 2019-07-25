/*import React, {Component} from 'react';
import styles from '../../resources/styles/LoginStyle' 
import materialTheme from '../constants/Theme';
import Images from '../constants/Images';
import {Image, Text, View, TextInput, ScrollView, KeyboardAvoidingView,TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';
const { width } = Dimensions.get('screen');

 
export default class LoginScreen extends React.Component {
  

  render() {
    return (
        <ScrollView>
            <KeyboardAvoidingView style={styles.containerView} behavior="padding" enabled>
                <View style={styles.loginScreenContainer}>
                    <View style={styles.loginFormView}>
                        <View style={styles.logoText}>
                            <Image source={{  uri: Images.Onboarding }}
                                   style={{ height: height, width: width, zIndex: 1 }}/>
                        </View>

    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
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
                onPress={() => navigation.navigate('Home')}>
                Empezar
              </Button>
            </Block>
          </Block>
        </Block>
        </Block>
      
    );
  }
/*
  _signInAsync = async () => {
    //await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Home');
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onRegisterPress() {
    this.props.navigation.navigate('Modoreg');
  }

  onForgotPress() {
    this.props.navigation.navigate('ForgotPassword');
  }

}

*/
