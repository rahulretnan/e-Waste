import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Card, CardItem, Content, Item, Thumbnail } from 'native-base';
import styles from './Styles'
import { Dropdown } from 'react-native-material-dropdown';

export default class MyOrder extends Component {
  static navigationOptions = {
    drawerLabel: 'My Order',
    header: null,
    drawerIcon: ({ tintColor }) => (
      <Icon name="cart" style={{ fontSize: 24, color: 'grey' }} />
    )
  }
  constructor(props) {

    super(props)
    this.state = {
      deviceList: [
        { name: "Readmi", price: "₹1000", short_desc: "phone", seller: "Seller Details" },
        { name: "Readmi", price: "₹1000", short_desc: "phone", seller: "Seller Details" },  
        { name: "Readmi", price: "₹1000", short_desc: "phone", seller: "Seller Details" },  
        { name: "Readmi", price: "₹1000", short_desc: "phone", seller: "Seller Details" },  
        { name: "Readmi", price: "₹1000", short_desc: "phone", seller: "Seller Details" },  
        { name: "Readmi", price: "₹1000", short_desc: "phone", seller: "Seller Details" },  
      ]
    }
  }
  render() {
    let data = [{
      value: '1',
    }, {
      value: '2',
    }, {
      value: '3',
    }, {
      value: '4',
    }, {
      value: '5',
    }, {
      value: 'more',
    }];
    return (
      <Container >
        <Header style={styles.header} iosBarStyle={"light-content"}>
          <Left >
            <Icon style={{ width: 20 }} name='menu' onPress={() => this.props.navigation.openDrawer()} style={{ color: 'white' }} />
          </Left>
          <Body>
            <Title>My Orders</Title>
          </Body>
          <Right>
            <View style={{ marginRight: 20 }}>
              <Icon name='search' onPress={() => this.props.navigation.navigate('Home')} style={{ color: 'white' }} />
            </View>
            <View >
              <Icon name='heart' onPress={() => this.props.navigation.navigate('Wishlist')} style={{ color: 'white' }} />
            </View>
          </Right>
        </Header>
       
        <ScrollView>
        {this.state.deviceList.map((single_data, key) => (
              <Container key={key} style={styles.card} >
            <Content>
              <Card>
                <CardItem>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
                    <Button style={{width:'50%',alignItems:'center',justifyContent:'center',backgroundColor:'orange',height:60,borderRadius:30,marginRight:5}}>
                        <Text style={{fontSize:18,color:'white'}}>OrderID</Text>
                    </Button>
                    <Button
                    onPress={() => this.props.navigation.navigate('Payment')}
                    style={{width:'50%',alignItems:'center',justifyContent:'center',height:60,backgroundColor:'green',borderRadius:30}}>
                        <Text style={{fontSize:18,color:'white'}}>Track</Text>
                    </Button>
                </View>
                </CardItem>
                <CardItem cardBody >
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column',marginLeft:20,marginTop:30 }}>
                      <Text style={{fontSize:20}}> {single_data.name}</Text>
                      <Text style={{fontSize:16,marginTop:20}} >{single_data.short_desc}</Text>
                      <Text style={{fontSize:16,marginTop:20}} >{single_data.seller}</Text>
                      <Text style={{fontSize:16,marginTop:20,fontWeight:'bold'}} >Price : {single_data.price}</Text>
                    </View>
                    <Right style={{ alignSelf: 'flex-end', flex: 1, flexDirection: 'column' }}>
                      <Image source={require('../../img/image.png')} style={styles.image} />
                      <View style={{ padding:5,marginEnd: 20, width: '22%',marginBottom:85 }}>
                        <Dropdown
                          label='Qty'
                          data={data} /> 
                      </View>
                    </Right>
                  </View>
                </CardItem>
                <CardItem style={{flexDirection:'row', padding:5}}>
                <Button transparent style={styles.button}>
                  <Icon name='bookmark'/>
                  <Text>Add to Wishlist</Text>
                </Button>
                <Button transparent style={styles.button}>
                <Icon name='close'/>
                  <Text>Cancel</Text>
                </Button>
                </CardItem>
              </Card>
            </Content>
          </Container>
))}
         
          
        </ScrollView>
      </Container>
    )
  }
}
