import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Card, CardItem, Content, Item, Thumbnail, Label } from 'native-base';
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
        <ScrollView>
          <Container style={styles.card} >
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
                      <Label style={{ fontSize: 20 }}>Item Name</Label>
                      <Label style={{ fontSize: 16, marginTop: 20 }} >Description</Label>
                      <Label style={{ fontSize: 16, marginTop: 20, fontWeight: 'bold' }} >₹1000</Label>
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

          <Container style={styles.card} >
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
                      <Label style={{ fontSize: 20 }}>Item Name</Label>
                      <Label style={{ fontSize: 16, marginTop: 20 }} >Description</Label>
                      <Label style={{ fontSize: 16, marginTop: 20, fontWeight: 'bold' }} >₹1000</Label>
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

          <Container style={styles.card} >
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
                      <Label style={{ fontSize: 20 }}>Item Name</Label>
                      <Label style={{ fontSize: 16, marginTop: 20 }} >Description</Label>
                      <Label style={{ fontSize: 16, marginTop: 20, fontWeight: 'bold' }} >₹1000</Label>
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

          <Container style={styles.card} >
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
                      <Label style={{ fontSize: 20 }}>Item Name</Label>
                      <Label style={{ fontSize: 16, marginTop: 20 }} >Description</Label>
                      <Label style={{ fontSize: 16, marginTop: 20, fontWeight: 'bold' }} >₹1000</Label>
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

        </ScrollView>
      </Container>
    )
  }
}
