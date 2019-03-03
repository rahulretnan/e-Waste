import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Card, CardItem, Content, Item } from 'native-base';
import styles from './Styles'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class Components extends Component {

  constructor(props) {

    super(props)
    this.state = {
      deviceList: [
        { name: "Redmi Note Pro", price: "100", short_desc: "phone" },
        { name: "Redmi Note Pro", price: "100", short_desc: "phone" },
        { name: "Redmi Note Pro", price: "100", short_desc: "phone" },
        { name: "Redmi Note Pro", price: "100", short_desc: "phone" },
        { name: "Redmi Note Pro", price: "100", short_desc: "phone" },
        { name: "Redmi Note Pro", price: "100", short_desc: "phone" },

      ]
    }
  }

  render() {

    return (
      <Container >
        <Header style={styles.header} iosBarStyle={"light-content"}>
          {/* <Left >
            <Icon style={{ width: 20 }} name='arrow-round-back' onPress={() => this.props.navigation.navigate('Home')} style={{ color: 'white' }} />
          </Left> */}
          <Body>
            <Title>Search Results</Title>
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
          {
            this.state.deviceList.map((single_data, key) => (
              <Container key={key} style={styles.card} >
                <Content>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('ItemView')}>
                    <Image source={require('../../img/image.png')} style={styles.image} />
                  </TouchableOpacity>
                </Content>
                <Content contentContainerStyle={{ flexDirection: 'row' }}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('ItemView')}>
                    <Content contentContainerStyle={styles.textContainer}>
                      <Text style={styles.itemName}>{single_data.name}</Text>
                      <Text style={styles.textDescripition}>{single_data.short_desc}</Text>
                      <Text style={styles.textAmount}> {single_data.price}</Text>
                    </Content>
                  </TouchableOpacity>
                  <Right style={styles.heartContainer}>
                    <Icon name="heart" style={styles.heart} />
                  </Right>
                </Content>
              </Container>
            ))
          }


        </ScrollView>
      </Container>
    )
  }
}

class Devices extends Component {
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

      ]
    }
  }


  render() {
    // const { goBack } = this.props.navigation;
    return (
      <Container >
        <Header style={styles.header} iosBarStyle={"light-content"}>
          {/* <Left >
            <Icon style={{ width: 20 }} name='arrow-round-back' onPress={() => this.props.navigation.navigate('Home')} style={{ color: 'white' }} />
          </Left> */}
          <Body>
            <Title>Search Results</Title>
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
          {
            this.state.deviceList.map((single_data, key) => (
              <Container key={key} style={styles.card} >
                <Content>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('ItemView')}>
                    <Image source={require('../../img/image.png')} style={styles.image} />
                  </TouchableOpacity>
                </Content>
                <Content contentContainerStyle={{ flexDirection: 'row' }}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('ItemView')}>
                    <Content contentContainerStyle={styles.textContainer}>
                      <Text style={styles.itemName}>{single_data.name}</Text>
                      <Text style={styles.textDescripition}>{single_data.short_desc}</Text>
                      <Text style={styles.textAmount}> {single_data.price}</Text>
                    </Content>
                  </TouchableOpacity>
                  <Right style={styles.heartContainer}>
                    <Icon name="heart" style={styles.heart} />
                  </Right>
                </Content>
              </Container>
            ))
          }

        </ScrollView>
      </Container>
    )
  }
}


const TabNavigator = createBottomTabNavigator({
  Components: Components,

  Devices: Devices,
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    labelStyle: {
      fontSize: 16,
    },
    style: {
      backgroundColor: '#5252EA',
      alignSelf: 'center',
    },




  }
  });

const AppContainer = createAppContainer(TabNavigator);


export default class Result extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  })
  render() {
    return (
      <AppContainer />
    )
  }
}
