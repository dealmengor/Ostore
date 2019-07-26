import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions
} from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import { Images } from '../constants/';


const { width } = Dimensions.get('screen');

export default class Departments extends React.Component {

  renderCards = () => {
    return (
          <Block>
            <Block flex card shadow style={styles.category}>
              <ImageBackground
                source={{ uri: Images.Products['Accessories'] }}
                style={[styles.imageBlock, { width: width - (theme.SIZES.BASE * 2), height: 252 }]}
                imageStyle={{ width: width - (theme.SIZES.BASE * 2), height: 252 }}>
                <Block style={styles.categoryTitle}>
                  <Text size={18} bold color={theme.COLORS.WHITE}>Accesorios</Text>
                </Block>
              </ImageBackground>
            </Block>
            <Block flex card shadow style={styles.category}>
              <ImageBackground
                source={{ uri: Images.Products['Technology'] }}
                style={[styles.imageBlock, { width: width - (theme.SIZES.BASE * 2), height: 252 }]}
                imageStyle={{ width: width - (theme.SIZES.BASE * 2), height: 252 }}>
                <Block style={styles.categoryTitle}>
                  <Text size={18} bold color={theme.COLORS.WHITE}>Tecnología</Text>
                </Block>
              </ImageBackground>
            </Block>
            <Block flex card shadow style={styles.category}>
              <ImageBackground
                source={{ uri: Images.Products['Fitness'] }}
                style={[styles.imageBlock, { width: width - (theme.SIZES.BASE * 2), height: 252 }]}
                imageStyle={{ width: width - (theme.SIZES.BASE * 2), height: 252 }}>
                <Block style={styles.categoryTitle}>
                  <Text size={18} bold color={theme.COLORS.WHITE}>Fitness</Text>
                </Block>
              </ImageBackground>
            </Block>
            </Block>
    )
  }

  render() {
    return (
      <Block flex center>
        <ScrollView
          style={styles.components}
          showsVerticalScrollIndicator={false}>
          {this.renderCards()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  components: {
  },
  title: {
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
  },
  group: {
    paddingTop: theme.SIZES.BASE * 3.75,
  },

  imageBlock: {
    overflow: 'hidden',
    borderRadius: 4,
  },
 
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0,
  },
  categoryTitle: {
    height: '100%',
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

});
