import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Card, CardItem, Content, Item, Thumbnail, Label } from 'native-base';
import styles from './Styles'

export default class Delivery extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  })
  render() {
    return (
      <Container >
        <Header style={styles.header} iosBarStyle={"light-content"}>
          <Left >
            <Icon style={{ width: 20 }} name='arrow-round-back' onPress={() => this.props.navigation.openDrawer()} style={{ color: 'white' }} />
          </Left>
          <Body>
            <Title>Delivery</Title>
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
        <ScrollView>
          <Container style={styles.card} >
            <Content>
              <Card>
                <CardItem cardBody >
                  <View style={{ flex: 1, padding: 20 }}>
                    <Text>Name</Text>
                    <Text>Address</Text>
                    <Text>Street</Text>
                    <Text>Pin Code</Text>
                  </View>
                </CardItem>
                <CardItem style={{ padding: 5, alignSelf: 'center' }}>
                  <Button style={styles.button}>
                    <Text style={{ color: 'white' }}>Change or Add Address</Text>
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
