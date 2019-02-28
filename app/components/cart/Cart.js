import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import styles from './Styles'
export default class Cart extends Component {
    static navigationOptions={
        drawerLabel: 'Cart',
        drawerIcon: ({tintColor}) =>(
            <Icon name="cart" style={{fontSize:24,color:'grey'}} />
        )
    }
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header} iosBarStyle={"light-content"}>
                    <Left >
                        <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} style={{ color: 'white' }} />
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Title>Cart</Title>
                    </Body>
                </Header>
                </Container>
    )
  }
}
