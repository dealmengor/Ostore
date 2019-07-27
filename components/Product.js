import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import materialTheme from '../constants/Theme';

const { width } = Dimensions.get('screen');

class Product extends React.Component {
  render() {
    const { navigation, product, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];

    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Productdetails', { product: product })}>
        <Block row={horizontal} card flex style={[styles.product, styles.shadow, style]}>
            <Block flex style={[styles.imageContainer, styles.shadow]}>
              <Image source={{ uri: product.imagecat ? product.imagecat : 'https://asimplecompany.000webhostapp.com/WEBSERVER/Ostore/Products/1.jpg'}} style={imageStyles} />         
            </Block>
            <Block flex space="between" style={styles.productDescription}>
              <Text size={14} style={styles.productTitle}>{product.prod_descripcion}</Text>
              <Text size={12} muted={!priceColor} color={priceColor}>${product.prod_price}</Text>
            </Block>
        </Block>
        </TouchableWithoutFeedback>
    );
  }
}

export default withNavigation(Product);

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    elevation: 1,
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  fullImage: {
    height: 215,
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});