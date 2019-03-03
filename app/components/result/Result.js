import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Card, CardItem, Content, Item } from 'native-base';
import styles from './Styles'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';


class Components extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
    })
  render() {
    // const { goBack } = this.props.navigation;
    return (
      <Container >
        <Header style={styles.header} iosBarStyle={"light-content"}>
          {/* <Left >
            <Icon style={{ width: 20 }} name='arrow-round-back' onPress={() => this.props.navigation.navigate('Home')} style={{ color: 'white' }} />
          </Left> */}
          <Body>
            <Title>search_item</Title>
          </Body>
          <Right>
            <View style={{ marginRight: 20 }}>
              <Icon name='search' onPress={() => this.props.navigation.navigate('Home')} style={{ color: 'white' }} />
            </View>
            <View style={{ marginRight: 20 }}>
              <Icon name='heart' onPress={() => this.props.navigation.navigate('Wishlist')} style={{ color: 'white' }} />
            </View>
            <Icon name='cart' onPress={() => this.props.navigation.navigate('Cart')} style={{ color: 'white' }} />
          </Right>
        </Header>
        <ScrollView>
          <Container style={styles.card} >
            <Content>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('ItemView')}>
                <Image source={require('../../img/image.png')} style={styles.image} />
              </TouchableOpacity>
            </Content>
            <Content contentContainerStyle={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('ItemView')}>
                <Content contentContainerStyle={styles.textContainer}>
                  <Text style={styles.itemName}>Name of the item</Text>
                  <Text style={styles.textDescripition}>description</Text>
                  <Text style={styles.textAmount}> ‎₹100</Text>
                </Content>
              </TouchableOpacity>
              <Right style={styles.heartContainer}>
                <Icon name="heart" style={styles.heart} />
              </Right>
            </Content>
          </Container>
          <Item />

        </ScrollView>
      </Container>
    )
  }
}





class Devices extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
    })
    
  render() {
    // const { goBack } = this.props.navigation;
    return (
      <Container >
        <Header style={styles.header} iosBarStyle={"light-content"}>
          {/* <Left >
            <Icon style={{ width: 20 }} name='arrow-round-back' onPress={() => this.props.navigation.navigate('Home')} style={{ color: 'white' }} />
          </Left> */}
          <Body>
            <Title>search_item</Title>
          </Body>
          <Right>
            <View style={{ marginRight: 20 }}>
              <Icon name='search' onPress={() => this.props.navigation.navigate('Home')} style={{ color: 'white' }} />
            </View>
            <View style={{ marginRight: 20 }}>
              <Icon name='heart' onPress={() => this.props.navigation.navigate('Wishlist')} style={{ color: 'white' }} />
            </View>
            <Icon name='cart' onPress={() => this.props.navigation.navigate('Cart')} style={{ color: 'white' }} />
          </Right>
        </Header>
        <ScrollView>
          <Container style={styles.card} >
            <Content>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('ItemView')}>
                <Image source={require('../../img/image.png')} style={styles.image} />
              </TouchableOpacity>
            </Content>
            <Content contentContainerStyle={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('ItemView')}>
                <Content contentContainerStyle={styles.textContainer}>
                  <Text style={styles.itemName}>Name of the item</Text>
                  <Text style={styles.textDescripition}>description</Text>
                  <Text style={styles.textAmount}> ‎₹100</Text>
                </Content>
              </TouchableOpacity>
              <Right style={styles.heartContainer}>
                <Icon name="heart" style={styles.heart} />
              </Right>
            </Content>
          </Container>
          <Item />


          <Container style={styles.card} >
            <Content>
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Image source={require('../../img/image.png')} style={styles.image} />
              </TouchableOpacity>
            </Content>
            <Content contentContainerStyle={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Content contentContainerStyle={styles.textContainer}>
                  <Text style={styles.itemName}>Name of the item</Text>
                  <Text style={styles.textDescripition}>description</Text>
                  <Text style={styles.textAmount}> ‎₹100</Text>
                </Content>
              </TouchableOpacity>
              <Right style={styles.heartContainer}>
                <Icon name="heart" style={styles.heart} />
              </Right>
            </Content>
          </Container>
          <Item />


          <Container style={styles.card} >
            <Content>
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Image source={require('../../img/image.png')} style={styles.image} />
              </TouchableOpacity>
            </Content>
            <Content contentContainerStyle={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Content contentContainerStyle={styles.textContainer}>
                  <Text style={styles.itemName}>Name of the item</Text>
                  <Text style={styles.textDescripition}>description</Text>
                  <Text style={styles.textAmount}> ‎₹100</Text>
                </Content>
              </TouchableOpacity>
              <Right style={styles.heartContainer}>
                <Icon name="heart" style={styles.heart} />
              </Right>
            </Content>
          </Container>
          <Item />


          <Container style={styles.card} >
            <Content>
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Image source={require('../../img/image.png')} style={styles.image} />
              </TouchableOpacity>
            </Content>
            <Content contentContainerStyle={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Content contentContainerStyle={styles.textContainer}>
                  <Text style={styles.itemName}>Name of the item</Text>
                  <Text style={styles.textDescripition}>description</Text>
                  <Text style={styles.textAmount}> ‎₹100</Text>
                </Content>
              </TouchableOpacity>
              <Right style={styles.heartContainer}>
                <Icon name="heart" style={styles.heart} />
              </Right>
            </Content>
          </Container>
          <Item />


          <Container style={styles.card} >
            <Content>
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Image source={require('../../img/image.png')} style={styles.image} />
              </TouchableOpacity>
            </Content>
            <Content contentContainerStyle={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Content contentContainerStyle={styles.textContainer}>
                  <Text style={styles.itemName}>Name of the item</Text>
                  <Text style={styles.textDescripition}>description</Text>
                  <Text style={styles.textAmount}> ‎₹100</Text>
                </Content>
              </TouchableOpacity>
              <Right style={styles.heartContainer}>
                <Icon name="heart" style={styles.heart} />
              </Right>
            </Content>
          </Container>
          <Item />



          <Container style={styles.card} >
            <Content>
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Image source={require('../../img/image.png')} style={styles.image} />
              </TouchableOpacity>
            </Content>
            <Content contentContainerStyle={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Content contentContainerStyle={styles.textContainer}>
                  <Text style={styles.itemName}>Name of the item</Text>
                  <Text style={styles.textDescripition}>description</Text>
                  <Text style={styles.textAmount}> ‎₹100</Text>
                </Content>
              </TouchableOpacity>
              <Right style={styles.heartContainer}>
                <Icon name="heart" style={styles.heart} />
              </Right>
            </Content>
          </Container>
          <Item />
        </ScrollView>
      </Container>
    )
  }
}


const TabNavigator = createBottomTabNavigator({
  Components: Components,
  
  Devices: Devices,
},{tabBarOptions: {
  activeTintColor: 'white',
  labelStyle: {
    fontSize: 16,
  },
  style: {
    backgroundColor: '#5252EA',
    alignSelf:'center',
  },


}});

export default createAppContainer(TabNavigator);