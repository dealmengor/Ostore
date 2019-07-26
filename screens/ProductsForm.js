import React, { component } from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform, AppRegistry } from 'react-native';
import { Block, Button, Text, theme, Input } from 'galio-framework';
import { Icon } from '../components/';
import { ImagePicker, Permissions, Constants } from 'expo';

const { height, width } = Dimensions.get('screen');
import { Images, materialTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";
import { ScrollView } from 'react-native-gesture-handler';

export default class ProductsForm extends React.Component {
  state = {
    image: null,
  };
  render() {
    let { image } = this.state;
    const { navigation } = this.props;
    return (

      <Block flex style={styles.container}>
        <ScrollView>
          <StatusBar barStyle="light-content" />
          <Block flex center>
            <ImageBackground
              source={{ uri: Images.ImgLogin }}
              style={{ height: height, width: width, zIndex: 1 }}
            />
          </Block>

          <Block flex space="between" style={styles.padded}>
            <Block>
              <Text bold p color="white">Registre los datos de su Producto:</Text>
            </Block>
            <Block flex space="around" style={{ zIndex: 2 }}>

              <Block center >
                <Text p color="white"></Text>
                <Block flex center>
                  {image &&
                    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </Block>
                <Block>
                  <Button
                    shadowless
                    style={styles.button}
                    color={materialTheme.COLORS.INFO}
                    onPress={this._pickImage}>
                    Añadir
              </Button>
                </Block>
                <Input
                  right
                  placeholder="Título"
                  placeholderTextColor={materialTheme.COLORS.DEFAULT}
                  style={{ borderRadius: 3, borderColor: materialTheme.COLORS.INPUT }}
                  iconContent={<Icon size={16} color={theme.COLORS.ICON} name="type" family="feather" />}
                />
                <Input
                  right
                  placeholder="Precio"
                  placeholderTextColor={materialTheme.COLORS.DEFAULT}
                  style={{ borderRadius: 3, borderColor: materialTheme.COLORS.INPUT }}
                  keyboardType={'numeric'}
                  iconContent={<Icon size={16} color={theme.COLORS.ICON} name="money" family="font-awesome" />}
                />
                <Input
                  right
                  multiline={true}
                  placeholder="Descripción"
                  placeholderTextColor={materialTheme.COLORS.DEFAULT}
                  style={{ height: 150, borderRadius: 3, borderColor: materialTheme.COLORS.INFO }}
                  iconContent={<Icon size={16} color={theme.COLORS.ICON} name="align-justify" family="font-awesome" />}
                />
              </Block>
              <Block>
                <Button
                  shadowless
                  style={styles.button}
                  color={materialTheme.COLORS.INFO}
                  onPress={() => navigation.navigate('Products')}>
                  Registrar Producto
              </Button>

              </Block>
            </Block>
          </Block>
        </ScrollView>
      </Block>

    );

  }
  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.android) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    zIndex: 3,
    position: 'absolute',
    bottom: height/2.5,

  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 8,
    marginLeft: 12,
    borderRadius: 2,
    height: 22
  },
  gradient: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 66,
  },
    input: {
    borderBottomWidth: 1,
  },
  inputDefault: {
    borderBottomColor: materialTheme.COLORS.PLACEHOLDER,
  },
  inputTheme: {
    borderBottomColor: materialTheme.COLORS.PRIMARY,
  },
  inputTheme: {
    borderBottomColor: materialTheme.COLORS.PRIMARY,
  },
  inputInfo: {
    borderBottomColor: materialTheme.COLORS.INFO,
  },
  inputSuccess: {
    borderBottomColor: materialTheme.COLORS.SUCCESS,
  },
  inputWarning: {
    borderBottomColor: materialTheme.COLORS.WARNING,
  },
  inputDanger: {
    borderBottomColor: materialTheme.COLORS.ERROR,
  },
});
