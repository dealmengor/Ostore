import React from 'react';
import { StyleSheet, Dimensions, ScrollView,TouchableOpacity,ActivityIndicator,View } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';

import { Icon, Product, Banner } from '../components/';

const { width } = Dimensions.get('screen');
import products from '../constants/products';


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource:[],
      tiendaSource:[]
     };
   }

  componentDidMount(){
    fetch("http://18.225.36.133:8000/api/v1/productos/")
    .then(response => {
      if (response.status == 200){
        return response.json();
      }else{
        this.setState({
          loading: true,
          dataSource: null
         })
      }
    })
    .then((responseJson)=> {
      this.setState({
       loading: false,
       dataSource: responseJson.results
      })
      
    })
    .catch(error=>console.log(error));
  }

  



  renderSearch = () => {
    const { navigation } = this.props;
    const iconCamera = <Icon size={16} color={theme.COLORS.MUTED} name="zoom-in" family="material" />

    return (
      <Input
        right
        color="black"
        style={styles.search}
        iconContent={iconCamera}
        placeholder="¿Qué buscas?"
        onFocus={() => navigation.navigate('Pro')}
      />
    )
  }

  
  renderTabs = () => {
    const { navigation } = this.props;  

    return (
      <Block row style={styles.tabs}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Stores')}>
          <Block row middle>
          <Icon name="store" family="material" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>{tabTitleLeft || 'Tiendas'}</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Products')}>
          <Block row middle>
          <Icon size={16} name="shopping-bag" family="feather" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>{tabTitleRight || 'Productos'}</Text>
          </Block>
        </Button>
      </Block>
    )
  }

  
  renderProducts = () => {

    if(this.state.loading){
      return( 
        <View style={styles.loader}> 
          <ActivityIndicator size="large" color="#0c9"/>
        </View>
      );
    }
      return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.products}>
          <Block flex>
           
          
         
            <Text bold size={16} style={{marginBottom: 8}}>Novedades</Text>
            
            {this.state.dataSource.map(function(object, i) {
              return (
                <Product product={object} horizontal key={object.id}/>
              );
            })}
          </Block>
        </ScrollView>
      )   
  }

  /*
   <Text bold size={16} style={{marginBottom: 8}}>Nuevas Tiendas</Text>

            <Block flex row>
              <Product product={products[1]} style={{ marginRight: theme.SIZES.BASE }} />
              <Product product={products[3]} />
            </Block>
            <Block flex row>
              <Product product={products[0]} style={{ marginRight: theme.SIZES.BASE }} />
              <Product product={products[3]} />
            </Block>

  */

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderProducts()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300'
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
});
