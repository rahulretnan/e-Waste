import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Card, CardItem, Content, Item, Thumbnail, Label,Fab,Footer } from 'native-base';
import styles from './Styles'
import { Dropdown } from 'react-native-material-dropdown';

export default class MyOrder extends Component {
  static navigationOptions = {
    drawerLabel: 'My Product',
    header: null,
    drawerIcon: ({ tintColor }) => (
      <Icon name="hammer" style={{ fontSize: 24, color: 'grey' }} />
    )
  }
  constructor(props) {

    super(props)
    this.state = {
      deviceList: [
        { name: "Readmi", price: "₹1000", short_desc: "phone" },
        { name: "Readmi", price: "₹1000", short_desc: "phone" },
        { name: "Readmi", price: "₹1000", short_desc: "phone" },
        { name: "Readmi", price: "₹1000", short_desc: "phone" },
        { name: "Readmi", price: "₹1000", short_desc: "phone" },
        { name: "Readmi", price: "₹1000", short_desc: "phone" },
      ],
            active: 'true'
        
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
            <Title>My Product</Title>
          </Body>
          <Right>
            <View style={{ marginRight: 20 }}>
              <Icon name='search' onPress={() => this.props.navigation.navigate('Home')} style={{ color: 'white' }} />
            </View>
            <View style={{ marginRight: 20 }}>
              <Icon name='heart' onPress={() => this.props.navigation.navigate('Wishlist')} style={{ color: 'white' }} />
            </View>
            <View >
              <Icon name='cart' onPress={() => this.props.navigation.navigate('Cart')} style={{ color: 'white' }} />
            </View>
          </Right>
        </Header>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
                    {/* <Button style={{width:'40%',alignItems:'center',justifyContent:'center',backgroundColor:'orange',height:40,borderRadius:30,marginRight:5}}>
                        <Text style={{fontSize:16,color:'white'}}>Add Device</Text>
                    </Button> */}
                    <Button
                    onPress={() => this.props.navigation.navigate('AddProduct')}
                    style={{width:'40%',alignItems:'center',justifyContent:'center',height:40,backgroundColor:'green',borderRadius:30}}>
                        <Text style={{fontSize:16,color:'white'}}>Add Component</Text>
                    </Button>
                </View>
        <ScrollView>
          {this.state.deviceList.map((single_data, key) => (
            <Container key={key} style={styles.card} >
              <Content>
                <Card>
                  <CardItem cardBody >
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <Left style={{ alignSelf: 'flex-start', flex: 1, alignItems: 'flex-start', flexDirection: 'column' }}>
                        <Image source={require('../../img/image.png')} style={styles.image} />
                        <View style={{ marginLeft: 20, padding: 10, width: 80, marginBottom: 30 }}>
                          <Dropdown
                            label='Qty'
                            data={data} />
                        </View>
                      </Left>
                      <View style={{ flexDirection: 'column', flex: 1, marginTop: 30, alignSelf: 'flex-start', }}>
                        <Label style={{ fontSize: 20 }}>{single_data.name}</Label>
                        <Label style={{ fontSize: 16, marginTop: 20 }} >{single_data.short_desc}</Label>
                        <Label style={{ fontSize: 16, marginTop: 20, fontWeight: 'bold' }} >{single_data.price}</Label>
                      </View>
                    </View>
                  </CardItem>
                  <CardItem style={{ flexDirection: 'row', padding: 5 }}>
                    <Button transparent style={styles.button}>
                      <Icon name='construct' />
                      <Text>Edit</Text>
                    </Button>
                    <Button transparent style={styles.button}>
                      <Icon name='trash' />
                      <Text>Remove</Text>
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
