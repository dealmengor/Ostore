import React from 'react';
import { Easing, Animated, Platform } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import { Block, Text, theme } from "galio-framework";

import ComponentsScreen from '../screens/Components';
import HomeScreen from '../screens/Home';
import OnboardingScreen from '../screens/Onboarding';
import LoginScreen from '../screens/Login';
import ProductsScreen from '../screens/Products';
import StoresScreen from '../screens/Stores';
import ProfileScreen from '../screens/Profile';
import ProScreen from '../screens/Pro';
import SettingsScreen from '../screens/Settings';
import MystoreScreen from '../screens/Mystore';
import DepartmentsScreen from '../screens/Departments';
import ProductFormScreen from '../screens/ProductsForm';
import ProductdetailsScreen from '../screens/Productdetails';
import StoredetailsScreen from '../screens/Storedetails';

import Menu from './Menu';
import Header from '../components/Header';
import { Drawer } from '../components/';

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index
    const width = layout.initWidth

    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    })
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1],
    })
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0],
    })

    const scaleWithOpacity = { opacity }
    const screenName = "Search"

    if (screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] }
  }
})


//Stacks Principales

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header white transparent title="Perfil" navigation={navigation} />,
      headerTransparent: true,
    })
  },
}, {
    cardStyle: { backgroundColor: '#EEEEEE', },
    transitionConfig,
  });

const MystoreStack = createStackNavigator({
  MyStore: {
    screen: MystoreScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header black transparent title="Mi Tienda" navigation={navigation} />,
      headerTransparent: true,
    })
  },
  ProductsForm: {
    screen: ProductFormScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header back white transparent title="Formulario" navigation={navigation} />,
      headerTransparent: true,
    })
  },
}, {
    cardStyle: { backgroundColor: '#EEEEEE', },
    transitionConfig,
  });

const DepartmentsStack = createStackNavigator({
  Departments: {
    screen: DepartmentsScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header black transparent title="Departamentos" navigation={navigation} />,
      headerTransparent: true,
    })
  },
}, {
    cardStyle: { backgroundColor: '#EEEEEE', },
    transitionConfig,
  });

  

/*
const ComponentsStack = createStackNavigator({
  Components: {
    screen: ComponentsScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Componentes" navigation={navigation} />,
    })
  },
}, {
    cardStyle: { backgroundColor: '#EEEEEE', },
    transitionConfig,
  });
*/

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Configuración" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});


//Stack de Navegación Múltiple HOME.JS 
const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header tabs title="Home" navigation={navigation} />,
    })
  },
  Departments: {
    screen: DepartmentsScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header back black transparent title="Departamentos" navigation={navigation} />,
      headerTransparent: true,
    })
  },
  Stores: {
    screen: StoresScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header back black transparent title="Tiendas" navigation={navigation} />,
      headerTransparent: true,
    })
  },
  Products: {
    screen: ProductsScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header back black transparent title="Productos" navigation={navigation} />,
      headerTransparent: true,
    })
  },
  //Detalles de Producto
  Productdetails: {
    screen: ProductdetailsScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header back white transparent title="Detalles de Producto" navigation={navigation} />,
      headerTransparent: true,
    })
  },
  //Detalles de Tienda
  Storedetails: {
    screen: StoredetailsScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header back black transparent title="Detalles de Tienda" navigation={navigation} />,
      headerTransparent: true,
    })
  },
  
},
  {
    cardStyle: {
      backgroundColor: '#EEEEEE', //this is the backgroundColor for the app
    },
    transitionConfig,
  });
  
//Interactividad sin entrada en el menú de navegación
const AppStack = createDrawerNavigator(
  {
    Onboarding: {
      screen: OnboardingScreen,
      navigationOptions: {
        drawerLabel: () => { },
      },
    },

    Login: {
      screen: LoginScreen,
      navigationOptions: {
        drawerLabel: () => { },
      },
    },

    //Entradas asociadas al menú de navegación las cuales pueden estar asociada a un stack o un screen
    Home: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: ({ focused }) => (
          <Drawer focused={focused} screen="Home" title="Home" />
        )
      }
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({ focused }) => (
          <Drawer focused={focused} screen="Profile" title="Perfil" />
        ),
      }),
    },
    MyStore: {
      screen: MystoreStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({ focused }) => (
          <Drawer focused={focused} screen="Mystore" title="Mi Tienda" />
        )
      }),
    },


    Departments: {
      screen: DepartmentsStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({ focused }) => (
          <Drawer focused={focused} screen="Departments" title="Departamentos" />
        ),
      }),
    },
/*
    Insights: {

      screen: ProScreen,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Pro" title="Insights" />
        ),
      }),
    },
    Favorites: {
      screen: ProScreen,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Pro" title="Favoritos" />
        ),
      }),
    },
    */
    Settings: {
      screen: SettingsStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Settings" title="Configuración" />
        ),
      }),
    },
    /*
    Components: {
      screen: ComponentsStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({ focused }) => (
          <Drawer focused={focused} screen="Components" title="Componentes" />
        ),
      }),
    },
   */
    MenuDivider: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: () => <Block style={{ marginVertical: 8 }}><Text>{` `}</Text></Block>,
      },
    },
    LogOut: {
      screen: LoginScreen,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({ focused }) => (
          <Drawer focused={focused} screen="Login" title="Cerrar Sesión" />

        ),
      }),
    },
    /*
    SignUp: {
      screen: ProScreen,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Pro" title="Sign Up" />
        ),
      }),
    },
    */
  },
  Menu
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;