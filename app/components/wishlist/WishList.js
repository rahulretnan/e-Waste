import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Card, CardItem, Content, Item, Thumbnail } from 'native-base';
import styles from './Styles'

export default class Wishlist extends Component {
  static navigationOptions = {
    drawerLabel: 'Wishlist',
    drawerIcon: ({ tintColor }) => (
      <Icon name="heart" style={{ fontSize: 24, color: 'grey' }} />
    )
  }
  render() {
    return (
      <Container >
        <Header style={styles.header} iosBarStyle={"light-content"}>
          <Left >
            <Icon style={{ width: 20 }} name='arrow-round-back' onPress={() => this.props.navigation.openDrawer()} style={{ color: 'white' }} />
          </Left>
          <Body>
            <Title>Wishlist</Title>
          </Body>
          <Right>
            <View style={{ marginRight: 20 }}>
              <Icon name='search' onPress={() => this.props.navigation.navigate('Home')} style={{ color: 'white' }} />
            </View>
            <View >
              <Icon name='cart' onPress={() => this.props.navigation.navigate('Cart')} style={{ color: 'white' }} />
            </View>
          </Right>
        </Header>
        <ScrollView>
          <Container style={styles.card} >
            <Card style={{ marginBottom: 5 }}>
              <CardItem cardBody >
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'column', marginLeft: 20, marginTop: 30 }}>
                    <Text style={{ fontSize: 20 }}>Item Name</Text>
                    <Text style={{ fontSize: 16, marginTop: 20 }} >Description</Text>
                    <Text style={{ fontSize: 16, marginTop: 20, fontWeight: 'bold' }} >₹1000</Text>
                  </View>
                  <Right style={{ alignSelf: 'flex-end', flex: 1, flexDirection: 'column' }}>
                    <Image source={require('../../img/image.png')} style={styles.image} />
                  </Right>
                </View>
              </CardItem>
              <CardItem style={{ flexDirection: 'row', padding: 5 }}>
                <Button transparent style={styles.button}>
                  <Icon name='cart' />
                  <Text>Add to Cart</Text>
                </Button>
                <Button transparent style={styles.button}>
                  <Icon name='trash' />
                  <Text>Remove</Text>
                </Button>
              </CardItem>
            </Card>
          </Container>

          <Container style={styles.card} >
            <Card style={{ marginBottom: 5 }}>
              <CardItem cardBody >
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'column', marginLeft: 20, marginTop: 30 }}>
                    <Text style={{ fontSize: 20 }}>Item Name</Text>
                    <Text style={{ fontSize: 16, marginTop: 20 }} >Description</Text>
                    <Text style={{ fontSize: 16, marginTop: 20, fontWeight: 'bold' }} >₹1000</Text>
                  </View>
                  <Right style={{ alignSelf: 'flex-end', flex: 1, flexDirection: 'column' }}>
                    <Image source={require('../../img/image.png')} style={styles.image} />
                  </Right>
                </View>
              </CardItem>
              <CardItem style={{ flexDirection: 'row', padding: 5 }}>
                <Button transparent style={styles.button}>
                  <Icon name='cart' />
                  <Text>Add to Cart</Text>
                </Button>
                <Button transparent style={styles.button}>
                  <Icon name='trash' />
                  <Text>Remove</Text>
                </Button>
              </CardItem>
            </Card>
          </Container>

          <Container style={styles.card} >
            <Card style={{ marginBottom: 5 }}>
              <CardItem cardBody >
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'column', marginLeft: 20, marginTop: 30 }}>
                    <Text style={{ fontSize: 20 }}>Item Name</Text>
                    <Text style={{ fontSize: 16, marginTop: 20 }} >Description</Text>
                    <Text style={{ fontSize: 16, marginTop: 20, fontWeight: 'bold' }} >₹1000</Text>
                  </View>
                  <Right style={{ alignSelf: 'flex-end', flex: 1, flexDirection: 'column' }}>
                    <Image source={require('../../img/image.png')} style={styles.image} />
                  </Right>
                </View>
              </CardItem>
              <CardItem style={{ flexDirection: 'row', padding: 5 }}>
                <Button transparent style={styles.button}>
                  <Icon name='cart' />
                  <Text>Add to Cart</Text>
                </Button>
                <Button transparent style={styles.button}>
                  <Icon name='trash' />
                  <Text>Remove</Text>
                </Button>
              </CardItem>
            </Card>
          </Container>

          <Container style={styles.card} >
            <Card style={{ marginBottom: 5 }}>
              <CardItem cardBody >
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'column', marginLeft: 20, marginTop: 30 }}>
                    <Text style={{ fontSize: 20 }}>Item Name</Text>
                    <Text style={{ fontSize: 16, marginTop: 20 }} >Description</Text>
                    <Text style={{ fontSize: 16, marginTop: 20, fontWeight: 'bold' }} >₹1000</Text>
                  </View>
                  <Right style={{ alignSelf: 'flex-end', flex: 1, flexDirection: 'column' }}>
                    <Image source={require('../../img/image.png')} style={styles.image} />
                  </Right>
                </View>
              </CardItem>
              <CardItem style={{ flexDirection: 'row', padding: 5 }}>
                <Button transparent style={styles.button}>
                  <Icon name='cart' />
                  <Text>Add to Cart</Text>
                </Button>
                <Button transparent style={styles.button}>
                  <Icon name='trash' />
                  <Text>Remove</Text>
                </Button>
              </CardItem>
            </Card>
          </Container>

          <Container style={styles.card} >
            <Card style={{ marginBottom: 5 }}>
              <CardItem cardBody >
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'column', marginLeft: 20, marginTop: 30 }}>
                    <Text style={{ fontSize: 20 }}>Item Name</Text>
                    <Text style={{ fontSize: 16, marginTop: 20 }} >Description</Text>
                    <Text style={{ fontSize: 16, marginTop: 20, fontWeight: 'bold' }} >₹1000</Text>
                  </View>
                  <Right style={{ alignSelf: 'flex-end', flex: 1, flexDirection: 'column' }}>
                    <Image source={require('../../img/image.png')} style={styles.image} />
                  </Right>
                </View>
              </CardItem>
              <CardItem style={{ flexDirection: 'row', padding: 5 }}>
                <Button transparent style={styles.button}>
                  <Icon name='cart' />
                  <Text>Add to Cart</Text>
                </Button>
                <Button transparent style={styles.button}>
                  <Icon name='trash' />
                  <Text>Remove</Text>
                </Button>
              </CardItem>
            </Card>
          </Container>

          <Container style={styles.card} >
            <Card style={{ marginBottom: 5 }}>
              <CardItem cardBody >
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'column', marginLeft: 20, marginTop: 30 }}>
                    <Text style={{ fontSize: 20 }}>Item Name</Text>
                    <Text style={{ fontSize: 16, marginTop: 20 }} >Description</Text>
                    <Text style={{ fontSize: 16, marginTop: 20, fontWeight: 'bold' }} >₹1000</Text>
                  </View>
                  <Right style={{ alignSelf: 'flex-end', flex: 1, flexDirection: 'column' }}>
                    <Image source={require('../../img/image.png')} style={styles.image} />
                  </Right>
                </View>
              </CardItem>
              <CardItem style={{ flexDirection: 'row', padding: 5 }}>
                <Button transparent style={styles.button}>
                  <Icon name='cart' />
                  <Text>Add to Cart</Text>
                </Button>
                <Button transparent style={styles.button}>
                  <Icon name='trash' />
                  <Text>Remove</Text>
                </Button>
              </CardItem>
            </Card>
          </Container>

        </ScrollView>
      </Container>
    )
  }
}
