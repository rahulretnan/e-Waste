import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Card, CardItem, Content, Item, Thumbnail } from 'native-base';
import styles from './Styles'
import { Dropdown } from 'react-native-material-dropdown';

export default class Cart extends Component {
  static navigationOptions = {
    drawerLabel: 'Cart',
    drawerIcon: ({ tintColor }) => (
      <Icon name="cart" style={{ fontSize: 24, color: 'grey' }} />
    )
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
            <Icon style={{ width: 20 }} name='arrow-round-back' onPress={() => this.props.navigation.openDrawer()} style={{ color: 'white' }} />
          </Left>
          <Body>
            <Title>Cart</Title>
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
          <Container style={styles.card} >
            <Content>
              <Card>
                <CardItem cardBody >
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column',marginLeft:20,marginTop:30 }}>
                      <Text style={{fontSize:20}}>Item Name</Text>
                      <Text style={{fontSize:16,marginTop:20}} >Description</Text>
                      <Text style={{fontSize:16,marginTop:20,fontWeight:'bold'}} >₹1000</Text>
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
                <Icon name='trash'/>
                  <Text>Remove</Text>
                </Button>
                </CardItem>
              </Card>
            </Content>
          </Container>

          <Container style={styles.card} >
            <Content>
              <Card>
                <CardItem cardBody >
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column',marginLeft:20,marginTop:30 }}>
                      <Text style={{fontSize:20}}>Item Name</Text>
                      <Text style={{fontSize:16,marginTop:20}} >Description</Text>
                      <Text style={{fontSize:16,marginTop:20,fontWeight:'bold'}} >₹1000</Text>
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
                <Icon name='trash'/>
                  <Text>Remove</Text>
                </Button>
                </CardItem>
              </Card>
            </Content>
          </Container>

          <Container style={styles.card} >
            <Content>
              <Card>
                <CardItem cardBody >
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column',marginLeft:20,marginTop:30 }}>
                      <Text style={{fontSize:20}}>Item Name</Text>
                      <Text style={{fontSize:16,marginTop:20}} >Description</Text>
                      <Text style={{fontSize:16,marginTop:20,fontWeight:'bold'}} >₹1000</Text>
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
                <Icon name='trash'/>
                  <Text>Remove</Text>
                </Button>
                </CardItem>
              </Card>
            </Content>
          </Container>

          <Container style={styles.card} >
            <Content>
              <Card>
                <CardItem cardBody >
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column',marginLeft:20,marginTop:30 }}>
                      <Text style={{fontSize:20}}>Item Name</Text>
                      <Text style={{fontSize:16,marginTop:20}} >Description</Text>
                      <Text style={{fontSize:16,marginTop:20,fontWeight:'bold'}} >₹1000</Text>
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
                <Icon name='trash'/>
                  <Text>Remove</Text>
                </Button>
                </CardItem>
              </Card>
            </Content>
          </Container>
        </ScrollView>
        <View style={{padding:10, flexDirection: 'row', alignSelf: 'center' }}>
        <Button transparent style={{ flexDirection:'column',width: '50%', alignItems: 'center', justifyContent: 'flex-start', height: 50}}>
        <Text style={{marginEnd:80,marginTop:5, fontWeight:'100'}}>Total Amount</Text>
         <Text style={{marginEnd:110, fontWeight:'700'}}>₹1000</Text>
         </Button>
          <Button rounded style={{ width: '50%', alignItems: 'center', justifyContent: 'center', height: 50 }}>
            <Text style={{ fontSize: 16, color: 'white' }}>CONTINUE</Text>
          </Button>
        </View>
      </Container>
    )
  }
}
