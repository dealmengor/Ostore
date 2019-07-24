/*import React, {Component} from 'react';
import styles from '../../resources/styles/LoginStyle' 
import logo from '../../assets/images/logo.png';
import {Image, Text, View, TextInput, ScrollView, KeyboardAvoidingView,TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';



export default class LoginScreen extends Component {
  

  render() {
    return (
        <ScrollView>
            <KeyboardAvoidingView style={styles.containerView} behavior="padding" enabled>
                <View style={styles.loginScreenContainer}>
                    <View style={styles.loginFormView}>
                        <View style={styles.logoText}>
                            <Image style={styles.images} source={logo} />
                        </View>

                        <TextInput placeholder="Correo" placeholderColor="#93c572" style={styles.loginFormTextInput} />
                        <TextInput placeholder="Contraseña" placeholderColor="#93c572" style={styles.loginFormTextInput} secureTextEntry={true}/>
                        <Button
                        buttonStyle={styles.loginButton}
                        onPress={() => this._signInAsync()}
                        title="Iniciar Sesión"
                        textStyle={{fontFamily: 'KhmerUI'}}
                        />
                        <Button
                        buttonStyle={styles.loginButton}
                        onPress={() => this.onRegisterPress()}
                        title="Registrarse"
                        textStyle={{fontFamily: 'KhmerUI'}}
                        />
                        <TouchableHighlight 
                        style={styles.button}
                        onPress={()=> this.onForgotPress()}
                        >
                        <Text style={styles.forgotpass}>¿Olvidaste la contraseña?</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
  }

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