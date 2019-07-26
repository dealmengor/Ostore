import React from 'react';
import { StyleSheet, Switch, FlatList, Platform, TouchableOpacity, ScrollView } from "react-native";
import { Block, Text, theme, Icon } from "galio-framework";

import materialTheme from '../constants/Theme';

export default class Settings extends React.Component {
  state = {};

  toggleSwitch = switchNumber => this.setState({ [switchNumber]: !this.state[switchNumber] });

  renderItem = ({ item }) => {
    const {navigate} = this.props.navigation;

    switch(item.type) {
      case 'switch': 
        return (
          <Block row middle space="between" style={styles.rows}>
            <Text size={14}>{item.title}</Text>
            <Switch
              onValueChange={() => this.toggleSwitch(item.id)}
              ios_backgroundColor={materialTheme.COLORS.SWITCH_OFF}
              thumbColor={Platform.OS === 'android' ? materialTheme.COLORS.SWITCH_OFF : null}
              trackColor={{ false: materialTheme.COLORS.SWITCH_OFF, true: materialTheme.COLORS.SWITCH_ON }}
              value={this.state[item.id]}
            />
          </Block>
        );
      case 'button': 
        return (
          <Block style={styles.rows}>
            <TouchableOpacity onPress={() => navigate('Pro')}>
              <Block row middle space="between" style={{paddingTop:7}}>
                <Text size={14}>{item.title}</Text>
                <Icon name="angle-right" family="font-awesome" style={{ paddingRight: 5 }} />
              </Block>
            </TouchableOpacity>
          </Block>);
      default:
        break;
    }
  }

  render() {
    const recommended = [
      { title: "Inicio de Sesión con TouchID", id: "face", type: "switch" },
      { title: "Bloqueo de Cuenta", id: "autolock", type: "switch" },
      { title: "Notificationes", id: "Notifications", type: "button" },
    ];

    const payment = [
      { title: "Métodos de Pago", id: "Payment", type: "button" },
      { title: "Promociones y Tarjetas de Regalo", id: "gift", type: "button" },
    ];
    
    const privacy = [
      { title: "Acuerdo de Usuario", id: "Agreement", type: "button" },
      { title: "Privacidad", id: "Privacy", type: "button" },
      { title: "Acerca de Nosotros", id: "About", type: "button" },
    ];

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.settings}>
        <FlatList
          data={recommended}
          keyExtractor={(item, index) => item.id}
          renderItem={this.renderItem}
          ListHeaderComponent={
            <Block style={styles.title}>
              <Text bold center size={theme.SIZES.BASE} style={{ paddingBottom: 5 }}>
                Ajustes de la Aplicación
              </Text>
              <Text center muted size={12}>
              Configuración general de OsStore
              </Text>
            </Block>
          }
        />
        <Block style={styles.title}>
          <Text bold center size={theme.SIZES.BASE} style={{ paddingBottom: 5 }}>
          Pagos
          </Text>
          <Text center muted size={12}>
          Maneje su Wallet y métodos de pago
          </Text>
        </Block>
        <FlatList
          data={payment}
          keyExtractor={(item, index) => item.id}
          renderItem={this.renderItem}
        />
        <Block style={styles.title}>
          <Text bold center size={theme.SIZES.BASE} style={{ paddingBottom: 5 }}>
          Privacidad
          </Text>
          <Text center muted size={12}>
          Información Legal y acuerdos
          </Text>
        </Block>
        <FlatList
          data={privacy}
          keyExtractor={(item, index) => item.id}
          renderItem={this.renderItem}
        />
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  settings: {
    paddingVertical: theme.SIZES.BASE / 3,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  rows: {
    height: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE / 2,
  }
});
